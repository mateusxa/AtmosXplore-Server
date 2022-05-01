//import { mysqlConnection } from './ignore/mysql_config.js';
import express from 'express'
import bodyparser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import flys from './routes/flys.js'

import dotenv from 'dotenv'
dotenv.config({})

const app = express()

app.use(bodyparser.json())
app.use(cors())


app.use('/flys', flys)

const CONNECTION_URL = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PSWD}@atmosxploredb.wskfp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology : true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message))