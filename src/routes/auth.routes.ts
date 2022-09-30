/**
 * @ Author: Emre Güney
 * @ Create Time: 2022-09-28 22:22:01
 * @ Modified time: 2022-09-30 02:40:52
 * @ Description:
 */


import { Request, Response, Router } from "express";
const passport = require("passport");

const authRouter = Router();

authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email"],
  })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/",
    session: true,
  }),
  (req: Request, res: Response) => {
    console.log("Google called us back!");
  }
);

authRouter.get(
  "/github",
  passport.authenticate("github")
);

authRouter.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/failure",
    successRedirect: "/",
    session: true,
  }),
  (req: Request, res: Response) => {
    console.log("Github called us back!");
  }
);

authRouter.get("/logout", (req: Request, res: Response) => {
  req.logout({ keepSessionInfo: false }, (err) =>
    console.log("Something went wrong: " + err)
  );
  return res.redirect("/");
});

authRouter.get("/failure", (req: Request, res: Response) => {
  return res.send("Failure to log in!");
});

export default authRouter;
