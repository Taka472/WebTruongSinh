const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, //5 minutes
    max: 5, //limit client to 10 requests per 5 minutes
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    handler: function(req, res) {
        res.status(429).send({
            message: 'Too many request',
            status: 500,
        })
    }
})

module.exports = limiter;