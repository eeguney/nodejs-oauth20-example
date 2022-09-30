/**
 * @ Author: Emre Güney
 * @ Create Time: 2022-09-28 23:16:22
 * @ Modified time: 2022-09-30 02:41:01
 * @ Description:
 */


const { Strategy } = require("passport-google-oauth20");
var GitHubStrategy = require("passport-github").Strategy;
const passport = require("passport");
import config from "../config";
import User from "../models/User.model";

const GITHUB_OPTIONS = {
  callbackURL: "/auth/github/callback",
  clientID: config.GITHUB_CLIENT_ID,
  clientSecret: config.GITHUB_CLIENT_SECRET,
};

const GOOGLE_OPTIONS = {
  callbackURL: "/auth/google/callback",
  clientID: config.GOOGLE_CLIENT_ID,
  clientSecret: config.GOOGLE_CLIENT_SECRET,
};

type Profile = {
  provider: string;
  displayName?: string;
  _json: {
    login?: string;
    email?: string;
    id?: number;
    sub?: number;
    avatar_url?: string;
    picture?: string;
    name?: string;
    bio?: string;
  };
};

// sign in and sign up
const verifyCallback = async (
  accessToken: string,
  refreshToken: string,
  profile: Profile,
  done: (error: any, profile: Profile) => {}
) => {
  const newUser = {
    username: profile._json.login ?? profile._json.email,
    avatar: profile._json.avatar_url ?? profile._json.picture,
    name: profile._json.name ?? profile.displayName,
    bio: profile._json.bio,
    provider: profile.provider,
    providerID: profile._json.id ?? profile._json.sub,
    lastSeen:  new Date()
  };
  try {
    await User.findOneAndUpdate(
      { provider: newUser.provider, username: newUser.username },
      newUser,
      { upsert: true }
    );
    console.log(
      `User Logged in: username: ${newUser.username}, provider: ${newUser.provider}`
    );
  } catch (error) {
    console.log(error);
  }
  done(null, profile);
};

// passport strategies
passport.use(new GitHubStrategy(GITHUB_OPTIONS, verifyCallback));

passport.use(new Strategy(GOOGLE_OPTIONS, verifyCallback));

// return user info to cookie
passport.serializeUser(
  (user: { id: number, username: string }, done: (error: any, user: any) => {}) => {
    done(null, { id: user.id, username: user.username });
  }
);

passport.deserializeUser((obj: any, done: (error: any, obj: any) => {}) => {
  done(null, obj);
});
