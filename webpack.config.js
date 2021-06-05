const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html"
});

const outputPath = path.join(__dirname, 'dist');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: outputPath,
    },
    plugins: [htmlPlugin],
    devServer: {
        public: outputPath,
        static: outputPath,
        compress: true,
        port: 9000
    }
};