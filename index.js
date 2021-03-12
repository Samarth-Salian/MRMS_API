const express = require('express');
const Joi = require('joi');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
//const cookieSession = require('cookie-session');
const session = require('express-session');
const MongoStore = require('connect-mongo').default;
const passport = require('passport')

const app = express();

var connectDB = require('./config/database');
// Load config
dotenv.config({ path: './config/config.env' })

app.use(express.json());

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

connectDB();    

// cookieSession config

/*
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // One day in milliseconds
    keys: [process.env.COOKIE_KEY]
}));

*/
// Sessions
app.use(
    session({
      secret: process.env.COOKIE_KEY,
      resave: false, //dont save a sesison if nothing is modified
      saveUninitialized: false, //dont create a session if something is not stored
      store: MongoStore.create({ mongoUrl: process.env.ATLAS_DB })
    })
  )

// Passport middleware
app.use(passport.initialize()); // Used to initialize passport
app.use(passport.session()); // Used to persist login sessions

// Passport config
require('./config/passport')(passport);


app.use('/', require('./routes/index.route'));
app.use('/auth', require('./routes/passport.route'));
app.use('/meetings', require('./routes/meeting.route'));
app.use('/users', require('./routes/user.route'));
app.use('/rooms', require('./routes/room.route'));

app.listen(process.env.PORT, () => {
    console.log(`listening to ${process.env.PORT} port running on ${process.env.NODE_ENV}`);
})