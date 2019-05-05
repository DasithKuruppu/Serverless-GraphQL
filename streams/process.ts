import { esClient } from "../elasticSearch/elasticSearchConnect";
import { getESMappings } from "../elasticSearch/mappings";
import { extractRecordsFromDynamodbEvent, actions } from "./utils";
import { config } from "../elasticSearch/config";

export async function indexElasticSearch(event) {
  try {
    // check if indices already exist
    const exists = await esClient.indices.exists({ index: config.INDEX });
    if (!exists) {
      // if not create new index and mappings for it
      await esClient.indices.create(getESMappings(config.INDEX));
    }
    // extract data

    const dataArray = extractRecordsFromDynamodbEvent(event)[actions.INSERT] || []; // default to empty

    await Promise.all(
      dataArray.map(async (data) => {
        await esClient.index({
          id: data.id,
          index: config.INDEX,
          body: data,
        });
      }),
    );
  } catch (err) {
    throw err;
  }
}
