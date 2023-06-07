import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";

// Not in use, this code is combined in authController.js
export const loginController = async (request, response, next) => {
    try {
        const { email, password } = request.body

        if (!email || !password) {
            // response.status(400).send({
            //     success: false,
            //     message: "Invalid credentials"
            // })
            next("Invalid credentials")
        }

        const user = await userModel.findOne({ email })
        console.log(user);

        if (!user) {
            // response.status(400).send({ 
            //     success: false,
            //     message: "Invalid email"
            // })
            next("Incorrect email")
        }

        const isPassword = bcrypt.compareSync(password, user.password)
        if (!isPassword) {
            // next("Invalid Password")

            response.status(400).json({
                success: false,
                message: "Incorrect Password",
            })
        }


        response.status(200).json({
            success: true,
            message: "Login Successfully",
            user
        })
    } catch (error) {

    }
}