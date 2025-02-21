import express from "express";
import { login, logout, register, updatePassword ,checkUserExistence,checkAuth } from "../controllers/user.controller.js"; // Import the updatePassword controller
import isAuthenticated from "../middlewares/isAuthenticated.js";

import {User} from "../models/user.model.js";



const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.post("/update" ,updatePassword); 
router.route('/logout').post(logout);

  

router.post("/user/check", checkUserExistence);

router.route('/checkauth').get(checkAuth);
export default router;
