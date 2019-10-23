// Add your custom JS code here
// DOES WORK
$('.gallery').slick({

  dots: true,
  centerMode: true,
  centerPadding: '0',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  });


// Add your custom JS code here
// DOES WORK
$('.galareyy').slick({

    dots: true,
    infinite: false,
    speed: 300,
    responsive: [
        {
            breakpoint: 4480,
            settings: 'unslick'
          },
      {
        breakpoint: 1024,
        settings: {
            settings: 'unslick'
        }
      },
      {
        breakpoint: 769,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            focusOnSelect: false,
            arrows: true,
            touchMove: false,
            draggable: true,
            swipe: true
        }
      },
      {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            focusOnSelect: false,
            arrows: true,
            touchMove: false,
            draggable: true,
            swipe: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

$('#couponview').modal();


