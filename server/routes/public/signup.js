import express from "express";
import { postSignup } from "../../controllers/signup.js";

const router = express.Router();

router.post('/', postSignup);

export default router