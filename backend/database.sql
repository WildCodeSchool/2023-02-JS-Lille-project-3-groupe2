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
-- Table `externatic`.`compte`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `externatic`.`auth` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `register_email` VARCHAR(100) NOT NULL UNIQUE,
  `password` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`ID`,`register_email`,`password`)
) ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `externatic`.`candidat`
-- ----------------------------------------------------
CREATE TABLE IF NOT EXISTS `externatic`.`candidate` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `auth_ID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_auth_candidate_idx` (`auth_ID` ASC) VISIBLE,
  CONSTRAINT `fk_auth_candidate`
    FOREIGN KEY (`auth_ID`)
    REFERENCES `externatic`.`auth` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
) ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `externatic`.`entreprise`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `externatic`.`enterprise` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `auth_ID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_auth_enterprise_idx` (`auth_ID` ASC) VISIBLE,
  CONSTRAINT `fk_auth_enterprise`
    FOREIGN KEY (`auth_ID`)
    REFERENCES `externatic`.`auth` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `externatic`.`staff`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `externatic`.`staff` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `auth_ID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_auth_staff_idx` (`auth_ID` ASC) VISIBLE,
  CONSTRAINT `fk_auth_staff`
    FOREIGN KEY (`auth_ID`)
    REFERENCES `externatic`.`auth` (`ID`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
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
ADD COLUMN other_information TEXT,
ADD COLUMN kbis_url VARCHAR(100),
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
ADD COLUMN cv_url VARCHAR(100),
ADD COLUMN motivation_letter_url VARCHAR(100);

-- Table "favoris"
ALTER TABLE bookmarks
ADD COLUMN bookmark_date DATETIME DEFAULT NOW();

-- Table "compte"
ALTER TABLE auth
ADD COLUMN active BOOLEAN DEFAULT FALSE NOT NULL,
ADD COLUMN account_type VARCHAR(100) NOT NULL,
ADD COLUMN creation_date DATETIME DEFAULT NOW();


-- Insertion des données dans la table "auth"
INSERT INTO externatic.auth (register_email, password, active, account_type, creation_date)
VALUES
("sloumachi@gmail.com", "sacha123", TRUE, "candidat", NOW()),
("jdeloose@gmail.com", "jocelyn123", TRUE, "candidat", NOW()),
("tessa.fondeur3@gmail.com", "tessa111297", TRUE, "candidat", NOW()),
("asenechal@gmail.com", "anthony123", TRUE, "candidat", NOW()),
("iramdan@gmail.com", "imene123", TRUE, "candidat", NOW()),
("akeneo@gmail.com", "akeneo123", TRUE, "entreprise", NOW()),
("allovoisins@gmail.com", "allovoisins123", TRUE, "entreprise", NOW()),
("nickel@gmail.com", "nickel123", TRUE, "entreprise", NOW()),
("showroomprive@gmail.com", "showroomprive123", TRUE, "entreprise", NOW()),
("iadvize@gmail.com", "iadvize123", TRUE, "entreprise", NOW()),
("lengow@gmail.com", "lengow123", TRUE, "entreprise", NOW()),
("maincare@gmail.com", "maincare123", TRUE, "entreprise", NOW()),
("janesmith@gmail.com", "jane123", TRUE, "staff", NOW());

-- Insertion des données dans la table "candidate"
INSERT INTO externatic.candidate (auth_ID, lastname, firstname, birthdate, phone_number, about, picture_url)
VALUES
(1, "Loumachi", "Sacha", "1997-01-01", "0623456789", "À propos du candidat ...", NULL),
(2, "Deloose", "Jocelyn", "1996-01-18", "0784187449", "C'est pas faux !", NULL),
(3, "Fondeur", "Tessa", "1997-12-11", "0613238093", "Bienveillance et compréhension", NULL),
(4, "Sénéchal", "Anthony", "1993-10-10", "0676543210", "À propos du candidat ...", NULL),
(5, "Ramdan", "Imène", "1992-07-13", "0723456789", "Accro au Drama Coréen", NULL);

-- Insertion des données dans la table "enterprise"
INSERT INTO externatic.enterprise (auth_ID, siret, social_denomination, trade_name, contact_email, phone_number, company_type, other_information, kbis_url, logo_url, website)
VALUES
(6, "790 672 588 00031", "Akeneo SAS", "Akeneo", "contactAkeneo@gmail.com", "0255590000", "SAS", "Akeneo est l’entreprise dédiée à L’Expérience Produit, aidant les marques, fabricants, retailers et distributeurs à diffuser des expériences produits, enrichies, engageantes et pertinentes sur tous les canaux de vente incluant l’e-commerce, le mobile, les réseaux-sociaux, les marketplaces, les catalogues imprimés, les points de vente et bien plus. En fournissant à sa communauté la meilleure technologie et expertise, Akeneo équipe les marques, fabricants, retailers et distributeurs à travers le monde afin de leur permettre d’offrir la meilleure expérience client omnicanale et ainsi accélérer leurs initiatives de croissance.", NULL, NULL, "https://www.akeneo.com"),
(7, "792 209 967 00035", "2CED", "Allovoisins", "contact@allovoisins.com", "0876543210", "SAS", "AlloVoisins est la marketplace de référence dédiée aux prestations de services et à la location de matériel, rassemblant une communauté de 4 millions de membres, dont 300 000 professionnels, qui génère 1,2 millions de demandes postées par an. De la demande de dépannage ou de services à la personne aux travaux les plus complexes, en passant par la location de matériel, AlloVoisins permet en quelques minutes d'activer l'ensemble des habitants et professionnels à proximité, susceptibles de répondre à tout type de besoins. Intermédiaire de confiance, notre marketplace favorise avant tout une approche gagnant/gagnant, en s’appuyant sur les habitants et professionnels de nos quartiers. Animé au quotidien par une équipe passionnée et déterminée, AlloVoisins promeut un nouveau mode de consommation local, responsable et bienveillant.", NULL, NULL, "https://www.allovoisins.com"),
(8, "753 886 092 00042", "Financière des Paiements électroniques", "Nickel", "contactNickel@gmail.com", "0123456789", "SAS", "Nickel est un service bancaire alternatif français ouvert à toute personne physique à partir de douze ans ou plus, sans condition de revenus et sans possibilité de découvert ni de crédit.", NULL, NULL, "https://nickel.eu/fr"),
(9, "538 811 837 00011", "SHOWROOMPRIVE.COM", "SHOWROOMPRIVE.COM", "serviceclient.fr@showroomprive.com", "0185760000", "SARL", "Showroomprive.com est un site internet de ventes privées qui organise pour ses membres des ventes exclusives de grandes marques. Chez showroomprive.com, vous trouverez un large choix de produits avec des réductions allant jusqu’à -70% sur le prêt-à-porter homme, femme, enfant ( vestes, pantalons jeans, t-shirts, robes , vêtements de grossesse etc.). Vous profiterez aussi de ventes accessoires avec une sélection de ceintures, cravates, gants, bonnets, écharpes, foulards, sacs, chapeaux, lunettes de soleil, portefeuilles et sacoches. Ce n’est pas tout ! Pour rester tendance, le site vous propose des collections de bijoux (bracelets, colliers, boucles d’oreilles, bagues, chaines en argent ou en or, montres de luxe) et la crème des chaussures : bottes, ballerines, escarpins, bottines, chaussures de running, baskets, chaussons et mocassins. Enfin, Showroomprive vous offre également de la lingerie (soutien-gorge, collants, bas, caleçons, maillots de bain, etc…) de la décoration de maison (bougies, couvertures, cadres, draps, etc..), et de l’électroménager (aspirateurs, cafetières, ..). Le tout à petits prix !", NULL, NULL, "https://www.showroomprive.com"),
(10, "519 698 914 00057", "iAdvize", "iAdvize", "contactiAdvize@advize.com", "0805696131", "SAS", "iAdvize est une plateforme conversationnelle qui permet d’engager des discussions en temps réel avec les visiteurs d’un site web. L’outil propose un réel accompagnement sur mesure afin d’optimiser l’expérience client et le parcours d’achat.", NULL, NULL, "https://www.iadvize.com/fr"),
(11, "513 381 434 00085", "Lengow", "Lengow", "contact@lengow.com", "0285526415", "SAS", "Lengow est fondée à Nantes en 2009 par Jérémie Peiro et Mickaël Froger. L'entreprise est qualifiée d' « éditeur de gestion de catalogues» qui a pour but d'améliorer la visibilité et la rentabilité des sites marchands, que ce soit sur les comparateurs de prix, les places de marché, les plateformes d’affiliation, les sites de retargeting et de liens sponsorisés ou encore les blogs et les réseaux sociaux. Le nom Lengow vient du mot swahili « Lengo » qui signifie objectif, et le « W » pour Web.", NULL, NULL, "https://www.lengow.com/fr"),
(12, "414 876 177 00224", "MAINCARE SOLUTIONS", "MAINCARE", "contact@maincare.com", "0557896500", "SAS", "Plus qu’un éditeur, Maincare est un véritable partenaire de confiance qui accompagne depuis 20 ans tous les acteurs de la santé (établissements, GHT, ARS, assureurs et mutuelles) dans leur transformation digitale.", NULL, NULL, "https://www.maincare.com ");

-- Insertion des données dans la table "staff"
INSERT INTO externatic.staff (auth_ID, lastname, firstname, contact_email, phone_number, picture_url)
VALUES
(13, "Jane", "Smith", "janesmith@gmail.com", "0776543210", NULL);

INSERT INTO offer (enterprise_ID, title, min_salary, max_salary, descriptions, visibility, offer_date)
VALUES 
  (1, "Développeur Web FullStack PHP-VueJS", "26000", "39000", "L'entreprise et l'équipe propose des solutions de rationalisation de processus de collecte, de saisie et d'échange de données, c'est 35 collaborateurs , utilisation de l'éditeur SaaS et nous sommes dans le TOP 250 des éditeurs français en 2022 - accompagne de nombreuses entreprises du CAC40. Dans le cadre du développement de leurs activités, couplée à une roadmap ambitieuse, l'entreprise souhaite renforcer son équipe technique. Rattaché(e) à l'équipe R&D composée de 15 collaborateurs, vous : participer aux études et choix techniques, concevez et réaliser les nouvelles fonctionnalités de la solution (enjeux forts liées à la cybersécurité), produisez le code et des applications maintenables et évolutive, assurer une veille technologique. Vous connaissez et maîtrisez PHP, Laravel, Vue.js, Gitlab, Postgresql, Docker, Kubernetes ... Vous disposez de 3 à 5 ans d'expérience sur des projets de développement et avez de bonnes connaissances dans quelques langages de programmation, notammenent PHP ou JavaScript. Vous êtes rigoureux, autonome, vous avez un esprit d'équipe et un bon sens de la communication, alors ce poste est fait pour vous.", TRUE, NOW()),
  (2, "Développeur React", "29000", "39000", " Nous sommes une entreprise coopérative à double activité : agence dans le développement web et éditeur de logiciel sur mesure, possédant plus de 60 collaborateurs. Au sein de l'équipe technique composée de profils pluridisciplinaires (Développeurs, administrateurs systèmes et réseaux, testeurs, chefs de projet, chefs de produit, UX-UI...) vous définissez les choix techniques et concevez l'architecture, accompagner les développeurs juniors  (revues de code, formation...), concevez le développement d'applications sur mesure, participer à la veille technique en interne et être force de proposition sur de nouveaux outils. Vous maîtrisez REACT, TypeScript et/ou Svlete, Git et Gitlab, Docker, Kubernetes ... Vous disposez de minimum 5 années d'expérience dans le développement web et avez une bonne expertise d'au moins un framework (React/Angular/Svlete ...). Vous devez avoir le sens du travail en équipe et vous savez être force de proposition.", TRUE, NOW()),
  (3, "Tech Lead _Manager d'équipe JAVA", "40000", "50000", "Notre entreprise, connue et reconnue de tous dans le milieu du numérique autour du secteur des mobilités, est désormais à 100% hébergé sur le cloud AWS. Dans le cadre de notre digitalisation, nous recrutons des développeurs JAVA juniors, pour travailler sur des projets grand public que vous pouvez voir au quotidien. Nous cherchons donc à sénioriser les équipes en recrutant un Tech Lead JAVA pour encadrer une équipe de 5 à 10 personnes. En agilité (SAFe), vous serez garant de la qualité du code en suivant les bonnes pratiques (clean code, pair programming, code review, etc.), vous serez aussi en charge de concevoir des services optimisés, scalables et en déploiement continu selon les principes DEVOPS, d'accompagner l'équipe sur leur montée en compétences techniques, de manager l'équipe (animation, entretiens annuels, ...). Vous devrez également contribuer aux choix techniques et à l'industrialisation des projets et tenu de concevoir et développer de nouvelles features complexes. Vous devez disposer d'une formation supérieure en informatique, d'une première expérience en tant que Lead Tech, et être idéalement force de proposition.", TRUE, NOW()),
  (4, "Product Manager H/F", "50000", "60000", " L'entreprise est leader européen de la collecte en ligne, c'est pourquoi aujourd'hui, nous avons besoin de vous. Dans un contexte international (implantation en France, Italie, Danemark, Royaume-Uni & Australie) vous participer au développement et l'amélioration du CRM et êtes le garant de sa cohérence technique et fonctionnelle. Responsable de l'équipe R&D constituée de 4 personnes, vous animez la collaboration entre les différentes parties prenantes (équipes techniques, marketing, opérationnelles, …). Dans le cadre de vos missions, vous construisez la vision et la stratégie produit, vous maintenez la roadmap stratégique, en accord avec la stratégie définie et rédiger les spécifications fonctionnelles à destination de l’équipe technique, vous prioriser les correctifs et fonctionnalités à développer, définissez la stratégie de développement et réaliser les grands arbitrages techniques et planifier et organiser les sprints de développements. Vous intervenez ponctuellement sur les différentes phases de développement, qualité et livraison, et assurer l’accompagnement RH des membres de l’équipe. Possibilité de remote. Pour ce poste, un background technique est indispensable, idéalement acquis sur les langages Python et SQL. Vous maitrisez l'architecture et le développement logiciel orienté web.", TRUE, NOW()),
  (5, "Développeur Back NodeJS/TypeScript", "40000", "50000", " L'entreprise a développé un SaaS permettant de simplifier l'APIsation des systèmes d'informations. Fondé en 2016, nous accompagnons déjà de grands acteurs du Nord comme Auchan, Adeo, Decathlon, Lyreco, ... L'équipe technique comprend une 20aine de personnes. Vous aurez donc en charge la conception, le développement et maintenance des API, vous travaillez les équipes projets et les utilisateurs pour comprendre leurs besoins et créer des solutions personnalisées. Vous devrez écrire des documentations techniques claires et simples pour faciliter l'intégration des API ainsi que de vous occupez de la mise en place des tests de qualité et de performance pour garantir la fiabilité et la sécurité des API. Si affinité, accompagnement / partage de votre expertise et vos connaissances avec autres les membres de l'équipe. Les technologies principales utilisées par notre entreprise sont : NodeJS, TypeScript, MongoDB, REST, oAuth ... Vous disposez d'une première expérience réussie en développement back JS et êtes titulaire d'une formation supérieure en informatique.", TRUE, NOW()),
  (6, "Ingénieur Logiciel Embarqué H/F", "45000", "52000", "Notre entreprise est leader européen dans la mesure et la gestion des temps. C'est une entreprise familiale implantée depuis le 19ème siècle et maintenant présente à l'internationale. Au sein d'une équipe de développeurs, vos missions seront les suivantes : Effectuer des études de faisabilité et mettre au point les prototypes en collaborant avec les ingénieurs de conception hardware sur des cartes électroniques numériques de technologies récentes (processeurs ST, NXP, 32/64bits), participer à la conception logicielle embarqué des fonctionnalités métier des équipements en vue de la production série des produits sur le marché, suivi des évolutions des BSP et OS, Bootloader avec réalisation de drivers, développer des outils de test produits et des tests unitaires de fonctions, participer à l’administration des outils logiciels (GitLab, Jenkins, etc…), rédiger les dossiers techniques et maitriser sa propre planification, collaborer avec les services d’industrialisation pour la mise en production du produit, réaliser des analyses logicielles de la qualité des produits tout le long de leurs cycles de vie. Environnement technique : C/C++/Python/Java/FreeRTOS ... Vous disposez d'une première expérience en développement embarqué et êtes orienté produit. Vous êtes exigeant, créatif et savez travailler en équipe, alors n'hésitez plus, rejoignez-nous.", TRUE, NOW()),
  (5, "Chef de Projet DevOps H/F", "50000", "60000", "Notre groupe est international et possède une DSI de près de 1000 personnes. Dans le cadre de sa transformation et de l'ouverture de son SI à ses adhérents et clients, nous avons lancé de nombreux programmes et projets de taille conséquente. Au sein de la Direction des Etudes, Développements et Programmes Systèmes d’information, l’équipe DevOps accompagne les projets de Développement pour les emmener jusqu’à leur mise en production. En tant que Responsable de Projets DevOps (F/H), vous devrez cadrer et piloter les contributions attendues par l’équipe projet. Vous serez le garant de la bonne exploitabilité de ces applications dans le respect des exigences ITIL. Vos principales missions seront les suivantes : le cadrage technique et chiffrage des travaux Production, l'organisation et planification des travaux, pilotage et suivi des contributions techniques des projets, l'organisation des mises en production et installations sur les différents environnements et assurer le passage en gestion courante des projets en garantissant le respect des fondamentaux d’exploitation, le suivi budgétaire des projets et reporting ainsi que le suivi des tests et performances et capacity planning des environnements et la prise en charge des sujets d’amélioration (gestion de problèmes, cellule de crise, revue d’architecture, revue d’exploitation, etc). Vous possédez une bonne compréhension des livrables à piloter tels que les réseaux TCPIP, Firewall, SGBD, NAS, Batch et Flux.", TRUE, NOW()),
  (1, "Développeur confirmé C++ ou C#", "35000", "45000", "L'entreprise et l'équipe propose des solutions de rationalisation de processus de collecte, de saisie et d'échange de données, c'est 35 collaborateurs , utilisation de l'éditeur SaaS et nous sommes dans le TOP 250 des éditeurs français en 2022 - accompagne de nombreuses entreprises du CAC40. Au sein du service R&D et rattaché(e) au responsable des développements produits, vos missions seront les suivantes : appréhender les besoins (internes ou externes), étudier la faisabilité technologique de l’application, choisir et proposer les outils, le framwork et/ou les infrastructures technologiques. Concevoir et modéliser une architecture logicielle, réaliser des maquettes des différentes solutions, savoir assurer le développement des composants logiciels et la réalisation des applications en utilisant les langages appropriés, adapter et paramétrer les progiciels retenus dans l’architecture logicielle, tester, identifier et traiter les dysfonctionnements éventuels du logiciel développé (tests unitaires et tests de charge) et documenter les applications pour les développements ultérieurs et la mise en production. Vous disposez de 3 à 6 années d'expérience sur les technologies Microsoft et avez de bonnes qualités relationnelles ( écoute et expression ), ce poste est fait pour vous !", TRUE, NOW()),
  (3, "Lead Dev Mobile Android", "50000", "55000", "Notre entreprise, connue et reconnue de tous dans le milieu du numérique autour du secteur des mobilités, est désormais à 100% hébergé sur le cloud AWS. Dans le cadre de notre digitalisation, nous recrutons des développeurs JAVA juniors, pour travailler sur des projets grand public que vous pouvez voir au quotidien. Nous cherchons donc à sénioriser les équipes en recrutant un Tech Lead JAVA pour encadrer une équipe de 5 à 10 personnes. Dans le cadre de la création d'une Mobile Factory, vous serez amené à piloter la conception technique des applications mobiles, c'est à dire savoir identifier le besoin auprès des différentes équipes projets, connapitre les spécifications techniques et conception détaillée, développer les solutions complètes sur Android Kotlin et/ou Flutter ainsi que procéder aux tests, intervenir sur l'automatisation / DevOps / tests et assurer la veille technique. Possibilité de remote 2 jours / semaine. De formation supérieure avec idéalement un background en développement, vous disposez d’une première expérience réussie sur les aspects Android. Appréciant d'être entouré d’experts, vous avez une vraie appétence pour les technologies mobiles. Vous possédez idéalement des compétences sur les environnements Android.", TRUE, NOW()),
  (2, "Designer UX-UI", "45000", "50000", " Nous sommes une entreprise coopérative à double activité : agence dans le développement web et éditeur de logiciel sur mesure, possédant plus de 60 collaborateurs. En lien étroit avec les différente équipes tech et produit, sous la responsabilité du COO, vous aurez en charge, pour la partie UX, de mener des phases d’exploration pour comprendre qui sont les utilisateurs, leurs difficultés, leurs besoins, leurs aspirations… (interviews, observations, sondages, focus groups, …), de préparer et animer des ateliers de co-conception/ d’idéation avec des équipes multidisciplinaires ou avec des utilisateurs (focus Group, test utilisateur, design thinking etc.), vous serez capable de comprendre les enjeux et de travailler sur des projets B2B, B2C et C2C. Du côté UI, vous travaillez en étroite collaboration avec les différentes équipes : produit, technique, communication, growth sur les travaux de UX/UI Design, vous êtes force de proposition dans  la conception des parcours utilisateurs et assurez  la maintenance et l’évolution du Design System, vous réalisez les maquettes responsives et les décliner pour les différents devices (iOS, Android, Web App), vous devez maintenir une veille active sur différents sujets de design afin de garantir l’application des bonnes pratiques et définir la vision UI/UX en alignement avec les ambitions du pôle produit et la stratégie globale d’entreprise. Vous avez connaissance des best practices iOS/Android/Web et maitrisez la suite logicielle Figma, Adobe et justifiez d'une expérience d'au moins 3 ans à un poste similaire.", TRUE, NOW()),
  (6, "Administrateur Base de Données", "35000", "45000", "Notre entreprise est leader européen dans la mesure et la gestion des temps. C'est une entreprise familiale implantée depuis le 19ème siècle et maintenant présente à l'internationale. Vous serez intégré.e au sein de l’équipe SaaS qui assure le présent des hébergements (production, support et supervision des plates-formes) et le futur de l’écosystème hébergé (projets de R&D, devops et sécurité). L’équipe est composée de 8 personnes et fonctionne sur les principes d’auto-organisation, d’entraide et de partage des connaissances. Vous serez donc dans une équipe soudée et dynamique portée par des projets innovants et ambitieux ! Vous serez responsable du conseil et de l’administration des bases de données Oracle et / ou PostgreSQL en haute disponibilité, des procédures stockées ou équivalent, de l’export et l’import de données. Vous aurez notamment pour missions : la supervision et la gestion des bases de données existantes, le suivi des plans de maintenance des bases de données, la recherche et développement et la réalisation des tâches partagées de l'équipe. Possibilité de télétravail 2 jours / semaine. Vous êtes organisé, autonome et vous avez un excellent sens du relationnel, n'attendez plus et rejoignez-nous.", TRUE, NOW()),
  (4, "Data Scientist H/F", "40000", "50000", "L'entreprise est leader européen de la collecte en ligne, c'est pourquoi aujourd'hui, nous avons besoin de vous. Dans un contexte international (implantation en France, Italie, Danemark, Royaume-Uni & Australie) vous participer au développement et l'amélioration du CRM et êtes le garant de sa cohérence technique et fonctionnelle. Responsable de l'équipe R&D constituée de 4 personnes, vous animez la collaboration entre les différentes parties prenantes (équipes techniques, marketing, opérationnelles, …). Vos missions consisteront à constuire des modèles et schémas de données en fonction de l’usage (besoin récurrent, construction d’outils, …), collecter, sélectionner et valider des données clients pertinentes pour l’analyse, sélectionner et mettre en place un outil de BI. Vous devrez également créer des rapports personnalisés pour les clients, et documenter les techniques plus génériques, faire des recherches d’opportunité de communication basées sur les données et contribuer à la réflexion stratégique sur l’exploitation de la data. Vous maitrisez les outils de BI, les ETL et les modèles statistiques, vous êtes doté d'un esprit de synthèse, d'analyse et de précision, et vous parlez régulièrement l'anglais.", TRUE, NOW()),
  (1, "Scrum Master Junior - Full Remote", "34000", "45000", "L'entreprise et l'équipe propose des solutions de rationalisation de processus de collecte, de saisie et d'échange de données, c'est 35 collaborateurs , utilisation de l'éditeur SaaS et nous sommes dans le TOP 250 des éditeurs français en 2022 - accompagne de nombreuses entreprises du CAC40. Dans le cadre du développement de leurs activités, couplée à une roadmap ambitieuse, l'entreprise souhaite renforcer son équipe technique. L'équipe technique comprend 4 équipes de 3 à 4 personnes managées par le Responsable R&D. Vous aurez en charge : l'organisation des projets en mode Scrum (Daily scrum, sprints, ...), être le référent en Agile des équipes de développement Front et Back, l'animation des cérémonies, la gestion du backlog avec le PO, le coaching des équipes sur toutes les phases du développement, vous devrez aider les équipes à gagner en autonomie/ amélioration continue et former et accompagner les équipes sur l'Agilité. De formation supérieure en informatique. Vous disposez d'une première expérience réussie en tant que Scrum Master (stage compris). Idéalement, vous avez de bonnes bases en développement.", TRUE, NOW()),
  (1, "Product Owner H/F", "36000", "46000", "L'entreprise et l'équipe propose des solutions de rationalisation de processus de collecte, de saisie et d'échange de données, c'est 35 collaborateurs , utilisation de l'éditeur SaaS et nous sommes dans le TOP 250 des éditeurs français en 2022 - accompagne de nombreuses entreprises du CAC40. Dans le cadre du développement de leurs activités, couplée à une roadmap ambitieuse, l'entreprise souhaite renforcer son équipe technique. Dans le cadre d'une création de pôle, et d'équipe (5 collaborateurs à terme), vous êtes l'interface entre la Direction projets groupe, les métiers et les équipes de la DSI, vous participez au suivi, à l'évolution et la promotion des applications opérationnelles, vous couvrez les besoins des activités en analysant et interprétant les besoins des métiers, construisez et communiquer la solution retenue, vous définissez les User Stories (selon la méthodologie agile) et leurs critères d'acceptation associés, et aider à leur priorisation, vous réaliser la recette fonctionnelle des user stories développées et le suivi opérationnel de la roadmap projet : de la conception jusqu’à la maitrise d’œuvre, et vous savez faire force de proposition et assurer un échange régulier avec les parties prenantes pour évaluer les changements à apporter au projet. Vous avez une première expérience dans la coordination de projet et possédez une bonne capacité d'analyse et de synthèse.", TRUE, NOW()),
  (7, "Ingénieur Technico-commercial IT", "45000", "50000", "Au sein d'un groupe spécialisé dans le domaine des télécoms, des réseaux et de la sûreté, nous proposons une opportunité de d'Ingénieur Technico-Commercial IT (H/F). Vous intégrez une société à taille humaine et vous assurez la gestion des projets qui vous sont confiés. En tant qu'Ingénieur Commercial IT, vos missions consisteront à : Prospecter et démarcher la clientèle potentielle constituée notamment des PME-PMI, industriels, collectivités publiques... afin d’assurer le développement des ventes et du parc clients, assurer la prospection, les rendez-vous, la rédaction de l’offre technique et commerciale jusqu’à la vente, développer et fidéliser un portefeuille clients. Proposer, argumenter et commercialiser les contrats de services du groupe. Être force de proposition et assurer une veille permanente sur les produits dédiés à ce marché, gérer la clientèle sur le périmètre concerné. A ce titre, le salarié assura le maintien de la clientèle et le développement des affaires commerciales en respectant la politique commerciale en vigueur, négocier les prix et les délais en fonction des possibilités techniques dans le respect de la politique commerciale. Garantir le bon fonctionnement des solutions proposées par la société en interaction avec l’ensemble des services (ADV, BE, équipes techniques terrain, support, etc.) et rendre compte régulièrement de ses actions à la direction commerciale via les outils CRM de l’entreprise. Une expérience commerciale de minimum 2 ans est indispensable pour ce poste. Vous êtes passionné et motivé par les nouvelles technologies.", TRUE, NOW());

-- Insertion des données dans la table "address"
INSERT INTO externatic.address (street_number, street_type, street_name, city, postal_code, department, region, country, candidate_ID, enterprise_ID, staff_ID, offer_ID)
VALUES
("32", "Rue", "Michel Arnaud", "Lille", "59000", "Nord", "Haut-de-France", "France", 1, NULL, NULL, NULL),
("1", "Avenue", "Paul Henry", "Lille", "59000", "Nord", "Haut-de-France", "France", 2, NULL, NULL, NULL),
("36", "Rue", "de la Mouette", "Tournai", "7500", "Hainaut", "Région Wallonne", "Belgique", 3, NULL, NULL, NULL),
("3", "Chemin", "des Pâquerettes", "Lille", "59000", "Nord", "Haut-de-France", "France", 4, NULL, NULL, NULL),
("29", "Rue", "Emile de la Porte", "Lille", "59000", "Nord", "Haut-de-France", "France", 5, NULL, NULL, NULL),
("2", "Rue", "Place Général Mellinet", "Nantes", "44100", "Loire-Atlantique", "Pays-de-la-Loire", "France", NULL, 1, NULL, NULL),
("1", "Rue", "Victor Hugo Immeuble AGORA", "Rezé", "44400", "Loire-Atlantique", "Pays-de-la-Loire", "France", NULL, 2, NULL, NULL),
("1", "Rue", "Place des Marseillais", "Charenton-le-Pont", "94220", "Val-de-Marne", "Île-de-France", "France", NULL, 3, NULL, NULL),
("1", "Rue", "des Boules Zone d'aménagement Concerte Mont", "Saint-Denis", "93210", "Seine-Saint-Denis", "Île-de-France", "France", NULL, 4, NULL, NULL),
("9", "Rue", "Nina Simone EURONANTES GARE Bâtiment B", "Nantes", "44000", "Loire-Atlantique", "Pays-de-la-Loire", "France", NULL, 5, NULL, NULL),
("6", "Rue", "René Viviani", "Nantes", "44200", "Loire-Atlantique", "Pays-de-la-Loire", "France", NULL, 6, NULL, NULL),
("45", "Boulevard", "Paul Vaillant Couturier", "Ivry-sur-Seine", "94200", "Val-de-Marne", "Île-de-France", "France", NULL, 7, NULL, NULL),
("86", "Rue", "Saint Hurbain", "Ivry-sur-Seine", "94220", "Val-de-Marne", "Île-de-France", "France", NULL, NULL, 1, NULL),
("2", "Rue", "Place Général Mellinet", "Nantes", "44100", "Loire-Atlantique", "Pays-de-la-Loire", "France", NULL, NULL, NULL, 1),
("1", "Rue", "Victor Hugo Immeuble AGORA", "Rezé", "44400", "Loire-Atlantique", "Pays-de-la-Loire", "France", NULL, NULL, NULL, 2),
("1", "Rue", "Place des Marseillais", "Charenton-le-Pont", "94220", "Val-de-Marne", "Île-de-France", "France", NULL, NULL, NULL, 3),
("1", "Rue", "des Boules Zone d'aménagement Concerte Mont", "Saint-Denis", "93210", "Seine-Saint-Denis", "Île-de-France", "France", NULL, NULL, NULL, 4),
("9", "Rue", "Nina Simone EURONANTES GARE Bâtiment B", "Nantes", "44000", "Loire-Atlantique", "Pays-de-la-Loire", "France", NULL, NULL, NULL, 5),
("6", "Rue", "René Viviani", "Nantes", "44200", "Loire-Atlantique", "Pays-de-la-Loire", "France", NULL, NULL, NULL, 6),
("9", "Rue", "Nina Simone EURONANTES GARE Bâtiment B", "Nantes", "44000", "Loire-Atlantique", "Pays-de-la-Loire", "France", NULL, NULL, NULL, 7),
("2", "Rue", "Place Général Mellinet", "Nantes", "44100", "Loire-Atlantique", "Pays-de-la-Loire", "France", NULL, NULL, NULL, 8),
("1", "Rue", "Place des Marseillais", "Charenton-le-Pont", "94220", "Val-de-Marne", "Île-de-France", "France", NULL, NULL, NULL, 9),
("1", "Rue", "Victor Hugo Immeuble AGORA", "Rezé", "44400", "Loire-Atlantique", "Pays-de-la-Loire", "France", NULL, NULL, NULL, 10),
("6", "Rue", "René Viviani", "Nantes", "44200", "Loire-Atlantique", "Pays-de-la-Loire", "France", NULL, NULL, NULL, 11),
("1", "Rue", "des Boules Zone d'aménagement Concerte Mont", "Saint-Denis", "93210", "Seine-Saint-Denis", "Île-de-France", "France", NULL, NULL, NULL, 12),
("2", "Rue", "Place Général Mellinet", "Nantes", "44100", "Loire-Atlantique", "Pays-de-la-Loire", "France", NULL, NULL, NULL, 13),
("2", "Rue", "Place Général Mellinet", "Nantes", "44100", "Loire-Atlantique", "Pays-de-la-Loire", "France", NULL, NULL, NULL, 14),
("9", "Rue", "Nina Simone EURONANTES GARE Bâtiment B", "Nantes", "44000", "Loire-Atlantique", "Pays-de-la-Loire", "France", NULL, NULL, NULL, 15);

-- Insertion des données dans la table "candidature"
INSERT INTO candidacy (offer_ID, candidate_ID, email_contact, application_date, status, cv_url, motivation_letter_url)
VALUES 
  (1, 1, 'sloumachi@gmail.com', NOW(), 'En attente', NULL, NULL),
  (2, 2, 'jdeloose@gmail.com', NOW(), 'En attente', NULL, NULL),
  (2, 3, 'tessa.fondeur3@gmail.com', NOW(), 'En attente', NULL, NULL),
  (10, 3, 'tessa.fondeur3@gmail.com', NOW(), 'En attente', NULL, NULL),
  (13, 3, 'tessa.fondeur3@gmail.com', NOW(), 'En attente', NULL, NULL);


-- Insertion des données dans la table "favoris"
INSERT INTO bookmarks (candidate_ID, offer_ID, enterprise_ID, bookmark_date)
VALUES 
  (1, 1, 1, NOW()),
  (2, 2, 2, NOW()),
  (3, 3, 3, NOW()),
  (4, 4, 4, NOW()),
  (5, 5, 5, NOW());
