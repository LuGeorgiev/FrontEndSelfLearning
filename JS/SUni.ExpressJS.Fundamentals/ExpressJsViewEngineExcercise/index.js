const environment = 'development';

const express = require('express');
const settings = require('./config/settings')[environment];
const database = require('./config/database');
const server = require('./config/server');
const routes = require('./config/routes');

database(settings);

const app = express();

server(app);
routes(app);

const port = settings.port;
app.listen(port, () => `Server running on port: ${port}..`);