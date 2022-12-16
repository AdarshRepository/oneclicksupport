$(document).on('ready', function() {

  $('.single-item').slick({
  infinite: true,
  dots: false,
  slidesToShow: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});


  $('.multiple-items').slick({
  infinite: true,
  dots: false,
  slidesToShow: 6,
  arrows: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    }
  ]
});




      $('.testimonalcenterslider').slick({
  centerMode: true,
  dots: true,
  centerPadding: '60px',
  slidesToShow: 2,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


    
     
    });

