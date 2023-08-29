BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Utilisateur" (
	"id"	INTEGER,
	"nom"	TEXT,
	"email"	TEXT,
	"seConnecter"	INTEGER,
	"sInscrire"	INTEGER,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "CouponLivraisonGratuite" (
	"code"	TEXT,
	"montantMinimum"	REAL,
	PRIMARY KEY("code")
);
CREATE TABLE IF NOT EXISTS "ItemPanier" (
	"panier_id"	INTEGER NOT NULL,
	"produit_id"	INTEGER NOT NULL,
	"quantity"	INTEGER,
	"prix"	REAL NOT NULL,
	FOREIGN KEY("panier_id") REFERENCES "Panier"("id"),
	FOREIGN KEY("produit_id") REFERENCES "Produit"("id")
);
CREATE TABLE IF NOT EXISTS "Panier" (
	"id"	INTEGER NOT NULL,
	"utilisateur_id"	INTEGER NOT NULL,
	PRIMARY KEY("id"),
	FOREIGN KEY("utilisateur_id") REFERENCES "Utilisateur"("id")
);
CREATE TABLE IF NOT EXISTS "Commande" (
	"id"	INTEGER NOT NULL,
	"utilisateur_id"	INTEGER NOT NULL,
	"montantTotal"	REAL NOT NULL,
	"date"	DATETIME NOT NULL,
	PRIMARY KEY("id"),
	FOREIGN KEY("utilisateur_id") REFERENCES "Utilisateur"("id")
);
CREATE TABLE IF NOT EXISTS "Produit" (
	"id"	INTEGER,
	"nom"	TEXT NOT NULL,
	"prix"	DECIMAL(10, 2) NOT NULL,
	"quantity"	INTEGER NOT NULL,
	"description"	TEXT,
	"image_url"	TEXT,
	"marque"	TEXT,
	"categorie"	TEXT,
	PRIMARY KEY("id")
);
INSERT INTO "Utilisateur" VALUES (1,'sara salek','sara.salek00@gmail.com',1,1);
INSERT INTO "Utilisateur" VALUES (2,'taoufik bou','boussemoussetaoufik@gmail.com',1,1);
INSERT INTO "Utilisateur" VALUES (3,'evan cholette','e_cholette@hotmail.com',1,1);
INSERT INTO "Produit" VALUES (1,'Canon PowerShot SX70 HS Appareil photo numÃ©rique (3071C001)',944.95,100,'Nom du modÃ¨le: CANPSSX70BKUP1
		Type de contrÃ´le de lâ€™exposition: Automatique
		Facteur de forme: Portable.
		RÃ©solution effective fixe: 20,3 mÃ©gapixels
		FonctionnalitÃ© spÃ©ciale: Stabilisation d image
		Zoom optique: 65 Multiplicateur x
		Couleur: Noir
		Technologie de connectivitÃ©: Bluetooth, Wi-Fi
		Taille de lâ€™Ã©cran: 247 MillimÃ¨tres','/public/images/p1.png','Canon','Electronics');
INSERT INTO "Produit" VALUES (2,'GameSir G4 Pro ContrÃ´leur de jeu sans fil Bluetooth',29.99,200,'ContrÃ´leur PC avec ABXY magnÃ©tique, manette de jeu compatible avec Switch/PC Windows/tÃ©lÃ©phone portable Android/iOS pour jeux Apple Arcade MFi','/public/images/p2.png','Game Sir','Electronics');
INSERT INTO "Produit" VALUES (3,'Drone quadricoptÃ¨re pliable super endurance pour dÃ©butants',129.99,50,'40 minutes de temps de vol, drone FPV Wi-Fi avec camÃ©ra HD 1080p grand angle de 120Â°, positionnement du flux optique, suivez-moi, double camÃ©ras (2 piles)','/public/images/p3.png','CHUBORY','Electronics');
INSERT INTO "Produit" VALUES (4,'Brightin Star Objectif grand angle 35 mm F1.7 APS-C',149.99,10,'Mise au point manuelle sans miroir, compatible avec Canon EF-M Mount M, M2, M3, M5, M6, M10, M100, M50, M200 (argent)','/public/images/p4.png','Brightin Star','Electronics');
INSERT INTO "Produit" VALUES (5,'Klipsch R-100SW Caisson de basses 25,4 cm',328.99,300,'Nom du modÃ¨le: Klipsch R-100SW, Type de haut-parleur Caisson de basse, Technologie de connectivitÃ© RCA, FonctionnalitÃ© spÃ©ciale','/public/images/p5.png','Klipsch','Electronics');
INSERT INTO "Produit" VALUES (6,'Razer Wolverine V2 Pro Manette de jeu sans fil pour PlayStation 5 / PS5 PC',199.99,5,'HyperSpeed Wireless - Boutons d action mÃ©caniques tactiles - 8 voies Microswitch D-Pad - 6 boutons reprogrammables - Chroma RGB - Noir','/public/images/p6.png','Razer','Electronics');
INSERT INTO "Produit" VALUES (7,'DJI Mini 3 Pro (DJI RC)',79.99,150,'Drone camÃ©ra lÃ©ger et pliable avec vidÃ©o 4K/60fps , photo 48MP , temps de vol 34 min, dÃ©tection d obstacles tridirectionnelle, idÃ©al pour la photographie aÃ©rienne et les mÃ©dias sociaux','/public/images/p7.png','DJI','Electronics');
INSERT INTO "Produit" VALUES (8,'Appareil photo numÃ©rique 4K',145.59,250,'Appareil photo compact 48 MP - Ã‰cran de 7,6 cm - Rechargeable - Zoom numÃ©rique 16X - Double camÃ©ra HD avec carte SD - Noir','/public/images/p8.png','Birosnsy','Electronics');
INSERT INTO "Produit" VALUES (9,'Noorio B200 CamÃ©ra de sÃ©curitÃ© extÃ©rieure sans fil',104.58,1000,'CamÃ©ra de sÃ©curitÃ© domestique 1080p, camÃ©ra WiFi alimentÃ©e par piles sans fil, vision nocturne couleur, dÃ©tection de mouvement IA, fonctionne avec Alexa, mise en place en quelques minutes','/public/images/p9.png','Noorio','Electronics');
COMMIT;
