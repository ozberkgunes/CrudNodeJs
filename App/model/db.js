const mysql = require("mysql");

const express = require('express');

exports.con = mysql.createConnection({
  host:"localhost",
  user:"root",
  port:"3306",
  password:"",
  database:"dbkentkart",
  debug: false

});