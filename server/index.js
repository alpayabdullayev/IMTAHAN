import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { ProductRouter } from './src/routes/productRoutes.js'
const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()
const port = 3000



const URL = process.env.CONNECTION_URL.replace("<password>",process.env.PASSWORD)

mongoose.connect(URL).then(()=>console.log("DB CONNCET")).catch((err)=>console.log("DB NNOT CONNECT" +err) )


app.use("/api",ProductRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})