const Mock = require('mockjs') 
const util = require('./util') 
const url = require('url')
const qs = require('querystring')


module.exports = function(app){
    //监听http请求
    app.get('/banner', function (req, res) { 
        let 
            index = qs.parse(url.parse(req.url).query)['index'], 
            json = util.getJsonFile(`./banner_${index}.json`);
        //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
        res.json(Mock.mock(json));
    });
}
