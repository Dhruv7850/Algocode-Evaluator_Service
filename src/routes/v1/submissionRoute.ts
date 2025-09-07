import express from "express";
import { addSubmission } from "../../controller/submissionController";
import { validator } from "../../validators/zodValidators";
import { createSubmissionZodSchema } from "../../dtos/CreateSubmissionDto";


const submissionRouter = express.Router();

submissionRouter.post('/',validator(createSubmissionZodSchema), addSubmission);

export default submissionRouter;