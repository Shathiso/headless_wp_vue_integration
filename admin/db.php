<?php

$ini_array = parse_ini_file("db.ini");

$servername = $ini_array['servername'];
$username = $ini_array['username'];
$password = $ini_array['password'];
$dbname = $ini_array['dbname'];

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM wp_users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "user: " . $row["user_pass"];
  }
} else {
  echo "0 results";
}
$conn->close();
?>