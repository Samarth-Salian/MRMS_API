const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
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

// Passport middleware
app.use(passport.initialize()); // Used to initialize passport
//app.use(passport.session()); // Used to persist login sessions

// Passport config
require('./config/passport')(passport);

app.use('/', require('./routes/index.route'));
app.use('/auth', require('./routes/passport.route'));
app.use('/meetings', require('./routes/meeting.route'));
app.use('/users', require('./routes/user.route'));
app.use('/rooms', require('./routes/room.route'));
app.use('/locations', require('./routes/location.route'));

app.listen(process.env.PORT, () => {
    console.log(`listening to ${process.env.PORT} port running on ${process.env.NODE_ENV}`);
})