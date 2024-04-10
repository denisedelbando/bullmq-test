import { Queue, Worker, Job } from "bullmq";
import IORedis from "ioredis";

const connection = new IORedis();

export const myQueue = new Queue("my-queue", { connection });

export const worker = new Worker(
  "my-queue",
  async (job: Job) => {
    console.log("Processing job", job.id, job.data);
    // Process your job here
  },
  { connection }
);
