/**
 * getCustomers
 * @param {*} req
 * @param {*} res
 */
exports.getCustomers = async (req, res) => {
  console.log("get all customers");
  console.log(req);
};

/**
 * getCustomerById
 * @param {*} req
 * @param {*} res
 */
exports.getCustomerById = async (req, res) => {
  console.log("get customer by id");
};

/**
 * createCustomer
 * @param {*} req
 * @param {*} res
 */
exports.createCustomer = async (req, res) => {
  console.log("create customer");
};

/**
 * updateCustomer
 * @param {*} req - request object from client
 * @param {*} res
 */
exports.updateCustomer = async (req, res) => {
  console.log("update customer");
};

/**
 * deleteCustomer
 * @param {*} req
 * @param {*} res
 */
exports.deleteCustomer = async (req, res) => {
  console.log("delete customer");
};
