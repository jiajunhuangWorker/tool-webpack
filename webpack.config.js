const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const  { CleanWebpackPlugin }  = require("clean-webpack-plugin");
const webpack = require('webpack');
module.exports={
	name: 'mobile'
	,mode: 'development'
	,entry:{
		app:'./src/index.js',
		main: ['webpack-hot-middleware/client?name=mobile', 'mobile.js']
	}
	,devtool: 'inline-source-map'//快速查找错误
	,plugins: [
      new CleanWebpackPlugin()
      ,new HtmlWebpackPlugin({
        title: '开环境'
      })
      ,new webpack.optimize.OccurrenceOrderPlugin()
      ,new webpack.HotModuleReplacementPlugin()
      ,new webpack.NoEmitOnErrorsPlugin()

    ]
    ,output:{
		filename:'[name].bundle.js'
		,path:path.join(__dirname,'webpackst')
		,publicPath: '/'
	}
};
