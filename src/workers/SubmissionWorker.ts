import { Job, Worker } from "bullmq";
import { IJob } from "../types/bullMqJobDefination";
import { WorkerResposnse } from "../types/bullMqWorkerResponse";
import SubmissionJob from "../jobs/SubmissionJob";
import redisConnection from "../config/redisConfig";

export default function SubmissionWorker(queueName: string){
    console.log("for the redis connection at SubmissionWorker");
     new Worker(
        queueName,
        async(job : Job)=>{
            if(job.name === "SubmissionJob"){
                const sampleJobInstance = new SubmissionJob(job.data);

                sampleJobInstance.handle(job);

                return true;
            }
        },
        {
            connection : redisConnection
        }
    );
}