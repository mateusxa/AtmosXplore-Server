//import { mysqlConnection } from '../ignore/mysql_config.js';
import Flys from '../models/Flys.js'

export const getFlys = async (req, res) => {
    try {
        const allFlys =  await Flys.find()

        res.status(200).json(allFlys)
    } catch (error){
        res.status(404).json({ message: error.message })
    }
}

export const getSingleFly = async (req, res) => {   
    try {
        const allFlys =  await Flys.find({ Fly: req.params.fly_id })

        res.status(200).json(allFlys)
    } catch (error){
        res.status(404).json({ message: error.message })
    }
}

export const createFly = (req, res) => {
    
    let flys = req.body

    flys.map(async element => {
        var FlysDetails = new Flys({
            Fly: element['Fly'],
            Temperature: element['Temperature'],
            Humidity: element['Humidity'],
            Pressure: element['Pressure'],
            Height: element['Height'],
            Luminosity: element['Luminosity'],
            Duration: element['Duration']
        })
        
        try {
            await FlysDetails.save((err, doc) => {
                if (err) console.log('Error during record insertion : ' + err);
            })
        } catch (error){
            res.status(404).json({ message: error.message })
        }
    })

    res.status(200).json(`Added ${flys.length} data from flight ${flys[0]['Fly']}`)
}


export const deleteFly = async (req, res) => {
    try {
        await Flys.deleteMany({ Fly: req.params.fly_id })

        res.status(200).json(`Deleted all data from flight ${req.params.fly_id }`)
    } catch (error){
        res.status(404).json({ message: error.message })
    }
}


export const getFlysNumber = async(req, res) => {
    try {
        const allFlys =  await Flys.aggregate([
            {
              "$group": {
                "_id": "$Fly" 

              }
            }
          ])

        res.status(200).json(allFlys)
    } catch (error){
        res.status(404).json({ message: error.message })
    }
}

