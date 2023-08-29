DROP TABLE if EXISTS products;

CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    quantity INTEGER NOT NULL,
    description TEXT,
    image_url TEXT,
    brand TEXT,
    category TEXT
);

INSERT INTO products (id, name, price, quantity, description, image_url, brand, category) VALUES
    (1, 'Canon PowerShot SX70 HS Appareil photo numérique (3071C001)', 944.95, 100, 
		'Nom du modèle: CANPSSX70BKUP1
		Type de contrôle de l’exposition: Automatique
		Facteur de forme: Portable.
		Résolution effective fixe: 20,3 mégapixels
		Fonctionnalité spéciale: Stabilisation d image
		Zoom optique: 65 Multiplicateur x
		Couleur: Noir
		Technologie de connectivité: Bluetooth, Wi-Fi
		Taille de l’écran: 247 Millimètres', '/public/images/p1.png', 'Canon', 'Electronics'),
    (2, 'GameSir G4 Pro Contrôleur de jeu sans fil Bluetooth', 29.99, 200, 'Contrôleur PC avec ABXY magnétique, manette de jeu compatible avec Switch/PC Windows/téléphone portable Android/iOS pour jeux Apple Arcade MFi', '/public/images/p2.png', 'Game Sir', 'Electronics'),
    (3, 'Drone quadricoptère pliable super endurance pour débutants', 129.99, 50, '40 minutes de temps de vol, drone FPV Wi-Fi avec caméra HD 1080p grand angle de 120°, positionnement du flux optique, suivez-moi, double caméras (2 piles)', '/public/images/p3.png', 'CHUBORY', 'Electronics'),
    (4, 'Brightin Star Objectif grand angle 35 mm F1.7 APS-C', 149.99, 10, 'Mise au point manuelle sans miroir, compatible avec Canon EF-M Mount M, M2, M3, M5, M6, M10, M100, M50, M200 (argent)', '/public/images/p4.png', 'Brightin Star', 'Electronics'),
    (5, 'Klipsch R-100SW Caisson de basses 25,4 cm', 328.99, 300, 'Nom du modèle: Klipsch R-100SW, Type de haut-parleur Caisson de basse, Technologie de connectivité RCA, Fonctionnalité spéciale', '/public/images/p5.png', 'Klipsch', 'Electronics'),
    (6, 'Razer Wolverine V2 Pro Manette de jeu sans fil pour PlayStation 5 / PS5 PC', 199.99, 5, 'HyperSpeed Wireless - Boutons d action mécaniques tactiles - 8 voies Microswitch D-Pad - 6 boutons reprogrammables - Chroma RGB - Noir', '/public/images/p6.png', 'Razer', 'Electronics'),
    (7, 'DJI Mini 3 Pro (DJI RC)', 79.99, 150, 'Drone caméra léger et pliable avec vidéo 4K/60fps , photo 48MP , temps de vol 34 min, détection d obstacles tridirectionnelle, idéal pour la photographie aérienne et les médias sociaux', '/public/images/p7.png', 'DJI', 'Electronics'),
    (8, 'Appareil photo numérique 4K', 145.59, 250, 'Appareil photo compact 48 MP - Écran de 7,6 cm - Rechargeable - Zoom numérique 16X - Double caméra HD avec carte SD - Noir', '/public/images/p8.png', 'Birosnsy', 'Electronics'),
    (9, 'Noorio B200 Caméra de sécurité extérieure sans fil', 104.58, 1000, 'Caméra de sécurité domestique 1080p, caméra WiFi alimentée par piles sans fil, vision nocturne couleur, détection de mouvement IA, fonctionne avec Alexa, mise en place en quelques minutes', '/public/images/p9.png', 'Noorio', 'Electronics');

