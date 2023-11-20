const mongoose = require("mongoose");
require("dotenv").config();
mongodb=process.env.MONGODB_URL;

const connection = mongoose
  .connect("mongodb+srv://jayaprakash:16p25l0052@jp.djhe0bu.mongodb.net/NOTESAPP", {

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
