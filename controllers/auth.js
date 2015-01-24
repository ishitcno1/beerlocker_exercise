var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var User = require('../models/user');

passport.use(new BasicStrategy(function(username, password, cb) {
    User.findOne({ username: username }, function(err, user) {
        if (err)
            return cb(err);

        if (!user)
            return cb(null, false);

        if (user.verifyPassword(password, function(err, isMatch) {
            if (err)
                cb(err);

            if (!isMatch)
                return cb(null, false);

            return cb(null, user);
        }));
    });
}));

exports.isAuthenticated = passport.authenticate('basic', { session: false });
