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

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });


  $('.trigger-input').on('focus', function () {
    // $(this).parent().removeClass('show');
    $(this).parent().addClass('show');

    $('body').on('mouseup', function(e) {
      let container = $('.destination-warp');
      // alert($(this))

      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass('show');
      }
    });
  });

  $('.load-type').on('focus', function () {
    // $(this).parent().removeClass('show');
    $(this).parent().addClass('show');

    $('body').on('mouseup', function(e) {
      let container = $('.load-type-wrap');
      // alert($(this))

      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass('show');
      }
    });
  });

  // edit source
  $('#editOrigin').on('click', function () {
    goToByScroll('formWrap');
    $('#originInput').focus();
  });
  // edit destination
  $('#editDestination').on('click', function () {
    goToByScroll('formWrap');
    $('#destinationInput').focus();
  });
  // edit loadType
  $('#editLoadType').on('click', function () {
    goToByScroll('formWrap');
    $('#loadTypeInput').focus();
  });
  // edit incoTerm
  $('#editIncoTerm').on('click', function () {
    goToByScroll('formWrap');
    $('#incoTermInput').focus();
  });


  $('.view-details').on('click', function () {
    let self = $(this).closest('.result-card');
    self.find('.shipment-pricing').removeClass('d-none');
    self.find('.short-pricing').addClass('d-none');
  });
  $('.hide-pricing').on('click', function () {
    let self = $(this).closest('.result-card');
    self.find('.shipment-pricing').addClass('d-none');
    self.find('.short-pricing').removeClass('d-none');
  });

  // Reusable goToByScroll function(id) call it when needed with ID param.
  function goToByScroll(id) {
    $('html,body').animate({scrollTop:$("#"+id).offset().top}, 'slow');
  }

  $('#getQuoteCta').on('click', function() {
    goToByScroll('resultActionsMain');
  });

  let sourceList = [
    "Spain",
    "Sweden",
    "Solovakia",
    "Switzerland",
  ];
  let destinationList = [
    "Mumbai",
    "Madras",
    "Mewar",
  ];

  $("#editSource").autocomplete({
    source: sourceList,
  });
  $("#editDestination").autocomplete({
    source: destinationList,
  });

  // Optional-Services
  $("input[name='insure-goods']").on('change', function () {
    let isInsureGoods = $("input[name='insure-goods']:checked").val();
    if(isInsureGoods === 'insureGoodYes'){
      $('.insure-goods-input').removeClass('d-none');
    } else {
      $('.insure-goods-input').addClass('d-none');
    }
  });

  // Reusable additional services price add
  function additionalServicesPriceToggle(inputId, priceWrapId) {
    $(inputId).on('click', function () {
      if ($(inputId).is(':checked')) {
        // Do stuff
        $(priceWrapId).toggleClass('d-flex');
        setTimeout(function () {
          $(priceWrapId).removeClass('font-weight-bold');
        }, 5000);
      } else {
        $(priceWrapId).addClass('font-weight-bold').toggleClass('d-flex');
      }
    });
  }

  additionalServicesPriceToggle('#blCourierNational', '#blCourierNationalLabel');
  additionalServicesPriceToggle('#packingListCompletion', '#packingListCompletionLabel');
  additionalServicesPriceToggle('#blCourierInternational', '#blCourierInternationalLabel');
  additionalServicesPriceToggle('#validationOfTitles', '#validationOfTitlesLabel');
  additionalServicesPriceToggle('#exportCertificateDocs', '#exportCertificateDocsLabel');
  additionalServicesPriceToggle('#certificateOfOrigin', '#certificateOfOriginLabel');

  $('.tbl-view-detail').on('click', function () {
    let textValue = $(this).text();
    if (textValue === '+ VIEW DETAIL') {
      $(this).text('- HIDE DETAIL').closest('.compact-row').next('.expanded-row').toggleClass('d-none');
    }
    if (textValue === '- HIDE DETAIL') {
      $(this).text('+ VIEW DETAIL').closest('.compact-row').next('.expanded-row').toggleClass('d-none');
    }
  });

});
