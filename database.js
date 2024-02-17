const sql = require('mssql');
require('dotenv').config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    server: process.env.DB_SERVER,
    port: parseInt(process.env.DB_PORT),
};

// Establish a connection to the database
async function connectToDatabase() {
    try {
        await sql.connect(config);
        console.log('Connected to Azure SQL Database');
    } catch (err) {
        console.error('Failed to connect to Azure SQL Database:', err);
    }
}

// Execute an SQL query (wrapper to prevent exposing the connection object and to log errors to the console)
async function query(sqlQuery) {
    try {
        const result = await sql.query(sqlQuery);
        return result;
    } catch (err) {
        console.error(`Error occurred while executing SQL query ${sqlQuery}: ${err}`);
    }
}

module.exports = {
    connectToDatabase,
    query,
}