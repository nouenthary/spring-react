const path = require('path');

module.exports = {
    entry: './src/main/resources/js/app.js',
    devtool: 'sourcemaps',
    cache: true,
    mode: 'development',
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            }
        ]
    },
    // devServer: {
    //     contentBase: path.join(__dirname, 'js'),
    //     publicPath: '/build',
    //     port: 8000,
    //     proxy: {
    //         "**": "http://localhost:8080"
    //     }
    // },
};