const sqlConfig = {
    user: 'TranLeHuy',
    password: 'tranlehuy',
    database: 'WebTruongSinh',
    server: 'localhost',
    trustServerCertificate: true,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 1000
    },
    option: {
        encrypt: true,
        
    }
}

module.exports = sqlConfig;