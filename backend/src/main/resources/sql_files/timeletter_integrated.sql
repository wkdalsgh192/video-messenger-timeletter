-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema timeletter
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema timeletter
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `timeletter` DEFAULT CHARACTER SET utf8 ;
USE `timeletter` ;

-- -----------------------------------------------------
-- Table `timeletter`.`authority`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `timeletter`.`authority` ;

CREATE TABLE IF NOT EXISTS `timeletter`.`authority` (
  `authority_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`authority_name`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

INSERT INTO AUTHORITY (AUTHORITY_NAME) values ('ROLE_USER');
INSERT INTO AUTHORITY (AUTHORITY_NAME) values ('ROLE_ADMIN');

-- -----------------------------------------------------
-- Table `timeletter`.`club`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `timeletter`.`club` ;

CREATE TABLE IF NOT EXISTS `timeletter`.`club` (
  `club_id` INT NOT NULL,
  `club_name` VARCHAR(10) NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`club_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `timeletter`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `timeletter`.`user` ;

CREATE TABLE IF NOT EXISTS `timeletter`.`user` (
  `user_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `activated` TINYINT NULL DEFAULT NULL,
  `email` VARCHAR(45) NOT NULL,
  `name` VARCHAR(20) NOT NULL,
  `password` VARCHAR(256) NOT NULL,
  `phone` VARCHAR(20) NOT NULL,
  `profile` VARCHAR(256) NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `timeletter`.`user_has_authority`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `timeletter`.`user_has_authority` ;

CREATE TABLE IF NOT EXISTS `timeletter`.`user_has_authority` (
  `user_id` INT UNSIGNED NOT NULL,
  `authority_name` VARCHAR(50) NOT NULL,
  INDEX `fk_user_has_authority_authority_idx` (`authority_name` ASC) INVISIBLE,
  PRIMARY KEY (`user_id`, `authority_name`),
  CONSTRAINT `fk_user_has_authority_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `timeletter`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_authority_authority`
    FOREIGN KEY (`authority_name`)
    REFERENCES `timeletter`.`authority` (`authority_name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
