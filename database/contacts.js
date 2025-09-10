const { getDb } = require("./connect");

async function get(id) {
  const db = getDb();

  const result = await db
    .collection("contacts")
    .findOne({ _id: id }); // adjust if needed

  console.log("DB result:", result);
  return result;
}

async function getAll() {
  const db = getDb();
  console.log("It's working");

  const result = await db
    .collection("alldata")
    .find()
    .toArray();

  console.log("DB result:", result);
  return result;
}

module.exports = { get, getAll };
