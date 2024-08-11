const constant = require("../constant")

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode);
    console.log("Status Code:", statusCode);
    switch (statusCode) {
        case constant.VALIDATION_ERROR:
            res.json({ title: "VALIDATION ERROR", message: err.message, stackTrace: err.stack });
            break;
        case constant.UNAUTHORIZED:
            res.json({title : "UNAUTHORIZED",message : err.message , stackTrace : err.stack});
            break;
        case constant.FORBIDDEN:
            res.json({title : "FORBIDDEN",message : err.message , stackTrace : err.stack});
            break;
        case constant.NOT_FOUND:
            res.json({title : "NOT_FFOUND",message : err.message , stackTrace : err.stack});
            break;
        case constant.SERVER_ERROR:
            res.json({title : "SERVER_ERROR",message : err.message , stackTrace : err.stack});
            break;
        default:
            res.json({ title: "ERROR", message: err.message, stackTrace: err.stack });
            break;
    }
}

module.exports = errorHandler