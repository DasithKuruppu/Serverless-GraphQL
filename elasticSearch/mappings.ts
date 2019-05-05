import { RequestParams } from "@elastic/elasticsearch";

export function getESMappings(index: string): RequestParams.IndicesCreate {
  return {
    index,
    body: {
      properties: {
        id: { type: "text" },
        description: { type: "text" },
        name: { type: "text" },
        addedAt: { type: "number" },
      },
    },
  };
}
