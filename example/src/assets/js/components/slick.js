/* https://kenwheeler.github.io/slick/ */

var portfolio = $("#portfolio");

portfolio.slick({
     speed: 700,
     dots: true,
     arrows: false,
     infinite: true,
     slidesToShow: 2,
     slidesToScroll: 2
});

$("#portfolio-arrow-prev").on("click", function(event) {
     event.preventDefault();

     portfolio.slick("slickPrev");
});


$("#portfolio-arrow-next").on("click", function(event) {
     event.preventDefault();

     portfolio.slick("slickNext");
});