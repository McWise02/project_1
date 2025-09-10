const { getDb } = require("./connect");
const { ObjectId } = require("mongodb");

async function get(id) {
  const db = getDb();
  console.log(id);
  const result = await db
    .collection("contacts")
    .findOne({ _id: new ObjectId(id) });

  console.log("DB result:", result);
  return result;
}

async function getAll() {
  const db = getDb();
  console.log("It's working");

  const result = await db
    .collection("contacts")
    .find()
    .toArray();

  console.log("DB result:", result);
  return result;
}

module.exports = { get, getAll };
