const encryption = require('../utilities/encription');
const User = require('mongoose').model('User');

module.exports = {
    registerGet: (req, res) => {
        res.render('user/register');
    },
    registerPost: async(req, res) => {
        const reqUser = req.body;
        const salt = encryption.generateSalt();
        const hashedPass = encryption.generateHashedPass(salt, reqUser.password);
        try {
            const user = await User.create({
                username: reqUser.username,
                hashedPass,
                salt,
                firstName: reqUser.firstName,
                lastName: reqUser.lastName,
                roles: []
            });
            req.logIn(user, (err, user) => {
                if (err) {
                    res.locals.globalError = err;
                    res.render('/register', user);
                } else {
                    res.redirect('/');
                }
            })
        } catch (error) {
            console.log(error);
            res.locals.globalError = error;
            res.render('/register');
        }

    },
    logoutPost: (req, res) => {
        req.logout();
        res.redirect('/');
    },
    loginGet: (req, res) => {
        res.render('user/login');
    },
    loginPost: async(req, res) => {
        const reqUser = req.body;
        try {
            const user = await User.findOne({
                username: reqUser.username
            });
            if (!user) {
                errorHandler('Invalid user data!');
                return;
            }
            if (!user.authenticate(reqUser.password)) {
                errorHandler('Invalid user data!');
                return;
            }
            req.logIn(user, (err, user) => {
                if (err) {
                    errorHandler(err);
                } else {
                    res.redirect('/');
                }
            })
        } catch (error) {
            errorHandler(error);
        }

        function errorHandler(e) {
            console.log(e);
            res.locals.globalError = e;
            res.render('user/login');
        }
    }
}