const Platform = require("../models/Platform");

const platforms = [
    new Platform(
        {
            name:"Arcade",
            description:`Une borne d'arcade est un jeu vidéo payant dit « jeu vidéo d'arcade ». On les trouve habituellement dans des lieux ouverts au public comme les bars, les centres commerciaux, certains établissements de divertissement (bowlings, patinoires, cinémas multiplexe, etc.) ainsi que les salles d'arcade. L'origine du nom provient des lieux où ces bornes étaient souvent installées, sous les arcades afin de rentabiliser l'espace. Par extension dans le monde anglophone, une arcade désigne le lieu public en entier, qu'il comporte ou non des arcades. En français, on utilise le terme « salle d'arcade ».`,
            illustration:"https://upload.wikimedia.org/wikipedia/commons/8/88/Donkey_Kong_arcade.jpg",
            country:"none"
        }
    ),
    new Platform(
        {
            name:"Atari 2600",
            description:`L’Atari 2600 est lancée en octobre 1977 au prix de 199 USD (de l’époque), livrée avec une paire de joysticks et le jeu Combat3. C’est la troisième console à cartouches, après la Channel F de Fairchild et la RCA Studio II, commercialisée un an plus tôt (les précédentes consoles du marché intègrent un ou plusieurs jeux sans la possibilité d’en adjoindre d’autres). À l’origine, le nom de la console est Atari VCS, pour Video Computer System. Le nom Atari 2600 est utilisé pour la première fois en 1982 lors de la sortie de l’Atari 5200. Avec entre 25 et 40 millions d’unités vendues, l’Atari 2600 est la console la plus populaire de sa génération2. Le succès est historique, marquant l’avènement d’un marché de masse pour le jeu vidéo. La console rapporte beaucoup d’argent à la société Atari jusqu’en 1983 et la crise du marché du jeu vidéo aux États-Unis. Vendue principalement aux États-Unis et en Europe, elle est produite jusqu’en 1991, ce qui constitue un record de longévité sur les marchés occidentaux.`,
            illustration:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Atari-2600-Wood-4Sw-Set.jpg/1024px-Atari-2600-Wood-4Sw-Set.jpg",
            country:"USA"
        }
    ),
    new Platform(
        {
            name:"Atari 7800",
            description:`L'Atari 7800 est une console de jeux vidéo 8-bit de troisième génération, conçue et commercialisée par le constructeur américain Atari. Elle est sortie début 1986 aux États-Unis, puis dans le courant de l'année au Japon et seulement en 1991 en France. Succédant à l'Atari 5200, l'Atari 7800 sort comme concurrente à la Nintendo Entertainment System (NES) et à la Sega Master System pendant l'ère des consoles de jeux vidéo de troisième génération. Toutefois, la console ne rivalisera jamais réellement avec ses concurrentes. `,
            illustration:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Atari_7800_with_cartridge_and_controller.jpg/1024px-Atari_7800_with_cartridge_and_controller.jpg",
            country:"USA"
        }
    ),
    new Platform(
        {
            name:"Nintendo Entertainment System",
            description:`La Nintendo Entertainment System, par abréviation NES, également couramment appelée Nintendo en France3,4,5, est une console de jeux vidéo de génération 8 bits fabriquée par l'entreprise japonaise Nintendo et distribuée à partir de 1985 (1987 en Europe). Son équivalent japonais est la Family Computer (ファミリーコンピュータ, Famirī Konpyūta?), ou Famicom (ファミコン, Famikon?), sortie quelques années avant, en 1983. En Corée du Sud, la NES porta le nom de Hyundai Comboy (컴보이) et en Inde, celui de Tata Famicom.`,
            illustration:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/NES-Console-Set.png/1024px-NES-Console-Set.png",
            country:"Japon"
        }
    ),
    new Platform(
        {
            name:"Master System",
            description:`La Master System (マスターシステム, Masutā Shisutemu?) ou Sega Master System (aussi abrégé SMS) est une console de jeux vidéo de troisième génération, conçue et commercialisée par le constructeur japonais Sega Enterprises, Ltd. Elle sort en 1985, sous le nom Sega Mark III au Japon. La console est redessinée et rebaptisée Master System avant son lancement en 1986 en Amérique du Nord. Elle sort sous ce nom sur la plupart des autres territoires, dont l'Europe en 1986 et le Brésil en 1987. Le modèle remanié de la Master System sort également en 1987 au Japon.`,
            illustration:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sega-Master-System-Set.png/1024px-Sega-Master-System-Set.png",
            country:"Japon"
        }
    ),
    new Platform(
        {
            name:"PC-Engine",
            description:`La PC-Engine (PCエンジン, Piishii Enjin?), connue sous le nom TurboGrafx-16 en Amérique du Nord, est une console de jeux vidéo 8 bits fabriquée par NEC et commercialisée à partir de 1987 au Japon. En dehors de son pays natal et du territoire nord-américain, la gamme de consoles a connu une existence relativement confidentielle, car peu ou pas distribuée. En avance sur son temps, la PC-Engine possède un processeur central 8 bits et un processeur graphique 16 bits, ainsi elle est considérée comme une console de quatrième génération. Conçue pour être modulaire et évolutive, c'est aussi la première console de jeux de l'histoire à utiliser dès décembre 1988, le support des CD-ROMs, grâce à un lecteur en option. Après le premier modèle d'origine, elle fut déclinée dans de nombreuses versions pour finir par accepter quatre formats de jeux différents : HuCard, CD-ROM², Super CD-ROM² et Arcade CD-ROM²`,
            illustration:"https://upload.wikimedia.org/wikipedia/commons/5/5a/PC_Engine.jpg",
            country:"Japon"
        }
    ),
    new Platform(
        {
            name:"Commodore 64",
            description:`Le Commodore 64 utilise un microprocesseur 8 bits 6510 (un dérivé proche du 6502 qui a la possibilité de gérer des banques de mémoires en les amenant à la demande dans l'espace d'adressage du processeur) et dispose de 64 kilooctets de mémoire vive. Au Royaume-Uni, il a rivalisé en popularité avec le ZX Spectrum et a tiré bénéfice d'un clavier de taille normale et de puces graphiques et son plus avancées.`,
            illustration:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Commodore64.jpg/1024px-Commodore64.jpg",
            country:"Japon"
        }
    ),
    new Platform(
        {
            name:"SuperGrafX",
            description:`Le Commodore 64 utilise un microprocesseur 8 bits 6510 (un dérivé proche du 6502 qui a la possibilité de gérer des banques de mémoires en les amenant à la demande dans l'espace d'adressage du processeur) et dispose de 64 kilooctets de mémoire vive. Au Royaume-Uni, il a rivalisé en popularité avec le ZX Spectrum et a tiré bénéfice d'un clavier de taille normale et de puces graphiques et son plus avancées.`,
            illustration:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/SuperGrafx-Console-Set.jpg/1024px-SuperGrafx-Console-Set.jpg",
            country:"Japon"
        }
    ),
];

module.exports = platforms;
