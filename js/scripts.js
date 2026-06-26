jQuery(document).ready(function () {
  $(".flexslider").flexslider({
    animation: "fade",
    directionNav: false,
    controlNav: false,
    animationLoop: true,
    animationSpeed: 700,
  });

  $("[data-fancybox]").fancybox({
    toolbar: false,
    smallBtn: true,
    iframe: {
      preload: false,
    },
  });
});
