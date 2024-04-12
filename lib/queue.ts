import { Queue, Worker, Job } from "bullmq";
import IORedis from "ioredis";

const apiurl = process.env.KV_REST_API_URL!;
console.log(apiurl);
const connection = new IORedis(apiurl, {
  maxRetriesPerRequest: null,
});

export const myQueue = new Queue("my-queue", { connection });

export const worker = new Worker(
  "my-queue",
  async (job: Job) => {
    console.log("Processing job", job.id, job.data);
    // Process your job here
    //this is a test
  },
  { connection }
);
