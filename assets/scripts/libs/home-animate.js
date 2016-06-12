// settting animation

(function(){
	'use strict';
  var home =$('.home-page');
  var $height=$(window).innerHeight();
  var controller = new ScrollMagic.Controller();
  function animateRoll () {
  //animate feature
  if (home.length>0) {
   var ani1 = new TimelineMax({onComplete:function(){
    ani1.kill();
  }});
   ani1.staggerFromTo( '#ani1',0.8,{y:"+=100",alpha:0},{y:0,alpha: 1, delay: 0.5},0.5 );
   new ScrollMagic.Scene({triggerElement: "#ani1", offset: -($height/2)})
   .setTween(ani1)   
   .addTo(controller);

   var ani2 = new TimelineMax({onComplete:function(){
    ani2.kill();

    var ani12 = new TimelineMax({onComplete:function(){
      ani12.kill();

    }});
    ani12.staggerFromTo( '#rotate1',3.2,{alpha:0, scale:1,},{alpha: 1,scale:1, delay: 0.2},0.5 );
    new ScrollMagic.Scene({triggerElement: "#ani2 h3", offset: +($height/10)})
    .setTween(ani12)   
    .addTo(controller);

    var ani13 = new TimelineMax({onComplete:function(){
      ani13.kill();
    }});
    ani13.staggerFromTo( '#ani13',2,{alpha:0, scaleX: 0,rotation:-13},{alpha: 1,scaleX:1,rotation:0, delay: 0.5},0.5 );
    new ScrollMagic.Scene({triggerElement: "#ani13", offset: -($height/2.5)})
    .setTween(ani13)   
    .addTo(controller);
  }});
   ani2.staggerFromTo( '#ani2',0.8,{y:"+=100",alpha:0},{y:0,opacity: 1,delay: 1.1},0.5 );
   new ScrollMagic.Scene({triggerElement: "#ani2", offset: -($height/3)})
   .setTween(ani2)   
   .addTo(controller);

   var ani14 = new TimelineMax({onComplete:function(){
    ani14.kill();
    

  }});
   ani14.staggerFromTo( '#ani14',1,{y:"+=250",alpha:0},{y:0,alpha: 1},0.5 );
   new ScrollMagic.Scene({triggerElement: ".section2", offset: -($height/3)})
   .setTween(ani14)   
   .addTo(controller);

   var ani16 = new TimelineMax({onComplete:function(){
    ani16.kill();
    var ani3 = new TimelineMax({onComplete:function(){
      ani3.kill();
    }});
    ani3.staggerFromTo( '#ani3',1.2,{x:"+=370",alpha:0},{x:0,alpha: 1},0.5 );
    new ScrollMagic.Scene({triggerElement: "#ani3", offset: -($height/3)})
    .setTween(ani3)   
    .addTo(controller);
  }});
   ani16.staggerFromTo( '#ani16',2,{y:"+=250",alpha:0},{y:0,alpha: 1},1.2 );
   new ScrollMagic.Scene({triggerElement: ".section2", offset: -($height/4)})
   .setTween(ani16)   
   .addTo(controller);


   var ani4 = new TimelineMax({onComplete:function(){
    ani4.kill();
    var ani5 = new TimelineMax({onComplete:function(){
      ani5.kill();
    }});
    ani5.staggerFromTo( '#ani5',0.75,{alpha:0, x:"+=120",},{alpha: 1,x:0, delay: 0.8},0.5 );
    new ScrollMagic.Scene({triggerElement: "#ani5", offset: -($height/3)})
    .setTween(ani5)   
    .addTo(controller);
  }});
   ani4.staggerFromTo( '#ani4',0.75,{alpha:0, scale: 1, y:"+=150"},{alpha: 1,scale:1,y:0,delay: 1},0.5 );
   new ScrollMagic.Scene({triggerElement: "#ani4", offset: -($height/3)})
   .setTween(ani4)   
   .addTo(controller);



   var ani6 = new TimelineMax({onComplete:function(){
    ani6.kill();
  }});
   ani6.staggerFromTo( '#ani6',0.75,{alpha:0, x:"+=100",},{alpha: 1,x:0, delay: 1.8},0.5 );
   new ScrollMagic.Scene({triggerElement: "#ani6", offset: -($height/3)})
   .setTween(ani6)   
   .addTo(controller);

   var ani7 = new TimelineMax({onComplete:function(){
    ani7.kill();
  }});
   ani7.staggerFromTo( '#ani7',0.75,{alpha:0, x:"-=300",},{alpha: 1,x:0, delay: 2},0.5 );
   new ScrollMagic.Scene({triggerElement: "#ani7", offset: -($height/3)})
   .setTween(ani7)   
   .addTo(controller);

   var ani8 = new TimelineMax({onComplete:function(){
    ani8.kill();
  }});
   ani8.staggerFromTo( '#ani8',0.75,{alpha:0, x:"+=300",},{alpha: 1,x:0, delay: 1},0.5 );
   new ScrollMagic.Scene({triggerElement: "#ani8", offset: -($height/3)})
   .setTween(ani8)   
   .addTo(controller);

   var ani9 = new TimelineMax({onComplete:function(){
    ani9.kill();
  }});
   ani9.staggerFromTo( '#ani9',0.75,{alpha:0, x:"-=100",},{alpha: 1,x:0},0.5 );
   new ScrollMagic.Scene({triggerElement: "#ani9", offset: -($height/3)})
   .setTween(ani9)   
   .addTo(controller);


   var ani10 = new TimelineMax({onComplete:function(){
    ani10.kill();
  }});
   ani10.staggerFromTo( '#ani10',0.75,{alpha:0, x:"+=100",},{alpha: 1,x:0},0.5 );
   new ScrollMagic.Scene({triggerElement: "#ani10", offset: -($height/3)})
   .setTween(ani10)   
   .addTo(controller);

   var ani11 = new TimelineMax({onComplete:function(){
    ani11.kill();
  }});
   ani11.staggerFromTo( '#ani11',0.75,{alpha:0, x:"-=300",},{alpha: 1,x:0, delay: 1},0.5 );
   new ScrollMagic.Scene({triggerElement: "#ani11", offset: -($height/3)})
   .setTween(ani11)   
   .addTo(controller);

   var footer = new TimelineMax({onComplete:function(){
    footer.kill();
  }});
   footer.staggerFromTo( '#ani-footer',0.5,{alpha:0, y:"+=134",},{alpha: 1,y:0, delay: 1.5},0.5 );
   new ScrollMagic.Scene({triggerElement: "#footer",triggerHook: "onLeave", offset: -($height)})
   .setTween(footer)  
   //.addIndicators()
   .addTo(controller);


 };
}

$(window).load(function() {
  setTimeout(function() {
    animateRoll();
  }, 10);

});

}());

var sec1 =$('#sec1').innerHeight(); 
var sec2 =$('#sec2').innerHeight(); 
var sec3 =$('#sec3').innerHeight(); 
var heightMenu =180; 

var controller1 = new ScrollMagic.Controller({globalSceneOptions: {duration: sec1}});

new ScrollMagic.Scene({triggerElement: "#sec1"})
.setClassToggle("#high1", "active")
.addTo(controller1);

var controller2 = new ScrollMagic.Controller({globalSceneOptions: {duration: sec2}});
new ScrollMagic.Scene({triggerElement: "#sec2"})
.setClassToggle("#high2", "active")
.addTo(controller2);

var controller3 = new ScrollMagic.Controller({globalSceneOptions: {duration: sec3}});
new ScrollMagic.Scene({triggerElement: "#sec3"})
.setClassToggle("#high3", "active") 
.addTo(controller3);

$(document).on('click', '#high1', function(event) {
  $('html, body').animate({scrollTop: $('#sec1').offset().top+0}, '500');
  event.preventDefault();
});

$(document).on('click', '#high2', function(event) {
 $('html, body').animate({scrollTop: $('#sec2').offset().top-(heightMenu-190)}, '500');
 event.preventDefault();
});

$(document).on('click', '#high3', function(event) {
  $('html, body').animate({scrollTop: $('#sec3').offset().top-(heightMenu+ 80)}, '500');
  event.preventDefault();
});