import jobModel from "../models/jobModel.js";

//POST api to create job
export const createJobController = async (request, response, next) => {
    // console.log(response);
    try {
        const { company, position, workType, workLocation } = request.body

        if (!company || !position || !workType || !workLocation) {
            next("Empty company or position name") //go to errorMiddleware.js > string is passed as error in errorMiddleware.js
        }
        // if (jobType === "Teaching") {
        //     next("Teaching job is not allowed")
        // }
        const newJob = {
            company,
            position,
            workType,
            workLocation
        }

        const job = await jobModel.create(newJob)
        response.status(200).json({
            success: true,
            message: "Job Added"
        })
    }
    catch (error) {
        next("Error in createJobController")
    }

}

//POST api to get job
export const getJobController = async (request, response, next) => {

    try {
        const jobs = await jobModel.find({});

        response.status(200).json({
            jobs,
            totalJob: jobs.length
        })
    } catch (error) {
        next("Error in getJobController")
    }
}

// to update job
export const updateJobController = async (request, response, next) => {
    try {
        const { id } = request.params
        // const { workLocation, position } = request.body
        const { company, position, workType, workLocation } = request.body

        if (!company || !workLocation || !position) {
            next("Please provide all fields!!!!!")
        }

        const job = await jobModel.findOne({ _id: id })
        if (!job) {
            next(`No job found with this id ${id}`)
        }

        const updateJob = await jobModel.findOneAndUpdate({ _id: id }, {
            // workLocation: workLocation,
            // position: position,
            company,
            position,
            workType,
            workLocation
        })

        response.status(200).json({
            "Message": "success",
            updateJob
        })

    } catch (error) {
        next("Error in updateJobController")
    }
}

export const deleteJobController = async (request, response, next) => {
    try {
        const { id } = request.params
        const job = await jobModel.findOne({ _id: id })

        if (!job) {
            next("No job found")
        }

        await job.deleteOne({ _id: id });

        response.status(200).json({
            message: "Job deleted"
        })

    } catch (error) {
        next("Error in deleteJobController")
    }
}