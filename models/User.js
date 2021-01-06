const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: String,
  authByProvider: String,
  screenName: String,
  providerId: String,
  profile: Object,
});

module.exports = model("User", schema);
