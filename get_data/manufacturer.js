var json = {}
json.mr = {
    img: $('.m-manufacturer-itemlist .imgWraper img').attr('src'),
    title: $('.m-manufacturer-itemlist .header .banner').text(),
    desc: [],
}  

$.each($('.m-manufacturer-itemlist .desc div'), function(){
    json.mr.desc.push($(this).text()) 
}) 


var list = [];
$.each($('.m-goodGrid li.item'), function(item, index){ 
    list.push({ 
        "title": $(this).find('.name span').text(),
        "sub_title": "",
        "picUrl": $(this).find('.m-lazyload img').attr('src'),
        "tag": $(this).find('.gradientPrice').text(),
        "spec": $(this).find('.specification').text(),
        "price": $(this).find('.priceInner span:first span:last').text(),
        "discount": $(this).find('.counterPrice span:last').text(),
        "desc": $(this).find('.desc span:last').text()
    })  
})
json.list = list;
console.log(JSON.stringify(json))

