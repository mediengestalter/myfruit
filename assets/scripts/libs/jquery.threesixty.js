jQuery.fn.threesixty = function(options){
	options = options || {};
	options.images = options.images || [];
	options.method = options.method || "click" //can be click, mouse move or auto
	options.cycle = options.cycle || 1;
	options.resetMargin = options.resetMargin || 0;
	options.direction = options.direction || "forward";
	options.sensibility = options.sensibility || options.cycle * 0.35;
	options.autoscrollspeed = options.autoscrollspeed || 500;


	if (options.direction == "backward")
		options.images.reverse();

	return this.each(function(){
		var imgArr = [];
		var pic = $(this);

		$(function() {
			var cache = [];
			var parent = $("<div>");
			parent.css({height:pic.height(), width:pic.width(), overflow:"hidden", position:"relative"});
			pic.wrap(parent).css({position:"relative",top:0,left:0});
			parent = pic.parent();
		//Binding the progress bar
		//Nasty overlay capturing all the events :P
		pic.css({cursor:"all-scroll"});
		

		var totalProgress = 0;
		var loaded=false;
		//ask browser to load all images.. I know this could be better but is just a POC

		$.each(options.images, function(index, record) {
			var o =$("<img>").attr("src",record).load(function() {
				if (index>pic.data("tempIndex"))
				{
					pic.data("tempIndex", index)
					pic.attr("src", $(this).attr("src"))
				}	

				var progress = pic.parent().find(".progressBar");
				totalProgress++;
				var maxsize = pic.parent().find(".progressBg").width();
				var newWidth = (totalProgress/options.images.length)*maxsize;
				progress.stop(true,true).animate({width:newWidth},250);
				if (totalProgress == options.images.length-1)
					{	loaded=true;
						pic.parent().find(".overlay, .progressBar, .progressBg").remove();
					}
				});
			cache.push(o); 
		});

	})


for (var x=1; x<=options.cycle; x++)
	for (var y=0; y<options.images.length; y++)
		imgArr.push(options.images[y]);

	pic.data("currentIndex",0).data("tempIndex",0);
	pic.data("scaled",false);
	pic.data("touchCount",0);
	var originalHeight = pic.height();
	var originalWidth = pic.width();

		function determineIndex(e)	//e represent the event for newIndex
		{
			return Math.floor((e.pageX - pic.offset().left) / (pic.width()/imgArr.length))
		}

		function moveInViewport(e) //e represents the finger in question
		{		$("#debug").text("left:" + e.pageX);
		var newTop = pic.data("refLocY") - pic.data("refTouchY") + e.pageY;
		var newLeft = pic.data("refLocX") - pic.data("refTouchX") + e.pageX;
		if (newLeft>0) newLeft=0;
		if (pic.parent().width() + Math.abs(newLeft) > pic.width())
			newLeft = -1*pic.width()+pic.parent().width();
		if (newTop>0) newTop=0;
		if (pic.parent().height() + Math.abs(newTop) > pic.height())
			newTop = -1*pic.height()+pic.parent().height();

		pic.css({left:newLeft, top:newTop});
	}

	pic.mousemove(function(evt) {
		if (!!pic.data("refTouchX") === false)
		{
			pic.data("refTouchX",evt.pageX);
			pic.data("refTouchY",evt.pageY);
			pic.data("refLocX",parseInt(pic.css("left")));
			pic.data("refLocY",parseInt(pic.css("top")));
			
		}

		evt.preventDefault();
		if (pic.data("enabled")=="1" || options.method == "mousemove")
		{	
			if (evt.preventDefault) evt.preventDefault();

			var e = evt;
			if (pic.data("scaled") == false)
			{
					var distance = e.pageX - pic.data("refTouchX");	//distance hold the distance traveled with the finger so far..
					stripeSize = Math.floor(originalWidth / imgArr.length);
					var newIndex = pic.data("currentIndex") + Math.floor(distance*options.sensibility/stripeSize)
					if (newIndex < 0) 
					{
						newIndex = imgArr.length-1;
						pic.data("currentIndex",newIndex);
					}
					newIndex = newIndex % imgArr.length;
					if (newIndex == pic.data("currentIndex"))
						return;
					pic.attr("src",imgArr[newIndex]);
					pic.data("tempIndex",newIndex);		
				}
				else {	//The image needs to be moved in its viewport..
					moveInViewport(e);
				} 
				return;
			}	
		})

if (options.method == "click")
		{  //Certain binding will be done if and only if the method is "click" instead of "mousemove"
	pic.mousedown(function(e) {
		e.preventDefault(); 
		pic.data("enabled","1"); 	
	});	
	
	$("body").mouseup(function(e) {
		e.preventDefault();
		pic.data("enabled","0");
		pic.data("currentIndex",pic.data("tempIndex"));
	});
}

if (options.method == "auto") {
	var speed = options.autoscrollspeed;
	var newIndex=0;
	var handle = window.setInterval(function() { pic.attr("src", imgArr[++newIndex % imgArr.length])} , speed);
	$('.rotate-box').click(function(event) {
		if ($(this).hasClass('rotate-box-active')) {
			clearInterval(handle);
		};
	});
}

});			
};


// $(function() {
	// 	var $rotate= $('.rotate').clone();
	// 	$('.rotate-box .rotate').remove();
	// 	var arr2 = []
	// 	for (var x=1; x<= 5; x++)
	// 		arr2.push("assets/images/img-rotate" +x + ".png");

	// 	$('.rotate-box').click(function(event) {
	// 		if ($(this).hasClass('rotate-box-active')) {
	// 			$(this).removeClass('rotate-box-active');
	// 			$('.rotate-box .rotate').remove();
	// 		}
	// 		else{
	// 			$(this).addClass('rotate-box-active');
	// 			$rotate.appendTo($(this));
	// 			setTimeout(function() {
	// 				 $(".rotate-box .rotate img").threesixty({images:arr2, method:'auto', autoscrollspeed:150});
	// 			}, 100);
	// 		};
	// 	});
	// });

