const path = require('path');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    mode: "development",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            handlebars: 'handlebars/dist/handlebars.min.js'
        }
    },
    plugins: [
        new copyWebpackPlugin([{
                form: './src/views',
                to: 'views'
            },
            {
                form: './src/css',
                to: 'css'
            },
            {
                form: './src/lib',
                to: 'lib'
            }
        ])
    ]
};