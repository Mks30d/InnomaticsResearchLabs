import express from "express";
import { registerController, loginController } from "../controllers/authController.js";
// import { loginController } from "../controllers/loginController.js";

const route = express.Router()

// post is used to send the data from frontend to backend
// route.post('/register', authController)
route.post('/register', registerController)

route.post('/login', loginController)

export default route