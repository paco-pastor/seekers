import mysql from 'mysql2/promise';

const database = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'seekers',
    password: 'root'
});

export default database;