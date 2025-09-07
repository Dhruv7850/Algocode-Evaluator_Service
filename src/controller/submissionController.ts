import {Request} from "express";
import { Response } from "express";
import { CreateSubmissionDto } from "../dtos/CreateSubmissionDto";

export const addSubmission = async (
  req: Request,res: Response) => {
  const submissionDto : CreateSubmissionDto = req.body; // now typed correctly
  console.log("hello", submissionDto);

  return res.status(201).json({
    success: true,
    message: "Successfully collected the submission",
    data: submissionDto,
    error: {},
  });
};
