const express = require('express');
const app = express();
const session    = require('express-session');
const bodyParser = require('body-parser')
const todoController = require('./controllers/todoController');


// //For BodyParser
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
//
// // For Passport
// app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
// app.use(flash());

// var models = require("./models");

//load passport strategies
// require('./config/passport/passport.js')(passport,models.user);

// setting tamplating engine
// app.set('view engine', 'ejs');

// static file management
// app.use(express.static('./public'));

// linking controller files
// todoController(app);

//Sync Database
// models.sequelize.sync().then(function(){
// console.log('Nice! Database looks fine')
//
// }).catch(function(err){
// console.log(err,"Something went wrong with the Database Update!")
// });
// listeing to file

const path = require('path')
const PORT = process.env.PORT || 3000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('home'))
  .get('/contact', (req, res) => res.render('contact'))
  .get('/resume', (req, res) => res.render('resume'))
  .get('/Activities', (req, res) => res.render('act'))
  .get('/research', (req, res) => res.render('re'))
  .get('/mobile', (req,res) => res.render('mobile'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
