$(document).ready(function() {
    $(".product__burger").click(function() {
      $(".product__burger, .menu-nav").toggleClass("active");
      $("body").toggleClass("lock");
    });

    $("#menu").on("click", "a", function(event) {
      event.preventDefault();
      var id = $(this).attr("href"),
        top = $(id).offset().top;
      $("body,html").animate({ scrollTop: top }, 1500);
      $(".product__burger, .menu-nav").toggleClass("active");
      $("body").toggleClass("lock");
    });
    
    
});
  