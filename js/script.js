//jQuery.noConflict();
jQuery(function($) {
	
	/*	extend search panel slide toggle	*/
	$('.x-search-box').click(function() {
		$('#x_search_box').slideToggle();
		return false;
	});
	
	/*	slideshow start/stop	*/
	$('.picture-slides-container').hover(
		function() {
			$('.picture-slides-stop-slideshow').click();
		}, function() {
			$('.picture-slides-start-slideshow').click();
		});
		
	/*	brands carousel	*/
	$('#brand_container').coverscroll({
		items:'.item',
		'scrollactive':false,
		'movecallback':function(item){
			var href = item.find('a').attr('href');
			$('.brand-link').attr('href',href);	
		}
	});
	
	/*	product menu dropdown	*/
	$('.product-menu>ul>li>a').bind('click', function() {
		var dropped = $(this).hasClass('dropped');
		$('.dropped').removeClass('dropped').parent().find('ul').slideUp();
		if(!dropped)
			$(this).addClass('dropped').parent().find('ul').slideDown();
		return false;
	});
	
	/*	tabs	*/
	$('#products').tabs();

	/* flip functional */
	
	$('.productFlip').bind("click",function(){
		// $(this) point to the clicked .sponsorFlip element (caching it in elem for speed):
		var elem = $(this);
		// data('flipped') is a flag we set when we flip the element:
		if(elem.data('flipped'))
		{
			// If the element has already been flipped, use the revertFlip method
			// defined by the plug-in to revert to the default state automatically:
			elem.revertFlip();
			// Unsetting the flag:
			elem.data('flipped',false)
		}
		else
		{
			// Using the flip method defined by the plugin:
			elem.flip({
				direction:'lr',
				speed: 350,
				onBefore: function(){
					// Insert the contents of the .productData div (hidden from view with display:none)
					// into the clicked .productFlip div before the flipping animation starts:
					elem.html(elem.siblings('.productData').html());
					$("a.lightbox").lightBox({
							imageBtnClose: 'images/lightbox-btn-close-x.gif',
							imageBtnPrev: 'images/circleleft32.png',
							imageBtnNext: 'images/circleright32.png',
							txtImage: 'Изображение',
							txtOf: 'из'
					});
				}
			});
			// Setting the flag:
			elem.data('flipped',true);
		}
	});
});

	/*	slider	*/
	jQuery.PictureSlides.set({
		// Switches to decide what features to use
		useFadingIn : true,
		useFadingOut : true,
		useFadeWhenNotSlideshow : true,
		useFadeForSlideshow : true,
		useDimBackgroundForSlideshow : true,
		loopSlideshow : true,
		usePreloading : true,
		useAltAsTooltip : true,
		useTextAsTooltip : false,

		// Fading settings
		fadeTime : 800, // Milliseconds	
		timeForSlideInSlideshow : 4000, // Milliseconds

		// At page load
		startIndex : 1,	
		startSlideShowFromBeginning : true,
		startSlideshowAtLoad : true,
		dimBackgroundAtLoad : false,

		// Large images to use and thumbnail settings
		images : [
			{
				image : "slider/1.jpg", 
			},
			{                                  

				image : "slider/2.jpg", 
			},
			{                                  

				image : "slider/3.jpg", 
			},
			{                                  

				image : "slider/6.jpg", 
			} // NOTE! No comma after the last object
		],
		thumbnailActivationEvent : "click",

		// Classes of HTML elements to use
		mainImageClass : "picture-slides-image", // Mandatory
		imageLinkClass : "picture-slides-image-link",
		fadeContainerClass : "picture-slides-fade-container",
		imageTextContainerClass : "picture-slides-image-text",
		previousLinkClass : "picture-slides-previous-image",
		nextLinkClass : "picture-slides-next-image",
		imageCounterClass : "picture-slides-image-counter",
		startSlideShowClass : "picture-slides-start-slideshow",
		stopSlideShowClass : "picture-slides-stop-slideshow",
		thumbnailContainerClass: "picture-slides-thumbnails",
		dimBackgroundOverlayClass : "picture-slides-dim-overlay"
	});
