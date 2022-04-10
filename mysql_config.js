import mysql from 'mysql'
import dotenv from 'dotenv'
dotenv.config({})

export const mysqlConnection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PSWD,
    database: process.env.MYSQL_DATABASE
})

mysqlConnection.connect((err) => {
    if(!err){
        console.log('DB connection succede.')
    } else {
        console.log('DB connection failed' + JSON.stringify(err, undefined, 2))
    }
})
