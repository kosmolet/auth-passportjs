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
const {
  PORT,
  BASE_URL,
  AMAZON_CLIENT_ID,
  AMAZON_CLIENT_SECRET,
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  INSTAGRAM_CLIENT_ID,
  INSTAGRAM_CLIENT_SECRET,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
} = process.env;
let user = {};

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
      callbackURL: `/auth/facebook/callback`,
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
      user = { ...profile };
      return done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    (accessToken, refreshToken, profile, cb) => {
      user = { ...profile };
      return cb(null, profile);
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, cb) => {
      user = { ...profile };
      return cb(null, profile);
    }
  )
);

passport.use(
  new InstagramStrategy(
    {
      clientID: INSTAGRAM_CLIENT_ID,
      clientSecret: INSTAGRAM_CLIENT_SECRET,
      callbackURL: "/auth/instagram/callback",
    },
    (accessToken, refreshToken, profile, cb) => {
      user = { ...profile };
      return cb(null, profile);
    }
  )
);

passport.use(
  new SpotifyStrategy(
    {
      clientID: SPOTIFY_CLIENT_ID,
      clientSecret: SPOTIFY_CLIENT_SECRET,
      callbackURL: "/auth/spotify/callback",
    },
    (accessToken, refreshToken, profile, cb) => {
      user = { ...profile };
      return cb(null, profile);
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

start();
