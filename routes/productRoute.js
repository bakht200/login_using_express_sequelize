const productControllers = require('../controllers/productController.js');

const router = require('express').Router();

router.post('/addProduct',productControllers.addProduct);
router.get('/getProduct',productControllers.getProduct);
router.get('/singleProduct/:id',productControllers.singleProducts);
router.get('/specificProduct',productControllers.specificProducts);
router.put('/update/:id',productControllers.updateProducts);
router.delete('/delete/:id',productControllers.deleteProducts);


module.exports=router;