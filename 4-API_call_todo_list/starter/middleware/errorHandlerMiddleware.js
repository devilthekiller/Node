const errorHandlerMiddleware = (err, req, res, next) => {
    return res.status(500).json({
        msg: "something went wrong!!!",
        err
    })
}
module.exports = errorHandlerMiddleware