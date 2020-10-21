//三国官包 马甲26
const entry = {
    config: {
        // identifierNamesGenerator: 'hexadecimal',
        stringArrayThreshold: 0.8,
        // stringArrayEncoding: 'rc4'
    },
    path: {
        '三国26/js': {
            'customlib.min': './三国/js/customlib.min.js',
        },
        '三国26/package1': {
            'main': './三国/package1/main.js',
        },
        
    }
};

// 对象
module.exports = entry;