const mongo = require('mongodb');
const config = require('config');
const mongoUri = config.get('mongoUri');
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const getAll = async () => {
  const connection = await mongo.connect(mongoUri, options);
  const customers = await connection
    .db('test')
    .collection('customers')
    .find({})
    .toArray();
  await connection.close();
  return customers;
};

const getById = async (id) => {
  const connection = await mongo.connect(mongoUri, options);
  const customer = await connection
    .db('test')
    .collection('customers')
    .findOne({ _id: mongo.ObjectID(id) });
  await connection.close();
  return customer;
};

const create = async (newCustomer) => {
  const connection = await mongo.connect(mongoUri, options);
  const customer = await connection
    .db('test')
    .collection('customers')
    .insertOne(newCustomer);
  await connection.close();
  return customer.ops[0];
};

const update = async (id, updatedCustomer) => {
  const connection = await mongo.connect(mongoUri, options);

  const customer = await connection
    .db('test')
    .collection('customers')
    .replaceOne({ _id: mongo.ObjectID(id) }, updatedCustomer);
  await connection.close();
  return customer.ops[0];
};

const remove = async (id) => {
  const connection = await mongo.connect(mongoUri, options);
  const customer = await connection
    .db('test')
    .collection('customers')
    .findOneAndDelete({ _id: mongo.ObjectID(id) });
  await connection.close();
  return customer;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
