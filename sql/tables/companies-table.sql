CREATE TABLE `tp_hackaton`.`companies` (
  `company_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(128) NOT NULL,
  `description` VARCHAR(512) NOT NULL,
  `website` VARCHAR(128) NOT NULL,
  `logo` VARCHAR(256) NOT NULL,
  `created` DATETIME NOT NULL,
  `modified` DATETIME NOT NULL,
  `active` TINYINT NOT NULL,
  PRIMARY KEY (`company_id`));
