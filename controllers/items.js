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
  const id = req.url.substring(7);
  const item = await itemModel.getById(id);

  if (!item) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 404, message: 'Item not found' }));
  }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ item, status: 200, message: 'success' }));
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
  const item = await itemModel.create(newItem);

  res.writeHead(201, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 201, message: 'success', item }));
};

/**
 * updateItem
 * @param {*} req - request object from client
 * @param {*} res
 */
exports.updateItem = async (req, res) => {
  const id = req.url.substring(7);

  // handle item doesn't exist
  const itemExists = await itemModel.getById(id);
  if (!itemExists) {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    });
    return res.end(JSON.stringify({ status: 404, message: 'Item not found' }));
  }

  const updateItem = await getReqBody(req);
  const { manufacturer, model, price } = updateItem;

  // check for mandatory data
  if (!manufacturer || !model || !price) {
    res.writeHead(400, {
      'Content-Type': 'application/json',
    });
    return res.end(JSON.stringify({ message: 'Data invalid' }));
  }

  //  if data is valid call create method on item
  const item = await itemModel.update(id, updateItem);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 200, message: 'success', item }));
};

/**
 * deleteItem
 * @param {*} req
 * @param {*} res
 */
exports.deleteItem = async (req, res) => {
  const id = req.url.substring(7);

  // handle item doesn't exist
  try {
    const itemExists = await itemModel.getById(id);
    if (!itemExists) {
      throw Error;
    }
  } catch (e) {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    });
    return res.end(JSON.stringify({ status: 404, message: 'Item not found' }));
  }

  await itemModel.remove(id);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 200, message: 'success' }));
};
