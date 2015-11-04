//jQuery.noConflict();
jQuery(function($) {
	
	/*	extend search panel slide toggle	*/
	$('.x-search-box').click(function() {
		$('#x_search_box').slideToggle();
		return false;
	});
	
	/*	sum calculator	*/
	$('.cart-table').on('change', '.product-qnt', function() {
		var parent = $(this).parent().parent();
		var total = 0;
		parent.find('.sum-value').text(parent.find('.price-value').text() * $(this).val());
		$('.sum-value').each(function() {
            total += 1 * $(this).text();
        });
		$('#cart_total').text(total);
	});
	
});

