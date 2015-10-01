/* 
IDEO for UNVR (UN Virtual Reality)

*/

var unvr = {
  fadeSpeed: 3000,
  isMobile: false,
  prevPageIndex: 0,

  setup: function() {
    this.checkIfMobile();
    this.nav();
    this.resize();
    this.carouselSetup();
    if (this.isMobile) {
      // this.carouselSetup();
      // this.hideAddressBar();
    } else {
      // this.horizScrollSetup();
      // this.scrollFlip();
      this.animateBackground();
      // this.calcWidth();
    }
    this.calcHeight();
    // this.titleTextMorph();
  },

  hideAddressBar: function() {
    // Set a timeout...
    setTimeout(function(){
      // Hide the address bar!
      window.scrollTo(0, 1);
    }, 0);
  },

  resize: function() {
    $( window ).resize(function() {
      // unvr.calcWidth();
      unvr.calcHeight();
    });
  },

  checkIfMobile: function() {
    var isMobile = false; //initiate as false
    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

    this.isMobile = isMobile;
  },

  calcHeight: function() {
    var windowHeight = $(window).height();
    unvr.setHeight();
  },

  
  /* sets equal column heights */
  setHeight: function() {
    $('.set_height').each(function() {
      var height = $(this).find('.height_setter').outerHeight();
      $(this).find('.height_getter').height(height);
    });
  },

  // determine the total width to allow for unbroken horizontal content
  calcWidth: function() {
    var totalWidth = 0;
    $('section').each(function() {
      totalWidth = totalWidth + $(this).outerWidth();
    });
    $('.paged_site').width(totalWidth);
  },

  titleTextMorph: function() {
    $('.title_text_container .top').addClass('fade_me_out');
    $('.title_text_container .bottom').addClass('fade_me_in');
  },

  nav: function() {
    $('#nav1').on('click', function() {
      $(".owl-carousel").trigger("to.owl.carousel", [1, 800, true]);
    });
    $('#nav2').on('click', function() {
      $(".owl-carousel").trigger("to.owl.carousel", [4, 800, true]);
    });
    $('#nav3').on('click', function() {
      $(".owl-carousel").trigger("to.owl.carousel", [8, 800, true]);
    });
  },

  animateBackground: function() {
    $('.horiz_background').addClass('animate_me');
  },

  scrollFlip: function() {
    $("body").mousewheel(function(event, delta) {
       this.scrollLeft -= (delta * 1);
       event.preventDefault();
    });
  },

  // owl carousel 2 (beta)
  // events demo: http://www.owlcarousel.owlgraphic.com/demos/events.html
  carouselSetup: function() {
    $('.foreground').addClass('owl-carousel');
    unvr.carousel = $('.owl-carousel');
    unvr.carousel.owlCarousel({
      nav: false,
      pagination: true,
      dots: false,
      items: 1,
      loop: false,
      smartSpeed: 800,
      callbacks: true,
      onTranslated: unvr.afterMovement,
      onChanged: unvr.movement,
      // onTranslate: unvr.beforeSlideHappens
    })
    .on('mousewheel', '.owl-stage', function (e) {
      if (e.deltaY>0) {
        unvr.carousel.trigger('next.owl');
      } else {
        unvr.carousel.trigger('prev.owl');
      }
      e.preventDefault();
    });

    // $('.next-slide').on('click', function() {
    //   $(".owl-carousel").trigger('next.owl.carousel');
    // });
  },

  beforeSlideHappens: function(event) {
    console.log(event.relatedTarget.relative(event.property.value));
  },


  afterMovement: function(event) {
    var direction = unvr.determineDirection(unvr.page);
    if (unvr.page === 5) {
      unvr.unpinWorkNav();
    }
  },


  /* add some subtle movement of elements when pages are snapped to place */
  movement: function(event) {
    // https://github.com/smashingboxes/OwlCarousel2/issues/292#event-140932502
    var page = event.relatedTarget.relative(event.property.value);
    unvr.page = page;
    var direction = unvr.determineDirection(page);

    unvr.setNavState(page, direction);

    if (page === 0) {
      $('.section2 .prelude').addClass('bleed_me');
    }
    if (page === 1) {
      $('.section2_5 .our_mission').addClass('bleed_me');
      $('.section2 .prelude').removeClass('bleed_me');
    }
    if (page === 2) {
      $('.section2_5 .our_mission').removeClass('bleed_me');
      $('.section2_6 .our_mission_story').addClass('bleed_me');
    }

    if (page === 3) {
      $('.section2_6 .our_mission_story').removeClass('bleed_me');
      $('.section2_7 .our_work').addClass('bleed_me');
    }
    if (page === 4) {
      $('.section2_7 .our_work').removeClass('bleed_me');
      $('.section2_6 .our_mission_story').addClass('bleed_me');
      $('.section4 .parallax_me').addClass('no_transition push_right').removeClass('push_left');
    }

    if (page === 4 && direction === "backward") {
      $('.worknav').removeClass('moved first');
    }


    if (page === 5 && direction === 'forward') {
      $('.worknav').addClass('moved first');
      $('.section3 .parallax_me').removeClass('no_transition');
      $('.section3 .parallax_me').addClass('normal');
    } else if (page === 5 && direction === 'backward') {
      $('.section3 .parallax_me').removeClass('no_transition');
      $('.section3 .parallax_me').addClass('normal');
    } else {
      $('.section3  .parallax_me').addClass('no_transition').removeClass('normal push_left push_right');
    }

    if (page === 6) {

      unvr.pinWorkNav();

      $('.section3 .parallax_me').addClass('no_transition push_left').removeClass('push_right');
      $('.section4 .parallax_me').removeClass('no_transition');
      $('.section4 .parallax_me').addClass('normal');
    } else {
      $('.section4  .parallax_me').removeClass('normal');
    }

    if (page === 7) {
      $('.section4 .parallax_me').addClass('no_transition push_left').removeClass('push_right');
    }

    unvr.prevPageIndex = page;
  },


  /* pin work nav to left side when appropriate */
  pinWorkNav: function() {
    var coords = $('.worknav')[0].getBoundingClientRect();
    $('.worknav').appendTo('body').addClass('pinned').css({top: coords.top, left: coords.left});
  },


  /* unpin work nav from left side when appropriate */
  unpinWorkNav: function() {
    $('.worknav').appendTo('.waves_photo').removeClass('pinned');
  },


  /* slidy nav underline */
  setNavState: function(page, direction) {
    if (page === 0) {
      if (direction === 'backward') {
        $('#nav1').removeClass('active').addClass('backward_leave');
      }
    }

    if (page >= 1 && page <= 3) {
      $('#nav1').addClass('active');
      if (direction === 'forward') {
        $('#nav1').removeClass('backward_leave');
      }
      if (direction === 'backward') {
        $('#nav2').removeClass('active').addClass('backward_leave');
      }
    }

    if (page >= 4 && page <= 7) {
      $('#nav2').removeClass('backward_leave').addClass('active');
      if (direction === 'forward') {
        $('#nav1').removeClass('active').addClass('forward_leave');
      }
      if (direction === 'backward') {
        $('#nav3').removeClass('active').addClass('backward_leave');
      }
    }

    if (page >= 8 && page <= 10) {
      $('#nav2').removeClass('active').addClass('forward_leave');
      $('#nav3').addClass('active');
    }
  },


  /* annoyingly complex logic to figure out which direction user is moving through carousel */
  determineDirection: function(page) {
    var direction = 'forward';
    if (unvr.prevPageIndex === 1 && page === 0) {
      direction = 'backward';
    } else if (unvr.prevPageIndex === 0 && page === 1) {
      direction = 'forward';
    } else if (unvr.prevPageIndex > page && page === 0) {
      direction = 'forward';
    } else if (page < unvr.prevPageIndex || (unvr.prevPageIndex === 0 && page > unvr.prevPageIndex) ) {
      direction = 'backward';
    } else {
      direction = 'forward';
    }
    return direction;
  },


  horizScrollSetup: function() {
    var controller = new ScrollMagic.Controller({vertical: false});

    // blur background when film sections begin
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.section3'
    }).addTo(controller)
      .addIndicators({name: "begin blur"});
    scene1.on("enter", function (event) {
      // $('.horiz_background').addClass('blur_me');
    });
    scene1.on("leave", function (event) {
      // $('.horiz_background').removeClass('blur_me');
    });

    // unblur background when film sections end
    var scene2 = new ScrollMagic.Scene({
      triggerElement: '.section6'
    }).addTo(controller)
      .addIndicators({name: "end blur"});
    scene2.on("enter", function (event) {
      // $('.horiz_background').removeClass('blur_me');
    });
    scene2.on("leave", function (event) {
      // $('.horiz_background').addClass('blur_me');
    });
  },


  /* currently not used (9-30-15) but left here for reference */
  /* TODO: delete for production */
  scrollSetup: function() {
    var self = this;
    var controller = new ScrollMagic.Controller();

    /* section1 */
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '#section1',
      triggerHook: '0',
    }).addTo(controller)
      .addIndicators({name: "1 (duration: 0)"});

    scene1.on("enter leave", function (event) {
      console.log('enter leave scene 1');
      $('.vid1').fadeIn(self.fadeSpeed);
    });

    /* section2 */
    var scene2 = new ScrollMagic.Scene({
      triggerElement: '#section2',
      triggerHook: 'onEnter',
      offset: 100
    }).addTo(controller)
      .addIndicators({name: "1 (duration: 0)"});

    scene2.on("enter leave", function (event) {
      console.log('enter leave scene 2');
      $('.vid1').fadeOut(self.fadeSpeed);
    });

    /* section3 */
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '#section3',
      triggerHook: 'onEnter'
    }).addTo(controller)
      .addIndicators({name: "1 (duration: 0)"});

    scene3.on("enter", function (event) {
      console.log('enter scene 3');
      $('.vid2').fadeOut(self.fadeSpeed);
    });

    scene3.on("leave", function (event) {
      console.log('leave scene 3');
      $('.vid2').fadeIn(self.fadeSpeed);
    });

  }
};

/* when the DOM is loaded */
$(function() {
  unvr.setup();
});
