const mongo = require("mongodb");
const config = require("config");
const mongoUri = config.get("mongoUri");
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const getAll = async () => {
  const connection = await mongo.connect(mongoUri, options);
  const orders = await connection
    .db("test")
    .collection("orders")
    .find({})
    .toArray();
  await connection.close();
  return orders;
};

const getById = async (id) => {
  const connection = await mongo.connect(mongoUri, options);
  const order = await connection
    .db("test")
    .collection("orders")
    .findOne({ _id: mongo.ObjectID(id) });
  await connection.close();
  return order;
};

const create = async (itemstopurcase) => {};

const update = async () => {};

const remove = async (id) => {
  const connection = await mongo.connect(mongoUri, options);
  const order = await connection
    .db("test")
    .collection("orders")
    .findOneAndDelete({ _id: mongo.ObjectID(id) });
  await connection.close();
  return order;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
