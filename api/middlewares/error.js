class APIError {
    constructor(code = 500, message = "Error", href = "", method = "GET", status = "Error") {
        this.code = code;
        this.status = status;
        this.message = message;
        this.href = `${process.env.HOST}${href}`;
        this.method = method;
    }
}

const error_handler = async (err, req, res, next) => {

    res.status(err).location(req.path).json(err);

};

module.exports = { error_handler, APIError };