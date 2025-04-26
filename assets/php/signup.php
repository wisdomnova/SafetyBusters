<?php
include './db.php';
$raw = file_get_contents('php://input');
$unraw = json_decode($raw);
$userid = $unraw->userid;
$email = $unraw->email;
$pswrd = $unraw->pswrd;
$message = "Something went wrong";
$state = false;


function adduser(){
    global $userid, $email, $pswrd, $conn, $message, $state;
    $addquery = "INSERT INTO users (Users_id,Email,Pswrd) VALUES ('$userid','$email','$pswrd')";
    $addsql = mysqli_query($conn, $addquery);
    if($addsql){
        $message = "Creation Successful";
        $state = true;
    }else{
        $message = "Something went wrong";
        $state = false;
    }
};

function checkexistence(){
    global $email, $pswrd, $conn, $message, $state;
    $checkquery = "SELECT * FROM users WHERE Email='$email'";
    $checksql = mysqli_query($conn, $checkquery);
    if(mysqli_num_rows($checksql) >0){
        $message = "This account exists";
        $state = false;
    }else{
        adduser();
    }
    
    $response[] = array('Message' => $message, 'State' => $state);
    echo json_encode($response);
};

checkexistence();
?>