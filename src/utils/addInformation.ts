import mongoose from "mongoose";
import { IUser } from "../models/User.model";

const addInformation = (data: IUser[] | IUser) => {
  return {
    data,
    information: Array.isArray(data)
      ? {
          length: data.length,
          latestId: data.sort(
            (a: IUser, b: IUser) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )[0]._id,
        }
      : { length: 1, latestId: data._id },
  };
};

export default addInformation;
