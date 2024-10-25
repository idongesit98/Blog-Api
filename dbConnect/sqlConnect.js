const mySql = require('mysql2/promise');
require('dotenv').config();

const dbConnect = async () => {
    try {
        const connection = await mySql.createConnection({
            host:process.env.MYSQL_HOST,
            user:process.env.MYSQL_ROOT,
            password:process.env.MYSQL_PASSWORD,
            database:process.env.MYSQL_DATABASE
        });
        console.log("Connected to MySql Database!!!");
        return connection;    
    } catch (error) {
        console.error("Error connecting to MySQL:", error)
        throw error;
    }
}


module.exports = dbConnect;