//  When a user tries to log in, we run a query in our database to see if the email exists in our system, if there is no user, we return a message to be displayed on the front end letting the user know that the provided email is incorrect.  

//If the passwords do not match, we return another message to be displayed on the front end letting the user know that the provided password was incorrect. 

//If the passwords do match, we use our verification function “done” to return the user that was matched.


var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

//we tell Passport our username field will be an email on lines 9-11
// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "email"
  },
  function(email, password, done) {
    // When a user tries to sign in this code runs
    db.User.findOne({
      where: {
        email: email
      }
    }).then(function(dbUser) {
      // If there's no user with the given email
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
));

// in the Passport.js file, lines 40-42 we use Passports “serializeUser” function, which essentially keeps the user we pass in “serialized” in the session, allowing the user to navigate throughout different pages without needing to log in for every page. 

//Conversely, “deserializeUser” removes the serialized user info from the session, and the next loaded page would require the user to log in again, think of this as logging out. 

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
// export passport to use what we just configured in our routes.
module.exports = passport;
