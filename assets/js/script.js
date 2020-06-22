/* Template	:	Xiom v1.0.0 */
(function($){
	'use strict';
	var $win = $(window), $doc = $(document), $body_m = $('body'), $navbar = $('.navbar');
	
	// Get Window Width
	function winwidth () {
		return $win.width();
	}
	var wwCurrent = winwidth();
	$win.on('resize', function () { 
		wwCurrent = winwidth(); 
	});

	// Sticky
	var $is_sticky = $('.is-sticky');
	if ($is_sticky.length > 0 ) {
		var $navm = $('#mainnav').offset();
		$win.scroll(function(){
			var $scroll = $win.scrollTop();
			if ($win.width() > 991) {
				if($scroll > $navm.top ){
					if(!$is_sticky.hasClass('has-fixed')) {$is_sticky.addClass('has-fixed');}
				} else {
					if($is_sticky.hasClass('has-fixed')) {$is_sticky.removeClass('has-fixed');}
				}
			} else {
				if($is_sticky.hasClass('has-fixed')) {$is_sticky.removeClass('has-fixed');}
			}
		});
	}

    // Bootstrap Dropdown
	var $dropdown_menu = $('.dropdown'), $dropdown_toggle = $('.dropdown-toggle');	
	if ($dropdown_menu.length > 0  ) {
		$dropdown_menu.on("mouseover",function(){
			if ($win.width() > 991) {
				$(this).children('.dropdown-menu').stop().fadeIn(400);
				$(this).addClass('open'); 
			}
		});
		$dropdown_menu.on("mouseleave",function(){
			if ($win.width() > 991) {
				$(this).children('.dropdown-menu').stop().fadeOut(400);
				$(this).removeClass('open'); 
			}
		});
		$dropdown_toggle.on("click",function(){
			if ($win.width() < 991) {
				$(this).parent().children('.dropdown-menu').fadeToggle(400);
				$(this).parent().toggleClass('open'); 
				return false;
			}
		});
	}

    
	// Nav collapse
    var $trannav = $('.is-transparent');
	$('.menu-link').on("click",function() {
		$('.navbar-collapse').collapse('hide');
		$trannav.removeClass('active');
	});
	
	$(document).on('mouseup', function(e){
		if (!$trannav.is(e.target) && $trannav.has(e.target).length===0) {
			$('.navbar-collapse').collapse('hide');
			$trannav.removeClass('active');
		}
	});
	
    
    // Back to Top
    var $up_icon = $('.up-icon');
    if($up_icon.length > 0){
        $up_icon.on('click', function(){
            $("html").animate({'scrollTop' : 0},2000);
        });
    }

	// Ajax Form Submission
	var contactForm = $('#contact-form'), subscribeForm = $('#subscribe-form');
	if (contactForm.length > 0 || subscribeForm.length > 0) {
		if( !$().validate || !$().ajaxSubmit ) {
			console.log('contactForm: jQuery Form or Form Validate not Defined.');
			return true;
		}
		// ContactForm
		if (contactForm.length > 0) {
			var selectRec = contactForm.find('select.required'), 
			qf_results = contactForm.find('.form-results');
			contactForm.validate({
			invalidHandler: function () { qf_results.slideUp(400); },
			submitHandler: function(form) {
				qf_results.slideUp(400);
				$(form).ajaxSubmit({
					target: qf_results, dataType: 'json',
					success: function(data) {
						var type = (data.result==='error') ? 'alert-danger' : 'alert-success';
						qf_results.removeClass( 'alert-danger alert-success' ).addClass( 'alert ' + type ).html(data.message).slideDown(400);
						if (data.result !== 'error') { $(form).clearForm().find('.input-field').removeClass('input-focused'); }
					}
				});
				}
			});
			selectRec.on('change', function() { $(this).valid(); });
		}
		// SubscribeForm
		if (subscribeForm.length > 0) {
			var sf_results = subscribeForm.find('.subscribe-results');
			subscribeForm.validate({
			invalidHandler: function () { sf_results.slideUp(400); },
			submitHandler: function(form) {
				sf_results.slideUp(400);
				$(form).ajaxSubmit({
					target: sf_results, dataType: 'json',
					success: function(data) {
						var type = (data.result==='error') ? 'alert-danger' : 'alert-success';
						sf_results.removeClass( 'alert-danger alert-success' ).addClass( 'alert ' + type ).html(data.message).slideDown(400);
						if (data.result !== 'error') { $(form).clearForm().find('.input-field').removeClass('input-focused'); }
					}
				});
				}
			});
		}
	}
    
    // Active Current Page
    var links = $('.navbar ul li a');
    $.each(links, function (key, va) {
       if (va.href == document.URL) {
           $(this).addClass('active');
       }
    });
    

})(jQuery);
