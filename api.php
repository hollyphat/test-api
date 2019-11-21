<?php
	$db_host = "localhost";
	$db_name = "api";
	$db_user = "root";
	$db_pass = "";
	$connection = mysqli_connect($db_host,$db_user, $db_pass, $db_name) or die(mysqli_error());

	if(isset($_POST['ok-login'])){
		$username = trim(addslashes($_POST['username']));
		$password = trim(addslashes($_POST['password']));
	}
?>