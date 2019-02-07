let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let port = 1337;

app.use(express.static('content'));
app.use(bodyParser.urlencoded({ extended: true }));

let authentication = (req, res, next) => { //Midelware
    if (!user.isAuthenticated()) {
        res.redirext('/login');
    } else {
        next();
    }
}

app.get('/home/index', authentication, (req, res) => {
    res.send('Hello from express');
})


app.get('/courses/:id', (req, res) => {
    let params = req.params;
    console.log(params);
    console.log(params.id);

    res.send(params)
})

app.get('/courses/:id/:title/:date', (req, res) => {
    let params = req.params;
    console.log(params);
    console.log(params.id);

    res.send(params)
})

app
    .route('/admin')
    .get((req, res) => {

    })
    .post((req, res) => {

    });

app.get('/home/invoices', (req, res) => {
    res.download('./index.js'); //will force browser to download
});

app.get('/home/invoices', (req, res) => {
    res.send(__dirname + '/index.js'); //will force browser to show file 
});

app.post('/save-form', (req, res) => {
    console.log(req.body);
    console.log(req.body.firstName);
    console.log(req.body.age);

    res.redirect("/");
})

app.use
app.listen(port, () => console.log(`Running on port: ${port}... `));