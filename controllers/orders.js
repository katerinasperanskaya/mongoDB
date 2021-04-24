/**
 * getOrders
 * @param {*} req
 * @param {*} res
 */
exports.getOrders = async (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Get All Orders" }));
};

/**
 * getOrderById
 * @param {*} req
 * @param {*} res
 */
exports.getOrderById = async (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Get Order By Id" }));
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
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Delete Order" }));
};
