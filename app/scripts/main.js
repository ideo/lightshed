var unvr = {
  setup: function() {
    this.scrollSetup();
  },

  scrollSetup: function() {
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
      offset: 600 // start scene after scrolling for 100px
    }).addTo(controller);

    scene.on("enter", function (event) {
      $('.vid1').fadeOut(3000);
    });


  }
}


$(function() {
  unvr.setup();
});