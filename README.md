countinggame
============
--
-- Steg 1. Uppdatera config-example.php
--

Ändra i config-exapmle.php så att dina databas uppgifter är insrkivna.
Byt sedan namn till config.php


--
-- Steg 2. Skapa databasstrukturen
--
````sql
CREATE TABLE IF NOT EXISTS `persons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `highscore` int(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=60 ;
````

