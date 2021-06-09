const mongoose = require("mongoose");
// const mongodb = require("mongodb");
require("dotenv").config({ path: "./src/.env" });

const connectDB = async () => {

await mongoose.connect("mongodb+srv://dssatpute:QADxgC2bUrQ1n6dm@cluster0.snzea.mongodb.net/collections?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });
  console.log("Connected DB");
};

module.exports = connectDB;
