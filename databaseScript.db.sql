BEGIN TRANSACTION;

DROP TABLE if EXISTS "Panier";
DROP TABLE if EXISTS "ItemPanier";
DROP TABLE if EXISTS "CouponLivraisonGratuite";
DROP TABLE if EXISTS "Commande";
DROP TABLE if EXISTS "Comment";
DROP TABLE if EXISTS "Utilisateur";
DROP TABLE if EXISTS "Produit";
DROP TABLE if EXISTS "Categorie";

CREATE TABLE IF NOT EXISTS "Categorie" (
	"id"	INTEGER,
	"nom"	TEXT,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Utilisateur" (
	"id"	INTEGER,
	"nom"	TEXT,
	"prenom"	TEXT,
	"email"	TEXT NOT NULL,
	"password"	TEXT NOT NULL,
	"no_civique"	TEXT,
	"street"	TEXT,
	"city"	TEXT,
	"pays"	TEXT,
	"image_profil"	TEXT,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Panier" (
	"id"	INTEGER,
	"utilisateur_id"	INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("utilisateur_id") REFERENCES "Utilisateur"("id")
);
CREATE TABLE IF NOT EXISTS "ItemPanier" (
	"id"	INTEGER,
	"panier_id"	INTEGER NOT NULL,
	"produit_id"	INTEGER NOT NULL,
	"quantity"	INTEGER,
	"prix"	REAL NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("produit_id") REFERENCES "Produit"("id"),
	FOREIGN KEY("panier_id") REFERENCES "Panier"("id")
);
CREATE TABLE IF NOT EXISTS "CouponLivraisonGratuite" (
	"code"	TEXT,
	"montantMinimum"	REAL,
	PRIMARY KEY("code")
);
CREATE TABLE IF NOT EXISTS "Commande" (
	"id"	INTEGER,
	"utilisateur_id"	INTEGER NOT NULL,
	"montantTotal"	REAL NOT NULL,
	"date"	DATETIME NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("utilisateur_id") REFERENCES "Utilisateur"("id")
);
CREATE TABLE IF NOT EXISTS "Produit" (
	"id"	INTEGER,
	"nom"	TEXT,
	"prix"	DECIMAL(10, 2),
	"quantity"	INTEGER,
	"description"	TEXT,
	"image_url"	TEXT,
	"marque"	TEXT,
	"categorie_id"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("categorie_id") REFERENCES "Categorie"("id")
);
CREATE TABLE IF NOT EXISTS "Comment" (
	"id"	INTEGER,
	"userId"	INTEGER,
	"rating"	INTEGER,
	"text"	TEXT,
	"createdAt"	DATE DEFAULT CURRENT_TIMESTAMP,
	"productId"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("productId") REFERENCES "Produit"("id")
);
INSERT INTO "Categorie" ("id","nom") VALUES (1,'appareil photo'),
 (2,'television'),
 (3,'drone'),
 (4,'musique electronique'),
 (5,'camera'),
 (6,'jeux video'),
 (7,'telephones cellulaires '),
 (8,'ordinateurs'),
 (9,'tablettes');
INSERT INTO "Utilisateur" ("id","nom","prenom","email","password","no_civique","street","city","pays","image_profil") VALUES (1,'Cholette','Evan','e_cholette@hotmail.com','1','280','Boivin','Montreal','Canada','evan.jpg'),
 (2,'Boussemousse','Taoufik','2220019@collegeuniversel.ca','1','521','Lassal','Montreal','Canada','evan.jpg');
INSERT INTO "Produit" ("id","nom","prix","quantity","description","image_url","marque","categorie_id") VALUES (1,'Canon PowerShot SX70 HS Appareil photo numerique',944.95,100,'Description du produit','/public/images/p1.png','Canon',1),
 (2,'GameSir G4 Pro Controleur leur de jeu sans fil Bluetooth',29.99,200,'Controleur leur PC avec ABXY magnétique, manette de jeu compatible avec Switch/PC Windows/ATTOE/ telephone/portable Android/iOS pour jeux Apple Arcade MFi','/public/images/p2.png','Game Sir',6),
 (3,'Drone quadricoptère pliable super endurance pour debutants',129.99,50,'40 minutes de temps de vol, drone FPV Wi-Fi avec camera HD 1080p grand angle de 120 °, positionnement du flux optique, suivez-moi, double cameras (2 piles)','/public/images/p3.png','CHUBORY',3),
 (4,'Brightin Star Objectif grand angle 35 mm F1.7 APS-C',149.99,10,'Mise au point manuelle sans miroir, compatible avec Canon EF-M Mount M, M2, M3, M5, M6, M10, M100, M50, M200 (argent)','/public/images/p4.png','Brightin Star',1),
 (5,'Klipsch R-100SW Caisson de basses 25,4 cm',328.99,300,'Nom du modÃƒÂ¨le: Klipsch R-100SW, Type de haut-parleur Caisson de basse, Technologie de connectivitÃƒÂ© RCA, FonctionnalitÃƒÂ© spÃƒÂ©ciale','/public/images/p5.png','Klipsch',4),
 (6,'Razer Wolverine V2 Pro Manette de jeu sans fil pour PlayStation 5 / PS5 PC',199.99,5,'HyperSpeed Wireless - Boutons d action mÃƒÂ©caniques tactiles - 8 voies Microswitch D-Pad - 6 boutons reprogrammables - Chroma RGB - Noir','/public/images/p6.png','Razer',6),
 (7,'DJI Mini 3 Pro (DJI RC)',79.99,150,'Drone camera leger et pliable avec video 4K/60fps, photo 48MP, temps de vol 34 min, detection d obstacles tridirectionnelle, ideal pour la photographie aerienne et les medias sociaux','/public/images/p7.png','DJI',3),
 (8,'Appareil photo numerique 4K',145.59,250,'Appareil photo compact 48 MP - Ecran de 7,6 cm - Rechargeable - Zoom numerique 16X - Double camera HD avec carte SD - Noir','/public/images/p8.png','Birosnsy',1),
 (9,'Noorio B200 Camera de securite exterieure sans fil',104.58,1000,'Camera de securite domestique 1080p, camÃƒÂ©ra WiFi alimentÃƒÂ©e par piles sans fil, vision nocturne couleur, detection de mouvement IA, fonctionne avec Alexa, mise en place en quelques minutes','/public/images/p9.png','Noorio',5),
 (10,'Télévision intelligente',399.99,450,'Télévision intelligente Amazon Fire TV 43 po Série 4 4K UHD, regardez la télévision en direct sans avoir besoin du câble','/public/images/p10.png','Amazon',2),
 (11,'Television Roku intelligent',168.95,400,'TCL Téléviseur Roku intelligent 32" Classe 3 Full HD 1080p LED - 32S359-CA','/public/images/p11.png','TCL',2),
 (12,'Ordinateur portable Windows 11',699.99,250,'Ordinateur portable Windows 11 Processeur Intel Celeron N5095 (jusqu''à 2,9 GHz), 15,6" 12 Go DDR4 512 Go SSD, FHD 1920 x 1080 avec ventilateur de processeur, WiFi double bande, Bluetooth 4.2 (gris)','/public/images/p12.png','Sgin',8),
 (13,'Ordinateur portable Windows 11 12 Go DDR4 512 Go SSD',489.99,245,'ordinateur portable de 15,6" avec processeur Intel Celeron N5095 (jusqu''à 2,9 GHz), ordinateur portable FHD 1920 x 1080 avec 2 ports USB 3.0, Wi-Fi double bande, Bluetooth 4.2 (gris)','/public/images/p13.png','Sgin',8),
 (14,'Ordinateur portable professionnel,Lenovo ThinkPad T480',299,452,'Lenovo ThinkPad T480 Ordinateur portable professionnel HD 14" (Intel 8e génération Quad-Core i5-8250U, 16 Go de RAM DDR4, Toshiba 256 Go PCIe NVMe 2242 M.2 SSD) Empreinte digitale, Thunderbolt 3 Type-C, WiFi, Windows 10 Pro (renouvelé)','/public/images/p14.png','Lenovo',8),
 (15,'Appareil photo numerique Canon EOS',845.15,250,'Canon EOS M50 Mark II + EF-M 15-45 mm est un kit STM noir','/public/images/p15.png','Canon',1),
 (16,'Appareil photo reflex numérique Canon EOS Rebel T7',639.99,350,'Appareil photo reflex numérique Canon EOS Rebel T7 avec objectif zoom EF-S 18-55 mm + carte mémoire SanDisk 32 Go + trépied + étui + objectifs grand angle + accessoires ZeeTech','/public/images/p16.png','ZeeTech',1),
 (17,'Piano avec kit d''affichage tactile',229.99,250,'RockJam61 Key Keyboard Piano avec kit d''affichage tactile, support de clavier, banc de piano, pédale de maintien, casque, app et autocollants de touches de piano','/public/images/p17.png','RockJam',4),
 (18,'Apple iPad 2018 32 Go',229.99,20,'Apple iPad 2018 32 Go – WiFi uniquement – Gris sidéral (renouvelé)','/public/images/p18.png','Apple',9),
 (19,'Samsung Galaxy Tab S6 Lite',329.99,500,'Samsung Galaxy Tab S6 Lite (nouveau) Bleu 10,4" 64 Go WiFi Android Tablet w/S Pen, design fin en métal, deux haut-parleurs, 8 MP + 5 MP (version CAD et garantie)','/public/images/p19.png','Samsung',9),
 (20,'Samsung Galaxy Tab A7 Lite ',155,250,'Samsung Galaxy Tab A7 Lite 8,7" 32 Go Gris foncé Wi-Fi SM-T220NZAAXAR','/public/images/p20.png','Samsung',9),
 (21,'Apple iPad (10e génération)',549.99,150,'Apple iPad (10e génération) : avec puce A14 Bionic, écran Retina liquide de 11,9 pouces, 64 Go, Wi-Fi 6, appareil photo avant/arrière 12 MP, Touch ID, autonomie de la batterie toute la journée - Rose','/public/images/p21.png','Apple',9),
 (22,' Ordinateur portable Apple MacBook Air 2023 ',1649.99,20,'Apple MacBook Air 2023 Ordinateur portable avec puce M2 : écran Retina liquide de 15,3", 8 Go de RAM, 256 Go de stockage SSD, caméra FaceTime HD 1080p, Touch ID. Fonctionne avec iPhone/iPad, Starlight, anglais','/public/images/p22.png','Apple',8),
 (23,'Ordinateur portable Apple MacBook Air 2022 ',1349.99,50,'Apple MacBook Air 2022 Ordinateur portable avec puce M2 : écran Retina liquide de 13,6 pouces, 8 Go de RAM, 256 Go de stockage SSD, clavier rétroéclairé, caméra FaceTime HD 1080p Fonctionne avec iPhone et iPad Minuit Anglais','/public/images/p23.png','Apple',8),
 (24,'Caméra de sécurité intérieure ','39,98',250,' Caméra de sécurité intérieure avec application téléphonique, caméra de sécurité intérieure à vue à 360°, caméra WiFi 1080p pour bébé/animal de compagnie, caméra de sécurité domestique avec vision nocturne infrarouge, suivi automatique, audio bidirectionnel','/public/images/p24.png','Crzwok',5),
 (25,'Camera Blink Video Doorbell',164.98,150,'sonnette vidéo Blink Video Doorbell + 2 caméras extérieures (3e génération)','/public/images/p25.png','Alexa',5),
 (26,'Caméra de sécurité intelligente HD sans fil',159.99,150,'Caméra de sécurité intelligente HD sans fil, autonomie de 2 ans, audio bidirectionnel, détection de mouvements améliorée, fonctionne avec Alexa: 1 caméra','/public/images/p26.png','Alexa',5),
 (27,'Casque sans fil Noir',199.99,45,'Skullcandy Crusher Evo S6EVW-N740 Casque sans fil Noir','/public/images/p27.png','SKULLCANDY',4),
 (28,'Appareil photo numérique avec zoom optique 25x ',476.96,50,'Canon PowerShot SX620 Appareil photo numérique avec zoom optique 25x – Compatible Wi-Fi et NFC (noir)','/public/images/p28.png','canon',1),
 (29,'Appareil photo plein cadre sans miroir interchangeable',4198,70,' Appareil photo plein cadre sans miroir interchangeable avec capteur haute résolution 61 MP, jusqu''à 10 fps avec suivi continu AF/AE','/public/images/p29.png','sony',1),
 (30,' appareil photo instantané ',70.85,250,'Fujifilm Instax Mini 11 appareil photo instantané ','/public/images/p30.png','instax',1),
 (31,'Appareil photo numérique 4K avec étui pour appareil photo',199.99,145,'Appareil photo numérique 4K avec étui pour appareil photo, caméra de vlogging YouTube 48 MP pour photographie et vidéo avec flash viseur, zoom 16x, autofocus compact et caméra de prise de vue avec carte de 32 Go et 2 piles','/public/images/p31.png','sixtary',1),
 (32,'Television Hisense 43A68H',328,510,'Hisense 43A68H - 43 pouces Smart Ultra HD 4K Dolby Vision HDR10 Google TV avec Bluetooth, télécommande vocale (modèle Canada) 2022','/public/images/p32.png','TCL',2),
 (33,'TCL Téléviseur Roku intelligent 32',298,450,'TCL Téléviseur Roku intelligent 32" Classe 3 Full HD 1080p LED - 32S359-CA','/public/images/p33.png','TCL',2),
 (34,'Toshiba Smart TV 4K',629,250,'Toshiba Smart TV 4K UHD HDR LED 50 po (50C350KC) – Fire TV Edition – 2021','/public/images/p34.png','Toshiba',2),
 (35,'Télévision intelligente UHD 4K Amazon Fire TV Série Omni QLED de 50 pouces',679.99,250,'Télévision intelligente UHD 4K Amazon Fire TV Série Omni QLED de 50 pouces, avec Dolby Vision IQ, tamisage local, mains libres avec Alexa','/public/images/p35.png','Amazon',2),
 (36,'Téléviseur intelligent 4K de 50 pouces',597.99,450,'LG Téléviseur intelligent 4K de 50 pouces UQ7590 Series Alexa intégré 50" (3840 x 2160), Bluetooth, Wi-Fi, USB, Ethernet, HDMI 60 Hz, taux de rafraîchissement 4K, alimenté par l''IA (50UQ7590)','/public/images/p36.png','LG',2),
 (37,'Télévision intelligente Amazon Fire TV 65 po Série Omni UHD 4K',899.99,150,'Télévision intelligente Amazon Fire TV 65 po Série Omni UHD 4K avec Dolby Vision et contrôle vocal mains libres avec Alexa','/public/images/p37.png','Alexa',2),
 (38,'Television Google TV intelligent 4K ',548,350,'Hisense 55U68K - Google TV intelligent 4K ULED de 55 po avec technologie Quantum Dot (modèle Canada) 2023','/public/images/p38.png','Hisense',2),
 (39,'Drone appareil photo léger et pliable','1 249.00',250,'Drone appareil photo léger et pliable avec vidéo 4K/60 fps, photo 48 MP, temps de vol de 34 minutes, détection d''obstacles tridirectionnelle, idéal pour la photographie aérienne et les médias sociaux, gris','/public/images/p39.png','DJI',3),
 (40,'Drone quadrirotor pliable super endurance pour débutants',129.99,250,'Drone quadrirotor pliable super endurance pour débutants – 40 minutes de temps de vol, Wi-Fi FPV drone avec caméra HD 1080p grand angle de 120°, positionnement du flux optique','/public/images/p40.png','CHUBORY',3),
 (41,'Drone GPS avec caméra',259.99,140,' Drone GPS avec caméra, moins de 250 grammes, photo 4K, vidéo 2K, deux batteries, 50 minutes de temps de vol, quadricoptère RC avec retour intelligent GPS, Follow Me, 5GHz FPV Transmission Drone avec caméra 4K pour adultes débutants','/public/images/p41.png','Loolinn',3),
 (42,'Mini drone RC Nano quadrirotor meilleur drone pour enfants et débutants',37.99,50,'Mini drone RC Nano quadrirotor meilleur drone pour enfants et débutants, avion hélicoptère AT66 RC avec maintien d''altitude mode sans tête','/public/images/p42.png','ATOYX',3),
 (43,'Drone HS110D FPV RC avec caméra HD 1080p',109.99,250,'Drone HS110D FPV RC avec caméra HD 1080p, vidéo en direct, quadrirotor WiFi grand angle 120° avec maintien d''altitude, mode sans tête, 3D flips RTF avec 2 batteries modulaires, couleur noire','/public/images/p43.png','Holy Stone',3),
 (44,' Drone avec caméra 4K',79.99,270,' Drone avec caméra 4K pour adultes, évitement d''obstacles infrarouge, flux optique, double caméra commutable, vidéo en direct pliable FPV 2,4 G quadrirotor avec 2 batteries','/public/images/p44.png','OBEST',3),
 (45,'Drone HS110D FPV RC avec caméra HD 1080p',109.99,80,'Drone HS110D FPV RC avec caméra HD 1080p, vidéo en direct, quadrirotor WiFi grand angle 120° avec maintien d''altitude, mode sans tête, 3D flips RTF avec 2 batteries modulaires, couleur noire','/public/images/p45.png','Holy Stone',3),
 (46,'Contrôleur MIDI USB 25 touches avec 8 pads de batterie rétroéclairés',129,50,'Contrôleur MIDI USB 25 touches avec 8 pads de batterie rétroéclairés, 8 boutons et logiciel de production musicale inclus (noir)','/public/images/p46.png','Akai',4),
 (47,'Batterie électronique ',1099,20,'Batterie électronique commandsekitxus','/public/images/p47.png','ALESIS',4),
 (48,'Hercules Contrôleur DJ noir (4780883)',667,45,'Contrôleur DJ noir (4780883)','/public/images/p48.png','Tronios BV',4),
 (49,' Piano à clavier 61 touches pour débutants',188.43,50,'Piano à clavier 61 touches pour débutants avec haut-parleurs, support, banc, écouteurs, microphone, support de partition, 300 sons et cours de musique','/public/images/p49.png','Alesis',4),
 (50,'Clavier de piano numérique 61 touches',204.05,150,'Hamzer Clavier de piano numérique 61 touches - Instrument de musique électronique portable - Avec microphone','/public/images/p50.png','Hamzer',4),
 (51,' Lot de 2 microphones cravate sans fil pour iPhone iPad',25.49,70,' Lot de 2 microphones cravate sans fil pour iPhone iPad, micro sans fil pour enregistrement vidéo, entretien, YouTube, Facebook, TikTok, synchronisation automatique et réduction du bruit','/public/images/p51.png','RICCHI',4),
 (52,' Caméra vidéo numérique YouTube Vlogging Caméra',119,250,'Caméra vidéo numérique YouTube Vlogging Caméra Enregistreur Full HD 1080p 15 FPS 7,6 cm Rotation 270 degrés LCD Zoom numérique 16X','/public/images/p52.png','Alsone',5),
 (53,'Caméra vidéo numérique YouTube',119,250,'Caméra vidéo numérique YouTube Vlogging Caméra','/public/images/p53.png','Ordo',5),
 (54,'GoPro HERO11 ',749,500,'GoPro HERO11 Black Creator Edition – Comprend HERO11 Black, Volta (poignée de batterie, trépied, télécommande), Media Mod, Light Mod, Enduro batterie et étui de transport','/public/images/p54.png','Gopro',5),
 (55,' Caméra vidéo HD avec trépied',329.99,450,'Caméra vidéo HD avec trépied, stylo de nettoyage et accessoires ZeeTech','/public/images/p55.png','Sony Intl',5),
 (56,'Jumelles pour appareil photo numérique',159.99,350,'Jumelles pour appareil photo numérique avec écran LCD de 2" 12 x 32 5 MP Enregistreur photo vidéo avec carte micro SD 8 Go gratuite pour regarder les oiseaux, les matchs de football, les concerts','/public/images/p56.png','Ansee',5),
 (57,'Console de jeu portable de 11,4 cm IPS HD portable rétro avec carte TF',89.66,250,'Console de jeu portable de 11,4 cm IPS HD portable rétro avec carte TF de 32 Go - 3500 jeux vidéo classiques, console multi-émulateurs prenant en charge la sortie HD/manettes de jeu, batterie rechargeable 3000 mAh, noir','/public/images/p57.png','ZWYING',6),
 (58,'PlayStation 5 Console',649.96,500,'PlayStation 5 Console - Disc Edition','/public/images/p58.png','Playstation',6),
 (59,'Console de jeu portable rétro avec 400 jeux FC classiques',33.5,250,'Console de jeu portable rétro avec 400 jeux FC classiques, console de jeu rétro compatible avec connexion TV et 2 joueurs, jeu vidéo TV, cadeau d''anniversaire pour enfants et adultes.','/public/images/p59.png','Generic',6),
 (60,'Beijue Jeux portables 16 bits pour enfants et adultes',42.98,20,'Beijue Jeux portables 16 bits pour enfants et adultes - Grand écran de 7,6 cm - Préchargés - 100 HD - Jeux vidéo rétro classiques - Pas besoin de WiFi - Rechargeable par USB','/public/images/p60.png','Beijue',6),
 (61,'Nintendo Switch',394.99,250,'Nintendo Switch™ with Neon Blue and Neon Red Joy‑Con™ (New Box)','/public/images/p61.png','Nintendo Switch',6),
 (67,'LeapFrog LeapPad Academy Tablette d''apprentissage pour enfant Vert',129.97,50,'LeapFrog LeapPad Academy Tablette d''apprentissage pour enfant Vert','/public/images/p67.png','LeapFrog',6),
 (68,'Minecraft for Nintendo Switch ',29.96,150,'Minecraft for Nintendo Switch - Standard Edition','/public/images/p68.png','Nintendo Switch',6),
 (70,'Téléphone portable débloqué Canada',122.99,30,'Téléphone portable débloqué Canada, UMIDIGI F3 SE (4 Go + 128 Go), smartphone double SIM 4G','/public/images/p70.png','Apple',7),
 (71,'Super petit mini smartphone 3G double SIM minuscule',109,150,'uper petit mini smartphone 3G double SIM minuscule téléphone portable 1 Go de RAM, 8 Go de ROM, 5,0 Mpx, quadricœur double veille, le plus petit téléphone débloqué du monde','/public/images/p71.png','Hipipooo',7),
 (72,'Apple iPhone XR, 64 Go, Noir ',317.98,20,'Apple iPhone XR, 64 Go, Noir - Entièrement débloqué','/public/images/p72.png','Apple',7),
 (73,'Samsung Galaxy A51 64 Go',209,40,'Samsung Galaxy A51 64 Go (modèle canadien A515W) écran 6,5" téléphone débloqué 4G LTE Quad caméra 48MP Prism Crush Noir','/public/images/p73.png','Samsung',7),
 (74,'Samsung Galaxy A12 32 Go ',155,30,'Samsung Galaxy A12 32 Go Écran 6,5" A125 Smartphone débloqué (non compatible avec Freedom Mobile) Noir','/public/images/p74.png','Samsung',7),
 (75,'Blackberry Curve 9360 Téléphone',199,20,'Blackberry Curve 9360 Téléphone débloqué GSM avec OS 7, appareil photo 5MP, clavier QWERTY, GPS, Wi-Fi et NFC Noir','/public/images/p75.png','Blackberry',7),
 (76,'iPhone 12',562,40,'Phone 12, 64 Go, violet, débloqué','/public/images/p76.png','Apple',7),
 (77,' iPhone 12 Pro Max',799,50,'Apple iPhone 12 Pro Max, 128 Go, bleu pacifique','/public/images/p77.png','Apple',7),
 (78,' iPhone 14',1548,250,'Apple iPhone 14, 128 Go, minuit, débloqué','/public/images/p78.png','Apple',7),
 (79,'Dell Ordinateur portable Latitude E7450 14',319,250,'Dell Ordinateur portable Latitude E7450 14", Core i5-5300U 2,3 GHz, RAM 16 Go, SSD 500 Go, Windows 10 Pro 64 bits','/public/images/p79.png','Dell',8),
 (80,'Dell Latitude 7280','203.99$',20,'Dell Latitude 7280 // Écran 12,5" HD WLED (1366 x 768) / Intel Core i5 (6e génération) i5-6300U 2,40 GHz / 8 Go DDR4 SDRAM / SSD M.2','/public/images/p80.png','Dell',8),
 (81,'iMac ',1699,45,'iMac with Apple M1 chip','/public/images/p81.png','Apple',8),
 (82,'Dell Optiplex',389.99,30,'Dell Optiplex – Petit ordinateur de bureau (mini PC) | Processeur quadricœur Intel i5 (3,2 GHz) ','/public/images/p82.png','Dell',8),
 (83,' Tablette pour enfants G1 Tab 10',139.99,50,' Tablette pour enfants G1 Tab 10,1" Android 13, 8 (4 + 4) Go + 64 Go jusqu''à 1 To, 2.4/5G WiFi 6 tablettes Android pour enfants, double caméra 8 MP + 8 MP, Quad-Core, 6000 mAh, BT5.0, jeux éducatifs','/public/images/p83.png','UMIDIGI',9),
 (84,'tablette Amazon Fire HD',189.99,150,'Tablette Amazon Fire HD 8 Kids Pro, écran HD de 8 pouces, 6 à 12 ans, processeur 30 % plus rapide, autonomie de 13 heures','/public/images/p84.png','Amazon',9),
 (85,'Amazon Fire HD 8',119.99,20,'Amazon Fire HD 8, écran HD 8", 32 GB, processeur 30 % plus rapide, conçue pour le divertissement portable, (version 2022)','/public/images/p85.png','Amazon',9),
 (86,'Samsung Galaxy Tab A7 ',155,50,'Samsung Galaxy Tab A7 Lite 8,7" 32 Go Gris foncé Wi-Fi SM-T220NZAAXAR','/public/images/p86.png','Samsung',9),
 (87,'Tablettes Android 11',94.99,150,'Tablettes Android 11 E100 2023, tablettes Android 10" avec étui de protection, processeur quadricœur, caméra frontale 5 MP + caméra arrière 8 MP','/public/images/p87.png','Tibuta',9);
INSERT INTO "Comment" ("id","userId","rating","text","createdAt","productId") VALUES (1,1,5,'Ceci est un commentaire de test.','2023-09-11 15:12:51',NULL),
 (2,2,4,'Un autre commentaire pour illustrer.','2023-09-11 15:12:51',NULL),
 (3,1,2,'fsgsg','2023-09-14T18:15:43.421Z',NULL),
 (4,1,4,'hfhe','2023-09-14T18:18:14.735Z',NULL),
 (5,1,3,'3 sao','2023-09-14T18:32:20.725Z',NULL),
 (6,1,5,'5 sao','2023-09-14T18:33:49.287Z',NULL),
 (7,1,3,'dsfsfs','2023-09-15T13:31:43.396Z',NULL),
 (8,1,3,'taoufik ','2023-09-15T13:47:35.826Z',NULL),
 (9,1,5,'ayou ','2023-09-15T13:47:55.890Z',NULL),
 (10,1,4,'cong tai qqc','2023-09-15T13:50:27.853Z',NULL),
 (11,1,5,'Vinh la 5 sao','2023-09-15T14:09:59.495Z',NULL),
 (12,3,5,'vinh 5 sao mooi','2023-09-15T14:54:04.003Z',NULL),
 (13,3,4,'may anh toot','2023-09-15T14:55:18.553Z',NULL),
 (14,1,3,'comment moi 3 sao','2023-09-15T15:52:47.950Z',NULL),
 (15,1,3,'camera','2023-09-18T14:23:20.209Z',NULL),
 (16,1,5,'camera 5 sao','2023-09-18T14:31:00.473Z',9),
 (17,3,5,'thu','2023-09-18T14:57:20.424Z',14),
 (18,1,3,'camera 3 sao','2023-09-18T14:58:57.412Z',9),
 (19,1,4,'TV 4 sao','2023-09-18T14:59:21.959Z',11),
 (20,1,3,'TV 3 sao','2023-09-18T15:10:20.773Z',11),
 (21,1,5,'canon 5 sao','2023-09-18T15:15:59.945Z',15),
 (22,3,3,'canon 5 sao','2023-09-18T15:16:33.667Z',8),
 (23,3,4,'Drone 4 sao','2023-09-18T15:16:58.496Z',3),
 (24,1,3,'j 3 etoile','2023-09-18T15:40:17.011Z',2),
 (25,3,4,'4 etoile','2023-09-18T15:41:41.561Z',2),
 (26,1,3,'speaker 3 star','2023-09-18T15:54:10.974Z',5),
 (27,1,2,'evan encore','2023-09-19T14:08:01.585Z',3),
 (28,1,5,'nice','2023-09-20T14:16:12.081Z',2),
 (29,4,5,'nice','2023-09-22T04:08:17.443Z',71);
COMMIT;
