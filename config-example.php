<?php 
	session_start();

date_default_timezone_set('Europe/Stockholm');

// DB settings
define('DB_HOST', 'ADD');
define('DB_NAME', 'ADD');
define('DB_USER', 'ADD');
define('DB_PASS', 'ADD');

// Create connection with PDO
$dbh = new PDO(
  'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME,
  DB_USER,
  DB_PASS,
  array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8')
);

// Models
require_once 'models/Person.php';



// libs

Person::setDbh($dbh);

?>