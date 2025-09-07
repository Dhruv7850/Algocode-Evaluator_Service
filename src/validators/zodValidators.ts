import { z } from "zod";
import { CreateSubmissionDto } from "../dtos/CreateSubmissionDto";
import { Request,Response,NextFunction } from "express";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validator = (schema: z.ZodType<any>)=>(req: Request, res: Response, next : NextFunction)=>{
    try{
        schema.parse({
            ...req.body
        });
        next();
    }catch(error){
        console.log(error);
        return res.status(400).json({
            success: "false",
            message: "Invalid request params recieved",
            data: {},
            error:error
        });
    }
};