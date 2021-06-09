const mongoose = require("mongoose");

const file = mongoose.Schema(
  {
    filename: {
      type: String,
      required: true,
    },
    uuid: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
    },
    sender: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  { timestamps: true }
);

const Model = mongoose.model("filesinfo", file);
module.exports = Model;
