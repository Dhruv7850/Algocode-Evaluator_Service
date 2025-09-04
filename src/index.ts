import serverConfig from "./config/serverConfig";
import express from "express";


const app = express();

app.listen(serverConfig.PORT,()=>{
   
    console.log(`Server started at ${serverConfig.PORT}`);
});