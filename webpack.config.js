module.exports = {
    entry: './src/main.jsx',
    output: {filename: './public/assets/js/bundle.js'},
    module: {
        loaders: [{
            test: /\.jsx?$/, // 拡張子がjsxで
            exclude: /node_modules/, // node_modulesフォルダ配下でなければ
            loader: 'babel-loader', // babel-loaderを使って変換する
            query: {
                plugins: ["transform-react-jsx"] // babelのtransform-react-jsxプラグインを使ってjsxを変換
            }
        }]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: 'public',
        hot: true, 
        inline: true, 
        port: 8081
    }
}