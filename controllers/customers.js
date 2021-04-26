const { getReqBody } = require('../utils/getReqBody');
const customerModel = require('../models/customer');

/**
 * getCustomers
 * @param {*} req
 * @param {*} res
 */
exports.getCustomers = async (req, res) => {
  const customers = await customerModel.getAll();
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ customers, status: 200, message: 'success' }));
};

/**
 * getCustomerById
 * @param {*} req
 * @param {*} res
 */
exports.getCustomerById = async (req, res) => {
  const id = req.url.substring(11);
  const customer = await customerModel.getById(id);

  if (!customer) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    return res.end(
      JSON.stringify({ status: 404, message: 'Customer Not Found' })
    );
  }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ customer, status: 200, message: 'success' }));
};

/**
 * createCustomer
 * @param {*} req
 * @param {*} res
 */
exports.createCustomer = async (req, res) => {
  const newCustomer = await getReqBody(req);
  const { personal, billing, shipping } = newCustomer;

  // check for mandatory data
  if (
    !personal.firstName ||
    !personal.lastName ||
    !personal.phone ||
    !personal.email ||
    !billing.address1 ||
    !billing.town ||
    !billing.county ||
    !shipping.address1 ||
    !shipping.town ||
    !shipping.county
  ) {
    res.writeHead(400, {
      'Content-Type': 'application/json',
    });
    return res.end(JSON.stringify({ message: 'Data invalid' }));
  }

  //  if data is valid call create method on model
  const customer = await customerModel.create(newCustomer);

  res.writeHead(201, {
    'Content-Type': 'application/json',
  });
  res.end(JSON.stringify({ status: 201, message: 'success', customer }));
};

/**
 * updateCustomer
 * @param {*} req - request object from client
 * @param {*} res
 */
exports.updateCustomer = async (req, res) => {
  const id = req.url.substring(11);

  // handle customer doesn't exist
  const customerExists = await customerModel.getById(id);
  if (!customerExists) {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    });
    return res.end(
      JSON.stringify({ status: 404, message: 'Customer not found' })
    );
  }

  const updatedCustomer = await getReqBody(req);
  const { personal, billing, shipping } = updatedCustomer;

  // check for mandatory data
  if (
    !personal.firstName ||
    !personal.lastName ||
    !personal.phone ||
    !personal.email ||
    !billing.address1 ||
    !billing.town ||
    !billing.county ||
    !shipping.address1 ||
    !shipping.town ||
    !shipping.county
  ) {
    res.writeHead(400, {
      'Content-Type': 'application/json',
    });
    return res.end(JSON.stringify({ message: 'Data invalid' }));
  }

  //  if data is valid call create method on model
  let customer;
  try {
    customer = await customerModel.update(id, updatedCustomer);
  } catch (e) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 500, message: 'Unkown Error' }));
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ customer, status: 200, message: 'success' }));
};

/**
 * deleteCustomer
 * @param {*} req
 * @param {*} res
 */
exports.deleteCustomer = async (req, res) => {
  const id = req.url.substring(11);

  // handle customer doesn't exist
  try {
    const customerExists = await customerModel.getById(id);
    if (!customerExists) {
      throw Error;
    }
  } catch (e) {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    });
    return res.end(
      JSON.stringify({ status: 404, message: 'Customer not found' })
    );
  }

  await customerModel.remove(id);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 200, message: 'success' }));
};
