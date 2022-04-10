import express from 'express'
import bodyparser from 'body-parser'

import flys from './routes/flys.js'

import dotenv from 'dotenv'
dotenv.config({})

const PORT = process.env.PORT;

const app = express()

app.use(bodyparser.json())

app.use('/flys', flys)

app.listen(PORT, () => {
    console.log(`Express server running on port: ${PORT}`)
})