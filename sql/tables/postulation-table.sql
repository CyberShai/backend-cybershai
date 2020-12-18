CREATE TABLE `tp_hackaton`.`postulations` (
  `postulation_id` INT NOT NULL AUTO_INCREMENT,
  `student_id` INT NOT NULL,
  `vacant_id` INT NOT NULL,
  `postulation_status_id` INT NOT NULL,
  `hired` TINYINT NOT NULL,
  `created` DATETIME NOT NULL,
  `modified` DATETIME NOT NULL,
  `active` TINYINT NOT NULL,
  PRIMARY KEY (`postulation_id`),
  INDEX `student_id_idx` (`student_id` ASC) VISIBLE,
  INDEX `vacant_id_idx` (`vacant_id` ASC) VISIBLE,
  INDEX `postulation_status_id_idx` (`postulation_status_id` ASC) VISIBLE,
  CONSTRAINT `student_id`
    FOREIGN KEY (`student_id`)
    REFERENCES `tp_hackaton`.`students` (`student_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `vacant_id`
    FOREIGN KEY (`vacant_id`)
    REFERENCES `tp_hackaton`.`vacancies` (`vacancy_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `postulation_status_id`
    FOREIGN KEY (`postulation_status_id`)
    REFERENCES `tp_hackaton`.`postulationstatus` (`postulation_status_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);