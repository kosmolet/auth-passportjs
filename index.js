const express = require("express");
const cors = require("cors");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const AmazonStrategy = require("passport-amazon").Strategy;

require("dotenv").config();
const {
  PORT,
  AMAZON_CLIENT_ID,
  AMAZON_CLIENT_SECRET,
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
} = process.env;
let user = {};

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      user = { ...profile };
      return done(null, profile);
    }
  )
);

passport.use(
  new AmazonStrategy(
    {
      clientID: AMAZON_CLIENT_ID,
      clientSecret: AMAZON_CLIENT_SECRET,
      callbackURL: "/auth/amazon/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // User.findOrCreate({ amazonId: profile.id }, function (err, user) {
      //   return done(err, user);
      // });

      user = { ...profile };
      return done(null, profile);
    }
  )
);

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
    res.redirect("/profile");
  }
);

app.get("/user", (req, res) => {
  res.send(user);
});

app.get("/auth/logout", (req, res) => {
  user = {};
  res.redirect("/");
});

const start = async () => {
  try {
    //   await mongoose.connect(MONGO_URI, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useCreateIndex: true,
    //   });
    app.listen(PORT || 5055, () =>
      console.log(`Server is running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.log("Server Error", err.message);
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  res.json({
    message: "api works",
  });
});

start();
