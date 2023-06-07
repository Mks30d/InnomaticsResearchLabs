import express from "express";
import testing from "../controllers/controller.js";

const route = express.Router()

// get is used to send the data from backend to frontend 

route.get('/', testing)

// route.get('/', (request, response) => {
//     response.json( { message : "helloo"})
// })

export default route