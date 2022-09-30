/**
 * @ Author: Emre Güney
 * @ Create Time: 2022-09-28 23:11:23
 * @ Modified time: 2022-09-30 02:40:41
 * @ Description:
 */



require("dotenv").config();

const config = {
  PORT: process.env.PORT,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  COOKIE_KEY_1: process.env.COOKIE_KEY_1,
  COOKIE_KEY_2: process.env.COOKIE_KEY_2,
  MONGODB_URL: process.env.MONGODB_URL,
};

export default config;
