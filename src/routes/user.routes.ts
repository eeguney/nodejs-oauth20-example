/**
 * @ Author: Emre Güney
 * @ Create Time: 2022-09-28 02:48:16
 * @ Modified time: 2022-09-30 15:01:51
 * @ Description:
 */


import { addUser, findUserById, findUserByProviderById, findUserByUsername, getAllUsers } from "../controllers/User.controller";
import checkLoggedIn from "../middlewares/checkLoggedIn";
import { Router } from "express";

const userRouter = Router();

userRouter.get("/all", checkLoggedIn, getAllUsers);

userRouter.get("/:userID", checkLoggedIn, findUserById);

userRouter.get("/username/:username", checkLoggedIn, findUserByUsername);

userRouter.get("/providerID/:providerID", checkLoggedIn, findUserByProviderById);

userRouter.post("/", checkLoggedIn, addUser);

export default userRouter;
