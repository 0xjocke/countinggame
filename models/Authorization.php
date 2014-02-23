<?php 
class Authorization
{
	public static function authenticate($name = null, $email = null) {
		if ($name !== null && $email !== null) {
        	$_SESSION['has_name'] = true;
		}
	}

  public static function check() {
    return (isset($_SESSION['has_name']));
  }
  public static function check_or_redirect() {
    if (!self::check()) {
      echo '<section class="login">
		<div class="container">
			<form id="signup" action="">
				<input class="contactfield contactfield-name" type="text" name="name" placeholder="Namn" required>
				<input class="contactfield contactfield-email" type="email" name="email" placeholder="Email" required>
				<input class=" btn btn-default" type="submit" value="Spela">
			</form>
		</div>
	</section>';
      exit;
    }
  }

}
 ?>