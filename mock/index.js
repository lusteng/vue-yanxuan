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
    
    app.get('/channels', function (req, res) { 
        let 
            json = util.getJsonFile(`./indexPage_channels.json`);
        res.json(Mock.mock(json));
    });

    app.get('/hotSalls', function(req, res){
        let 
            json = util.getJsonFile(`./indexPage_hotSellProduct.json`);
        res.json(Mock.mock(json)); 
    })

    app.get('/populars', function(req, res){
        let 
            json = util.getJsonFile(`./indexPage_popularRecommend.json`);
        res.json(Mock.mock(json)); 
    })

    app.get('/arrival', function(req, res){
        let 
            json = util.getJsonFile(`./indexPage_arrivals.json`);
        res.json(Mock.mock(json)); 
    })

    app.get('/categoryGoods', function(req, res){
        let 
            json = util.getJsonFile(`./indexPage_categoryGoods.json`);
        res.json(Mock.mock(json)); 
    })  
    
    app.get('/items', function(req, res){
        let 
            index = qs.parse(url.parse(req.url).query)['index'], 
            json = util.getJsonFile(`./itemLists_${index}.json`);
        res.json(Mock.mock(json)); 
    })  
    
    app.get('/detail', function(req, res){
        let 
            json = util.getJsonFile(`./goodsDetail.json`);
        res.json(Mock.mock(json)); 
    }) 
    
    app.get('/rcmd', function(req, res){
        let 
            json = util.getJsonFile(`./rcmd.json`);
        res.json(Mock.mock(json)); 
    })
    
    app.get('/comments', function(req, res){ 
        let 
            page = qs.parse(url.parse(req.url).query)['page'], 
            json = util.getJsonFile(`./comment_${page}.json`); 
        res.json(Mock.mock(json)); 
    })
    
    app.get('/tags', function(req, res){
        let 
            json = util.getJsonFile(`./comment_tag.json`);
        res.json(Mock.mock(json)); 
    })
    
    app.get('/search_kds', function(req, res){
        let 
            json = util.getJsonFile(`./search_kds.json`);
        res.json(Mock.mock(json)); 
    })
}
