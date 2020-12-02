class Category {

    constructor(args) {
        this.name = args.name;
        this.description = args.description || "unknow";
    }

}

module.exports = Category;