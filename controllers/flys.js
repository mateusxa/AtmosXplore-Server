import { mysqlConnection } from '../mysql_config.js';

export const getFlys = (req, res)=>{
    mysqlConnection.query('SELECT * FROM Flys', 
    (err, rows, fields)=>{
        if(!err){
            res.send(rows)
        } else {
            console.log(err)
        }
    })
}

export const getSingleFly = (req, res) => {
    mysqlConnection.query('SELECT * FROM Flys WHERE Fly = ?', [req.params.fly_id], 
    (err, rows, fields)=>{
        if(!err){
            res.send(rows)
        } else {
            console.log(err)
        }
    })
}

export const deleteSingleFly = (req, res) => {
    mysqlConnection.query('DELETE * FROM Flys WHERE Fly = ?', [req.params.fly_id], 
    (err, rows, fields)=>{
        if(!err){
            res.send('Deleted successfully')
        } else {
            console.log(err)
        }
    })
}

export const createFly = async (req, res) => {
    
    let flys = req.body

    flys.map(element => {

        let data = [
            element['Fly'],
            element['Temperature'],
            element['Humidity'],
            element['Pressure'],
            element['Height'],
            element['Luminosity'],
            element['Duration']
        ]

        mysqlConnection.query('INSERT INTO Flys (Fly, Temperature, Humidity, Pressure, Height, Luminosity, Duration) VALUES (?, ?, ?, ?, ?, ?, ?) ',
        data,
        (err) => {
            if(err) res.json(err)
        })
    })

    res.send('ok')
}

export const getFlysNumber = (req, res) => {
    mysqlConnection.query('SELECT Fly FROM Flys GROUP BY Fly',
    (err, rows, fields)=>{
        if(!err){
            res.send(rows)
        } else {
            console.log(err)
        }
    })
}