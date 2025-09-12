import submissionQueue from "../queues/submissionQueue";

export default async function( payload: Record<string,unknown>){
    await submissionQueue.add("Submission Job", payload);
    console.log("I am Submission job");
}