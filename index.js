import { mysqlConnection } from './mysql_config.js';
import express from 'express'
import bodyparser from 'body-parser'

import flys from './routes/flys.js'

import dotenv from 'dotenv'
dotenv.config({})

const PORT = process.env.PORT;

const app = express()

app.use(bodyparser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/flys', flys)

app.get('/teste/number', (req, res) => {
    mysqlConnection.query('SELECT Fly FROM Flys GROUP BY Fly',
    (err, rows, fields)=>{
        if(!err){
            res.send(rows)
        } else {
            console.log(err)
        }
    })
})

app.listen(PORT, () => {
    console.log(`Express server running on port: ${PORT}`)
})