<?php 
/**
*  Person
*/
 class Person
{
	public static $dbh;
	public $name, $email, $highscore, $id;
	const TABLE_NAME = 'persons';

	public function __construct(array $attributes = null) {
	    // dont do anything if we dont get an parameter.
	    if ($attributes === null) return;
	    // loop through our array set the keys and vlaues to our class variables
	    foreach ($attributes as $key => $value) {
	        $this->$key = $value;
	    }
	  }

	public static function setDbh($pdoDbh) {
    	self::$dbh = $pdoDbh;
  	}

  	public function save_to_db(){
  		 $statement = self::$dbh->prepare(
	      "INSERT INTO ".self::TABLE_NAME." (name, email, highscore) VALUES (:name, :email, :highscore)");

    	$statement->execute(array('name' => $this->name, 'email' => $this->email, 'highscore' => 0));

    	$this->id = self::$dbh->lastInsertId();
  	}
}
 ?>