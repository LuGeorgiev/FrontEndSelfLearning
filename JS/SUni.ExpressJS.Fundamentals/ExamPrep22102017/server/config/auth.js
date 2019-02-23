module.exports = {
    isAuthenticated: (req, res, next) => {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.redirect('/login');
        }
    },
    isInRole: (role) => (req, res, next) => {
        if (req.isAuthenticated() && req.user.roles.indexOf(role) > -1) {
            req.locals.role = role;
            next();
        } else {
            res.redirect('/login');
        }
    }
}