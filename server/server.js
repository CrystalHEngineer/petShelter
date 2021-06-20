const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
require("dotenv").config()
// const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use((req, res, next) => {
    res.header({"Access-Control-Allow-Origin": "*"});
    next();
  })  


require('./config/mongoose.config');

require('./routes/pet.routes')(app);

console.log("Hellooooooo");

app.listen(port, () => console.log("Listening on port: " + port));