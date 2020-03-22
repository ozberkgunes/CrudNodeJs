const express = require('express');
const bodyParser = require("body-parser");
const app = express();
var usersRouter = require('./App/routes/user.router.js');
//Veriyi Json olarak donusturuyoruz
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

app.use("/api/user",usersRouter);


// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});