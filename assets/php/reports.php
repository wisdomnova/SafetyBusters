<?php
include './db.php';
$raw = file_get_contents('php://input');
$unraw = json_decode($raw);
// $unrawUsersInd = $unraw->userid;
$unrawUsersInd = "8E0B8GM4MIU4JOO5IKFMM66M";
$message = "Something went wrong";
$state = false;
function fetchFields(){
    global $conn, $unrawUsersInd;
    $reportsQuery = "SELECT * FROM incidentreport WHERE Users_Id='$unrawUsersInd' ";
    $reportsSql = mysqli_query($conn, $reportsQuery);
    if(mysqli_num_rows($reportsSql) >0){
        $reportsAssoc = mysqli_fetch_assoc($reportsSql);
        $reportsAssocEncoded = json_encode($reportsAssoc);
        $message = $reportsAssocEncoded;
        $state = true;
    }else{
        $message = "Something went wrong";
        $state = false;
    }
    $response[] = array('Message' => $message, 'State' => $state);
    echo json_encode($response);
}
fetchFields();
?>