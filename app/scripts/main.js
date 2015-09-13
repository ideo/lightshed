/* 
IDEO for UNVR (UN Virtual Reality)

*/

var unvr = {
  fadeSpeed: 3000,
  isMobile: false,

  setup: function() {
    this.checkIfMobile();
    this.nav();
    this.resize();
    this.carouselSetup();
    if (this.isMobile) {
      // this.carouselSetup();
    } else {
      this.horizScrollSetup();
      // this.scrollFlip();
      this.animateBackground();
    }
    this.calcWidth();
    // this.calcHeight();
    // this.titleTextMorph();
  },

  resize: function() {
    $( window ).resize(function() {
      unvr.calcWidth();
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
    var navHeight = $('.nav').outerHeight();
    var contentHeight = windowHeight - navHeight - 5;
    $('.section').height(contentHeight);
  },

  // determine the total width to allow for unbroken horizontal content
  calcWidth: function() {
    return;
    var totalWidth = 0;
    $('section').each(function() {
      totalWidth = totalWidth + $(this).outerWidth();
    });
    $('.foreground').width(totalWidth);
  },

  titleTextMorph: function() {
    $('.title_text_container .top').addClass('fade_me_out');
    $('.title_text_container .bottom').addClass('fade_me_in');
  },

  nav: function() {
    $('#nav1').on('click', function() {
      $('body').scrollTo($('.section1'), 800, {axis:'x'});
    });
    $('#nav2').on('click', function() {
      $('body').scrollTo($('.section3'), 800, {axis:'x'});
    });
    $('#nav3').on('click', function() {
      $('body').scrollTo($('.section6'), 800, {axis:'x'});
    });
  },

  animateBackground: function() {
    $('.horiz_background').addClass('animate_me');
  },

  scrollFlip: function() {
    $(".foreground_container").mousewheel(function(event, delta) {
       this.scrollLeft -= (delta * 1);
       event.preventDefault();
    });
  },

  carouselSetup: function() {
    $('.foreground').addClass('owl-carousel');
    $(".owl-carousel").owlCarousel({
      nav: false,
      pagination: true,
      dots: false,
      items: 1
    });

    $('.next-slide').on('click', function() {
      $(".owl-carousel").trigger('next.owl.carousel');
    });
  },

  changeNav: function(navItem) {
    $('.nav_item').removeClass('active');
    $(navItem).addClass('active');
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
      unvr.changeNav('#nav2');
    });
    scene1.on("leave", function (event) {
      unvr.changeNav('#nav1');
      $('.horiz_background').removeClass('blur_me');
    });

    // unblur background when film sections end
    var scene2 = new ScrollMagic.Scene({
      triggerElement: '.section6'
    }).addTo(controller)
      .addIndicators({name: "end blur"});
    scene2.on("enter", function (event) {
      unvr.changeNav('#nav3');
      $('.horiz_background').removeClass('blur_me');
    });
    scene2.on("leave", function (event) {
      unvr.changeNav('#nav2');
      $('.horiz_background').addClass('blur_me');
    });


    // // title text fade/grow
    // var tween = new TimelineMax();
    // tween.to('.title_text_container .top', 0.5, {opacity: 0}, '0');
    // tween.to('.title_text_container .bottom', 0.5, {opacity: 1}, '0');

    // new ScrollMagic.Scene({
    //   triggerElement: '.section1',
    //   duration: $('.title_text_container').width(),
    //   // offset: $('.title_text_container').width()
    //   triggerHook: '0'
    // })
    // .setTween(tween)
    // .setPin('.title_text_container')
    // .addTo(controller)
    // .addIndicators({name: "fade out title text"});


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