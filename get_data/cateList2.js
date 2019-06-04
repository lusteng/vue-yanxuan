let json = {}; 
json.banner = $('.m-subCateContainer .banner').css('background-image').match(/url\(\"(\S*?)\"\)/)[1] 
let list = [];

$.each($('.m-subCateContainer .cateList'), function(){
    let cates = []; 
    $.each($(this).find('.cateItem'), function(){
        cates.push(
            {
                picUrl: $(this).find('img').attr('src'),
                text: $(this).find('.name').text()
            }
        )
    }); 
    list.push({
        til: $(this).find('.hd').length > 0 ? $(this).find('.hd').text() : '',
        cates  
    })
})

json.list = list

console.log(JSON.stringify(json))