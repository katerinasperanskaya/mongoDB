var http = require("http");

const customerRoutes = require("./routes/customers");
const itemRoutes = require("./routes/items");
const orderRoutes = require("./routes/orders");

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

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
