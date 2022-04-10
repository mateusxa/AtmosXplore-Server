const mysql = require('mysql')
const express = require('express')

require('dotenv').config({});
const PORT = process.env.PORT;

app = express()
const bodyparser = require('body-parser')

app.use(bodyparser.json())


var mysqlConnection = mysql.createConnection({
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


// Get all flys
app.get('/flys', (req, res)=>{
    mysqlConnection.query('SELECT * FROM Flys', 
    (err, rows, fields)=>{
        if(!err){
            res.send(rows)
        } else {
            console.log(err)
        }
    })
})

// Get specific fly
app.get('/flys/:fly_id', (req, res)=>{
    mysqlConnection.query('SELECT * FROM Flys WHERE Fly = ?', [req.params.fly_id], 
    (err, rows, fields)=>{
        if(!err){
            res.send(rows)
        } else {
            console.log(err)
        }
    })
})

// Delete specific fly
app.delete('/flys/:fly_id', (req, res)=>{
    mysqlConnection.query('DELETE * FROM Flys WHERE Fly = ?', [req.params.fly_id], 
    (err, rows, fields)=>{
        if(!err){
            res.send('Deleted successfully')
        } else {
            console.log(err)
        }
    })
})

// Deploy data
app.post('/flys/deploy', (req, res) => {
    
    let flys = req.body

    flys.map(element => {

        let data = [
            element['Fly'],
            element['Temperature'],
            element['Humidity'],
            element['Pressure'],
            element['Height'],
            element['Luminosity'],
            element['Date']
        ]

        mysqlConnection.query('INSERT INTO Flys (Fly, Temperature, Humidity, Pressure, Height, Luminosity, Date) VALUES (?, ?, ?, ?, ?, ?, ?) ',
        data,
        (err) => {
            if(err) res.json(err)
        })
    })

    res.send('ok')
}) 

app.listen(PORT, () => {
    console.log(`Express server running on port: ${PORT}`)
})