import express from "express";
import { createJobController, deleteJobController, getJobController, updateJobController } from "../controllers/jobController.js";

const route = express.Router()

route.post('/createJob', createJobController)

route.get('/getJobs', getJobController)

// put : is to update the entire data
// patch : is to update few data
route.patch('/updateJob/:id', updateJobController) // :id as it is dynamic in nature, 

route.delete('/deleteJob/:id', deleteJobController) 

export default route