SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=1;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema externatic
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `externatic`;
CREATE SCHEMA IF NOT EXISTS `externatic` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `externatic` ;

-- -----------------------------------------------------
-- Table `externatic`.`candidat`
-- ----------------------------------------------------type_comptetype_compte-
CREATE TABLE IF NOT EXISTS `externatic`.`candidate` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`ID`)
) ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `externatic`.`entreprise`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `externatic`.`enterprise` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`ID`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `externatic`.`staff`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `externatic`.`staff` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`ID`)
)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `externatic`.`annonce`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `externatic`.`offer` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `enterprise_ID` INT NOT NULL,
  PRIMARY KEY (`ID`, `enterprise_ID`),
  INDEX `fk_offer_enterprise_idx` (`enterprise_ID` ASC) VISIBLE,
  CONSTRAINT `fk_offer_enterprise`
    FOREIGN KEY (`enterprise_ID`)
    REFERENCES `externatic`.`enterprise` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `externatic`.`adresse`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `externatic`.`address` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `candidate_ID` INT,
  `enterprise_ID` INT,
  `staff_ID` INT,
  `offer_ID` INT,
  PRIMARY KEY (`ID`),
  INDEX `fk_candidate_address_idx` (`candidate_ID` ASC) VISIBLE,
  CONSTRAINT `fk_candidate_address`
    FOREIGN KEY (`candidate_ID`)
    REFERENCES `externatic`.`candidate` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
    
  INDEX `fk_enterprise_address_idx` (`enterprise_ID` ASC) VISIBLE,
  CONSTRAINT `fk_enterprise_address`
    FOREIGN KEY (`enterprise_ID`)
    REFERENCES `externatic`.`enterprise` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
    
  INDEX `fk_staff_address_idx` (`staff_ID` ASC) VISIBLE,
  CONSTRAINT `fk_staff_address`
    FOREIGN KEY (`staff_ID`)
    REFERENCES `externatic`.`staff` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
    
  INDEX `fk_offer_address_idx` (`offer_ID` ASC) VISIBLE,
  CONSTRAINT `fk_offer_address`
    FOREIGN KEY (`offer_ID`)
    REFERENCES `externatic`.`offer` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  
  CONSTRAINT `check_at_least_one_adress_owner`
    CHECK (`candidate_ID` IS NOT NULL OR `enterprise_ID` IS NOT NULL OR `staff_ID` IS NOT NULL OR `offer_ID` IS NOT NULL)
) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `externatic`.`compte`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `externatic`.`auth` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `candidate_ID` INT,
  `enterprise_ID` INT,
  `staff_ID` INT,
  `register_email` VARCHAR(100) NOT NULL UNIQUE,
  `password` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`ID`,`register_email`,`password`),
  INDEX `fk_candidate_id_idx` (`candidate_ID` ASC) VISIBLE,
  CONSTRAINT `fk_candidate_auth`
    FOREIGN KEY (`candidate_ID`)
    REFERENCES `externatic`.`candidate` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  INDEX `fk_enterprise_id_idx` (`enterprise_ID` ASC) VISIBLE,
  CONSTRAINT `fk_enterprise_compte`
    FOREIGN KEY (`enterprise_ID`)
    REFERENCES `externatic`.`enterprise` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  INDEX `fk_staff_id_idx` (`staff_ID` ASC) VISIBLE,
  CONSTRAINT `fk_staff_auth`
    FOREIGN KEY (`staff_ID`)
    REFERENCES `externatic`.`staff` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `externatic`.`candidature`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `externatic`.`candidacy` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `offer_ID` INT NOT NULL,
  `candidate_ID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_offer_has_candidate_candidate1_idx` (`candidate_ID` ASC) VISIBLE,
  INDEX `fk_offer_has_candidate_offer_idx` (`offer_ID` ASC) VISIBLE,
  CONSTRAINT `fk_offer_has_candidate_offer`
    FOREIGN KEY (`offer_ID`)
    REFERENCES `externatic`.`offer` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_offer_has_candidate_candidate1`
    FOREIGN KEY (`candidate_ID`)
    REFERENCES `externatic`.`candidate` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `unique_candidacy`
    UNIQUE (`offer_ID`, `candidate_ID`)
)ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `externatic`.`favoris`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `externatic`.`bookmarks` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `candidate_ID` INT NOT NULL,
  `offer_ID` INT NOT NULL,
  `enterprise_ID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_candidate_has_offer_offer1_idx` (`offer_ID` ASC) VISIBLE,
  INDEX `fk_candidate_has_offer_candidate1_idx` (`candidate_ID` ASC) VISIBLE,
  INDEX `fk_candidate_has_offer_enterprise1_idx` (`enterprise_ID` ASC) VISIBLE,
  CONSTRAINT `fk_candidate_has_offer_candidate1`
    FOREIGN KEY (`candidate_ID`)
    REFERENCES `externatic`.`candidate` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_candidate_has_offer_offer1`
    FOREIGN KEY (`offer_ID`)
    REFERENCES `externatic`.`offer` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_candidate_has_offer_enterprise1`
    FOREIGN KEY (`enterprise_ID`)
    REFERENCES `externatic`.`enterprise` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `unique_bookmarks`
    UNIQUE (`candidate_ID`, `offer_ID`)
)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

USE externatic;

-- Table "candidat"
ALTER TABLE candidate
ADD COLUMN lastname VARCHAR(50) NOT NULL,
ADD COLUMN firstname VARCHAR(100) NOT NULL,
ADD COLUMN birthdate DATE NOT NULL,
ADD COLUMN phone_number VARCHAR(15) NOT NULL,
ADD COLUMN about TEXT,
ADD COLUMN picture_url VARCHAR(100);

-- Table "staff"
ALTER TABLE staff
ADD COLUMN lastname VARCHAR(50) NOT NULL,
ADD COLUMN firstname VARCHAR(100) NOT NULL,
ADD COLUMN contact_email VARCHAR(100) NOT NULL,
ADD COLUMN phone_number VARCHAR(15) NOT NULL,
ADD COLUMN picture_url VARCHAR(100);

-- Table "entreprise"
ALTER TABLE enterprise
ADD COLUMN siret VARCHAR(20) NOT NULL,
ADD COLUMN social_denomination VARCHAR(100) NOT NULL,
ADD COLUMN trade_name VARCHAR(100) NOT NULL,
ADD COLUMN contact_email VARCHAR(100) NOT NULL,
ADD COLUMN phone_number VARCHAR(15) NOT NULL,
ADD COLUMN company_type VARCHAR(50) NOT NULL,
ADD COLUMN other_information VARCHAR(100),
ADD COLUMN kbis_url VARCHAR(100) NOT NULL,
ADD COLUMN logo_url VARCHAR(100),
ADD COLUMN website VARCHAR(100);

-- Table "annonce"
ALTER TABLE offer
ADD COLUMN title VARCHAR(100) NOT NULL,
ADD COLUMN min_salary VARCHAR(20),
ADD COLUMN max_salary VARCHAR(20),
ADD COLUMN descriptions TEXT NOT NULL,
ADD COLUMN visibility BOOLEAN NOT NULL DEFAULT TRUE,
ADD COLUMN offer_date DATETIME DEFAULT NOW();

-- Table "adresse"
ALTER TABLE `address`
ADD COLUMN street_number VARCHAR(10) NOT NULL,
ADD COLUMN street_type VARCHAR(50) NOT NULL,
ADD COLUMN street_name VARCHAR(100) NOT NULL,
ADD COLUMN city VARCHAR(100) NOT NULL,
ADD COLUMN postal_code VARCHAR(10) NOT NULL,
ADD COLUMN department VARCHAR(100) NOT NULL,
ADD COLUMN region VARCHAR(100) NOT NULL,
ADD COLUMN country VARCHAR(20) NOT NULL;

-- Table "candidature"
ALTER TABLE candidacy
ADD COLUMN email_contact VARCHAR(100) NOT NULL,
ADD COLUMN application_date DATETIME DEFAULT NOW(),
ADD COLUMN `status` VARCHAR(20) DEFAULT 'pending',
ADD COLUMN cv_url VARCHAR(100) NOT NULL,
ADD COLUMN motivation_letter_url VARCHAR(100);

-- Table "favoris"
ALTER TABLE bookmarks
ADD COLUMN bookmark_date DATETIME DEFAULT NOW();

-- Table "compte"
ALTER TABLE auth
ADD COLUMN active BOOLEAN DEFAULT FALSE NOT NULL,
ADD COLUMN account_type VARCHAR(100) NOT NULL,
ADD COLUMN creation_date DATETIME DEFAULT NOW();









