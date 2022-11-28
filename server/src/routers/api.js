const express =require('express');
const { SignUp, Login, Logout } = require('../controllers/UserController');
const AuthVerify = require('../middlewares/AuthVerify');
const router = express.Router()



router.post('/signup', SignUp)
router.post('/login', Login)
router.get('/logout',AuthVerify, Logout)

module.exports=router;