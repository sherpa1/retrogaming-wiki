const Category = require("../models/Category");

const categories = [
    new Category(
        {
            name: "Combat",
            description: `Le jeu de combat (ou fighting game), parfois appelé abusivement en France VS fighting (pour versus fighting)1 ou plus familièrement Jeu de baston2, est un genre de jeu vidéo opposant un nombre limité de personnages (deux le plus souvent).            Il se distingue des beat them all (ou beat them up dans les pays anglo-saxons), qui proposent de combattre de longues séries d'opposants et qui sont presque uniquement basés sur l'attaque. La Neo-Geo AES est une console qui a connu énormément de jeux de combat. `
        }
    ),
    new Category(
        {
            name: "Beat them all / Hack 'n' Slash",
            description: `Le beat them all ou BTA (faux-anglicisme dérivé du terme anglais beat 'em up signifiant « frappez-les »), ou jeu de combat à progression1, souvent abrégé en beat'em all et parfois appelé scrolling fighter, est un genre de jeu vidéo opposant un ou deux joueurs à un nombre important d'ennemis. À l'origine, ces jeux ont généralement lieu en milieu urbain et sont axés sur les thèmes de l'auto-justice et de la lutte contre la criminalité. Plus tard, le genre utilise des thèmes historiques ou de fantasy. `
        }
    ),
    new Category(
        {
            name: "RPG",
            description: `Un jeu vidéo de rôle, à l'instar de son homologue papier, est un jeu où un personnage agit sur son univers avec ses propres caractéristiques et non celles du joueur. Le rôle du joueur est d'incarner le personnage avec les objectifs de ce dernier en agissant sur les divers éléments, au travers d'interactions comme les dialogues, à la manière dont il pense que son avatar vidéoludique doit se comporter par rapport aux éléments définis pour lui. S'il s'agissait seulement d'incarner un personnage dans un environnement, tous les jeux vidéo seraient des jeux de rôles. `
        }
    ),
    new Category(
        {
            name: "GTA Like",
            description: `Un GTA-like (« comme GTA » en anglais), ou FRAAG pour Free Roaming Action Adventure Game1, est un genre de jeu vidéo, sous-genre du jeu d'action-aventure qui se rapproche par de nombreux aspects de la série des Grand Theft Auto. C'est une vulgarisation d'un jeu de tir en monde ouvert. GTA étant cependant une marque déposée, aucun jeu ne se qualifie officiellement de GTA-like. `
        }
    ),
    new Category(
        {
            name: "Roguelike",
            description: `Le roguelike (ou rogue-like) est un sous-genre de jeu vidéo de rôle dans lequel le joueur explore un donjon infesté de monstres qu’il doit combattre pour gagner de l’expérience et des trésors. Le genre se caractérise notamment par la génération procédurale de ses niveaux, son système de mort permanente, son gameplay au tour par tour et la représentation des éléments qui le composent par des symboles ASCII sur une carte constituée de tuiles. La plupart des roguelike se déroulent dans un univers de fantasy qui reflète l’influence du jeu de rôle sur table Donjons et Dragons sur le genre. `
        }
    ),
    new Category(
        {
            name: "Stratégie",
            description: `Un jeu de stratégie peut être un jeu de société ou un jeu vidéo. Le but est de réaliser un objectif connu : augmenter sa domination spatiale, combattre un ou plusieurs ennemis sur un terrain de jeu, faire prospérer une entité… L'accent n'est pas mis sur l'adresse du joueur mais sur la planification de l'action (tactique ou stratégique). `
        }
    ),
    new Category(
        {
            name: "Plate-formes",
            description: `Un jeu de plates-formes (ou platformer) est un genre de jeu vidéo, sous-genre du jeu d'action. Dans les jeux de plates-formes, le joueur contrôle un avatar qui doit sauter sur des plates-formes suspendues dans les airs et éviter des obstacles. Les environnements requièrent de devoir sauter ou grimper pour pouvoir être traversés. Le joueur a un contrôle sur la hauteur et la distance des sauts. L'élément le plus commun à ce genre de jeux est de proposer un bouton ou une touche dédié au saut (ou un contrôle alternatif de type tactile par exemple). D'autres manœuvres acrobatiques peuvent venir modifier le gameplay comme l'utilisation d'un grappin ou de trampolines par exemple. Les jeux de plates-formes sont apparus au début des années 1980, tout d'abord en 2D, intégrant souvent des systèmes d'échelles à grimper. Le genre a connu un nouvel essor dans les années 1990 avec l'apparition des premiers jeux de plates-formes en 3D. Souvent associé aux consoles, le genre se déploie sur la plupart des plates-formes de jeu. `
        }
    ),
    new Category(
        {
            name: "FPS (First Personal Shooter)",
            description: `Le jeu de tir à la première personne (en anglais FPS pour First-person shooter) ou en vue subjective, aussi appelé Doom-like est un genre de jeu vidéo de tir fondé sur des combats en vision subjective (« à la première personne »), c'est-à-dire que le joueur voit l'action à travers les yeux du protagoniste.
                C'est un sous-genre du jeu d'action qui partage des traits communs avec les autres genres de jeux de tirs, tels que le jeu de tir à la troisième personne ou le jeu de tir au pistolet. Depuis la création du genre, le jeu de tir à la première personne a été marqué par la naissance et l'évolution des graphismes en trois dimensions grâce aux progrès du matériel informatique, ainsi que l'évolution du jeu multijoueur et du sport électronique. `
        }
    ),
    new Category(
        {
            name: "Puzzle",
            description: `Le jeu de puzzle ou puzzle game est un genre de jeu vidéo qui, à la manière des puzzles, consiste en la manipulation d'objets. En anglais, la notion de puzzle game englobe l'ensemble des jeux vidéo de réflexion.
            Ils font appel chez les joueurs a des aptitudes comme la logique, la reconnaissance de formes ou encore l'habileté de construction visuo-spatiale. `
        }
    ),
    new Category(
        {
            name: "Survival Horror",
            description: `Le survival horror est un genre de jeu vidéo, sous-genre du jeu d'action-aventure, inspiré des fictions d'horreur. Bien que des aspects de combats puissent être présents dans ce type de jeu, le gameplay fait généralement en sorte que le joueur ne se sente pas aussi puissant qu'il ne le serait typiquement dans un jeu d'action, et ce en limitant par exemple la quantité de munitions, d'énergie ou de vitesse. Le joueur doit parfois chercher certains objets pour avoir accès à un passage vers une nouvelle zone, et résoudre des énigmes à certains moments. Les jeux utilisent des thèmes d'horreur, et le joueur est souvent confronté à des environnements obscurs et à des ennemis qui peuvent surgir de nulle part. `
        }
    ),
    new Category(
        {
            name: "MMORPG",
            description: `Un jeu de rôle en ligne massivement multijoueur1,2 (en anglais, massively multiplayer online role-playing game, MMORPGa, parfois JDRMM en français3) est un genre de jeux vidéo4 associant le jeu de rôle et le jeu en ligne massivement multijoueur, permettant à un grand nombre de personnes d'interagir simultanément dans un monde virtuel. Ce type de jeu, par la persistance de l'environnement et l'implication qu'il demande, crée des rapports sociaux entre joueurs particulièrement forts, avec l'apparition de phénomènes inédits, comme les communautés virtuelles de joueurs et les risques de dépendance ludique.`
        }
    ),
    new Category(
        {
            name: "MMORPG",
            description: ``
        }
    ),
    new Category(
        {
            name: "Shoot 'em up",
            description: `Un shoot 'em up (aussi écrit shoot them up ou contracté en shmup ; littéralement « abattez-les tous ») est un genre de jeu vidéo dérivé du jeu d'action dans lequel le joueur dirige un véhicule ou un personnage devant détruire un grand nombre d'ennemis à l'aide d'armes de plus en plus puissantes, au fur et à mesure des niveaux, tout en esquivant les projectiles adverses pour rester en vie. Le style de jeu des shoot 'em up varie du mignon au sérieux, de la fantasy et de la science-fiction aux faits historiques1. `
        }
    ),
    new Category(
        {
            name: "Metroidvania",
            description: `Le Metroidvania est l'addition de plusieurs sous-genres de jeu vidéo d'action-aventure et de plate-forme qui empruntent fortement au système de jeu des séries Metroid et Castlevania, plus précisément à partir du jeu Castlevania: Symphony of the Night et ses suites. Le terme est un mot-valise des deux noms de la série. Ce genre de jeu vidéo est rarement appelé « Castletroid »1, l'inverse du terme le plus répandu, et « Igavania » par Koji Igarashi (le concepteur principal de Symphony of the Night), pour éviter de sous-entendre une implication de Nintendo dans ses jeux2. `
        }
    ),
];

module.exports = categories;