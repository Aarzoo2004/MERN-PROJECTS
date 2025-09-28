require('dotenv').config({path: '../.env'});
const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DB_SERVER,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to DB:', err);
    } else {
        console.log('Connected to MySQL Database');
    }
});

module.exports = db;
