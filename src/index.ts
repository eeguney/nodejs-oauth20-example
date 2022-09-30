/**
 * @ Author: Emre Güney
 * @ Create Time: 2022-09-28 02:00:06
 * @ Modified time: 2022-09-30 03:08:20
 * @ Description:
 */

import cookieSession from "cookie-session";
import express, { Application } from "express";
import bodyParser from "body-parser";
import Router from "./routes/Router";
import passport from "passport";
import mongoose, { ConnectOptions } from "mongoose";
import helmet from "helmet";
import config from "./config";
import cors from "cors";

// passport service for OAuth20
require("./services/passport");

// create HTTP server with Express
const app: Application = express();

// cookie for OAuth authentication
app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    keys: [config.COOKIE_KEY_1!, config.COOKIE_KEY_2!],
  })
);

// passport run
app.use(passport.initialize());
app.use(passport.session());

// cors settings

app.use(cors());

// helmet
app.use(helmet());

// body parser settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use(express.static('public'))
app.use("/", Router);

// app port
const PORT = config.PORT || 8000;

// listen app
mongoose
  .connect(config.MONGODB_URL!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    app.listen(PORT, (): void => {
      console.log(`Server is running on here: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
