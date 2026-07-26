import dns from "node:dns"
dns.setServers(["8.8.8.8","1.1.1.1"])
import express from 'express'
import cors from 'cors'
import dotenv from "dotenv";
dotenv.config();
import mongoose from 'mongoose'
import AuthRoutes from "./Routes/AuthRoutes.js"
const app= express()

app.use(cors())

app.use(express.json())

const connectDB= async()=>{

    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGODB CONNECTED ")
    }catch(err){
        // console.log("error while connecting to DB", err.message)
        console.log(err)
    }
}

connectDB();

app.use('/api/auth',AuthRoutes)

const PORT= process.env.PORT

app.listen(PORT,()=>{
    console.log(`server listening at port number: ${PORT}`)
})