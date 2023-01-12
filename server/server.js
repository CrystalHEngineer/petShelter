const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const port = 8000;
require("dotenv").config()
// const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use((req, res, next) => {
    res.header({"Access-Control-Allow-Origin": "*"});
    next();
  });
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});
app.use(express.static(path.join(__dirname, "..", "client", "build")));


const connectToDB = require('./config/mongoose.config');

require('./routes/pet.routes')(app);

console.log("Hellooooooo");
connectToDB().then(() => app.listen(port, () => console.log("Listening on port: " + port)));
