/* 
IDEO for UNVR (UN Virtual Reality)

*/


var unvr = {
  fadeSpeed: 3000,

  setup: function() {
    this.scrollSetup();
    this.carouselSetup();
  },

  carouselSetup: function() {
    $(".owl-carousel").owlCarousel({
      nav: true,
      pagination: true,
      dots: true,
      items: 1
    });



    $('.next-slide').on('click', function() {
      console.log('next mutha fuckaaaa');
      $(".owl-carousel").trigger('next.owl.carousel');
    });

  },

  scrollSetup: function() {
    var self = this;
    var controller = new ScrollMagic.Controller();

    /* section1 */
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.startScene1',
      triggerHook: '0',
    }).addTo(controller)
      .addIndicators({name: "1 (duration: 0)"});

    scene1.on("enter leave", function (event) {
      console.log('enter leave scene 1');
      $('.vid1').fadeIn(self.fadeSpeed);
    });

    /* section2 */
    var scene2 = new ScrollMagic.Scene({
      triggerElement: '.startScene2',
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
      triggerElement: '.startScene3',
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


$(function() {
  unvr.setup();
});



// Scene
// var scene2 = new ScrollScene({triggerElement: "#screen3 .imacInner", triggerHook: 'onEnter', offset: 203})
//     .addTo(controller)
//     .setTween(splitAnimation);