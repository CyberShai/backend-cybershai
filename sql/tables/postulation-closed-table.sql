CREATE TABLE `tp_hackaton`.`postulationclosed` (
  `postulation_closed_id` INT NOT NULL AUTO_INCREMENT,
  `postulation_id` INT NOT NULL,
  `salary` DECIMAL(10,2) NOT NULL,
  `contract` VARCHAR(512) NOT NULL,
  `advice` VARCHAR(2048) NOT NULL,
  `feedback` VARCHAR(2048) NOT NULL,
  `start_date` DATETIME NOT NULL,
  `created` DATETIME NOT NULL,
  `modified` DATETIME NOT NULL,
  `active` TINYINT NOT NULL,
  PRIMARY KEY (`postulation_closed_id`),
  UNIQUE INDEX `postulation_id_UNIQUE` (`postulation_id` ASC) VISIBLE,
  CONSTRAINT `postulation_id`
    FOREIGN KEY (`postulation_id`)
    REFERENCES `tp_hackaton`.`postulations` (`postulation_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);