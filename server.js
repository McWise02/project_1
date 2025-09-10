const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config(); // load .env into process.env
const app = express();
const mongodb = require('./database/connect');

const contactRoutes = require('./routes/contacts');


app.use(express.json());
app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use('/contacts', contactRoutes);

  
const port = process.env.PORT || 3000;  // fallback for local dev
const host = process.env.HOST || "localhost"; 

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});