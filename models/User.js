const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: String,
  screenName: String,
  twitterId: String,
  profileImageUrl: String,
});

module.exports = model("User", schema);
