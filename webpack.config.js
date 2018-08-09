var path = require('path');

module.exports = {
    mode: "development",
    entry: [
        './build/js/app.js',
        './build/scss/app.scss',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/, 
                use: [
                    'url-loader'
                ]
            }
        ]
    }
};