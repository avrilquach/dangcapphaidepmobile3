$(document).ready(function() {
	$('.popup-youtube').magnificPopup({
				type: 'iframe',
				mainClass: 'mfp-fade',
				preloader: true,
		});
	$('.lazy').lazy();
	 $('.close_mobile').click(function(e)
	 {
	 		$('.menu-mobile').toggleClass('active');
	 		$('body').toggleClass('active');
	 });
	 $('.menu-click').click(function(e)
	 {
	 		$('.menu-mobile').toggleClass('active');
	 		$('body').toggleClass('active');
	 });
	 $('.menu-mobile ul li').click(function(e){
	 		$(this).toggleClass('current');
	 });
	 $('.main-banner').each(function () {
	 		var el = $(this);
			el.owlCarousel({
					center: true,
					loop: true,
					nav: false,
					dots: true,
					items: 1,
					autoplay: true,
					animateOut: 'fadeOut',
					animateIn: 'fadeInLeft',
					smartSpeed: 200,
					onDragged: callback
			});
			el.on('changed.owl.carousel', function(event) {
			  var _color = $('.owl-item.center .item .color_bg').html();
			  $('#header').css('background',_color);
			  $('.banner').css("background-image","linear-gradient("+_color+", #fff)")
			})
	 });
	 function callback()
	 {
	 	var _color = $('.owl-item.center .item .color_bg').html();
			  $('#header').css('background',_color);
			  $('.banner').css("background-image","linear-gradient("+_color+", #fff)")
	 }
	
	 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 0
    });
	 var owl = $('#big');
		owl.owlCarousel({
		  autoplay: 2000,
		  items:1,
		  loop: true,
		  onInitialized  : counter,
		  onTranslated : counter,
		  dots: false
		});
	 function counter(event) {
	   var element   = event.target;        
	    var items     = event.item.count;   
	    var item      = event.item.index + 1;     
	  if(item > items) {
	    item = item - items
	  }
	  $('#counter').html(""+item+"/"+items)
	}
	$(".info_detailp .ctent").slice(0, 1).css("display","flex");
	$('.read-more a').click(function(e){
		var _this = $(this).parent().parent().parent().parent();
		_this.find(".ctent:hidden").slice(0, 1).css("display","flex");
		 $('html,body').animate({
            scrollTop: $(this).offset().top-(315)
        }, 1500);
	});
	$('.choose_ite a').click(function(e){
		var _this = $(this).parent();
		_this.find('.choose_ite_box').toggleClass('active');
	});
	$('.filter ul li').click(function(e){
		$('.loc-sp').toggleClass('active');
		$('body').toggleClass('active');
	});
	$('.close_locsp').click(function(e){
		$('.loc-sp').toggleClass('active');
		$('body').toggleClass('active');
	});
	$('.loc-sp ul li').click(function(e){
		$('.loc-sp ul li').removeClass('current');
		$(this).addClass('current');
	});
	$('.click').click(function(e){
		$(this).parent().find('.box').toggleClass('current');
	});
	$('.account-info .item h4').click(function(e)
	{
		$(this).parent().find('ul').toggleClass('current');
		$(this).parent().find('h4').toggleClass('current');
	});
	$('.search a').click(function(e){
		$('.form-box-search').show();
	});
	$('.form-box-search a.cancelSearch').click(function(e){
		$('.form-box-search').hide();
	});
	var customer = $('.main-customer');
	customer.owlCarousel({
			loop: true,
			nav: true,
			navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
			items: 1,
			autoplay: true,
			smartSpeed: 200,
			responsiveClass:true,
				responsive:{
						0:{
								items:1
						},
						768:{
								items:1
						},
						1200:{
								items:1
						}
				}
	});
	var customer = $('.main-bang-gia');
	customer.owlCarousel({
			loop: true,
			nav: false,
			items: 1,
			autoplay: true,
			smartSpeed: 200,
			responsiveClass:true,
				responsive:{
						0:{
								items:1
						},
						768:{
								items:1
						},
						1200:{
								items:1
						}
				}
	});
	$('.gallery-bachhoa').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
  }).owlCarousel({
    items: 1,
    loop:true,
		margin:0,
		dots: true,
	});
	$('#loadcate').click(function(e){
		$('.loadcate').addClass('active');
	})
	$('.loadcate span').click(function(e){
		$('.loadcate').removeClass('active');
	})
	$("#thongtinsanpham .ctent").slice(0, 1).css("display","block");
	$('a.xem-them').click(function(e){
		var _this = $(this).parent().parent().parent().parent();
		_this.find(".ctent:hidden").slice(0, 1).css("display","block");
		 $('html,body').animate({
            scrollTop: $(this).offset().top-(315)
        }, 1500);
	});
	//dangcapphaidep16092020
	$(".nav-fix-bt-detail .item:nth-child(3) a").click(function(e){
		$(".popup-addcart").addClass("active");
		$(".nav-fix-bt-detail").hide();
	})
	$(".addcart .close").click(function(e){
		$(".popup-addcart").removeClass("active");
		$(".nav-fix-bt-detail").show();
	})
	var number = parseInt($('input.number').val());
	$("span.number span.minius").click(function(e){
		if (number == 0) return;
		number--;
		$('input.number').val(number);
	})
	$("span.number span.plus").click(function(e){
		number++;
		$('input.number').val(number);
	})
	$(".box-dia-chi ._r a").click(function(e){
		$(".popup-giaohang").addClass("active");
	})
	$(".popup-giaohang .close").click(function(e){
		$(".popup-giaohang").removeClass("active");
	})
	$(".popup-giaohang .choose").click(function(e){
		$(".popup-giaohang .box").toggleClass("active");
	})
	$(".popup-giaohang .detail a:last-child").click(function(e){
		$(".popup-giaohang").removeClass("active");
		$(".popup-diachi").addClass("active");
	})
	$(".popup-diachi .close").click(function(e){
		$(".popup-giaohang").addClass("active");
		$(".popup-diachi").removeClass("active");
	})
	$(".popup-diachi .back").click(function(e){
		$(".popup-giaohang").addClass("active");
		$(".popup-diachi").removeClass("active");
	})
});