/*module.exports = app => {
    const user = require("../controller/user.controller.js");
  
    // Create a new Customer
    app.post("/user", user.create);
  
    // Retrieve all Customers
    //.get("/customers", user.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/user/:userId", user.findOne);

  };
  */

  var express = require('express');
  var router = express.Router();

  const UserController = require('../controller/user.controller');


  
  router.get('/',UserController.List);
  router.post('/',UserController.Insert);
  router.put('/',UserController.Update);
  router.delete('/',UserController.Delete);
        

module.exports = router;