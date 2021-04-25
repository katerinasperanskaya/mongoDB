const { getReqBody } = require('../utils/getReqBody');
const itemModel = require('../models/item');

/**
 * getItems
 * @param {*} req
 * @param {*} res
 */
exports.getItems = async (req, res) => {
  const items = await itemModel.getAll();
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ items, status: 200, message: 'success' }));
};

/**
 * getItemById
 * @param {*} req
 * @param {*} res
 */
exports.getItemById = async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Get Item By Id' }));
};

/**
 * createItem
 * @param {*} req
 * @param {*} res
 */
exports.createItem = async (req, res) => {
  const newItem = await getReqBody(req);
  const { manufacturer, model, price } = newItem;

  // check for mandatory data
  if (!manufacturer || !model || !price) {
    res.writeHead(400, {
      'Content-Type': 'application/json',
    });
    return res.end(JSON.stringify({ message: 'Data invalid' }));
  }

  //  if data is valid call create method on item
  await itemModel.create(newItem);

  res.writeHead(201, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Create Item' }));
};

/**
 * updateItem
 * @param {*} req - request object from client
 * @param {*} res
 */
exports.updateItem = async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Update Item' }));
};

/**
 * deleteItem
 * @param {*} req
 * @param {*} res
 */
exports.deleteItem = async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Delete Item' }));
};
