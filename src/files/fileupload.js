const multer = require("multer");

const path = require("path");
const router = require("express").Router();

const storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, "src/uploads");
  },
  filename: function (request, file, callback) {
    console.log(file);
    const uniqueName = Date.now() + "" + path.extname(file.originalname);
    console.log(uniqueName);
    callback(null, file.originalname);
  },
});

let upload = multer({ storage: storage });
module.exports = upload;
