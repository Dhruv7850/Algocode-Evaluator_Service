import { createBullBoard } from "@bull-board/api";
import { ExpressAdapter } from "@bull-board/express";
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';

import submissionQueue from "../queues/submissionQueue";


const serverAdapter = new ExpressAdapter();

// setting the base path where the UI will show up
serverAdapter.setBasePath('/ui');

createBullBoard({
    queues : [new BullMQAdapter(submissionQueue)],
    serverAdapter,
});

export default serverAdapter;