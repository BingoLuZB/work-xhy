//三国个人包  改林泽的数组
const entry = {
    config: {
        identifierNamesGenerator: 'hexadecimal',
        stringArrayThreshold: 0.5,
        // stringArrayEncoding: 'rc4'
    },
    path: {
        '三国/js': {
            'customlib.min': './三国/js/customlib.min.js',  //rc4
        },
        '三国/package1': {
            'main': './三国/package1/main.js',  //base64
        }
    }
};

module.exports = entry;