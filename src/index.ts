import express from "express";

import serverConfig from "./config/serverConfig";
import apiRouter from "./routes/v1";


const app = express();

app.use('/api', apiRouter);

app.listen(serverConfig.PORT,()=>{
   
    console.log(`Server started at ${serverConfig.PORT}`);
});