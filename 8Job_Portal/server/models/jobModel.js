import mongoose from "mongoose";


const jobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, 'Company name is required']
    },
    position: {
        type: String,
        required: [true, 'Job Position is required'],
        maxlength: 100,
    },
    // jobType: {
    //     type: String,
    //     default: "SE",
    //     required: [true, 'Job Type is required'],
    // },
    // status: {
    //     type: String,
    //     required: ["Pending", "Rejected", "Interview"],
    //     default: "Pending"
    // },
    workType: {
        type: String,
        // enum: ["Full-Time", "Part-Time", "Internship", "Contract"],
        default:"Full-Time"
    },
    workLocation: {
        type: String,
        required: [true, 'Location is required'],
        // default: "Delhi",
    }

}, 
    {
        timestamps:true
    }
)


export default mongoose.model('Job', jobSchema)