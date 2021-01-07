const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: { type: String, default: "not provided" },
  email: { type: String, default: "not provided" },
  image: { type: String, default: "not provided" },
  birthday: { type: String, default: "not provided" },
  location: { type: String, default: "not provided" },
  provider: { type: String, default: "not provided" },
  providerId: { type: String },
  profile: Object,
});

module.exports = model("User", schema);
