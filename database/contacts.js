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


async function create(data) {
  const db = getDb();
  const result = await db
    .collection("contacts")
    .insertOne(data);

  console.log("DB result:", result);
  return result;
}

async function update(id, data) {
  const db = getDb();

  const result = await db
    .collection("contacts")
    .updateOne(
      { _id: new ObjectId(id) }, 
      { $set: data }             
    );

  console.log("DB result:", result);
  return result;
}

async function deleteOne(id) {
  const db = getDb();
  console.log(id);
  const result = await db
    .collection("contacts")
    .deleteOne(id);

  console.log("DB result:", result);
  return result;
}

module.exports = { get, getAll, update, create, deleteOne };
