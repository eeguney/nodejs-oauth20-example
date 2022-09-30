/**
 * @ Author: Emre Güney
 * @ Create Time: 2022-09-28 23:57:32
 * @ Modified time: 2022-09-30 02:41:45
 * @ Description:
 */


import { Router } from "express";
import authRouter from "./auth.routes";
import userRouter from "./user.routes";

const router = Router();

// routes
router.use("/auth", authRouter);
router.use("/user", userRouter);

export default router;
