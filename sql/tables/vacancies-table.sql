CREATE TABLE `tp_hackaton`.`vacancies` (
  `vacancy_id` INT NOT NULL AUTO_INCREMENT,
  `vacancy_category_id` INT NOT NULL,
  `company_id` INT NOT NULL,
  `name` VARCHAR(256) NOT NULL,
  `description` VARCHAR(256) NOT NULL,
  `responsabilites` VARCHAR(1024) NOT NULL,
  `min_salary` DECIMAL(10,2) NOT NULL,
  `max_salary` DECIMAL(10,2) NOT NULL,
  `created` DATETIME NOT NULL,
  `modified` DATETIME NOT NULL,
  `active` TINYINT NOT NULL,
  PRIMARY KEY (`vacancy_id`),
  INDEX `vacancy_category_id_idx` (`vacancy_category_id` ASC) VISIBLE,
  INDEX `company_id_idx` (`company_id` ASC) VISIBLE,
  CONSTRAINT `vacancy_category_id`
    FOREIGN KEY (`vacancy_category_id`)
    REFERENCES `tp_hackaton`.`vacancycategories` (`vacancy_category_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `company_id`
    FOREIGN KEY (`company_id`)
    REFERENCES `tp_hackaton`.`companies` (`company_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
