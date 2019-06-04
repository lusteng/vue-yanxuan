let 
    json = {},
    nav = []

$.each($('.m-cateNavVert .item'), function(){
    nav.push({
        name: $(this).find('a').text()
    })
}) 

json.nav = nav

console.log(JSON.stringify(json))