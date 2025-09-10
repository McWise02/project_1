const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config(); // load .env into process.env
const app = express();


app.use(express.json());
app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })

const port = process.env.PORT || 3000;  // fallback for local dev
const host = process.env.HOST || "localhost"; 

app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
})