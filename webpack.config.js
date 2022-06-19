const path = require("path")
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin}=require('vue-loader')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode:'production',
    entry: "./src/main.js", // 入口
    output: { 
        path: path.join(__dirname, "lib"), // 出口路径
        filename: "webpack-demo.js" // 出口文件名
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public/index.html')
          }),
        new  VueLoaderPlugin() ,
        new MiniCssExtractPlugin()
    ],
    devServer: {
        port: 3000, // 端口号
        open: true
      },
      
    module: { 
        rules: [ // loader的规则
          {
            test: /\.css$/, // 匹配所有的css文件
            // use数组里从右向左运行
            // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
            // 再用 style-loader 将样式, 把css插入到dom中
            use: [ "style-loader", "css-loader"]
          },
          {
            test: /\.less$/,
            // 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
            use: [ "style-loader", "css-loader", 'less-loader']
        },
        {
            test: /\.(png|gif)$/i,
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 8 * 1024
              }
            },
            generator: {
              filename: 'images/[hash:6][ext]'
            }
          },
          { // webpack5默认内部不认识这些文件, 所以当做静态资源直接输出即可
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            type: 'asset/resource',
            generator: {
                filename: 'font-[name].[hash:6][ext]'
            }
        },
        {
            test: /\.js$/i,
            exclude: path.join(__dirname, 'node_modules'),
            use: [{
              loader: 'babel-loader',
              // options: {
              //   presets: ['@babel/preset-env']
              // }
            }]
          },
          {
            test: /\.vue/i,
            use: ['vue-loader']
          },
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
        ]
    }
}