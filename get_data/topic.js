var json = {
    "errCode":"0",
    "data": []
}
$.each($('.m-main-content').find('.m-tpls'), function(){
    json.data.push(
        {
            til: $(this).find('.u-name span:last-child').text(),
            tip: $(this).find('.u-name span:first-child img').attr('src'),
            desc: $(this).find('.title').text(),
            pic: $(this).find('.u-pic img').attr('src'),
            look: $(this).find('.u-rcount span').text() 
        }
    )
})

console.log(JSON.stringify(json))