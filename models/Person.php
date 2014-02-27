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
        $_SESSION['name'] = $this->name;
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
  	public static function get_toplist($nr) {
	    $class = get_called_class();
	    $statement;
	    if ($nr ===20) {
	   		$statement = self::$dbh->prepare("SELECT * FROM persons ORDER BY highscore DESC LIMIT 20");
	    }else{
	   		$statement = self::$dbh->prepare("SELECT * FROM persons ORDER BY highscore DESC LIMIT 10");
	    }
	    $statement->execute();
	    // returnes 10 row with objects
    	return $statement->fetchAll(PDO::FETCH_CLASS, $class);
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
	      "INSERT INTO ".self::TABLE_NAME." (name, email, highscore, year) VALUES (:name, :email, :highscore, :year)");

    	$statement->execute(array('name' => $this->name, 'email' => $this->email, 'highscore' => 0, 'year' => $this->year));

    	$this->id = self::$dbh->lastInsertId();
  	}

  	public static function get_highest() {
	   		$statement = self::$dbh->prepare("SELECT GREATEST (
	(SELECT ifNull(MAX(highscore),0)
    FROM persons),
	(SELECT ifNull(MAX(highscore), 0)
	FROM persons_archive)    
) as 'max'");
	   		$statement->execute();
	   		return $statement->fetch();
  	}
  	public static function archive() {
  		$statement = self::$dbh->prepare("INSERT INTO persons_archive
			(id, name, email, highscore, year)
			SELECT id, name, email, highscore, year FROM persons");
	   	$statement->execute();
	   	$statement = self::$dbh->prepare("DELETE from persons");
	   	$statement->execute();
  	}

  	



}
 ?>