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

-- Insertion des données dans la table "candidate"
INSERT INTO externatic.candidate (lastname, firstname, birthdate, phone_number, about, picture_url)
VALUES
('John', 'Smith', '1985-01-01', '0123456789', 'À propos du candidat 1', 'http://example.com/photo1.jpg'),
('Alice', 'Johnson', '1990-02-15', '9876543210', 'À propos du candidat 2', 'http://example.com/photo2.jpg'),
('Robert', 'Davis', '1988-06-30', '0123456789', 'À propos du candidat 3', 'http://example.com/photo3.jpg'),
('Emma', 'Wilson', '1995-12-10', '9876543210', 'À propos du candidat 4', 'http://example.com/photo4.jpg'),
('Michael', 'Brown', '1992-04-05', '0123456789', 'À propos du candidat 5', 'http://example.com/photo5.jpg'),
('Emily', 'Miller', '1987-09-20', '9876543210', 'À propos du candidat 6', 'http://example.com/photo6.jpg'),
('Daniel', 'Johnson', '1993-11-25', '0123456789', 'À propos du candidat 7', 'http://example.com/photo7.jpg'),
('Sophia', 'Davis', '1998-07-08', '9876543210', 'À propos du candidat 8', 'http://example.com/photo8.jpg'),
('Alexander', 'Taylor', '1991-03-15', '0123456789', 'À propos du candidat 9', 'http://example.com/photo9.jpg'),
('Olivia', 'Thomas', '1996-05-12', '9876543210', 'À propos du candidat 10', 'http://example.com/photo10.jpg');

-- Insertion des données dans la table "enterprise"
INSERT INTO externatic.enterprise (siret, social_denomination, trade_name, contact_email, phone_number, company_type, other_information, kbis_url, logo_url, website)
VALUES
('123456789', 'Entreprise ABC', 'ABC', 'contact@abc.com', '0123456789', 'SAS', 'Informations supplémentaires 1', 'http://example.com/kbis1.pdf', 'http://example.com/logo1.jpg', 'http://www.abc1.com'),
('987654321', 'Entreprise XYZ', 'XYZ', 'contact@xyz.com', '9876543210', 'SARL', 'Informations supplémentaires 2', 'http://example.com/kbis2.pdf', 'http://example.com/logo2.jpg', 'http://www.xyz2.com'),
('246813579', 'Entreprise 123', '123', 'contact@123.com', '0123456789', 'SAS', 'Informations supplémentaires 3', 'http://example.com/kbis3.pdf', 'http://example.com/logo3.jpg', 'http://www.1233.com'),
('135792468', 'Entreprise XYZ', 'XYZ', 'contact@xyz.com', '9876543210', 'SARL', 'Informations supplémentaires 4', 'http://example.com/kbis4.pdf', 'http://example.com/logo4.jpg', 'http://www.xyz4.com'),
('864209753', 'Entreprise ABC', 'ABC', 'contact@abc.com', '0123456789', 'SAS', 'Informations supplémentaires 5', 'http://example.com/kbis5.pdf', 'http://example.com/logo5.jpg', 'http://www.abc5.com');

-- Insertion des données dans la table "staff"
INSERT INTO externatic.staff (lastname, firstname, contact_email, phone_number, picture_url)
VALUES
('Jane', 'Smith', 'jane@example.com', '9876543210', 'http://example.com/photo.jpg');

-- Insertion des données dans la table "address"
INSERT INTO externatic.address (street_number, street_type, street_name, city, postal_code, department, region, country, candidate_ID, enterprise_ID, staff_ID, offer_ID)
VALUES
('123', 'Rue', 'Example 1', 'Paris', '75000', 'Île-de-France', 'Île-de-France', 'France', 1, NULL, NULL, NULL),
('456', 'Rue', 'Example 2', 'Paris', '75000', 'Île-de-France', 'Île-de-France', 'France', 2, NULL, NULL, NULL),
('789', 'Rue', 'Example 3', 'Paris', '75000', 'Île-de-France', 'Île-de-France', 'France', NULL, 1, NULL, NULL),
('012', 'Rue', 'Example 4', 'Paris', '75000', 'Île-de-France', 'Île-de-France', 'France', 4, NULL, NULL, NULL),
('345', 'Rue', 'Example 5', 'Paris', '75000', 'Île-de-France', 'Île-de-France', 'France', 5, NULL, NULL, NULL),
('678', 'Rue', 'Example 6', 'Paris', '75000', 'Île-de-France', 'Île-de-France', 'France', 6, NULL, NULL, NULL),
('901', 'Rue', 'Example 7', 'Paris', '75000', 'Île-de-France', 'Île-de-France', 'France', 7, NULL, NULL, NULL),
('234', 'Rue', 'Example 8', 'Paris', '75000', 'Île-de-France', 'Île-de-France', 'France', 8, NULL, NULL, NULL),
('567', 'Rue', 'Example 9', 'Paris', '75000', 'Île-de-France', 'Île-de-France', 'France', 9, NULL, NULL, NULL);

-- Insertion des données dans la table "auth"
INSERT INTO externatic.auth (candidate_ID, enterprise_ID, staff_ID, register_email, password, active, account_type, creation_date)
VALUES
  (1, NULL, NULL, 'john@example.com', 'password123', TRUE, 'candidat', NOW()),
  (2, NULL, NULL, 'alice@example.com', 'password456', TRUE, 'candidat', NOW()),
  (3, NULL, NULL, 'robert@example.com', 'password789', TRUE, 'candidat', NOW()),
  (4, NULL, NULL, 'emma@example.com', 'password123', TRUE, 'candidat', NOW()),
  (5, NULL, NULL, 'michael@example.com', 'password456', TRUE, 'candidat', NOW()),
  (NULL, 1, NULL, 'contact@abc.com', 'password123', TRUE, 'entreprise', NOW()),
  (NULL, 2, NULL, 'contact@xyz.com', 'password456', TRUE, 'entreprise', NOW()),
  (NULL, 3, NULL, 'contact@123.com', 'password789', TRUE, 'entreprise', NOW()),
  (NULL, 4, NULL, 'contact@xyza.com', 'password123', TRUE, 'entreprise', NOW()),
  (NULL, 5, NULL, 'contact@abcd.com', 'password456', TRUE, 'entreprise', NOW()),
  (NULL, NULL, 1, 'jane@example.com', 'password789', TRUE, 'staff', NOW());
  
  INSERT INTO offer (enterprise_ID, title, min_salary, max_salary, descriptions, visibility, offer_date)
VALUES 
  (1, 'Offre d\'emploi 1', '30000', '50000', 'Description de l\'annonce 1', TRUE, NOW()),
  (2, 'Offre d\'emploi 2', '30000', '50000', 'Description de l\'annonce 2', TRUE, NOW()),
  (3, 'Offre d\'emploi 3', '30000', '50000', 'Description de l\'annonce 3', TRUE, NOW()),
  (4, 'Offre d\'emploi 4', '30000', '50000', 'Description de l\'annonce 4', TRUE, NOW()),
  (5, 'Offre d\'emploi 5', '30000', '50000', 'Description de l\'annonce 5', TRUE, NOW());

-- Insertion des données dans la table "candidature"
INSERT INTO candidacy (offer_ID, candidate_ID, email_contact, application_date, status, cv_url, motivation_letter_url)
VALUES 
  (1, 1, 'john@example.com', NOW(), 'En attente', 'http://example.com/cv1.pdf', 'http://example.com/motivation1.pdf'),
  (2, 2, 'alice@example.com', NOW(), 'En attente', 'http://example.com/cv2.pdf', 'http://example.com/motivation2.pdf'),
  (3, 3, 'robert@example.com', NOW(), 'En attente', 'http://example.com/cv3.pdf', 'http://example.com/motivation3.pdf'),
  (4, 4, 'emma@example.com', NOW(), 'En attente', 'http://example.com/cv4.pdf', 'http://example.com/motivation4.pdf'),
  (5, 5, 'michael@example.com', NOW(), 'En attente', 'http://example.com/cv5.pdf', 'http://example.com/motivation5.pdf');


-- Insertion des données dans la table "favoris"
INSERT INTO bookmarks (candidate_ID, offer_ID, enterprise_ID, bookmark_date)
VALUES 
  (1, 1, 1, NOW()),
  (2, 2, 2, NOW()),
  (3, 3, 3, NOW()),
  (4, 4, 4, NOW()),
  (5, 5, 5, NOW());
