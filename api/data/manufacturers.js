const Manufacturer = require("../models/Manufacturer");

const manufacturers = [
    new Manufacturer(
        {
            name:"Sega",
            description:`Sega Corporation (株式会社セガ, Kabushiki kaisha Sega?, abréviation de Service Games, couramment stylisé SEGA) est une société japonaise de développement et d'édition de jeux vidéo, ainsi qu'un fabricant de bornes et systèmes d'arcade. Sega est également un fabricant de consoles de jeux vidéo, mais à la suite de l'échec commercial de la console de salon Saturn ainsi qu'à l'indifférence du public envers la Dreamcast, la société s'est retirée de ce marché en date du 31 janvier 2001 pour se consacrer exclusivement au développement de jeux pour d'autres consoles et pour ordinateur, et de jeux d'arcade1. `,
            illustration:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/SEGA_logo.svg/langfr-1024px-SEGA_logo.svg.png",
            country:"Japon"
        }
    ),
    new Manufacturer(
        {
            name:"Nintendo",
            description:`Nintendo (任天堂株式会社, Nintendō kabushiki gaisha?) est une entreprise multinationale japonaise fondée en 1889 par Fusajirō Yamauchi3 près de Kyoto au Japon. Elle est spécialisée dans la fabrication de consoles de jeu vidéo, comme la Nintendo Entertainment System (NES), la Nintendo 64, la Wii et la Nintendo DS, ainsi que dans la conception de jeux vidéo tels que Super Mario ou The Legend of Zelda. À ses débuts, la société produisait des cartes à jouer japonaises : les Hanafuda4. À partir des années 1970, la société diversifie ses activités en produisant des jouets et des bornes d'arcade. Elle est ainsi l'une des principales sociétés précurseurs du jeu vidéo. Dans la fin des années 1970, Nintendo se lance dans le marché des consoles et des jeux vidéo. Actuellement, elle est l'un des leaders de ce marché : en 2008, Nintendo est classé premier éditeur de jeux vidéo au Japon5 et deuxième aux États-Unis (NPD Group). En date de 2019, Nintendo a vendu environ 800 millions de consoles, toutes générations et types confondus.`,
            illustration:"https://upload.wikimedia.org/wikipedia/commons/2/29/NintendoLogo.png",
            country:"Japon"
        }
    ),
    new Manufacturer(
        {
            name:"Atari",
            description:`Atari est une entreprise française de jeu vidéo, dont le siège est situé à Paris, en France. Atari est à l'origine une entreprise américaine fondée en 1972 par Nolan Bushnell et Ted Dabney, considérée comme pionnière et fondatrice de l'industrie du jeu vidéo, devenue française en 2003 par son rachat par Infogrames. Elle est spécialisée dans le développement des jeux vidéo et fabrique des bornes d'arcade, des consoles de jeux et des ordinateurs personnels des années 1970 à 1990. L'entreprise débute avec Pong3, succès planétaire qui lance le secteur du jeu vidéo. Atari Inc. est ensuite célèbre pour avoir édité les jeux Breakout, Asteroids ou Tempest, les consoles Atari 2600 et Atari 5200, ainsi que les séries d'ordinateurs personnels Atari 8-bit puis Atari ST.`,
            illustration:"https://upload.wikimedia.org/wikipedia/fr/e/e6/Atari_Inc._%282003%29_Logo_1.png",
            country:"USA"
        }
    ),
    new Manufacturer(
        {
            name:"SNK",
            description: `SNK Corporation est une entreprise japonaise fondée en 1973 et domiciliée à Ōsaka, dont l'activité est la planification, le développement et l'édition de jeux vidéo et de systèmes de jeu vidéo, ainsi que la création et la gestion de centres de divertissement2. Parmi les produits plus célèbres de la marque, figurent le Neo-Geo MVS, un système d'arcade également commercialisé en version console de jeux vidéo, la Neo-Geo AES et les séries des jeux Fatal Fury, The King of Fighters, Metal Slug, Samurai Shodown. Après des tentatives infructueuses pour s'imposer sur le marché des consoles de salon et des consoles portables, SNK connaît de grosses difficultés financières. Aruze rachète l'entreprise en 2000, mais de mauvaises orientations et stratégies font sombrer SNK. Juste avant la faillite de SNK en 2001, le fondateur de la société crée une entreprise nommée BrezzaSoft, puis crée la société Playmore qui sera renommée SNK Playmore et détenant tous les droits des propriétés intellectuelles de SNK3,4,5. La société "SNK Playmore Corporation" prend officiellement le nom "SNK Corporation" le 1er décembre 20166.`,
            illustration:"https://upload.wikimedia.org/wikipedia/commons/4/4c/SNK.png",
            country:"Japon"
        }
    ),
    new Manufacturer(
        {
            name:"NEC",
            description: `Fondée en 1899 par Iwadare Kunihiko (ancien employé d'Edison à New York) et l'entreprise américaine Western Electric, Nippon Denki Kabushiki gaisha (日本電気株式会社?), en anglais Nippon Electric Company, est historiquement la première entreprise à capital mixte japonais et étranger. Elle produit alors des téléphones et centraux téléphoniques, et élargit ensuite son activité à l’électronique (semi-conducteurs, circuits intégrés) et aux systèmes de communication (par radio, par micro-ondes ou par câbles sous-marins).`,
            illustration:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/NEC_logo.svg/langfr-1024px-NEC_logo.svg.png",
            country:"Japon"
        }
    ),
    new Manufacturer(
        {
            name:"Commodore",
            description:`Commodore Business Machines Ltd (CBM) est une société d'électronique d'origine américaine qui s'est rendue célèbre pour ses calculatrices électroniques (comme la P-50 ou la PR-100) et ses micro-ordinateurs jusqu'en 1994. Après une brève réapparition sur le marché des PC de jeu en 2007, la marque est acquise sous licence en 2010 par deux jeunes entrepreneurs pour devenir Commodore USA en Floride, jusqu'en 2013. Le 26 décembre 2014, deux entrepreneurs italiens rachètent les droits et raniment CBM à Londres, pour la fabrication de téléphones mobiles2.`,
            illustration:"https://upload.wikimedia.org/wikipedia/commons/2/23/Commodore_logo.png",
            country:"USA"
        }
    ),
];

module.exports = manufacturers;
