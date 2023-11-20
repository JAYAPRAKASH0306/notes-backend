const mongoose = require("mongoose");
require("dotenv").config();
mongodb=process.env.MONGODB_URL;

const connection = mongoose
  .connect(mongodb, {

  }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

module.exports = {
  connection,
};
