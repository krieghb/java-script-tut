/**
 * Created by krido02 on 4/26/2016.
 * 
 * Testing module for using webpack with react
 * 
 */


module.exports = {
    entry: [
        "./js/Part 1/comp_lifecycle.js"
    ],
    output: {
        filename: "index_bundle.js",
        path: __dirname + '/dist'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
