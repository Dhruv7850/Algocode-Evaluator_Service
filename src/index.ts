import express from "express";

import serverConfig from "./config/serverConfig";
import apiRouter from "./routes/v1";
import sampleQueueProducer from "./producers/sampleQueueProducer";
import SampleWorker from "./workers/SampleWorker";


const app = express();

app.use('/api', apiRouter);

app.listen(serverConfig.PORT,()=>{
   
    console.log(`Server started at ${serverConfig.PORT}`);

    SampleWorker('SampleQueue');

    sampleQueueProducer('SampleJob',{
        name: "Dhruv",
        company: " Accenture",
        position : "ASE",
        location: "Gurugram",
    });
});