const mongoose = require("mongoose");

const DB_URI = "mongodb://localhost:27017/funch";

mongoose.connect(DB_URI, { useNewUrlParser: true });

mongoose.connection.once("open", () =>
  console.log("Connected to a MongoDB instance")
);
mongoose.connection.on("error", error => console.log(error));

module.exports = mongoose;
