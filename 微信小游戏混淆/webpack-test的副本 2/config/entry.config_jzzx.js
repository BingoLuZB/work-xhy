//封神重临
const entry = {
    config: {
        identifierNamesGenerator: 'mangled',
        stringArrayThreshold: 1
    },
    path: {
        '剑阵诛仙/js': {
            'assetsmanager.min': './剑阵诛仙/js/assetsmanager.min.js',
            'default.thm': './剑阵诛仙/js/default.thm.js',
            'entry.min': './剑阵诛仙/js/entry.min.js',
            'particle.min': './剑阵诛仙/js/particle.min.js',
            // 'protobuf-bundles.min': './剑阵诛仙/js/protobuf-bundles.min.js',
            // 'protobuf-library.min': './剑阵诛仙/js/protobuf-library.min.js',
            // 'puremvc.min': './剑阵诛仙/js/puremvc.min.js', //混淆失败
            'socket.min': './剑阵诛仙/js/socket.min.js',
            'tween.min': './剑阵诛仙/js/tween.min.js'
        },
    }
};

// 对象 0.6
module.exports = entry;