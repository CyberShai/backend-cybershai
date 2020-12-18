CREATE TABLE `tp_hackaton`.`vacancycategories` (
  `vacancy_category_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(128) NOT NULL,  
  `created` DATETIME NOT NULL,
  `modified` DATETIME NOT NULL,
  `active` TINYINT NOT NULL,
  PRIMARY KEY (`vacancy_category_id`));
