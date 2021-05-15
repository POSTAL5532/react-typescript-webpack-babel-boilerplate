const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "none",
    entry: {
        app: path.join(__dirname, "src", "index.tsx")
    },
    target: "web",
    devtool: "source-map",
    devServer: {
        port: 3001,
        contentBase: path.join(__dirname, "build"),
        compress: true,
        hot: true,
        historyApiFallback: true
    },

    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules|test/,
                use: "babel-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: 'images',
                            publicPath: 'images'
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: 'fonts',
                            publicPath: 'fonts'
                        }
                    }
                ]
            }
        ],
    },
    resolve: {
        modules: [
            path.resolve(__dirname, "node_modules"),
            path.resolve(__dirname, "src/")
        ],
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, "build"),
        publicPath: "/"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]
};