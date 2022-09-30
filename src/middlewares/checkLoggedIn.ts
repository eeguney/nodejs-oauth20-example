/**
 * @ Author: Emre Güney
 * @ Create Time: 2022-09-28 23:04:05
 * @ Modified time: 2022-09-30 02:41:17
 * @ Description:
 */



import { NextFunction, Request, Response } from "express";

const checkLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  const isLoggedIn = req.isAuthenticated() && req.user;
  if (!isLoggedIn) {
    return res.status(401).json({
      error: "You must log in",
    });
  }
  next();
};

export default checkLoggedIn;
