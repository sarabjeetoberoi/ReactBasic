//entry->output file
const path=require('path');
//way to expose something i.e object to a file
module.exports={
    entry:'./src/app.js',
    output:{
        path: path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module:{
    rules:[{
        loader:'babel-loader',
        test: /\.js$/,
        exclude:/node_modules/
    },{
        test:/\.s?css$/,
        use:[
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
    }]
},
//used to display where exactly the error occurs
devtool:'cheap-module-eval-source-map',
//faster and make bundle in memory so save memory and fast changes reflection
devServer:{
contentBase:path.join(__dirname,'public')
}
};
