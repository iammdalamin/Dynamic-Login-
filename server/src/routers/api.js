const express =require('express');
const { SignUp, Login } = require('../controllers/UserController');
const AuthVerify = require('../middlewares/AuthVerify');
const router = express.Router()



router.post('/signup', SignUp)
router.post('/login', Login)

module.exports=router;