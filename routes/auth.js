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

//
// app.get(
//   "/auth/facebook/callback",
//   passport.authenticate("facebook"),
//   (req, res) => {
//     res.redirect("/profile");
//   }
// );

// app.get(
//   "/auth/amazon/callback",
//   passport.authenticate("amazon"),
//   (req, res) => {
//     res.redirect("http://localhost:3000/profile");
//   }
// );

// app.get(
//   "/auth/github/callback",
//   passport.authenticate("github"),
//   (req, res) => {
//     res.redirect("/profile");
//   }
// );

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google"),
//   (req, res) => {
//     res.redirect("/profile");
//   }
// );

// app.get(
//   "/auth/instagram/callback",
//   passport.authenticate("instagram"),
//   (req, res) => {
//     res.redirect("/profile");
//   }
// );

// app.get(
//   "/auth/spotify/callback",
//   passport.authenticate("spotify"),
//   (req, res) => {
//     res.redirect("http://localhost:3000/profile");
//   }
// );

// app.get("/user", (req, res) => {
//   res.send(user);
// });

// app.get("/auth/logout", (req, res) => {
//   user = {};
//   res.redirect("/");
// });

module.exports = router;
