var json = {}
json.banner_img = $('.m-banner').css('background').match(/rgba\(0, 0, 0, 0\) url\(\"(\S*?)\"\) repeat scroll 50% 50% \/ cover padding-box border-box/)[1];
var lists = [];
$.each($('ul.list .f-mb20'), function(item, index){
    if(item > 3){
        return ;
    } 
    var list = [];
    $.each($(this).find('.m-goodGrid').find('li.item'), function(){
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
    });
    lists.push({ 
        title: $(this).find('header.hd .name').text(),
        sub_title: $(this).find('header.hd .desc').text(),
        list
    })
})
json.list = lists;
console.log(JSON.stringify(json))

