const mongo = require('mongodb');
const config = require('config');
const mongoUri = config.get('mongoUri');
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const getAll = async () => {
  const connection = await mongo.connect(mongoUri, options);
  const orders = await connection
    .db('test')
    .collection('orders')
    .find({})
    .toArray();
  await connection.close();
  return orders;
};

const getById = async (id) => {
  const connection = await mongo.connect(mongoUri, options);
  const order = await connection
    .db('test')
    .collection('orders')
    .findOne({ _id: mongo.ObjectID(id) });
  await connection.close();
  return order;
};

const create = async (newOrder) => {
  const connection = await mongo.connect(mongoUri, options);
  const { customer, items } = newOrder;
  const castItems = items.map((item) => mongo.ObjectID(item));
  const order = await connection
    .db('test')
    .collection('orders')
    .insertOne({
      customer: mongo.ObjectID(customer),
      items: castItems,
    });
  await connection.close();
  return order.ops[0];
};

const update = async (id, updatedOrder) => {
  const connection = await mongo.connect(mongoUri, options);
  const { customer, items } = updatedOrder;
  const castItems = items.map((item) => mongo.ObjectID(item));
  const order = await connection
    .db('test')
    .collection('orders')
    .replaceOne(
      { _id: mongo.ObjectID(id) },
      {
        customer: mongo.ObjectID(customer),
        items: castItems,
      }
    );
  await connection.close();
  return order.ops[0];
};

const remove = async (id) => {
  const connection = await mongo.connect(mongoUri, options);
  const order = await connection
    .db('test')
    .collection('orders')
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
