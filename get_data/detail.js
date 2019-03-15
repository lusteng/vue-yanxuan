var json = {}

var banner = []
$.each($('.swiper-wrapper .swiper-slide'), function(){
    banner.push({
        'picUrl' : $(this).find('img').attr('src')
    })
})

json.banner = banner

console.log(JSON.stringify(json))