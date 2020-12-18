CREATE TABLE `tp_hackaton`.`students` (
  `student_id` INT NOT NULL AUTO_INCREMENT,
  `cohort_id` INT NOT NULL,
  `coach_tp_id` INT NOT NULL,
  `first_name` VARCHAR(64) NOT NULL,
  `last_name` VARCHAR(64) NOT NULL,
  `email` VARCHAR(32) NOT NULL,
  `email_for_intros` VARCHAR(32) NULL,
  `github` VARCHAR(64) NOT NULL,
  `linkedin` VARCHAR(64) NOT NULL,
  `photo` VARCHAR(512) NOT NULL,
  `created` DATETIME NOT NULL,
  `modified` DATETIME NOT NULL,
  `active` TINYINT NOT NULL,
  PRIMARY KEY (`student_id`),
  INDEX `coach_tp_id_idx` (`coach_tp_id` ASC) VISIBLE,
  INDEX `cohort_id_idx` (`cohort_id` ASC) VISIBLE,
  CONSTRAINT `coach_tp_id`
    FOREIGN KEY (`coach_tp_id`)
    REFERENCES `tp_hackaton`.`coachestp` (`coach_tp_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `cohort_id`
    FOREIGN KEY (`cohort_id`)
    REFERENCES `tp_hackaton`.`cohorts` (`cohort_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);