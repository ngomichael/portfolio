$(document).ready(function() {
    //moves #titleBorder on mouse enter on #title
    $('#title').mouseenter(function() {
        titleBorder.style.transform = 'translate(260px, 75px)';
    });

    //moves #titleBorder on mouse leave on #title
    $('#title').mouseleave(function() {
        titleBorder.style.transform = 'translate(260px, -15px)';
    });

    //moves #titleInfo on mouse enter on #title
    $('#title').mouseenter(function() {
        titleInfo.style.transform = 'translate(-110%, 42px)';
        $('#titleInfo').fadeTo('fast', '1');
    });

    //moves #titleInfo on mouse leave on #title
    $('#title').mouseleave(function() {
        $('#titleInfo').fadeTo('fast', '0');
        titleInfo.style.transform = 'translate(-110%, 0px)';
    });

});
