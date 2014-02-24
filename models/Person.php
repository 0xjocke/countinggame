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
  	public function save_to_session() {
        $_SESSION['id'] = $this->id;
	}
 	public static function find($id) {
	    $class = get_called_class();
	    $statement = self::$dbh->prepare("SELECT * FROM ".self::TABLE_NAME." WHERE id=:id LIMIT 1");
	    // set fetch mode so we get objects
	    $statement->setFetchMode(PDO::FETCH_CLASS, $class);
	    //execute and set the id to the "real" id
	    $statement->execute(array('id' => $id));
	    // returnes one row with objects
	    return $statement->fetch(PDO::FETCH_CLASS);
  	}
  	public static function save_highscore($id, $highscore) {
		    $statement = self::$dbh->prepare(
		      "UPDATE ".self::TABLE_NAME." SET highscore=:highscore
		                                       WHERE id=:id");
		    $statement->execute(array('id' => $id,
		                              'highscore' => $highscore
		                             ));
  	}


  	public function save_to_db(){
  		 $statement = self::$dbh->prepare(
	      "INSERT INTO ".self::TABLE_NAME." (name, email, highscore) VALUES (:name, :email, :highscore)");

    	$statement->execute(array('name' => $this->name, 'email' => $this->email, 'highscore' => 0));

    	$this->id = self::$dbh->lastInsertId();
  	}
}
 ?>