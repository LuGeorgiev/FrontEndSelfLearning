const home = require('./controllers/home');
const user = require('./controllers/user');
const furniture = require('./controllers/furniture');
import Sammy from 'sammy';
import '../node_modules/sammy/lib/plugins/sammy.handlebars';

const app = Sammy('#container', function() {
    this.use('Handlebars', 'hbs');

    this.get('#/', home.index);
    this.get('#/login', user.getLogin);
    this.post('#/login', user.postLogin);
    this.get('#/logout', user.logout);
    this.get('#/register', user.getRegister);
    this.post('#/register', user.postRegister);
    this.get('#/furniture/create', furniture.getCreate);
    this.post('#/furniture/create', furniture.postCreate);
});

$(function() {
    app.run('#/');
});