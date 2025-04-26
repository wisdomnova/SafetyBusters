<?php
include './db.php';
$raw = file_get_contents('php://input');
$unraw = json_decode($raw);
$email = $unraw->email;
$pswrd = $unraw->pswrd;
$message = "Something went wrong";
$state = false;

function checkexistence(){
    global $email, $pswrd, $conn;
    $checkquery = "SELECT * FROM users WHERE Email='$email' AND Pswrd='$pswrd' ";
    $checksql = mysqli_query($conn, $checkquery);
    if(mysqli_num_rows($checksql) >0){
        $row = mysqli_fetch_assoc($checksql);
        $message = $row['Users_id'];
        $state = true;
    }else{
        $message = "This account does not exist";
        $state = false;
    }
    $response[] = array('Message' => $message, 'State' => $state);
    echo json_encode($response);
};

checkexistence();
?> 