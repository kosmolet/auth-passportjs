const cookieSession = require("cookie-session");
const { connectDB } = require("./config/database");
const express = require("express");
const passport = require("passport");
const passportConfig = require("./config/passport");
const session = require("express-session");
const auth = require("./middleware/auth.middleware");
const authRoutes = require("./routes/auth");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const { PORT, BASE_URL, COOKIE_KEY } = process.env;

const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: [COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(cookieParser());

app.use(passport.initialize());

app.use(passport.session());

app.use(
  cors({
    origin: BASE_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use("/auth", require("./routes/auth"));

app.get("/", auth, (req, res) => {
  res.status(200).json({
    authenticated: true,
    message: "user successfully authenticated",
    user: req.user,
    cookies: req.cookies,
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
