var HTMLstring = "";
for(var x = 0; x < 5; x++){
    HTMLstring += '<img src="./img/ninja'+x+'.png" data-alt-src="./img/cat'+x+'.png" temp="">'
}
$(document).ready(function(){
    $(".container").append(HTMLstring);

    $("img").click(function() {
        console.log('         src value is', $(this).attr('src'));
        console.log('data-alt-src value is', $(this).attr('data-alt-src'));
        console.log('        temp value is', $(this).attr('temp'));
        $(this).attr('temp',$(this).attr('src'));
        $(this).attr('src',$(this).attr('data-alt-src'));
        $(this).attr('data-alt-src',$(this).attr('temp'));
    })
})