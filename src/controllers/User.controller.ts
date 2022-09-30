/**
 * @ Author: Emre Güney
 * @ Create Time: 2022-09-28 03:13:13
 * @ Modified time: 2022-09-30 15:31:46
 * @ Description:
 */

import STATUSCODE from "../constants/statuscodes";
import User, { IUser } from "../models/User.model";
import { Request, Response } from "express";
import mongoose from "mongoose";
import addInformation from "../utils/addInformation";

const addUser = async (req: Request, res: Response) => {
  try {
    const { name, username, avatar, bio, provider, providerID }: IUser =
      req.body;
    if (!name || !username)
      return res.status(400).json({ error: "Please fill in all fields." });
    const newUser = new User({
      name,
      username,
      avatar,
      bio,
      provider,
      providerID,
    });
    const user = await newUser.save();
    return res.status(STATUSCODE.CREATED).json(user);
  } catch (error) {
    return res.status(STATUSCODE.NOTFOUND).send([error]);
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await User.find();
    if (allUsers.length < 1 || !allUsers) {
      throw "There is no user";
    }
    const withInformation = addInformation(allUsers);
    return res.status(STATUSCODE.OK).json(withInformation);
  } catch (error) {
    return res.status(STATUSCODE.NOTFOUND).send([error]);
  }
};

const findUserById = async (req: Request, res: Response) => {
  const userID = req.params.userID;
  try {
    const isValid = mongoose.Types.ObjectId.isValid(userID);
    if (!isValid) {
      throw "There is no user with this id";
    }
    const user = await User.findById(userID);
      if (!user) {
        throw "There is no user with this id";
      }
      const withInformation = addInformation(user);
      return res.status(STATUSCODE.OK).json(withInformation);
  } catch (error) {
    return res.status(STATUSCODE.NOTFOUND).send(error);
  }
};

const findUserByProviderById = async (req: Request, res: Response) => {
  const providerID = req.params.providerID;
  try {
    const user = await User.findOne({providerID: providerID});
      if (!user) {
        throw "There is no user with this id";
      }
      const withInformation = addInformation(user);
      return res.status(STATUSCODE.OK).json(withInformation);
  } catch (error) {
    return res.status(STATUSCODE.NOTFOUND).send(error);
  }
};

const findUserByUsername = async (req: Request, res: Response) => {
  const username = req.params.username;
  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      throw "There is no user with this username";
    }
    const withInformation = addInformation(user);
    return res.status(STATUSCODE.OK).json(withInformation);
  } catch (error) {
    return res.status(STATUSCODE.NOTFOUND).send(error);
  }
};

export { getAllUsers, findUserById, findUserByUsername, findUserByProviderById, addUser };
