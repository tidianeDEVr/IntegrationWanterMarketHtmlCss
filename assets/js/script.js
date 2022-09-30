// Hero Carroussel
$('.hero-carroussel-container').slick({
    autoplay: true,
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
  autoplay: true,
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

// Products Related Carroussel
$('.products-related-carroussel').slick({
  autoplay: true,
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
  // $('.catalogue-aside').removeClass('d-none');
  $( ".catalogue-aside" ).toggle(300);
});

// Product Image Change 
$('.single-product-section .container .row .product-details .display-images .di-left img').click(function(){
  var $smallImage = $(this).attr('src');
  $('#mainImage').attr('src', $smallImage);
});

// Hide Aside
$('.nav-closer').click(function(){
  $('.nav-closer').addClass('d-none');
  $('.single-product-aside').addClass('d-none');
  $('.details-vendeur').addClass('d-none');
  $( ".dashboard-aside" ).toggle(300);
  $( ".catalogue-aside" ).toggle(300);
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

// change image path function
function changeImageDisplay(input, image, path){
  $(input).change(function() {
    var input = this;
    var url = $(this).val();
    var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
    if (input.files && input.files[0] && (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $(image).attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    } else {
        $(image).attr('src', path);
    }
});
}



// Change Avatar
$(function() {
  $('#avatar').change(function() {
      var input = this;
      var url = $(this).val();
      var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
      if (input.files && input.files[0] && (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) {
          var reader = new FileReader();

          reader.onload = function(e) {
              $('#avatarImgDisplay').attr('src', e.target.result);
          }
          reader.readAsDataURL(input.files[0]);
      } else {
          $('#avatarImgDisplay').attr('src', 'assets/images/utils/user-default.png');
      }
  });
});

// Hide/Show Aside 
$('#hideAsideBtn').click(function(){
  $( ".dashboard-aside" ).toggle(300);
  let sceenSize = $( window ).width();
  if (sceenSize < 500 ) $('.nav-closer').removeClass('d-none');
});

// Upload Annonce Images
$(function() {
  $('#image1').change(function() {
      var input = this;
      var url = $(this).val();
      var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
      if (input.files && input.files[0] && (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) {
          var reader = new FileReader();

          reader.onload = function(e) {
              $('.imageUpload1').attr('src', e.target.result);
          }
          reader.readAsDataURL(input.files[0]);
      } else {
          $('.imageUpload1').attr('src', 'assets/images/utils/add-image.png');
      }
  });
});

$(function() {
  $('#image2').change(function() {
      var input = this;
      var url = $(this).val();
      var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
      if (input.files && input.files[0] && (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) {
          var reader = new FileReader();

          reader.onload = function(e) {
              $('.imageUpload2').attr('src', e.target.result);
          }
          reader.readAsDataURL(input.files[0]);
      } else {
          $('.imageUpload2').attr('src', 'assets/images/utils/add-image.png');
      }
  });
});

$(function() {
  $('#image3').change(function() {
      var input = this;
      var url = $(this).val();
      var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
      if (input.files && input.files[0] && (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) {
          var reader = new FileReader();

          reader.onload = function(e) {
              $('.imageUpload3').attr('src', e.target.result);
          }
          reader.readAsDataURL(input.files[0]);
      } else {
          $('.imageUpload3').attr('src', 'assets/images/utils/add-image.png');
      }
  });
});

$(function() {
  $('#image4').change(function() {
      var input = this;
      var url = $(this).val();
      var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
      if (input.files && input.files[0] && (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) {
          var reader = new FileReader();

          reader.onload = function(e) {
              $('.imageUpload4').attr('src', e.target.result);
          }
          reader.readAsDataURL(input.files[0]);
      } else {
          $('.imageUpload4').attr('src', 'assets/images/utils/add-image.png');
      }
  });
});

// Display Menu On Mobile 
$('#display-menu').click(()=>{
  if ($('.main-navbar-bottom').hasClass('d-none')) {
    $('.main-navbar-bottom').removeClass('d-none');
  }else{
    $('.main-navbar-bottom').addClass('d-none');
  }
});


// Products Related Carroussel
$('.ps-carrossel-home').slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 900,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 764,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
}
);

// Change Cover Picture
$(function() {
  $('#cover-picture').change(function() {
      var input = this;
      var url = $(this).val();
      var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
      if (input.files && input.files[0] && (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) {
          var reader = new FileReader();

          reader.onload = function(e) {
              $('#placeholder-cover-picture').attr('src', e.target.result);
          }
          reader.readAsDataURL(input.files[0]);
      } else {
          $('#placeholder-cover-picture').attr('src', 'https://placeholder.pics/svg/1000x300/DEDEDE/555555/Image%20de%20couverture');
      }
  });
});

// Change Profile Picture
$(function() {
  $('#profile-picture').change(function() {
      var input = this;
      var url = $(this).val();
      var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
      if (input.files && input.files[0] && (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) {
          var reader = new FileReader();

          reader.onload = function(e) {
              $('#placeholder-profile-picture').attr('src', e.target.result);
          }
          reader.readAsDataURL(input.files[0]);
      } else {
          $('#placeholder-profile-picture').attr('src', 'https://placeholder.pics/svg/1000x300/DEDEDE/555555/Image%20de%20profile');
      }
  });
});