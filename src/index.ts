import express from "express";
import bodyParser from "body-parser";
import serverConfig from "./config/serverConfig";
import apiRouter from "./routes/v1";
import sampleQueueProducer from "./producers/sampleQueueProducer";
import SampleWorker from "./workers/SampleWorker";
import submissionQueueProducer from "./producers/submissionQueueProducer";

import bullBoardAdapter from "./config/bullBoardConfig";
import runPython from "./containers/runPythonDocker";
import SubmissionWorker from "./workers/SubmissionWorker";
import { submission_queue } from "./utils/constants";


const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use('/api', apiRouter);
app.use('/ui',bullBoardAdapter.getRouter());


app.listen(serverConfig.PORT,()=>{
   
    console.log(`Server started at ${serverConfig.PORT}`);
    console.log(`Bull board Dashboard is running at ${serverConfig.PORT}/ui`);
    SampleWorker('SampleQueue');
    SubmissionWorker(submission_queue);
    //submissionQueueProducer({"1234"});

    const code = `print("hello")`;
    runPython(code);
});