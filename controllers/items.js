/**
 * getItems
 * @param {*} req
 * @param {*} res
 */
exports.getItems = async (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Get All Items" }));
};

/**
 * getItemById
 * @param {*} req
 * @param {*} res
 */
exports.getItemById = async (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Get Item By Id" }));
};

/**
 * createItem
 * @param {*} req
 * @param {*} res
 */
exports.createItem = async (req, res) => {
  res.writeHead(201, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Create Item" }));
};

/**
 * updateItem
 * @param {*} req - request object from client
 * @param {*} res
 */
exports.updateItem = async (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Update Item" }));
};

/**
 * deleteItem
 * @param {*} req
 * @param {*} res
 */
exports.deleteItem = async (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Delete Item" }));
};
