$(document).ready(function(){

  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function() {
    if (this.matchMedia("(min-width: 768px)").matches) {
      $dropdown.hover(
        function() {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function() {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  $('.dropdown-menu a').on('click', function(){
    console.log($(this).parent().parent().find('.dropdown-toggle').text($(this).text()));
    // console.log($(this).parents('.dropdown').find('.dropdown-toggle').text($(this).text()));
    $(this).parent().parent().find('.dropdown-toggle').html($(this).html());
  })

  let owl = $('.owl-carousel');
  owl.owlCarousel({
    margin: 10,
    loop: true,
    dots: true,
    autoplay: true,
    nav: true,
    items: 1,
  })

});
