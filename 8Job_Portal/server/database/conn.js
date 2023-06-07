// mongoose.connect(process.env.MONGODB_URL).then(() =>{
//     console.log("Successfully Connected to MongoDB");
// })

import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn= await mongoose.connect(process.env.MONGODB_URL)
            console.log("Successfully Connected to MongoDB");
    } catch (error) {
        console.log(`MongoDB Error: ${error}`);
    }
}

export default connectDB




//  async function connectDB() {
//     try {
//         const conn= await mongoose.connect(process.env.MONGODB_URL)
//             console.log("Successfully Connected to MongoDB");
//     } catch (error) {
//         console.log(`MongoDB Error: ${error}`);
//     }

// }