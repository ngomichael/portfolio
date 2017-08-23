$(document).ready(function() {
    $('#title').mouseenter(function() {
        titleBorder.style.transform = 'translate(260px, 75px)';
    })

    $('#title').mouseleave(function() {
        titleBorder.style.transform = 'translate(260px, -15px)';
    })

    $('#title').mouseenter(function() {
        titleInfo.style.transform = 'translate(-100%, 42px)';
        // console.log($('#titleInfo'));
        $('#titleInfo').fadeTo('fast', '1');
    })

    $('#title').mouseleave(function() {
        $('#titleInfo').fadeTo('fast', '0')
        titleInfo.style.transform = 'translate(-100%, 0px)';
    })

    // $(".underLine").mouseenter(function() {
    //     $(this).animate({
    //         'borderBottom' :'2px solid #3399FF',
    //         'width' :'46%'
    //     });
    // });
    //
    // $(".underLine").mouseleave(function() {
    //     $(this).animate({
    //         'borderBottom' :'2px solid #3399FF',
    //         'width' :'0%'
    //     });
    // });


});
