const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader"
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            disable: false, // webpack@2.x and newer
                        },
                    },
                    ],
                }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: "src/assets/img",
                    to: "images"
                },
                {
                    from: "src/index.html",
                    to: ""
                }, 
                {
                    from: "src/brushes.html",
                    to: ""
                },
                {
                    from: "src/selections.html",
                    to: ""
                },
                {
                    from: "src/inspirations.html",
                    to: ""
                },
                {
                    from: "src/formulas.html",
                    to: ""
                },
                {
                    from: "src/miscellaneous.html",
                    to: ""
                },
                {
                    from: "src/map.html",
                    to: ""
                },
                {
                    from: "src/others.html",
                    to: ""
                }
            ]
        })
    ]
};