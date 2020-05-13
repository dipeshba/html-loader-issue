const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: [
        require.resolve("./src/html/pages/index.html"),
    ],
    mode: "development",
    plugins: [
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(css|pcss|postcss)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        }
                    },
                    { loader: 'extract-loader' },
                    { loader: 'css-loader', options: {} },
                    { loader: 'postcss-loader', options: {} }
                ],
            },
            {

                test: /\.file.js$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        }
                    },
                ]
            },
            {

                test: /\.html$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        }
                    },
                    { loader: 'extract-loader' },
                    {
                        loader: 'html-loader',
                        options: { },
                    },
                    {
                        loader: path.resolve(__dirname, 'loaders/nunjucks-loader.js'),
                    }
                ]
            },

            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [

                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        }
                    },
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            },
        ]
    }
};
