const Videogame = require("../models/Videogame");

const videogames = [
    new Videogame(
        {
            title: "Ghost 'n Goblins",
            description: `Ghosts 'n Goblins 魔界村 (Makaimura?) est une série de jeux vidéo de plates-formes développée et éditée par Capcom. Ghosts 'n Goblins, le jeu d'arcade originel sort en septembre 1985, puis est porté sur de nombreuses plates-formes. Il donne alors naissance à plusieurs suites, des spin-off, ainsi que des séries dérivées intitulées Gargoyle's Quest et Maximo, composées de plusieurs jeux. La première ainsi que la série principale sont créées par Tokuro Fujiwara. La série principale est composée de nombreux jeux, et se concentre sur la quête du chevalier Arthur consistant à sauver la princesse du roi démon.    La série dans son ensemble s'est vendue à plus de 4,4 millions d'unités et constitue la 8e franchise de jeux Capcom la plus vendue. Elle est réputée pour son haut niveau de difficulté.`,
            illustration: "https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/nes_5/H2x1_NES_GhostNGoblins.jpg",
            year: 1985
        }
    ),
    new Videogame(
        {
            title: "Meta Slug",
            description: `Metal Slug (sous-titré Super Vehicle-001) est un jeu vidéo de type run and gun développé par Nazca et édité par SNK en 1996 sur Neo-Geo MVS, Neo-Geo AES et Neo-Geo CD (NGM 201). C'est le premier épisode de la série Metal Slug1,2,3. Metal Slug est un jeu vidéo d'arcade, de type shoot 'em up ou qui peut également être désigné par run and gun, paru à l'origine sur Neo-Geo MVS. Le jeu est similaire dans son principe à Contra et mêle humour décalé et action.`,
            illustration: "https://upload.wikimedia.org/wikipedia/fr/thumb/e/e5/Metal_Slug_Logo.png/260px-Metal_Slug_Logo.png",
            year: 1996
        }
    ),
    new Videogame(
        {
            title: "Zelda",
            description: `The Legend of Zelda: A Link to the Past (ou simplement A Link to the Past, ALttP, et parfois Zelda III) est un jeu d'action-aventure développé et édité par Nintendo le 21 novembre 1991 au Japon sur Super Nintendo, puis en avril 1992 aux États-Unis et en septembre 1992 en Europe. Il s'agit du troisième épisode de la série The Legend of Zelda. Dans un univers de fantasy appelé Hyrule, Link doit trouver les trois pendentifs magiques afin d'obtenir l'épée Excalibur, puis délivrer les sept descendantes des sept sages (dont la princesse Zelda) et vaincre Ganon, dans le but de récupérer la Triforce et ramener la paix dans le royaume. Durant le jeu, Link se déplace dans une carte du monde affichée en vue de dessus, mais explore également plusieurs donjons labyrinthiques souterrains. Le royaume d'Hyrule est habité par de nombreux monstres que Link doit combattre, et recèle de nombreux secrets et énigmes à résoudre, ce qui permet à Link de découvrir des objets utiles à son avancement dans la quête ou des armes améliorant ses capacités. L'exploration et la découverte de secrets sont le cœur de l'expérience de jeu.`,
            illustration: "https://upload.wikimedia.org/wikipedia/fr/2/21/The_Legend_of_Zelda_A_Link_to_the_Past_Logo.png",
            year: 1992
        }
    ),
    new Videogame(
        {
            title: "Donkey Kong",
            description: `Donkey Kong (ドンキーコング, Donkī Kongu?), est un jeu vidéo d'arcade créé par Nintendo en 1981. C'est un des premiers jeux de plates-formes, précédé dans le même genre par Space Panic et Apple Panic1. L'intérêt est centré sur le déplacement d'un personnage principal à travers quatre niveaux en évitant des obstacles mouvants. Si le scénario est simple, il est suffisamment développé pour l'époque : Mario, appelé alors Jumpman, doit secourir une demoiselle en détresse, capturée par un gorille géant, Donkey Kong. Les deux personnages qu'il introduit sont appelés à devenir deux icônes de la marque Nintendo.`,
            illustration: "https://www.classicgaming.cc/classics/donkey-kong/images/donkey-kong-arcade-screen-bentgirders.jpg",
            year: 1981
        }
    ),
    new Videogame(
        {
            title: "Castlevania",
            description: `Le principe original des Castlevania est celui des jeux de plate-forme / action : le héros du jeu traverse le château de Dracula, rempli de monstres divers comme des zombies, des chauve-souris, des squelettes que le joueur peut éviter ou tuer. Le joueur doit également éviter de tomber dans les nombreux pièges parsemés à travers le château : trous, fosses de pals et autres objets de torture. Ce château est décomposé en plusieurs parties appelées niveaux, certains étant récurrents comme les jardins ou la tour de l'horloge. À la fin de chaque niveau, le héros affronte un boss qui une fois vaincu libère le passage vers le niveau suivant. Les monstres tués apportent parfois au héros une arme, une âme ou un objet que peut utiliser le joueur dans sa quête. Les objets délivrés par les boss sont importants pour le reste de la quête. Le boss final du jeu est Dracula lui-même.`,
            illustration: "https://i.pinimg.com/originals/0b/0d/68/0b0d68860472989b66d26cf0dcee832e.png",
            year: 1986
        }
    ),
    new Videogame(
        {
            title: "Metroid",
            description: `Metroid (メトロイド, Metoroido?) est un jeu vidéo d'action-aventure développé par Nintendo R&D1 et Intelligent Systems, et édité par Nintendo en 1986 sur Famicom Disk System, l'extension de la Famicom. Il sort à partir de 1987 sur NES en Amérique du Nord, puis dans le reste du monde et en arcade cette même année. Le jeu est tardivement réédité à partir de 2004 sur Game Boy Advance au Japon, en Amérique du Nord et en Europe. Il est réédité en version dématérialisée sur les consoles Wii en 2007, 3DS en 2012 et Wii U en 2013, mais aussi sous forme de bonus dans les jeux Metroid Prime et Zero Mission.`,
            illustration: "https://level-1.fr/Principal/wp-content/uploads/2020/05/la_nintendo_classic_mini_nes-4-5-paoqjsdtl6-1024x768.png",
            year: 1986
        }
    ),
    new Videogame(
        {
            title:"Street Fighter II",
            description:`Street Fighter (ストリートファイター, Sutorīto Faitā?) est un jeu vidéo de combat de Capcom sorti sur système d'arcade 68000 Based en 1987. Il sera porté en 1988 sur Amiga, Amstrad CPC, Atari ST, Commodore 64, MS-DOS, PC-Engine, ZX Spectrum, puis en 2006 sur PlayStation 2 et Xbox et PlayStation Portable1,2. Il s'agit du premier épisode de la célèbre série Street Fighter. `,
            illustration:"https://upload.wikimedia.org/wikipedia/commons/7/71/Street_Fighter_old_logo.png",
            year:1991
        }
    ),
    new Videogame(
        {
            title:"Space Invaders",
            description:`Space Invaders スペースインベーダー (Supēsu Inbēdā?) est un jeu vidéo développé par la société japonaise Taito, sorti en 1978 sur borne d'arcade. Il s'agit d'un shoot 'em up fixe. Tomohiro Nishikado conçoit et programme le jeu. Il s'inspire de plusieurs médias populaires de l'époque pour réaliser Space Invaders tels que Breakout ou La Guerre des mondes. Considéré comme le premier archétype du shoot them up, il est aussi l'un des titres les plus influents et célèbres de l'histoire du jeu vidéo. Le principe est de détruire des vagues d'aliens au moyen d'un canon laser en se déplaçant horizontalement sur l'écran. Il fait partie des classiques du jeu vidéo au même titre que Pac-Man et d'autres de ses contemporains. Il contribue à élargir l'industrie du jeu vidéo au niveau mondial. Space Invaders rencontre un énorme succès populaire. Après sa sortie au Japon, il aurait entraîné une pénurie de pièces de 100 yens. En 2007, Taito annonce que le jeu a rapporté 500 millions de dollars de recettes depuis sa parution.`,
            illustration:"https://sm.ign.com/t/ign_fr/news/s/space-inva/space-invaders-movie-reportedly-hires-mortal-kombat-reboot-w_v9j4.1280.jpg",
            year:1978
        }
    )
];

module.exports = videogames;