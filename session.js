module.exports.sessionConfig = {
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    },
    name: 'mrcoffees_id',
    resave: false,
    saveUnintialized: false,
    secret: process.env.SESS_SECRET
    
}

module.exports = sessioniConfig