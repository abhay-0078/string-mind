import express from "express";
import {
  checkAuth,
  login,
  logout,
  signup,
} from "../controller/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { verifyUser } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.get("/check", protectRoute, checkAuth);

router.post("/verify", verifyUser);

export default router;
