var json = {}

var banner = []
$.each($('.swiper-wrapper .swiper-slide'), function(){
    banner.push({
        'picUrl' : $(this).find('img').attr('src')
    })
})

json.banner = banner

var characteristic = []

$.each($('.m-characteristic .item'), function(){
    characteristic.push({
        picUrl: $(this).find('img').attr('src'),
        text1: $(this).find('.right .text:first').text(),
        text2: $(this).find('.right .text:last').text()
    })
})

json.characteristic = characteristic

var price = {
    origin_p: $('.m-detailBaseInfo .currentPrice span:last').text(),
    super_p: $('.m-detailBaseInfo .spmcBanner span:first').text(),
    title: $('.m-detailBaseInfo .baseInfo .name').text(),
    desc: $('.m-detailBaseInfo .desc').text(),
    reputatio: $('.m-detailBaseInfo .wrap .num').text(),
} 

json.price = price

var comment = {
    comment_n: $('.m-detailComment').find('.title span:nth-of-type(2)').text(),
    rate:  $('.m-detailComment').find('.comment-checkAll .rate').text(),
    result:[{
        "skuInfo": ["M", "黑色"],
        "frontUserName": "耳****",
        "content": "穿着非常有气质，显腿长，显腰细，哈哈，奥黛丽赫本风，超级喜欢",
        "createTime": 1525892551248,
        "picList": ["https://yanxuan.nosdn.127.net/5ef9c6bc390c823119ccf4a5cb759447.jpg", "https://yanxuan.nosdn.127.net/a9f8daa562d828349ad6eb5fd8982475.jpg", "https://yanxuan.nosdn.127.net/93bce4c659fd8804678b904dfae8b656.jpg", "https://yanxuan.nosdn.127.net/d6515036d240e0733aa5e172c1b0645b.jpg"],
        "frontUserAvatar": "http://thirdqq.qlogo.cn/qqapp/1104949895/3314E1893F4B4F5EF077B296EFFBFD2D/100",
        "commentReplyVO": null,
        "memberLevel": 2,
        "appendCommentVO": null,
        "star": 5,
        "itemId": 1447011,
        "commentItemTagVO": {
            "type": 1,
            "schemeUrl": "https://m.you.163.com/topic/v1/look/list"
        }
    }] 
}
json.comment = comment


var arg = []
$.each($('.m-itemDetail .dt-section .item'), function(){
    arg.push({
        name: $(this).find('.left').text(),
        cnt: $(this).find('.right .con').text()
    })   
}) 

json.arg = arg

json.html = $('.m-detailHtml').html();

console.log(JSON.stringify(json))