const staticHandler = require('./staticHandler');
const errorHandler = require('./errorHandler');
const homeHandler = require('./homeHandler');
const movieHandler = require('./movieHandler');

module.exports = [
    homeHandler,
    movieHandler,
    staticHandler,
    errorHandler //Should be last
]