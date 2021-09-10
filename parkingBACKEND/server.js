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

const PORT = process.env.PORT || 8070;
app.use(express.urlencoded({
    extended: true
  }));
//app.use(bodyParser.json());

const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    //useCreateIndex: true,
    //useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log("Connected to mongodb")
})

const parkingRouter = require("./routes/parking.js");
app.use("/user", require("./routes/userRouter"))
app.use("/api", require("./routes/upload"))
app.use("/parking",parkingRouter);

app.listen(PORT, () => {
    console.log('Server is up and running on port number: %d',PORT)
})