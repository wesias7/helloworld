
/**
 * Passport Strategies.
 * Author : wesias7
 */
module.exports = function(){
    var passport = require('passport');

    // service user in databases.
    var LocalStrategy = require('passport-local').Strategy;
    passport.use(new LocalStrategy(function(username, password, done){
        var user = {};
        return done(null, user);
    }));
    
    // guest user in databases.
    var JwtStrategy = require('passport-jwt').Strategy;
    passport.use(new JwtStrategy(function(username, password, done){
        var user = {};
        return done(null, user);
    }));

    return passport;
};