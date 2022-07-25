const reviewController = require('../controllers/reviewController.js');

const router = require('express').Router();

router.post('/addReview',reviewController.addReviews);
router.get('/getReview',reviewController.getProduct);

// router.get('/singleProduct/:id',productControllers.singleProducts);
// router.get('/specificProduct',productControllers.specificProducts);
// router.put('/update/:id',productControllers.updateProducts);
// router.delete('/delete/:id',productControllers.deleteProducts);


module.exports=router;