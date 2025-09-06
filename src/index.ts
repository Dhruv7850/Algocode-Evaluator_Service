import express from "express";

import serverConfig from "./config/serverConfig";
import apiRouter from "./routes/v1";
import sampleQueueProducer from "./producers/sampleQueueProducer";
import SampleWorker from "./workers/SampleWorker";

import sampleQueue from "./queues/sampleQueue";
import serverAdapter from "./config/bullBoardConfig";
import bullBoardAdapter from "./config/bullBoardConfig";


const app = express();

app.use('/api', apiRouter);
app.use('/ui',bullBoardAdapter.getRouter());


// Use middleware to mount the Bull Board UI




app.listen(serverConfig.PORT,()=>{
   
    console.log(`Server started at ${serverConfig.PORT}`);
    console.log(`Bull board Dashboard is running at ${serverConfig.PORT}/ui`);
    SampleWorker('SampleQueue');

    sampleQueueProducer('SampleJob',{
        name: "Dhruv",
        company: " Accenture",
        position : "ASE",
        location: "Gurugram",
    });
});