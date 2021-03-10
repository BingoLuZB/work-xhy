const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin');
const targetFile = 'build'

let obj = {
    '': ['start'],
    'common': ['util', 'allConfig'],
    'modules': ['wxgame', 'defaultConfig', 'aftermath', 'changeTool'],
    'obfuscatorCode': [1, 2, 3, 4, 5]
}

function changeSrc(obj) {
    let target = {}
    for (let i in obj) {
        obj[i].map(item => {
            let str = path.join(__dirname, i, `${item}.js`)
            target[`${i}/${item}`] = str
        })
    }
    return target

}
module.exports = {
    entry: changeSrc(obj),
    output: {
        filename: "[name].js",
        path: path.join(__dirname, targetFile)
    },
    // node: {
    //     child_process: false,
    //     fs: false
    // },
    target: 'node',
    plugins: [
        new CleanPlugin([`./${targetFile}`], {
            root: path.resolve(__dirname, ''),
            verbose: true,
            dry: false,
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: false,
                parallel: true,
            })
        ],
    },
}
