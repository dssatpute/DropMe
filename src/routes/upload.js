const express = require("express");
const app = express();
const path = require("path");
const fileinfo = require("../files/filemodel");
const router=require('express').Router()
const upload = require("../files/fileupload");
const uuid4 = require("uuid").v4;
require("dotenv").config({ path: "./.env" });

app.use(express.static('./src/public'))

router.post("/", upload.single("myfile"), async (req, res) => {
    const file = new fileinfo({
      filename: req.file.filename,
      path: req.file.path,
      uuid: uuid4(),
      size: req.file.size,
      link: `${process.env.APP_BASE_URL}files/download/${uuid4()}`,
    });
    const files = await file.save();
    res.send(`${process.env.APP_BASE_URL}files/download/${files.uuid}`)
    
  });

  module.exports=router
