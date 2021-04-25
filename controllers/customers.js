const { getReqBody } = require("../utils/getReqBody");

/**
 * getCustomers
 * @param {*} req
 * @param {*} res
 */
exports.getCustomers = async (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Get All Customers" }));
};

/**
 * getCustomerById
 * @param {*} req
 * @param {*} res
 */
exports.getCustomerById = async (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Get Customer By Id" }));
};

/**
 * createCustomer
 * @param {*} req
 * @param {*} res
 */
exports.createCustomer = async (req, res) => {
  res.writeHead(201, { "Content-Type": "application/json" });
  console.log(await getReqBody(req));
  res.end(JSON.stringify({ message: "Create Customer" }));
};

/**
 * updateCustomer
 * @param {*} req - request object from client
 * @param {*} res
 */
exports.updateCustomer = async (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Update Customer" }));
};

/**
 * deleteCustomer
 * @param {*} req
 * @param {*} res
 */
exports.deleteCustomer = async (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Delete Customer" }));
};
