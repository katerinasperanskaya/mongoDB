const orderModel = require("../models/order");

/**
 * getOrders
 * @param {*} req
 * @param {*} res
 */
exports.getOrders = async (req, res) => {
  const orders = await orderModel.getAll();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ orders, status: 200, message: "success" }));
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
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ order, status: 200, message: "success" }));
};

/**
 * createOrder
 * @param {*} req
 * @param {*} res
 */
exports.createOrder = async (req, res) => {
  res.writeHead(201, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Create Order" }));
};

/**
 * updateOrder
 * @param {*} req - request object from client
 * @param {*} res
 */
exports.updateOrder = async (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Update Order" }));
};

/**
 * deleteOrder
 * @param {*} req
 * @param {*} res
 */
exports.deleteOrder = async (req, res) => {
  const id = req.url.substring(8);
  await orderModel.remove(id);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ status: 200, message: "success" }));
};
