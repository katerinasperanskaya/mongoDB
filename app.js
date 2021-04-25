var http = require("http");
const customerRoutes = require("./routes/customers");
const itemRoutes = require("./routes/items");
const orderRoutes = require("./routes/orders");
const connectDb = require("./utils/connectDb");

// connect to db
connectDb();

// routes
const server = http.createServer((req, res) => {
  if (req.url.includes("customers")) {
    customerRoutes(req, res);
  } else if (req.url.includes("items")) {
    itemRoutes(req, res);
  } else if (req.url.includes("orders")) {
    orderRoutes(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route Not Found" }));
  }
});

// start server
const PORT = 5000;

server.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
});
