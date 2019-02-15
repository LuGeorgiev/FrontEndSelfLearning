const express = require('express');

const env = process.env.NODE_ENV || 'development';
const settings = require('./server/config/settings')[env];
require('./server/config/database')(settings) //config instead of setting in presentation

let app = express();
require('./server/config/express')(app);
require('./server/config/routes')(app);


app.listen(1337);