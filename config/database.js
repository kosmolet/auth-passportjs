const mongoose = require("mongoose");

const envFiles = {
  development: ".env",
  test: ".env.test",
};

require("dotenv").config({ path: envFiles[process.env.NODE_ENV] });

const connectDB = async () => {
  const mongoConnectionString = process.env.MONGO_URI;
  try {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(mongoConnectionString, opts);
    console.log({ mongoConnectionString });
  } catch (err) {
    console.log(`Fail to connect with database ${mongoConnectionString}`);
  }
};
module.exports = { connectDB };
