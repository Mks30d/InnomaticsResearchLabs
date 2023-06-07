// const express = require('express')

import express from "express";
import dotenv from "dotenv";
import mongoose, { connect } from 'mongoose';
import connectDB from "./database/conn.js";
// import route from "./route/route.js"; // for testing purpose
import route from "./route/authRoute.js";
import cors from "cors";
import errorMiddleware from "./middleware/errorMiddleware.js";
import jobRoute from "./route/jobRoute.js";

const app = express()

dotenv.config()

//middleware
app.use(express.json())
app.use(cors())
app.use(route)  // http://localhost:5000/register
// app.use("/api", route)  //http://localhost:5000/api/register
app.use(jobRoute) 

app.use(errorMiddleware)


//mongoDB connection
connectDB()

// app.get('/', (request, response) => {
//     response.json( { message : "helloo"})
// })

//port
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Starting port ${PORT}`);
})

//------------another way of connecting with mongoDB-------------
// connectDB.then(() => {
//     app.listen(PORT, ()=>{
//         console.log(`Starting port ${PORT}`);
//     }) 
// }).catch(error => {
//     throw new error
// })


// mongoose.connect(process.env.MONGODB_URL).then(() =>{
//     console.log("Successfully Connected to MongoDB");
// })