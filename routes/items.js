const {
  getItems,
  getItemById,
  updateItem,
  createItem,
  deleteItem,
} = require('../controllers/Items');

const ItemRoutes = (req, res) => {
  switch (req.method) {
    case 'GET':
      if (req.url === '/items') {
        getItems(req, res);
      } else {
        getItemById(req, res);
      }
      break;
    case 'POST':
      createItem(req, res);
      break;
    case 'PUT':
      updateItem(req, res);
      break;
    case 'DELETE':
      deleteItem(req, res);
      break;
  }
};

module.exports = ItemRoutes;
