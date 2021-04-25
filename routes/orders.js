const {
  getOrders,
  getOrderById,
  updateOrder,
  createOrder,
  deleteOrder,
} = require('../controllers/Orders');

const OrderRoutes = (req, res) => {
  switch (req.method) {
    case 'GET':
      if (req.url === '/orders') {
        getOrders(req, res);
      } else {
        getOrderById(req, res);
      }

      break;
    case 'POST':
      createOrder(req, res);
      break;
    case 'PUT':
      updateOrder(req, res);
      break;
    case 'DELETE':
      deleteOrder(req, res);
      break;
  }
};

module.exports = OrderRoutes;
