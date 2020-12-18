CREATE TABLE `tp_hackaton`.`postulationstatus` (
  `postulation_status_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(64) NOT NULL,  
  `created` DATETIME NOT NULL,
  `modified` DATETIME NOT NULL,
  `active` TINYINT NOT NULL,
  PRIMARY KEY (`postulation_status_id`));
