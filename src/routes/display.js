const router=require('express').Router()
const fileinfo = require("../files/filemodel");
require("dotenv").config({ path: "./.env" });

router.get('/:uuid',async (req,res)=>
{
    const file = await fileinfo.findOne({ uuid: req.params.uuid });
    if(!file) {
         return res.render('download', { error: 'Link has been expired.'});
    } 
    const files = await file.save();
    res.render("download", {
        uuid: files.uuid,
        fileName: files.filename,
        fileSize: files.size,
        downloadLink: `${process.env.APP_BASE_URL}files/download/${files.uuid}`
      })
})

module.exports=router