import express from "express";
import { userSignup, userLogin } from "../controller/user-controller.js";
import addImage from "../controller/image-controller.js";
const router = express.Router();

router.post('/login',userLogin);
router.post('/signup',userSignup);


router.post('/add/images',addImage);

export default router;