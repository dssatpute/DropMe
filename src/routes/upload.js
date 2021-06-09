const express = require("express");
const app = express();
const path = require("path");
const fileinfo = require("../files/filemodel");
const router=require('express').Router()
const upload = require("../files/fileupload");
const uuid4 = require("uuid").v4;


require("dotenv").config({ path: "./src/.env" });
app.use(express.static('./src/public'))
router.post("/", upload.single("myfile"), async (req, res) => {
    const file = new fileinfo({
      filename: req.file.filename,
      path: req.file.path,
      uuid: uuid4(),
      size: req.file.size,
      link: `${process.env.APP_BASE_URL}/files/downloads/${uuid4()}`,
    });
    const files = await file.save();
    res.render("download", {
      uuid: files.uuid,
      fileName: files.filename,
      fileSize: files.size,
      downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`
    })
    
  });

  module.exports=router
