const passport = require("passport");
const TwitterStrategy = require("passport-twitter").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const AmazonStrategy = require("passport-amazon").Strategy;
const GithubStrategy = require("passport-github").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const InstagramStrategy = require("passport-instagram").Strategy;
const SpotifyStrategy = require("passport-spotify").Strategy;
const User = require("../models/User");
const {
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
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

passport.serializeUser((user, done) => {
  done(null, user.id);
  //done(null, user);
});

passport.deserializeUser((id, done) => {
  //done(null, user);
  User.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((e) => {
      done(new Error("Failed to deserialize the user"));
    });
});

passport.use(
  new TwitterStrategy(
    {
      consumerKey: TWITTER_CONSUMER_KEY,
      consumerSecret: TWITTER_CONSUMER_SECRET,
      callbackURL: "/auth/twitter/callback",
    },
    async (token, tokenSecret, profile, done) => {
      const currentUser = await User.findOne({
        twitterId: profile._json.id_str,
      });

      if (!currentUser) {
        const newUser = await new User({
          name: profile._json.name,
          screenName: profile._json.screen_name,
          twitterId: profile._json.id_str,
          profileImageUrl: profile._json.profile_image_url,
        }).save();
        if (newUser) {
          done(null, newUser);
        }
      }
      done(null, currentUser);
    }
  )
);

// TO DO save user to db

let user = {};

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
