const { connectDB } = require("./config/database");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const AmazonStrategy = require("passport-amazon").Strategy;
const GithubStrategy = require("passport-github").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const InstagramStrategy = require("passport-instagram").Strategy;
const SpotifyStrategy = require("passport-spotify").Strategy;

require("dotenv").config();
const { PORT, BASE_URL } = process.env;

const app = express();
app.use(cors());
app.use(passport.initialize());

app.get("/auth/facebook", passport.authenticate("facebook"));
app.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook"),
  (req, res) => {
    res.redirect("/profile");
  }
);

app.get(
  "/auth/amazon",
  passport.authenticate("amazon", {
    scope: ["profile"],
  })
);
app.get(
  "/auth/amazon/callback",
  passport.authenticate("amazon"),
  (req, res) => {
    res.redirect("http://localhost:3000/profile");
  }
);

app.get("/auth/github", passport.authenticate("github"));
app.get(
  "/auth/github/callback",
  passport.authenticate("github"),
  (req, res) => {
    res.redirect("/profile");
  }
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    res.redirect("/profile");
  }
);

app.get("/auth/instagram", passport.authenticate("instagram"));
app.get(
  "/auth/instagram/callback",
  passport.authenticate("instagram"),
  (req, res) => {
    res.redirect("/profile");
  }
);

app.get("/auth/spotify", passport.authenticate("spotify"));
app.get(
  "/auth/spotify/callback",
  passport.authenticate("spotify"),
  (req, res) => {
    res.redirect("http://localhost:3000/profile");
  }
);

app.get("/user", (req, res) => {
  res.send(user);
});

app.get("/auth/logout", (req, res) => {
  user = {};
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.json({
    message: "api works",
  });
});

const start = async () => {
  try {
    connectDB();
    app.listen(PORT || 5070, () =>
      console.log(`Server is running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.log("Server Error", err.message);
    process.exit(1);
  }
};

start();
