function toggleBurger(i) {
  const html = document.querySelector("html");
  const body = document.querySelector("body");
  const nav = document.querySelector(".header");
  nav.classList.toggle("open");
  i.classList.toggle("is-active");
  nav.classList.toggle("scroll");
  html.classList.toggle("no-scroll");
  body.classList.toggle("no-scroll");
}


$(function () {
    $(document).scroll(function () {
        var nav = $(".header");
        nav.toggleClass('linear-gradient', $(this).scrollTop() > nav.height());
    });
});