const express = require("express");
const userAuthController = require("../controllers/userAuth.controller");
const router = express.Router();


router.get('/signup',userAuthController.signUp);
router.post('/post-signup',userAuthController.postSignUpData);
router.get('/login',userAuthController.renderLogin);
router.post('/login',userAuthController.postAndValidateUser);
router.get('/logout',userAuthController.Logout);
module.exports= router;