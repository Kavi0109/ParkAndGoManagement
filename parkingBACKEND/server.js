const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload')
const path = require('path')
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));
//app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;


mongoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParser: true,
    useUnifiedTopologyL: true,
    useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection Success!")
})

const parkingRouter = require("./routes/parking.js");
app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/upload'))

app.use("/parking",parkingRouter);

app.listen(PORT, () => {
    console.log('Server is up and running on port number: %d',PORT)
})