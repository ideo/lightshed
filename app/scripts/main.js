/* 
IDEO for UNVR (UN Virtual Reality)

*/

var unvr = {
  fadeSpeed: 3000,

  setup: function() {
    // this.scrollSetup();
    // this.horizScrollSetup();
    this.carouselSetup();
    this.scrollFlip();
    this.animateBackground();
  },

  animateBackground: function() {
    $('.horiz_background').addClass('animate_me');

    // var count = 0
    // var backgroundInterval = setInterval(function() {
    //   $('.horiz_container').css('background-position', count+'px 0px');
    //   count = count - 1;
    // }, 50);
  },

  scrollFlip: function() {
    $("body").mousewheel(function(event, delta) {
       this.scrollLeft -= (delta * 30);
       event.preventDefault();
    });
  },

  carouselSetup: function() {
    $(".owl-carousel").owlCarousel({
      nav: true,
      pagination: true,
      dots: true,
      items: 1
    });

    $('.next-slide').on('click', function() {
      $(".owl-carousel").trigger('next.owl.carousel');
    });

  },

  horizScrollSetup: function() {

    var controller = new ScrollMagic.Controller({vertical: false});

    // build tween
    var tween = new TimelineMax()
      .add([
        TweenMax.to(".horiz_background", 3000, {left:"3800px", ease: Linear.easeNone}),
        TweenMax.to(".foreground", 100, {left:"-200px"})
      ]);

      // build scene
      var scene = new ScrollMagic.Scene({triggerElement: ".horiz_container", 
                                         duration: 4000, 
                                         // offset: 1000,
                                         triggerHook: '0'})
              .setTween(tween)
              .addIndicators() // add indicators (requires plugin)
              .addTo(controller);    
  },


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
}

// when the DOM is loaded
$(function() {
  unvr.setup();
});



// Scene
// var scene2 = new ScrollScene({triggerElement: "#screen3 .imacInner", triggerHook: 'onEnter', offset: 203})
//     .addTo(controller)
//     .setTween(splitAnimation);