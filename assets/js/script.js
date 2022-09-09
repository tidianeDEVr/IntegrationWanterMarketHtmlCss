// Hero Carroussel
$('.hero-carroussel-container').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '#button-hero-left',
    nextArrow: '#button-hero-right',
  }
);

// Exclusives Shops Carroussel
$('.ess-carroussel-container').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: '#button-ess-left',
  nextArrow: '#button-ess-right',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}
);

// Filtre button 
$(function () {
  $('.show-filtre').click(function(){
    $('.catalogue-aside ').addClass('d-block');
  });
  $(document).on("click", function (e) {
      if ($(e.target).is("#user-login-wrapper") === false) {
          $("#user-login-wrapper").removeClass("wide");
      }
  });
});