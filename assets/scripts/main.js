var mainJs = (function(){
	'use strict';
	function ipad(){
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		};
	};

	function svgIe8(){
		if ($('.ie8').length>0 || $('.ie9').length>0) {
			$('img[src$=".svg"]').each(function() {
				var $img = $(this);
				$img.attr('src', $img.attr('src').replace(/svg$/, 'png'));
			});
		};
	}

	var modModal = $('.modal');
    
    //Youtube Autoplay
	function autoPlayYouTubeModal(){
		var trigger = $("body").find('[data-toggle="modal"]');
		trigger.click(function() {
			var theModal = $(this).data("target"),
			videoSRC = $(this).attr( "data-theVideo" ),
			videoSRCauto = videoSRC ;
			if(videoSRC){
				$(theModal+' iframe').attr('src', videoSRCauto);
				$(theModal).on("click",function(){

					$(this).find("iframe").attr("src",videoSRC);
				});
			}
		});
	};

	function adjustModalMaxHeightAndPosition(){
		$('.modal').each(function(){
			if($(this).hasClass('in') === false){
				$(this).show();
			}
			var contentHeight = $(window).height() - 60;
			var headerHeight = $(this).find('.modal-header').outerHeight() || 2;
			var footerHeight = $(this).find('.modal-footer').outerHeight() || 2;

			$(this).find('.modal-content').css({
				'max-height': function () {
					return contentHeight;
				}
			});

			$(this).find('.modal-body').css({
				'max-height': function () {
					return contentHeight - (headerHeight + footerHeight);
				}
			});
			$(this).find('.modal-dialog').addClass('modal-dialog-center').css({
				'margin-top': function () {
					return -($(this).outerHeight() / 2);
				},
				'margin-left': function () {
					return -($(this).outerWidth() / 2);
				}
			});
			if($(this).hasClass('in') === false){
				$(this).hide();
			}
		});
	};

	function hasModal () {
		if (modModal.length >0) {
			autoPlayYouTubeModal();
			adjustModalMaxHeightAndPosition();
			
		};
	}

	$(document).ready(function() { 
		$('.Scroll-Down').click(function(event) {
			$('html, body').animate({scrollTop: $('.section2').offset().top+0}, '300');
		});

		$('#header .menu-control').click(function(event) {
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				$('#header .menu-home').removeClass('active');
			}
			else{
				$(this).addClass('active');
				$('#header .menu-home').addClass('active');
			};
		});
            
            //Điều khiển nút Hamburger Menu 
			$('.l-menu-video .menu-control').click(function(event) {
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				$('.l-menu-video .menu-home').removeClass('active');
			}
			else{
				$(this).addClass('active');
				$('.l-menu-video .menu-home').addClass('active');
			};
		});
             //Get the current vertical position of the scroll bar for the first element in the set of matched elements or set the vertical position of the scroll bar for every matched element.

				$(window).scroll(function(){
			if($(document).scrollTop()> $activeMenu){
				$("body").addClass("scroll-layout");
				
			}
			else{
				$("body").removeClass("scroll-layout")
				
			};
			if($(document).scrollTop()> 10){
				
				$('#header .menu-home').removeClass('active');
			}
			else{
				
			};
		});
		hasModal();
		$('.modal-video .close').click(function(event) {
			$('#video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');   
		});


	});

	$(window).load(function() {
		$('html, body').animate({scrollTop: $('body').offset().top+0}, '300');
		setTimeout(function() {
			$('#loading').fadeOut();
		}, 500);
		
	});

	$(window).resize(function(){

	});

	return {
		autoPlayYouTubeModal: autoPlayYouTubeModal,
		hasModal: hasModal,
		adjustModalMaxHeightAndPosition: adjustModalMaxHeightAndPosition
	};
})();

var $activeMenu = $('.l-menu-video').offset().top;

$(window).scroll(function(){
	if($(document).scrollTop()> $activeMenu){
		$("body").addClass("scroll-layout");
		//$('.menu-home').removeClass('active');
	}
	else{
		$("body").removeClass("scroll-layout")
		//$('.menu-home').addClass('active');
	};

	if($(document).scrollTop()> 10){
		//$("body").addClass("scroll-layout");
		$('#header .menu-home').removeClass('active');
	}
	else{
		//$("body").removeClass("scroll-layout")
		//$('#header .menu-home').addClass('active');
	}
});