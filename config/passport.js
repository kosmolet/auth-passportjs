const passport = require("passport");
require("dotenv").config();
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

const TwitterStrategy = require("passport-twitter").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const AmazonStrategy = require("passport-amazon").Strategy;
const GithubStrategy = require("passport-github").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const InstagramStrategy = require("passport-instagram").Strategy;
const SpotifyStrategy = require("passport-spotify").Strategy;
const User = require("../models/User");

passport.serializeUser((user, done) => {
  console.log("USER Serialize", user);
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  console.log("USER ID Deserializate", id);
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(new Error("Failed to deserialize the user"), user);
  }
});

passport.use(
  new TwitterStrategy(
    {
      consumerKey: TWITTER_CONSUMER_KEY,
      consumerSecret: TWITTER_CONSUMER_SECRET,
      callbackURL: "/auth/twitter/redirect",
    },
    async (token, tokenSecret, profile, done) => {
      console.log("PROFILE", profile);
      const currentUser = await User.findOne({
        providerId: profile._json.id_str,
      });

      if (!currentUser) {
        const newUser = await new User({
          name: profile._json.name,
          authByProvider: profile.provider,
          providerId: profile._json.id_str,
          screenName: profile._json.screen_name,
          profile,
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

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: FACEBOOK_CLIENT_ID,
//       clientSecret: FACEBOOK_CLIENT_SECRET,
//       callbackURL: `/auth/facebook/callback`,
//     },
//     (accessToken, refreshToken, profile, done) => {
//       user = { ...profile };
//       return done(null, profile);
//     }
//   )
// );

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
      callbackURL: "/auth/facebook/redirect",
    },
    async (token, tokenSecret, profile, done) => {
      console.log("PROFILE_FB", profile);
      const currentUser = await User.findOne({
        providerId: profile._json.id_str,
      });

      if (!currentUser) {
        const newUser = await new User({
          name: profile._json.name,
          authByProvider: profile.provider,
          providerId: profile._json.id_str,
          screenName: profile._json.screen_name,
          profile,
        }).save();
        if (newUser) {
          done(null, newUser);
        }
      }
      done(null, currentUser);
    }
  )
);

passport.use(
  new InstagramStrategy(
    {
      clientID: INSTAGRAM_CLIENT_ID,
      clientSecret: INSTAGRAM_CLIENT_SECRET,
      callbackURL: "/auth/instagram/redirect",
    },
    async (token, tokenSecret, profile, done) => {
      console.log("PROFILE_INSTA", profile);
      const currentUser = await User.findOne({
        providerId: profile._json.id_str,
      });

      if (!currentUser) {
        const newUser = await new User({
          name: profile._json.name,
          authByProvider: profile.provider,
          providerId: profile._json.id_str,
          screenName: profile._json.screen_name,
          profile,
        }).save();
        if (newUser) {
          done(null, newUser);
        }
      }
      done(null, currentUser);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/redirect",
    },
    async (token, tokenSecret, profile, done) => {
      console.log("PROFILE_github", profile);
      const currentUser = await User.findOne({
        providerId: profile._json.id_str,
      });

      if (!currentUser) {
        const newUser = await new User({
          name: profile._json.login,
          authByProvider: profile.provider,
          providerId: profile._json.id,
          screenName: profile.profileUrl,
          profile,
        }).save();
        if (newUser) {
          done(null, newUser);
        }
      }
      done(null, currentUser);
    }
  )
);

passport.use(
  new SpotifyStrategy(
    {
      clientID: SPOTIFY_CLIENT_ID,
      clientSecret: SPOTIFY_CLIENT_SECRET,
      callbackURL: "/auth/spotify/redirect",
    },
    async (token, tokenSecret, profile, done) => {
      console.log("PROFILE_spotify", profile);
      const currentUser = await User.findOne({
        providerId: profile._json.id_str,
      });

      if (!currentUser) {
        const newUser = await new User({
          name: profile._json.name,
          authByProvider: profile.provider,
          providerId: profile._json.id_str,
          screenName: profile._json.screen_name,
          profile,
        }).save();
        if (newUser) {
          done(null, newUser);
        }
      }
      done(null, currentUser);
    }
  )
);

passport.use(
  new AmazonStrategy(
    {
      clientID: AMAZON_CLIENT_ID,
      clientSecret: AMAZON_CLIENT_SECRET,
      callbackURL: "/auth/amazon/redirect",
    },
    async (token, tokenSecret, profile, done) => {
      console.log("PROFILE_amazon", profile);
      const currentUser = await User.findOne({
        providerId: profile._json.id_str,
      });

      if (!currentUser) {
        const newUser = await new User({
          name: profile._json.name,
          authByProvider: profile.provider,
          providerId: profile._json.id_str,
          screenName: profile._json.screen_name,
          profile,
        }).save();
        if (newUser) {
          done(null, newUser);
        }
      }
      done(null, currentUser);
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/redirect",
    },
    async (token, tokenSecret, profile, done) => {
      console.log("PROFILE_google", profile);
      const currentUser = await User.findOne({
        providerId: profile._json.id_str,
      });

      if (!currentUser) {
        const newUser = await new User({
          name: profile._json.name,
          authByProvider: profile.provider,
          providerId: profile._json.id_str,
          screenName: profile._json.screen_name,
          profile,
        }).save();
        if (newUser) {
          done(null, newUser);
        }
      }
      done(null, currentUser);
    }
  )
);
