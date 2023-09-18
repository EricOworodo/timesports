const express = require('express');
const { body } = require('express-validator');
require('dotenv').config();
require('./Models/db')
require('./Models/post')
require('./Models/user')
var cors = require('cors');
const mongoose = require("mongoose");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const { MONGO_URL, PORT } = process.env;

const app = express();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

 app.use(cors());
 app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "http://localhost:5173", "*");
     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
     res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
   next();
   });

  app.use(
    cors({
      origin: ["http://localhost:4000", "http://localhost:5173", "https://api.timesports.ng"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
app.use(express.json());
app.use(cookieParser());

app.use("/", authRoute);
