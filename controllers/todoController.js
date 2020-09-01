const session = require('express-session');
const express = require('express');

module.exports = function(app, db, passport) {

  app.get('/', function(req,res){
    res.render('home')
  })

  app.get('/contact', function(req,res){
    res.render('contact')
  })

  app.get('/resume', function(req,res){
    res.render('resume')
  })

  app.get('/Activities', function(req,res){
    res.render('act')
  })

  app.get('/research', function(req,res){
    res.render('re')
  })



};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/signin');
}
