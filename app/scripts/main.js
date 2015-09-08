/* 
IDEO for UNVR (UN Virtual Reality)

*/


var unvr = {
  setup: function() {
    this.scrollSetup();
  },

  scrollSetup: function() {
    var controller = new ScrollMagic.Controller();

    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.startScene1',
      triggerHook: '0'
    }).addTo(controller)
      .addIndicators({name: "1 (duration: 0)"});

    scene1.on("enter leave", function (event) {
      console.log('enter leave scene 1');
      $('.vid1').fadeIn(3000);
    });

    var scene2 = new ScrollMagic.Scene({
      triggerElement: '.startScene2',
      triggerHook: 'onEnter'
    }).addTo(controller)
      .addIndicators({name: "1 (duration: 0)"});

    scene2.on("enter leave", function (event) {
      console.log('enter leave scene 2');
      $('.vid1').fadeOut(3000);
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