/**
 * Created by krido02 on 4/7/2016.
 * 
 * 
 */
module.exports = {
    entry: './tutorial-types/5 - child/main_child.js',
    output: {
        path: './',
        filename: 'index.js'
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