import express from "express";
import bodyParser from "body-parser";
import serverConfig from "./config/serverConfig";
import apiRouter from "./routes/v1";
import sampleQueueProducer from "./producers/sampleQueueProducer";
import SampleWorker from "./workers/SampleWorker";


import bullBoardAdapter from "./config/bullBoardConfig";


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

    sampleQueueProducer('SampleJob',{
        name: "Dhruv",
        company: " Accenture",
        position : "ASE",
        location: "Gurugram",
    });
});