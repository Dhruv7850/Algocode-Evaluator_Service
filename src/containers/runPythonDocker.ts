//import Docker from "dockerode";

import createContainer from "./containerFactory";
//import { TestCases } from "../types/testCases";
import { PYTHON_IMAGE } from "../utils/constants";
import decodeDockerStream from "./dockerHelper";

async function runPython(code: string){

    
    const rawLogBuffer: Buffer[] = [];

    console.log("intitializing a new python docker container");

    const pythonDockerContainer = await createContainer(PYTHON_IMAGE,['python3','-c', code,'stty -echo']);

    // starting/ booting the corresponding docker container
    await pythonDockerContainer.start();

    console.log("started the docker container");

    const loggerStream = await pythonDockerContainer.logs({
        stdout: true,
        stderr: true,
        timestamps: false,
        follow: true // whether the logs are streamed or returned as a string

    });

    //Attach events on the stream object to start and stop reading
    loggerStream.on('data',(chunk)=>{
        rawLogBuffer.push(chunk);
    });

    loggerStream.on('end', ()=>{
        console.log(rawLogBuffer);
        const completeBuffer = Buffer.concat(rawLogBuffer);
        const decodedStream = decodeDockerStream(completeBuffer);
        console.log(decodedStream);
    });

    return pythonDockerContainer;
};

export default runPython;