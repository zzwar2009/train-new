const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports={
    // mode:'production',
    mode:'development',
    entry: './src/router/app7.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.[hash].js',
        // publicPath:'/'
    },
    devtool:'eval-source-map',
    module: {
        rules: [
            //eslint验证
            // {
            //     test: /\.js$/,
            //     loader: 'eslint-loader',
            //     enforce: "pre",
            //     include: [path.resolve(__dirname, 'src')], // 指定检查的目录
            //     options: { fix: true } // 这里的配置项参数将会被传递到 eslint 的 CLIEngine   
            // },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                },
                include: path.join(__dirname,'src'),
                exclude:/node_modules/
            },
            {
                test: /\.css/,
                include: path.resolve(__dirname,'src'),
                exclude: /node_modules/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                },'css-loader','postcss-loader']
            },
            {
                test: /\.scss/,
                include: path.resolve(__dirname,'src'),
                exclude: /node_modules/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                },'css-loader','postcss-loader','sass-loader']
            },
            {
                test:/\.(jpg|png|bmp|gif)/,
                    use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:4096,
                            outputPath:'/img',
                            // publicPath:'http://xx.com/'/图片cdn位置
                        }
                    }
                ]
            },
            {test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/, loader: "file-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                removeAttributeQuotes:true
            },
            hash: true,
            template:  __dirname + "/src/index.tmpl.html", // 源模板文件
            filename:'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename:'[id].css'
        }),
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        compress:true,
        port:8080,
        proxy: {
            '/app': {
                target: 'https://www.gh-cms.com',
                // pathRewrite: {'^/api' : ''},
                changeOrigin: true,     // target是域名的话，需要这个参数，
                secure: false,          // 设置支持https协议的代理
            },
        }
    },
    resolve: {
        alias: {
            "ui": path.join(process.cwd(), "./src/components/ui"),
            "business": path.join(process.cwd(), "./src/components/business"),
            "actions":path.join(process.cwd(), "./src/actions"),
            "reducers":path.join(process.cwd(), "./src/reducers"),
            "styles": path.join(process.cwd(), "./src/styles"),
            "common": path.join(process.cwd(), "./src/common")
        }
    }
}