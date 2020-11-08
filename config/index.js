require('dotenv').config();
module.exports = { 
    secret: process.env.SECRET || '123456',
    dbUrl: process.env.DB_URL
}
