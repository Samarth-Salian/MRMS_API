var GoogleStrategy = require('passport-google-oauth20').Strategy;
var User = require('../models/user.model');

module.exports = function (passport) {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.DOMAIN + '/auth/google/callback'
    },
        function (accessToken, refreshToken, profile, done) {
            console.log(`accessToken : ${accessToken} 
                   refreshToken: ${refreshToken}
                   profile     : ${JSON.stringify(profile)} `);
            //check user table for anyone with a google ID of profile.id
            User.findOne({
                'googleId': profile.id
            }, function (err, user) {
                if (err) {
                    return done(err);
                }
                //If No user was found, create a new user with values from Google
                if (!user) {
                    user = new User({
                        displayName: profile.displayName,
                        emailId: profile.emails[0].value,
                        firstName: profile.name.givenName,
                        lastName: profile.name.familyName,
                        provider: profile.provider,
                        image: profile.photos[0].value,
                        googleId: profile.id

                    });
                    user.save(function (err) {
                        if (err) {
                            console.log(err);
                        }
                        return done(null, user);
                    });
                } else {
                    //found user. Return
                    return done(null, user);
                }
            });
        }

    ));
    // Used to stuff a piece of information into a cookie
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    // Used to decode the received cookie and persist session
    passport.deserializeUser((id, done) => {
        console.log(" received ID from cookie :"+id);
        User.findById(id, (err, user) => done(err, user));
    });
}
