const router = require("express").Router();
const passport = require("passport");
require("dotenv").config();
const { BASE_URL } = process.env;

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: "user has been successfully authenticated",
      user: req.user,
      cookies: req.cookies,
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "user authentication has been failed.",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(BASE_URL);
});

router.get("/twitter", passport.authenticate("twitter"));
router.get("/facebook", passport.authenticate("facebook"));
router.get("/github", passport.authenticate("github"));
router.get("/instagram", passport.authenticate("instagram"));
router.get("/spotify", passport.authenticate("spotify"));
router.get(
  "/amazon",
  passport.authenticate("amazon", {
    scope: ["profile"],
  })
);

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/twitter/redirect",
  passport.authenticate("twitter", {
    successRedirect: BASE_URL,
    failureRedirect: "/auth/login/failed",
  })
);

router.get(
  "/facebook/redirect",
  passport.authenticate("facebook", {
    successRedirect: BASE_URL,
    failureRedirect: "/auth/login/failed",
  })
);

router.get(
  "/amazon/redirect",
  passport.authenticate("amazon", {
    successRedirect: BASE_URL,
    failureRedirect: "/auth/login/failed",
  })
);

router.get(
  "/github/redirect",
  passport.authenticate("github", {
    successRedirect: BASE_URL,
    failureRedirect: "/auth/login/failed",
  })
);
router.get(
  "/google/redirect",
  passport.authenticate("google", {
    successRedirect: BASE_URL,
    failureRedirect: "/auth/login/failed",
  })
);
router.get(
  "/instagram/redirect",
  passport.authenticate("instagram", {
    successRedirect: BASE_URL,
    failureRedirect: "/auth/login/failed",
  })
);

router.get(
  "/spotify/redirect",
  passport.authenticate("spotify", {
    successRedirect: BASE_URL,
    failureRedirect: "/auth/login/failed",
  })
);

module.exports = router;
