const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: "./src/index.js",

    devServer: {
        port: 9000,
        host: "0.0.0.0"
    },

    devtool: "eval-source-map",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/"
    },

    resolve: {
        extensions: [".js", ".json"]
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }, {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }, {
                test: /\.(webp|ttf|eot|svg|png|jpe?g|gif|ico)$/,
                loaders: [{
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]"
                        }
                    }
                ]
            }, {
                test: /\.html$/,
                use: ["html-loader"]
            }
        ]
    },

    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsWebpackPlugin({})
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
            filename: "index.html"
        }),

        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
            ignoreOrder: false
        }),

        new CleanWebpackPlugin()
    ],
}