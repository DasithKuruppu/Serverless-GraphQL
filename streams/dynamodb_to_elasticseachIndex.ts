import { pushStream } from "dynamodb-stream-elasticsearch";

export async function indexElasticSearch(event, ES_ENDPOINT: string, INDEX?: string, TYPE?: string) {
  try {
    const result = await pushStream({ event, endpoint: ES_ENDPOINT });
    console.log("process result", result);
  } catch (err) {
    throw err;
  }
}
