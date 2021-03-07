require('dotenv').config();
var mysql = require('mysql2');
var migration = require('mysql-migrations');
var connection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB_NAME,
});

migration.init(connection, __dirname + '/migrations');
