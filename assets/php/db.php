<?php
$host = "localhost";
$user = "root";
$password = "";
$database = "safetybusters";
$conn = mysqli_connect($host,$user,$password,$database);
if(!$conn){
    echo 'Database Failed to connect';
}
?>
 