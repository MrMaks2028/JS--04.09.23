/*БАЗОВАЯ КОНФИГУРАЦИЯ ВЕБПАКА*/ 
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require

module.exports = {
    mode: 'development',
    entry: './src/index.js', // точка входа
    output: {                // точка выхода
        filename: 'main.js', // название файла
        path: path.resolve(__dirname, 'dist'), // куда поместится файл
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './static/index.html'
        }),
        new copyWebpackPlugin({
            patterns : [
                {from: './static/assets/', to: './'}
            ]
        })
    ]
};