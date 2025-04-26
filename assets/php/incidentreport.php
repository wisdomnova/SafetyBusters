<?php
include './db.php';
$raw = file_get_contents('php://input');
$unraw = json_decode($raw); 
$unrawTrigger = $unraw->Trigger;
$unrawBlobData = $unraw->Blob;
$unrawReference = $unraw->Reference;
$unrawBlob = $unrawBlobData->Photo_Blob;
$AllPhotoId = $unrawTrigger->Users_Id;
$message = "Something went wrong";
$state = false;
function AddData(){
    global $unrawBlob, $AllPhotoId, $unrawTrigger, $unrawReference, $conn;
    $triggerQuery = "INSERT INTO incidentreport (".implode(',',array_keys(get_object_vars($unrawTrigger))).") VALUES ('".implode("','",get_object_vars($unrawTrigger))."')";
    $triggerSql = mysqli_query($conn, $triggerQuery);
    if($triggerSql){
        if(count($unrawBlob) >0){
            for($i=0;$i<count($unrawBlob);$i++){
                $AllPhotoBlob = $unrawBlob[$i];
                $AllPhotoQuery = "INSERT INTO incidentreportimages (Users_Id,Reference,Photo_Blob) VALUES ('$AllPhotoId','$unrawReference','$AllPhotoBlob')";
                $AllPhotoSql = mysqli_query($conn, $AllPhotoQuery);
                if($AllPhotoSql){
                    $message = "Saved Successfully";
                    $state = true;
                }else{
                    $message = "Something went wrong";
                    $state = false;
                }
            }
        }else{
            $message = "Saved Successfully";
            $state = true;
        }
    }else{
        $message = "Something went wrong";
        $state = false;
    }
    $response[] = array('Message' => $message, 'State' => $state);
    echo json_encode($response); 
};
AddData();
?>