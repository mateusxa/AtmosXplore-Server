import mongoose from "mongoose"
const { Schema } = mongoose

const flysSchema = new Schema({

    Fly:  {
        type: Number,
        default: 0
    },
    Temperature:  {
        type: Number,
        default: 0
    },
    Humidity:  {
        type: Number,
        default: 0
    },
    Pressure:  {
        type: Number,
        default: 0
    },
    Height:  {
        type: Number,
        default: 0
    },
    Luminosity:  {
        type: Number,
        default: 0
    },
    Duration:  {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
})

const Flys = mongoose.model('Flys', flysSchema)

export default Flys