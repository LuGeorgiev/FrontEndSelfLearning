let express = require('express');
let handlebars = require('express-handlebars');
let app = express();

app.engine('.hbs', handlebars({
    extname: '.hbs',
    partialsDir: 'view/partials'
}));

app.set('view engine', '.hbs')

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Ivan'
    })

});

app.listen(1337);