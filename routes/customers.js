const {
  getCustomers,
  updateCustomer,
  createCustomer,
  deleteCustomer,
} = require("../controllers/customers");

const customerRoutes = (req, res) => {
  switch (req.method) {
    case "GET":
      getCustomers(req, res);
      break;
    case "POST":
      createCustomer(req, res);
      break;
    case "PUT":
      updateCustomer(req, res);
      break;
    case "DELETE":
      deleteCustomer(req, res);
      break;
  }
};

module.exports = customerRoutes;
