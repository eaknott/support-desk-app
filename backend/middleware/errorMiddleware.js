const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.mode_env === 'production' ? null : err.stack
    })
} 

module.exports = { errorHandler }