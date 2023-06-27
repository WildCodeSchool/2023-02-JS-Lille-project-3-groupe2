SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=1;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema externatic
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `externatic` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `externatic` ;

-- -----------------------------------------------------
-- Table `externatic`.`candidat`
-- ----------------------------------------------------type_comptetype_compte-
CREATE TABLE IF NOT EXISTS `externatic`.`candidat` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`ID`)
) ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `externatic`.`entreprise`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `externatic`.`entreprise` (
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
CREATE TABLE IF NOT EXISTS `externatic`.`annonce` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `entreprise_ID` INT NOT NULL,
  PRIMARY KEY (`ID`, `entreprise_ID`),
  INDEX `fk_annonce_entreprise_idx` (`entreprise_ID` ASC) VISIBLE,
  CONSTRAINT `fk_annonce_entreprise`
    FOREIGN KEY (`entreprise_ID`)
    REFERENCES `externatic`.`entreprise` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `externatic`.`adresse`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `externatic`.`adresse` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `candidat_ID` INT,
  `entreprise_ID` INT,
  `staff_ID` INT,
  `annonce_ID` INT,
  PRIMARY KEY (`ID`),
  INDEX `fk_candidat_adresse_idx` (`candidat_ID` ASC) VISIBLE,
  CONSTRAINT `fk_candidat_adresse`
    FOREIGN KEY (`candidat_ID`)
    REFERENCES `externatic`.`candidat` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
    
  INDEX `fk_entreprise_adresse_idx` (`entreprise_ID` ASC) VISIBLE,
  CONSTRAINT `fk_entreprise_adresse`
    FOREIGN KEY (`entreprise_ID`)
    REFERENCES `externatic`.`entreprise` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
    
  INDEX `fk_staff_adresse_idx` (`staff_ID` ASC) VISIBLE,
  CONSTRAINT `fk_staff_adresse`
    FOREIGN KEY (`staff_ID`)
    REFERENCES `externatic`.`staff` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
    
  INDEX `fk_annonce_adresse_idx` (`annonce_ID` ASC) VISIBLE,
  CONSTRAINT `fk_annonce_adresse`
    FOREIGN KEY (`annonce_ID`)
    REFERENCES `externatic`.`annonce` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  
  CONSTRAINT `check_at_least_one_adress_owner`
    CHECK (`candidat_ID` IS NOT NULL OR `entreprise_ID` IS NOT NULL OR `staff_ID` IS NOT NULL OR `annonce_ID` IS NOT NULL)
) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `externatic`.`compte`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `externatic`.`compte` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `candidat_ID` INT,
  `entreprise_ID` INT,
  `staff_ID` INT,
  `email_inscription` VARCHAR(100) NOT NULL UNIQUE,
  `mot_de_passe` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`ID`,`email_inscription`,`mot_de_passe`),
  INDEX `fk_candidat_id_idx` (`candidat_ID` ASC) VISIBLE,
  CONSTRAINT `fk_candidat_compte`
    FOREIGN KEY (`candidat_ID`)
    REFERENCES `externatic`.`candidat` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  INDEX `fk_entreprise_id_idx` (`entreprise_ID` ASC) VISIBLE,
  CONSTRAINT `fk_entreprise_compte`
    FOREIGN KEY (`entreprise_ID`)
    REFERENCES `externatic`.`entreprise` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  INDEX `fk_staff_id_idx` (`staff_ID` ASC) VISIBLE,
  CONSTRAINT `fk_staff_compte`
    FOREIGN KEY (`staff_ID`)
    REFERENCES `externatic`.`staff` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `externatic`.`candidature`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `externatic`.`candidature` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `annonce_ID` INT NOT NULL,
  `candidat_ID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_annonce_has_candidat_candidat1_idx` (`candidat_ID` ASC) VISIBLE,
  INDEX `fk_annonce_has_candidat_annonce_idx` (`annonce_ID` ASC) VISIBLE,
  CONSTRAINT `fk_annonce_has_candidat_annonce`
    FOREIGN KEY (`annonce_ID`)
    REFERENCES `externatic`.`annonce` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_annonce_has_candidat_candidat1`
    FOREIGN KEY (`candidat_ID`)
    REFERENCES `externatic`.`candidat` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `unique_candidature`
    UNIQUE (`annonce_ID`, `candidat_ID`)
)ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `externatic`.`favoris`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `externatic`.`favoris` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `candidat_ID` INT NOT NULL,
  `annonce_ID` INT NOT NULL,
  `entreprise_ID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_candidat_has_annonce_annonce1_idx` (`annonce_ID` ASC) VISIBLE,
  INDEX `fk_candidat_has_annonce_candidat1_idx` (`candidat_ID` ASC) VISIBLE,
  INDEX `fk_candidat_has_annonce_entreprise1_idx` (`entreprise_ID` ASC) VISIBLE,
  CONSTRAINT `fk_candidat_has_annonce_candidat1`
    FOREIGN KEY (`candidat_ID`)
    REFERENCES `externatic`.`candidat` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_candidat_has_annonce_annonce1`
    FOREIGN KEY (`annonce_ID`)
    REFERENCES `externatic`.`annonce` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_candidat_has_annonce_entreprise1`
    FOREIGN KEY (`entreprise_ID`)
    REFERENCES `externatic`.`entreprise` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `unique_favoris`
    UNIQUE (`candidat_ID`, `annonce_ID`)
)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

USE externatic;

-- Table "candidat"
ALTER TABLE candidat
ADD COLUMN nom VARCHAR(50) NOT NULL,
ADD COLUMN prenoms VARCHAR(100) NOT NULL,
ADD COLUMN date_naissance DATE NOT NULL,
ADD COLUMN numero_telephone VARCHAR(15) NOT NULL,
ADD COLUMN a_propos TEXT,
ADD COLUMN photo_url VARCHAR(100);

-- Table "staff"
ALTER TABLE staff
ADD COLUMN nom VARCHAR(50) NOT NULL,
ADD COLUMN prenoms VARCHAR(100) NOT NULL,
ADD COLUMN email_contact VARCHAR(100) NOT NULL,
ADD COLUMN numero_telephone VARCHAR(15) NOT NULL,
ADD COLUMN photo_url VARCHAR(100);

-- Table "entreprise"
ALTER TABLE entreprise
ADD COLUMN siret VARCHAR(20) NOT NULL,
ADD COLUMN denomination_social VARCHAR(100) NOT NULL,
ADD COLUMN nom_commercial VARCHAR(100) NOT NULL,
ADD COLUMN email_contact VARCHAR(100) NOT NULL,
ADD COLUMN numero_telephone VARCHAR(15) NOT NULL,
ADD COLUMN type_societe VARCHAR(50) NOT NULL,
ADD COLUMN autres_informations VARCHAR(100),
ADD COLUMN kbis_url VARCHAR(100) NOT NULL,
ADD COLUMN logo_url VARCHAR(100),
ADD COLUMN site_web VARCHAR(100);

-- Table "annonce"
ALTER TABLE annonce
ADD COLUMN intitule VARCHAR(100) NOT NULL,
ADD COLUMN salaire_min VARCHAR(20),
ADD COLUMN salaire_max VARCHAR(20),
ADD COLUMN descriptions TEXT NOT NULL,
ADD COLUMN visibilite BOOLEAN NOT NULL DEFAULT TRUE,
ADD COLUMN date_annonce DATETIME DEFAULT NOW();

-- Table "adresse"
ALTER TABLE adresse
ADD COLUMN numero_voirie VARCHAR(10) NOT NULL,
ADD COLUMN type_voirie VARCHAR(50) NOT NULL,
ADD COLUMN nom_voirie VARCHAR(100) NOT NULL,
ADD COLUMN ville VARCHAR(100) NOT NULL,
ADD COLUMN code_postal VARCHAR(10) NOT NULL,
ADD COLUMN departement VARCHAR(100) NOT NULL,
ADD COLUMN region VARCHAR(100) NOT NULL,
ADD COLUMN pays VARCHAR(20) NOT NULL;

-- Table "candidature"
ALTER TABLE candidature
ADD COLUMN email_contact VARCHAR(100) NOT NULL,
ADD COLUMN date_candidature DATETIME DEFAULT NOW(),
ADD COLUMN statut VARCHAR(20) DEFAULT 'en attente',
ADD COLUMN cv_url VARCHAR(100) NOT NULL,
ADD COLUMN motivation_url VARCHAR(100);

-- Table "favoris"
ALTER TABLE favoris
ADD COLUMN date_favoris DATETIME DEFAULT NOW();

-- Table "compte"
ALTER TABLE compte
ADD COLUMN actif BOOLEAN DEFAULT FALSE NOT NULL,
ADD COLUMN type_compte VARCHAR(100) NOT NULL,
ADD COLUMN date_creation DATETIME DEFAULT NOW();

-- Insertion des données dans la table "candidat"
INSERT INTO candidat (nom, prenoms, date_naissance, numero_telephone, a_propos, photo_url)
VALUES 
  ('John Smith', 'Smith', '1985-01-01', '0123456789', 'À propos du candidat 1', 'http://example.com/photo1.jpg'),
  ('Alice Johnson', 'Johnson', '1990-02-15', '9876543210', 'À propos du candidat 2', 'http://example.com/photo2.jpg'),
  ('Robert Davis', 'Davis', '1988-06-30', '0123456789', 'À propos du candidat 3', 'http://example.com/photo3.jpg'),
  ('Emma Wilson', 'Wilson', '1995-12-10', '9876543210', 'À propos du candidat 4', 'http://example.com/photo4.jpg'),
  ('Michael Brown', 'Brown', '1992-04-05', '0123456789', 'À propos du candidat 5', 'http://example.com/photo5.jpg'),
  ('Emily Miller', 'Miller', '1987-09-20', '9876543210', 'À propos du candidat 6', 'http://example.com/photo6.jpg'),
  ('Daniel Johnson', 'Johnson', '1993-11-25', '0123456789', 'À propos du candidat 7', 'http://example.com/photo7.jpg'),
  ('Sophia Davis', 'Davis', '1998-07-08', '9876543210', 'À propos du candidat 8', 'http://example.com/photo8.jpg'),
  ('Alexander Taylor', 'Taylor', '1991-03-15', '0123456789', 'À propos du candidat 9', 'http://example.com/photo9.jpg'),
  ('Olivia Thomas', 'Thomas', '1996-05-12', '9876543210', 'À propos du candidat 10', 'http://example.com/photo10.jpg');

-- Insertion des données dans la table "entreprise"
INSERT INTO entreprise (siret, denomination_social, nom_commercial, email_contact, numero_telephone, type_societe, autres_informations, kbis_url, logo_url, site_web)
VALUES 
  ('123456789', 'Entreprise ABC', 'ABC', 'contact@abc.com', '0123456789', 'SAS', 'Informations supplémentaires 1', 'http://example.com/kbis1.pdf', 'http://example.com/logo1.jpg', 'http://www.abc1.com'),
  ('987654321', 'Entreprise XYZ', 'XYZ', 'contact@xyz.com', '9876543210', 'SARL', 'Informations supplémentaires 2', 'http://example.com/kbis2.pdf', 'http://example.com/logo2.jpg', 'http://www.xyz2.com'),
  ('246813579', 'Entreprise 123', '123', 'contact@123.com', '0123456789', 'SAS', 'Informations supplémentaires 3', 'http://example.com/kbis3.pdf', 'http://example.com/logo3.jpg', 'http://www.1233.com'),
  ('135792468', 'Entreprise XYZ', 'XYZ', 'contact@xyz.com', '9876543210', 'SARL', 'Informations supplémentaires 4', 'http://example.com/kbis4.pdf', 'http://example.com/logo4.jpg', 'http://www.xyz4.com'),
  ('864209753', 'Entreprise ABC', 'ABC', 'contact@abc.com', '0123456789', 'SAS', 'Informations supplémentaires 5', 'http://example.com/kbis5.pdf', 'http://example.com/logo5.jpg', 'http://www.abc5.com');

-- Insertion des données dans la table "staff"
INSERT INTO staff (nom, prenoms, email_contact, numero_telephone, photo_url)
VALUES 
  ('Jane Smith', 'Smith', 'jane@example.com', '9876543210', 'http://example.com/photo.jpg');

-- Insertion des données dans la table "adresse"
INSERT INTO adresse (numero_voirie, type_voirie, nom_voirie, ville, code_postal, departement, region, pays, candidat_ID, entreprise_ID, staff_ID, annonce_ID)
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

-- Insertion des données dans la table "compte"
INSERT INTO compte (candidat_ID, entreprise_ID, staff_ID, email_inscription, mot_de_passe, actif, type_compte, date_creation)
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

-- Insertion des données dans la table "annonce"
INSERT INTO annonce (entreprise_ID, intitule, salaire_min, salaire_max, descriptions, visibilite, date_annonce)
VALUES 
  (1, 'Offre d\'emploi 1', '30000', '50000', 'Description de l\'annonce 1', TRUE, NOW()),
  (2, 'Offre d\'emploi 2', '30000', '50000', 'Description de l\'annonce 2', TRUE, NOW()),
  (3, 'Offre d\'emploi 3', '30000', '50000', 'Description de l\'annonce 3', TRUE, NOW()),
  (4, 'Offre d\'emploi 4', '30000', '50000', 'Description de l\'annonce 4', TRUE, NOW()),
  (5, 'Offre d\'emploi 5', '30000', '50000', 'Description de l\'annonce 5', TRUE, NOW());

-- Insertion des données dans la table "candidature"
INSERT INTO candidature (annonce_ID, candidat_ID, email_contact, date_candidature, statut, cv_url, motivation_url)
VALUES 
  (1, 1, 'john@example.com', NOW(), 'En attente', 'http://example.com/cv1.pdf', 'http://example.com/motivation1.pdf'),
  (2, 2, 'alice@example.com', NOW(), 'En attente', 'http://example.com/cv2.pdf', 'http://example.com/motivation2.pdf'),
  (3, 3, 'robert@example.com', NOW(), 'En attente', 'http://example.com/cv3.pdf', 'http://example.com/motivation3.pdf'),
  (4, 4, 'emma@example.com', NOW(), 'En attente', 'http://example.com/cv4.pdf', 'http://example.com/motivation4.pdf'),
  (5, 5, 'michael@example.com', NOW(), 'En attente', 'http://example.com/cv5.pdf', 'http://example.com/motivation5.pdf');


-- Insertion des données dans la table "favoris"
INSERT INTO favoris (candidat_ID, annonce_ID, entreprise_ID, date_favoris)
VALUES 
  (1, 1, 1, NOW()),
  (2, 2, 2, NOW()),
  (3, 3, 3, NOW()),
  (4, 4, 4, NOW()),
  (5, 5, 5, NOW());
