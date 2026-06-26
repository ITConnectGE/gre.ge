$(document).ready(function () {
  $("ul.tabs li").click(function () {
    if ($(this).hasClass("active")) {
      return;
    }

    const dataIndex = $(this).attr("data-index");
    $(this).closest("ul.tabs").find("li").removeClass("active");
    $(this).addClass("active");

    $(".container").hide();
    $('.container[data-index="' + dataIndex + '"]').show();
  });

  $(".accordion .item h1").click(function () {
    if ($(this).closest(".item").hasClass("active")) {
      $(this).closest(".item").removeClass("active");
      return;
    }

    $(".accordion .item").removeClass("active");
    $(this).closest(".item").addClass("active");
  });
});
