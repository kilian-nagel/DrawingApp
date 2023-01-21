const path = require("path");

module.exports = {
    context:path.join(__dirname,"src"),
    entry:"./index.tsx",
    output:{
        filename:"bundle.js",
        path:path.join(__dirname,"public")
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js','.jsx', '.json']
    },
    module:{
        rules:[
            {
                test: /\.(tsx|jsx|ts|js)?$/,
                use: "babel-loader",
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
            },
        ]   
    }
}