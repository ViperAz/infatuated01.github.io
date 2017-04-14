<!DOCTYPE html>
<html>
<head>
	<title>Lab 5 php</title>
	<link rel="stylesheet" type="text/css" href="css/home.css">
	<link href="https://fonts.googleapis.com/css?family=Chonburi" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
	<script type="text/javascript" src="js/index.js"></script>
	
</head>
<body>
<h1 id="header">Insert your information</h1>
<form id="form" >
	<!-- Name -->
	First name:
	<input id="firstname" type="text" name="firstname"><br><br>
		Last name:
	<input id="lastname" type="text" name="lastname"><br><br>
	Birthday:
	<input id="birthday" type="date" name="birthday"><br><br>
	Gender:
	<input type="radio" name="gender" value="male"> Male
	<input type="radio" name="gender" value="female"> Female<br><br>
	<!-- Adress -->
	Province:
	<select id="province">
	<?php
		$path = 'data/allProvince.txt';
		$tis620 = iconv("utf-8", "tis-620", $path );
		$file = file_get_contents($tis620);
		$provinces = explode(".txt",$file);
		echo "<option> กรุณาเลือกจังหวัด </option>";
		foreach ($provinces as $province ) {
			# code...
			
			echo("<option>" . $province. "</option>") ; 
		}

	?></select><br><br>



  <input type="button" onclick="onSubmit()" value="Submit">
  <input type="reset" value="Cancel">
</form>

<script type="text/javascript"></script>
<script src="js/jquery-3.1.1.js">
</script>


</body>


</html>
