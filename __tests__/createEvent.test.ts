import { createParams } from "../resolvers/events/create";
import * as uuidv4 from "uuid/v4";
test("Event object creation", () => {
  const createdParams = createParams(
    {
      id: "1",
      name: "Whatever",
      description: "unknown",
      addedAt: Date.now(),
      startingOn: Date.now(),
    },
    process.env.TableName,
    uuidv4(),
  );
  expect(createdParams).not.toBe(null);
});
