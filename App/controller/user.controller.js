  const UserModel = require('../model/user.model');
  var express = require('express');

  exports.Insert = function(req,res,next){
    UserModel.UserInsert(req.body)
    .then(result=>{res.send(result);})
    .catch(err=>{
      res.send('error'+ err);
    });
  }
  
  exports.List= function(req,res,next){
    UserModel.UserList()
    .then(result=>{res.send(result);})
    .catch(err=>{
      res.send('error'+err);
    });
  }

  exports.Update = function(req,res,next){
    UserModel.UserUpdate(req.body)
    .then(result=>{res.send(result);})
    .catch(err=>{
      res.send('error'+ err);
    });
  }
  exports.Delete = function(req,res,next){
    UserModel.UserDelete(req.body)
    .then(result=>{res.send(result);})
    .catch(err=>{
      res.send('error'+ err);
    });
  }