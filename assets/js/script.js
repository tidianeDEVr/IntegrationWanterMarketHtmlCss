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
  slidesToShow: 3,
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

// Exclusives Shops Carroussel
$('.products-related-carroussel').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '#button-rp-left',
  nextArrow: '#button-rp-right',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
}
);

// Filtre button 
$('.show-filtre').click(function(){
  $('.nav-closer').removeClass('d-none');
  $('.catalogue-aside').removeClass('d-none');
});

// Product Image Change 
$('.single-product-section .container .row .product-details .display-images .di-left img').click(function(){
  var $smallImage = $(this).attr('src');
  $('#mainImage').attr('src', $smallImage);
});

// Hide Aside
$('.nav-closer').click(function(){
  $('.nav-closer').addClass('d-none');
  $('.catalogue-aside').addClass('d-none');
  $('.single-product-aside').addClass('d-none');
  $('.details-vendeur').addClass('d-none');
})

// Filtre button 
$('.show-shop-details').click(function(){
  $('.nav-closer').removeClass('d-none');
  $('.single-product-aside').removeClass('d-none');
});

// Details vendeur
$('.btn-details-vendeur').click(function(){
  $('.nav-closer').removeClass('d-none');
  $('.details-vendeur').removeClass('d-none');
});

// Bootstrap Form Validation 
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
