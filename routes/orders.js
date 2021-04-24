const {
    getOrders,
    updateOrder,
    createOrder,
    deleteOrder,
  } = require("../controllers/Orders");
  
  const OrderRoutes = (req, res) => {
    switch (req.method) {
      case "GET":
        getOrders(req, res);
        break;
      case "POST":
        createOrder(req, res);
        break;
      case "PUT":
        updateOrder(req, res);
        break;
      case "DELETE":
        deleteOrder(req, res);
        break;
    }
  };
  
  module.exports = OrderRoutes;
  