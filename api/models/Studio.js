class Studio {

    constructor(args) {
        this.name = args.name;
        this.description = args.description || "unknow";
        this.country = args.country || "unknow";
        this.illustration = args.illustration || "unknow";
    }

}

module.exports = Studio;