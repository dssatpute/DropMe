const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const connectDB = require("./config/connection");
const router=require('express').Router()
const ejs = require("ejs");
app.set("view engine", "hbs");
app.set("views",__dirname+'/views');
app.use(express.static(__dirname+'/public'))
connectDB();



app.use('/api/files', require('./routes/upload'));
app.use('/files', require('./routes/display'));
app.use('/files/download', require('./routes/download'));

app.listen(PORT, () => {
  console.log(`Started at ${PORT}`);
});
