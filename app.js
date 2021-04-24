const {
  getCustomerById,
  getCustomers,
  updateCustomer,
  createCustomer,
  deleteCustomer,
} = require("./controllers/customers");

var http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/customers" && req.method === "GET") {
    getCustomers(req, res);
  }
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
