const reviewController = require('../controllers/loginController.js');

const router = require('express').Router();

router.post('/registration',reviewController.addUser);
router.post('/',reviewController.fetchUser);



module.exports=router;