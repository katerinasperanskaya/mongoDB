const orderModel = require('../models/order');
const { getReqBody } = require('../utils/getReqBody');

/**
 * getOrders
 * @param {*} req
 * @param {*} res
 */
exports.getOrders = async (req, res) => {
  const orders = await orderModel.getAll();
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ orders, status: 200, message: 'success' }));
};

/**
 * getOrderById
 * @param {*} req
 * @param {*} res
 */
exports.getOrderById = async (req, res) => {
  const id = req.url.substring(8);
  console.log(id);
  const order = await orderModel.getById(id);
  if (!order) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 404, message: 'Order not found' }));
  }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ order, status: 200, message: 'success' }));
};

/**
 * createOrder
 * @param {*} req
 * @param {*} res
 */
exports.createOrder = async (req, res) => {
  const newOrder = await getReqBody(req);
  const { customer, items } = newOrder;

  // check for mandatory data
  if (!customer || !items) {
    res.writeHead(400, {
      'Content-Type': 'application/json',
    });
    return res.end(JSON.stringify({ message: 'Data invalid' }));
  }

  //  if data is valid call create method on model
  const order = await orderModel.create(newOrder);

  res.writeHead(201, {
    'Content-Type': 'application/json',
  });
  res.end(JSON.stringify({ status: 201, message: 'success', order }));
};

/**
 * updateOrder
 * @param {*} req - request object from client
 * @param {*} res
 */
exports.updateOrder = async (req, res) => {
  const id = req.url.substring(8);

  try {
    const orderExists = await orderModel.getById(id);
    if (!orderExists) {
      throw Error;
    }
  } catch (e) {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    });
    return res.end(JSON.stringify({ status: 404, message: 'order not found' }));
  }

  const updateorder = await getReqBody(req);
  const { customer, items } = updateorder;

  // check for mandatory data
  if (!customer || !items) {
    res.writeHead(400, {
      'Content-Type': 'application/json',
    });
    return res.end(JSON.stringify({ message: 'Data invalid' }));
  }

  //  if data is valid call create method on order
  const order = await orderModel.update(id, updateorder);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 200, message: 'success', order }));
};

/**
 * deleteOrder
 * @param {*} req
 * @param {*} res
 */
exports.deleteOrder = async (req, res) => {
  const id = req.url.substring(8);
  await orderModel.remove(id);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 200, message: 'success' }));
};
