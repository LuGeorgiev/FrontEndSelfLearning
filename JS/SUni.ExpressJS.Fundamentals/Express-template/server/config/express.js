const express = require('express');
const handlebars = require('express-handlebars');
const cookiePerser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');


module.exports = (app) => {
    app.engine('.hbs', handlebars({
        extname: '.hbs',
        defaultLayout: 'main'
    }));

    app.use(cookiePerser());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(session({
        secret: 'golQma-TaInA',
        resave: false,
        saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use((req, res, next) => {
        if (req.user) {
            res.locals.currentUser = req.user;
        }
        next();
    });

    app.set('view engine', '.hbs');
    app.use(express.static('public'));

    console.log('Express is ready');
}