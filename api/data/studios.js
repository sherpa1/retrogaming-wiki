const Studio = require("../models/Studio");

const studios = [
    new Studio(
        {
            name:"Capcom",
            description:`Capcom Co., Ltd. (株式会社カプコン, Kabushiki-gaisha Kapukon?) est une société japonaise, fondée en 1983, qui développe et édite des jeux vidéo1,3 dans le monde entier, par le biais de filiales et succursales situées en Amérique du Nord, en Europe, ainsi qu'en Asie orientale. L'entreprise est connue pour être à l'origine de plusieurs franchises de jeux vidéo célèbres dont les épisodes se sont vendus à plusieurs millions d'exemplaires, notamment pour les séries Monster Hunter, Resident Evil, Street Fighter, ou encore Megaman.`,
            illustration:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Capcom_logo.svg/langfr-1024px-Capcom_logo.svg.png",
            country:"Japon"
        }
    ),
    new Studio(
        {
            name:"Konami",
            description:`Konami Holdings Corporation (コナミホールディングス株式会社, Konami Hōrudingusu Kabushiki-gaisha?) est une société japonaise de développement et d'édition de jeux vidéo, l'une des plus importantes et célèbres du secteur. Son siège social est basé à Tokyo (Japon). Les activités de la compagnie s'étendent au domaine du jouet, de l'animation ainsi qu'à ceux du fitness, de la santé et des machines à sous. Son chiffre d'affaires en 2019 était de 2,1 milliard d'euros2.`,
            illustration:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Konami_4th_logo_2.svg/langfr-1024px-Konami_4th_logo_2.svg.png",
            country:"Japon"
        }
    ),
    new Studio(
        {
            name:"Nintendo R&D1",
            description:`Nintendo Research and Development 1 (R&D1) était la plus ancienne équipe de développement de Nintendo. Elle fut formée lorsque Nintendo se lança dans le marché du jeu vidéo. À l'époque R&D1 était dirigée par le talentueux Gunpei Yokoi. Cette équipe est à l'origine de plusieurs séries importantes chez Nintendo : Metroid, Kid Icarus, Wario Land et WarioWare.`,
            illustration:"https://upload.wikimedia.org/wikipedia/commons/2/29/NintendoLogo.png",
            country:"Japon"
        }
    ),
    new Studio(
        {
            name:"Nazca Corporation",
            description:`Nazca est formé en 1994 par des employés ayant quitté la société Irem à cause du peu d'activité de l'entreprise1. En 1996, SNK rachète la société Nazca. Elle a développé deux jeux vidéo marquants, notamment le premier épisode de la série Metal Slug, puis quelques-unes des suites sous l'égide de SNK et Neo Turf Masters, réputé pour être un des meilleurs jeux de sport édité sur le Neo-Geo MVS. Nazca figure également dans le staff de Metal Slug Anthology, c'est une compilation de jeux vidéo, reprenant quasiment tous les épisodes de la série, notamment le premier épisode développé par Nazca.`,
            illustration:"https://upload.wikimedia.org/wikipedia/fr/e/eb/Nazca_Logo.gif",
            country:"Japon"

        }
    ),
    new Studio(
        {
            name:"Taito",
            description:`Taito Corporation (株式会社タイトー, Kabushikigaisha Taitō?) est une société japonaise de développement et de distribution de jeux vidéo et de matériel de jeux d'arcade, créée en 1953. Aujourd'hui Taito est la propriété exclusive de l'éditeur Square Enix. Taito a son siège dans le bâtiment Shinjuku East Side Square à Shinjuku, à Tokyo. Taito est surtout connue pour la production de jeux d'arcade, tels que Space Invaders et Bubble Bobble. Taito a sorti des jeux d'arcade dans le monde entier, et a aussi importé et distribué des jeux d'arcade américains au Japon. La compagnie possède également plusieurs salles de jeux d'arcade au Japon, appelées stations Taito. Par le passé, la compagnie avait des filiales en Amérique du Nord, au Brésil, en Corée du Sud et en Italie. `,
            illustration:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Taito_logo.svg/langfr-1024px-Taito_logo.svg.png",
            country:"Japon"
        }
    )
];

module.exports = studios;
