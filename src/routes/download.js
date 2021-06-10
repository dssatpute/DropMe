const router=require('express').Router()
const fileinfo = require("../files/filemodel");

router.get('/:uuid',async (req,res)=>
{
    const file = await fileinfo.findOne({ uuid: req.params.uuid });
    const response = await file.save();
    const filePath = `${__dirname}/../../${file.path}`;
    res.download(filePath);
})

module.exports=router