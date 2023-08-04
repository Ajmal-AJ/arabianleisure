//window scroll navbar fixed
$(window).scroll(function () {

  var scroll = $(window).scrollTop();

  if (scroll >= 200) {
    $(".navbar-scroll").addClass("fixed-top");
    $(".custom-navbar").addClass("fixed-custom-navbar");



  } else {
    $(".navbar-scroll").removeClass("fixed-top");
    $(".custom-navbar").removeClass("fixed-custom-navbar");




  }
});

// hover list image change 

$(document).ready(function () {

  //save big images
  var $bigItem = $('.image-big-list-item');
  //save small images
  var $smallItem = $('.image-small-list-item');
  //click and moseenter function on small image
  //you could delete one eventlistener
  $smallItem.on('click mouseenter', function () {
    //remove active class from all items
    $bigItem.removeClass('active');
    $smallItem.removeClass('active');
    //add active class to item as small item's index
    $bigItem.eq($(this).index()).addClass('active');
    $smallItem.eq($(this).index()).addClass('active');
  });

});



// animation 
new WOW().init();

//counter section
var count = $('.counting');
count.counterUp({
  delay: 40,
  time: 3000
});

//video popup 
$(document).ready(function () {
  $('.popup-youtube').magnificPopup({
    type: 'iframe'
  });
});


//banner slider animation 

$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 50,
    speed: 1000,
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    }
  })

});


// testimonial-slider
$(".testimonial-box .owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  nav: false,
  autoplay: true,
  smartSpeed: 2000,
  responsive: {
    0: {
      items: 1,
      nav: false

    },

    600: {
      items: 1,
      nav: false
    },


    1000: {
      items: 2,
      nav: false,
      loop: true,
      // autoplay:true,
    },
    1200: {
      items: 3,
      nav: false,
      loop: true,
      // autoplay:true,
    }
  }
})


// contact alertbox 

$(document).ready(function () {
  $(".alert-success").hide()


})
$("#contactForm").submit(function (e) {

  e.preventDefault()
  $(".alert-success").show()
  $(".cnt-submt-btn").hide()

})



$("#pageContactForm").submit(function (e) {
  e.preventDefault()
  $(".alert-success").show()
  $(".send-btn").hide()

})




//service section-carousel
var owl = $(".homesrvc-box .owl-carousel");
owl.owlCarousel({
  loop: true,
  margin: 10,
  center: true,

  items: 2,
  responsive: {
    0: {
      items: 1,
      nav: false,
      stagePadding: 10,


    },

    600: {
      items: 2,
      nav: false,
      stagePadding: 10,

    },

    700: {
      items: 2,
      stagePadding: 10,

    },

    1000: {
      items: 2,
      nav: false,
      stagePadding: 70,

      loop: true,
      // autoplay:true,
    },
    1200: {
      items: 2,
      stagePadding: 70,

      nav: false,
      loop: true,
      // autoplay:true,
    }
  }
})

owl.on('mousewheel', '.owl-stage', function (e) {
  if (e.deltaY>0) {
      owl.trigger('next.owl');
  } else {
      owl.trigger('prev.owl');
  }
  e.preventDefault();
});

$(document).ready(function () {
  var owl = $(".pagesrvc-box .owl-carousel");
  owl.owlCarousel({
    loop: true,
    margin: 15,
    items: 2,
    responsive: {
      0: {
        items: 1,
        nav: false
  
      },
  
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 2,
        nav: false,
        loop: true,
        // autoplay:true,
        stagePadding: 30,
      },
      1200: {
        items: 4,
        stagePadding: 30,
        nav: false,
        loop: true,
        // autoplay:true,
      }
    }
  })
  owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
  });



})





// card expand testimonial 

function slidesPlugin(activeSlide = 0) {

  const slides = document.querySelectorAll('.slide')

  slides[activeSlide].classList.add('active')

  for (const slide of slides) {
    slide.addEventListener('click', () => {
      removeActiveClasses()

      slide.classList.add('active')
    })
  }

  function removeActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove('active')
    })
  }
}
slidesPlugin()



