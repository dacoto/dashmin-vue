var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: "development",
    entry: [
        './src/js/app.js',
        './src/scss/app.scss',
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
                    "sass-loader",
                ]
            },
            {
                test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                use: [
                    'url-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: ['.js'],
        alias: {
            'vue': 'vue/dist/vue.common.js'
        }
    },
};