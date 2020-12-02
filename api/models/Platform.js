class Platform {

    constructor(args) {
        this.name = args.name;
        this.illustration = args.illustration || "unknow";
        this.country = args.country || "unknow";
    }

}

module.exports = Platform;