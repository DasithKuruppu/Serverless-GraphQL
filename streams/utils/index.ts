
function transformData(newImage) {
  const transformedObject = {};
  Object.keys(newImage).forEach((key: string) => {
    const dataType = Object.keys(newImage[key])[0];
    transformedObject[key] = newImage[key][dataType];
  });
  return transformedObject;
}

export function extractRecordsFromDynamodbEvent(event) {
  if (!event.Records || !Array.isArray(event.Records) || event.Records.length <= 0) {
    return null;
  }

  return event.Records.reduce((acculator, current) => {
    const ACTION: "INSERT" | "UPDATE" = current.eventName;
    const existingRecords = acculator[ACTION] || [];
    const existsDynamoDb = current.dynamodb && current.dynamodb.NewImage;
    if (existsDynamoDb) {
      return { ...acculator, [ACTION]: [...existingRecords, transformData(current.dynamodb.NewImage)] };
    }
  }, {});
}

export const actions = {
  INSERT: "INSERT",
  UPDATE: "UPDATE",
};
