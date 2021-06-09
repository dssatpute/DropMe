const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const connectDB = require("./config/connection");
const router=require('express').Router()
const hbs = require("hbs");
app.set("view engine", "hbs");
app.set("views",__dirname+'/views');
app.use(express.static('./src/public'))
connectDB();



app.use('/api/files', require('./routes/upload'));
app.use('/files/download', require('./routes/download'));

app.listen(PORT, () => {
  console.log(`Started at ${PORT}`);
});
