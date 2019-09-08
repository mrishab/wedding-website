const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    devServer: {
        port: 9000,
        host: "0.0.0.0"
    },

    devtool: "eval-source-map",

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    resolve: {
        extensions: ['.js', '.json']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }, {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }, {
                test: /\.(ttf|eot|svg|png|jpe?g|gif|ico)$/,
                loaders: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }, {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            }, {
                // Commented out because a dependency: gm throws an error
                // test: /\.(png|jpe?g|gif|ico)$/,
                // loaders: [{
                //     loader: 'image-maxsize-webpack-loader',
                //     options: {
                //         "max-width": 1080,
                //         "max-height": 1920,
                //     }
                // }]
            }, {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html'
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false
        }),

        new CleanWebpackPlugin()
    ],
}