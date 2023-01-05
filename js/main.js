$(function () {
    $(document).scroll(function () {
        var nav = $(".header");
        nav.toggleClass('linear-gradient', $(this).scrollTop() > nav.height());
    });
});