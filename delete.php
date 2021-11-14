<?php

require "conn.php";

$dell_id = $_REQUEST['id'];

$query = mysqli_query($conn,"DELETE from users where id=$dell_id");

header("location:index.php");


?>