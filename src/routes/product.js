var { Router } = require('express');
var router = new Router();
var ProductCrud = require('../controllers/product.controller');


// /api/user/
router.get('/', ProductCrud.getAllProducts);
router.get('/:id', ProductCrud.getOne);
router.post('/', ProductCrud.createProduct);
router.delete('/:id', ProductCrud.deleteProduct);
router.put('/:id', ProductCrud.updateProduct);
module.exports = router;