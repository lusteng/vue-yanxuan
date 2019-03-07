const 
    path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    devServer: {
        port: '1212',
        before: require('./mock/index') 
    },
    lintOnSave: true,
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@', resolve('src'))
            .set('__page__', resolve('src/page'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
            .set('layout',resolve('src/layout'))
            .set('base',resolve('src/base'))
            .set('static',resolve('static'))
    }, 
}
 