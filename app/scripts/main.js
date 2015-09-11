/* 
IDEO for UNVR (UN Virtual Reality)

*/

var unvr = {
  fadeSpeed: 3000,

  setup: function() {
    // this.scrollSetup();
    this.horizScrollSetup();
    this.carouselSetup();
    this.scrollFlip();
    this.animateBackground();
    this.nav();
    // this.titleTextMorph();
  },

  titleTextMorph: function() {
    console.log('morphing');
    $('.title_text_container .top').addClass('fade_me_out');
    $('.title_text_container .bottom').addClass('fade_me_in');
  },

  nav: function() {
    $('#nav1').on('click', function() {
      $('body').scrollTo({ top:0, left:0}, 800);
    });
    $('#nav2').on('click', function() {
      $('body').scrollTo({ top:0, left:1200}, 800);
    });
    $('#nav3').on('click', function() {
      $('body').scrollTo({ top:0, left:3000}, 800);
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

    // blur background when film sections begin
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.section3'
    }).addTo(controller)
      .addIndicators({name: "begin blur"});
    scene1.on("enter", function (event) {
      $('.horiz_background').addClass('blur_me');
    });
    scene1.on("leave", function (event) {
      $('.horiz_background').removeClass('blur_me');
    });

    // unblur background when film sections end
    var scene2 = new ScrollMagic.Scene({
      triggerElement: '.section6'
    }).addTo(controller)
      .addIndicators({name: "end blur"});
    scene2.on("enter", function (event) {
      $('.horiz_background').removeClass('blur_me');
    });
    scene2.on("leave", function (event) {
      $('.horiz_background').addClass('blur_me');
    });


    // build tween
    var tween = new TimelineMax();
    tween.to('.title_text_container .top', 0.5, {opacity: 0}, '0');
    tween.to('.title_text_container .bottom', 0.5, {opacity: 1}, '0');

    new ScrollMagic.Scene({
      triggerElement: '.section1',
      duration: $('.title_text_container').width(),
      // offset: $('.title_text_container').width()
      triggerHook: '0'
    })
    .setTween(tween)
    .setPin('.title_text_container')
    .addTo(controller)
    .addIndicators({name: "fade out title text"});


    // // build scene
    // var scene = new ScrollMagic.Scene({triggerElement: ".section1", 
    //                                    duration: 1000
    //                                    // offset: 1000,
    //                                    // triggerHook: '0'
    //                                  })
    //         .setTween(tween)
    //         .addIndicators({name: "start title text fade"}) // add indicators (requires plugin)
    //         .addTo(controller);





    // build tween
    /*
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

    */    
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