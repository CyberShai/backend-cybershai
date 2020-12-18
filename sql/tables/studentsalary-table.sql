CREATE TABLE `tp_hackaton`.`studentsalaries` (
  `student_salary_id` INT NOT NULL AUTO_INCREMENT,
  `student_id` INT NOT NULL,
  `order` INT NOT NULL,
  `salary` DECIMAL(10, 2) NOT NULL,
  `created` DATETIME NOT NULL,
  `modified` DATETIME NOT NULL,
  `active` TINYINT NOT NULL,
  PRIMARY KEY (`student_salary_id`),
  INDEX `student_id_idx` (`student_id` ASC) VISIBLE,
  CONSTRAINT `student_salaries_id`
    FOREIGN KEY (`student_id`)
    REFERENCES `tp_hackaton`.`students` (`student_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);