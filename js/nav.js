
$(".hoverli").hover(function () {
    $('ul.file_menu').slideDown('medium');
});
    $('ul.file_menu').bind('mouseleave', function(){
        $('ul.file_menu').slideUp('medium'); 
});

