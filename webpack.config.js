const path = require('path');

module.exports = {
    entry: './src/index.ts',
    // devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'forms-design.js',
        libraryTarget: 'commonjs2' // 否则导出空对象
    }
};