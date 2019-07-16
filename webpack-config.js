const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const extractTheme1 = new MiniCssExtractPlugin({filename: 'theme1.scss'});
const __home = path.resolve(__dirname, '');

module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        filename: "[name].js",
        path: path.resolve("dist")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {  includePaths: [path.resolve(__home, "src/light-theme"),]}

                    }
                ]
                // Want to do something like this to generate a second CSS theme bundle based on the shared CSS input extracted from the JS
                // use: [
                //     MiniCssExtractPlugin.loader,
                //     "css-loader",
                //     {
                //         loader: "sass-loader",
                //         options: {  includePaths: [path.resolve(__home, "src/dark-theme"),]}
                //
                //     }
                // ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "light-theme.css"
        })
        // new MiniCssExtractPlugin({
        //     filename: "dark-theme.css"
        // })
    ]
};
