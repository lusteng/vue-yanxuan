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
    publicPath: './',
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
        
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
            item
            .use('sass-resources-loader')
            .loader('sass-resources-loader')
            .options({
                // Provide path to the file with resources
                resources: './path/to/resources.scss',
    
                // Or array of paths
                resources: [resolve('src/assets/css/mixin.scss'), resolve('src/assets/css/reset.scss')]
            })
            .end()
        }) 
    }, 
    
}
 