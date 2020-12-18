CREATE TABLE `tp_hackaton`.`vacancytags` (
  `vacancy_tag_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(64) NOT NULL,  
  `created` DATETIME NOT NULL,
  `modified` DATETIME NOT NULL,
  `active` TINYINT NOT NULL,
  PRIMARY KEY (`vacancy_tag_id`));
