const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const db = require('./models/index');

const session = require('express-session');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const homeRouter = require('./routes/home');
const bodyParser = require('body-parser');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: 'anything' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/')));
app.use('/jquery', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/home', homeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

passport.use(new Strategy({
	usernameField: 'email',
	passwordField: 'password'
},
function(username, password, cb) {
	db.User.findOne({
		where: {
			email: username
		},
		raw : true
	}).then(function(user){
		if (!user) { return cb(null, false); }
		if (user.password != password) { return cb(null, false); }
		return cb(null, user);
	}).catch(function(error){
		if (error) { return cb(null, error); }
	});
}));

passport.serializeUser(function(user, cb) {
	cb(null, user.email);
});

passport.deserializeUser(function(username, cb) {
	db.User.findOne({
		where: {
			email: username
		},
		raw : true
	}).then(function(user) {
		cb(null, user.id);
	});
});



// error handler
app.use(function(err, req, res) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
