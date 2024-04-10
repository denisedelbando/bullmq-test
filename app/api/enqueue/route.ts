import { NextRequest, NextResponse } from "next/server";
import { myQueue } from "../../../lib/queue";
export async function POST(request: NextRequest, { params }: any) {
  const job = await myQueue.add("my-job", {
    date: new Date(),
  });
  return NextResponse.json({ jobId: job.id });
}
