import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const registerController = async (request, response, next) => {

    // console.log(request);
    // console.log("above try");
    try {
        // console.log("in try");

        // console.log(request.body.name);
        // console.log(request.body.email);
        // console.log(request.body.password);

        const { name, email, password } = request.body
        // console.log("below request.body");

        //validate
        if (!name) {
            next("Name Required")
            // return response.status(400).send({
            //     success: false,
            //     message: "Name Required"
            // })

        }
        if (!email) {
            next("Email Required")
            // return response.status(400).send({
            //     success: false,
            //     message: "Email Required"
            // })
        }
        if (!password) {
            next("Password Required")
            // return response.status(400).send({  // 400: API request is not complete
            //     success: false,
            //     message: "Password Required"
            // })
        }

        //check in the stored data
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return response.status(200).send({ // 200: request is done properly
                success: true,  // true b/c API work fine
                message: "Existing email"
            })
        }

        //store the data
        const newUser = {
            name: name,
            email: email,
            password: bcrypt.hashSync(password)
        }
        console.log(newUser);

        const user = await userModel.create(newUser)

        response.status(200).send({
            success: true,
            message: "Successfully registered",
            user
        })

    }

    catch (error) {
        next("Error in authController")
        // response.status(400).send({
        //     message: "Error in authController",
        //     success: false,
        //     error
        // })
        console.log(error);
    }

}

// =================================================================

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