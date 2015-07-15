var logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),   
    session = require('express-session');
   var mongoose = require('mongoose');


  
var flash = require('connect-flash')
  , express = require('express')
  , passport = require('passport')
  , util = require('util')
  , LocalStrategy = require('passport-local').Strategy;

// var   methodOverride = require('method-override');

module.exports = function(app) {
  
   
 // var users = [
 //   { id: 1, username: 'bob', password: 'secret', email: 'bob@example.com' }
 // , { id: 2, username: 'joe', password: 'birthday', email: 'joe@example.com' }];

function findById(id, fn) {
   var User =  mongoose.model('User');
   User.findById(User, function(err, user) {
      if(err)
      {
        return fn(null, null);
      }
      return fn(null, user);
   });
    
}

function findByUsername(username, fn) {
  var User =  mongoose.model('User');
   User.findOne({username: username}, function(err, user) {
      if(err)
      {
        return fn(null, null);
      }
      return fn(null, user);
   });
    
	 
}


// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.
passport.serializeUser(function(user, done) {
  console.log("user: " + user);
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {	
  findById(id, function (err, user) {
    done(err, user);
  });
});


// Use the LocalStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a username and password), and invoke a callback
//   with a user object.  In the real world, this would query a database;
//   however, in this example we are using a baked-in set of users.
passport.use(new LocalStrategy(
  function(username, password, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      
      // Find the user by username.  If there is no user with the given
      // username, or the password is not correct, set the user to `false` to
      // indicate failure and set a flash message.  Otherwise, return the
      // authenticated `user`.
      findByUsername(username, function(err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false, { message: 'Unknown user ' + username }); }
        if (user.password != password) { return done(null, false, { message: 'Invalid password' }); }
        return done(null, user);
      })
    });
  }
));


app.use(logger('combined'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(session({secret: 'supernova', saveUninitialized: true, resave: true}));
app.use(passport.initialize());
app.use(passport.session());
  // persistent login sessions (recommended).
 app.use(flash());

  //app.use(app.router);

  function addUser(req, res, next) {
    var User =  mongoose.model('User');
    var user = new User(req.body);
  
    user.save(function (err) {
    if (err) {
       req.flash('error', 'Sorry! We are not able to add user!');
    }
    else
    {
      return res.status(200).send('User created');
    }
 
  });
    
  };
  
 function loginUser(req, res, next) {
    console.log("request body: " + JSON.stringify(req.body));

    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err) }
      if (!user) {
        req.flash('error', info.message);
        //return res.redirect('/login')
       // res.send("test: " + user);
       console.log("no user. log in error");
       return res.status(400).send('Current user does not exist');
      }
      req.logIn(user, function(err) {
        if (err) { 
          console.log("log in error");
        	//res.send("err false");
        	return next(err); 
        }
        //return res.redirect('/users/' + user.username);
        //res.send("true");
         console.log("it logged in!");
          return res.status(200).send('we are logged in');
      });
    })(req, res, next);
  };

  app.get('/api/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
 
  app.post('/api/login', loginUser);
  app.post('/api/user' , addUser);
};