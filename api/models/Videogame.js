class Videogame {

    constructor(args) {
        this.title = args.title;
        this.description = args.description || "unknow";
        this.illustration = args.illustration || "unknow";
        this.year = args.year || "unknow";
        this.id= args.id || 0;
    }

}

module.exports = Videogame;