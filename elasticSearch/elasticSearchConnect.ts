import { Client } from "@elastic/elasticsearch";

export const esClient = new Client({ node: `https://${process.env.ELASTICSEARCH_URL}` });
