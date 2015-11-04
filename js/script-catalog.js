$(document).ready(function(){
	$('.productFlip').bind("click",function(){
		var elem = $(this);
		if(elem.data('flipped')) {
			elem.revertFlip();
			elem.data('flipped',false)
		}
		else {
			elem.flip({
				direction:'lr',
				speed: 350,
				onBefore: function(){
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
			elem.data('flipped',true);
		}
	});
	
	/*	product menu dropdown	*/
	$('.product-menu>ul>li>a').on('click', function() {
		var dropped = $(this).hasClass('dropped');
		$('.dropped').removeClass('dropped').parent().find('ul').slideUp();
		if(!dropped)
			$(this).addClass('dropped').parent().find('ul').slideDown();
		return false;
	});
	
	/*	Price Slider	*/
	price_slider
	$("#price_slider").slider({
	    min: 10,
	    max: 1000,
	    values: [10,1000],
	    range: true,
		stop: function(event, ui) {
			$("#price_from").val($("#price_slider").slider("values",0));
			$("#price_to").val($("#price_slider").slider("values",1));
	    },
	    slide: function(event, ui){
			$("#price_from").val($("#price_slider").slider("values",0));
			$("#price_to").val($("#price_slider").slider("values",1));
	    }
	});

	/*	price slider functional		*/
	$("#price_from").change(function(){
		var value1=$("#price_from").val();
		var value2=$("#price_to").val();
	    
		if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			$("#price_from").val(value1);
		}
		$("#price_slider").slider("values",0,value1);	
	});
	
	$("#price_to").change(function(){
		var value1=$("#price_from").val();
		var value2=$("#price_to").val();
	
		if (value2 > 1000) { value2 = 1000; $("#price_to").val(1000)}
		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("#price_to").val(value2);
		}
		$("#price_slider").slider("values",1,value2);
	});

    // фильтрация ввода в поля
	$('input').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
	
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		
		if(!/\d/.test(keyChar))	return false;
	
	});
	/*	reset slider by reset button	*/
	$('#product_filter_reset').on('click', function() {
		$("#price_slider").slider("values",0,10).slider("values",1,1000);
	});
});
