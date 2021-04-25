const mongo = require("mongodb");
const config = require("config");
const mongoUri = config.get("mongoUri");
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const getAll = async () => {
  const connection = await mongo.connect(mongoUri, options);
  const items = await connection
    .db("test")
    .collection("items")
    .find({})
    .toArray();
  await connection.close();
  return items;
};

const getById = async (id) => {
  const connection = await mongo.connect(mongoUri, options);
  const item = await connection
    .db("test")
    .collection("items")
    .findOne({ _id: mongo.ObjectID(id) });
  await connection.close();
  return item;
};

const create = async (newItem) => {
  const connection = await mongo.connect(mongoUri, options);
  const { manufacturer, model, price } = newItem;
  let item;
  try {
    item = await connection
      .db("test")
      .collection("items")
      .insertOne({ manufacturer, model, price: parseInt(price) });
  } catch (e) {
    console.log(e);
  }
  await connection.close();
  return item;
};

const update = async (id, updatedItem) => {
  const connection = await mongo.connect(mongoUri, options);
  const item = await connection
    .db("test")
    .collection("items")
    .replaceOne({ _id: mongo.ObjectID(id) }, updatedItem);
  await connection.close();
  return item;
};

const remove = async (id) => {
  const connection = await mongo.connect(mongoUri, options);
  const item = await connection
    .db("test")
    .collection("items")
    .findOneAndDelete({ _id: mongo.ObjectID(id) });
  await connection.close();
  return item;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
