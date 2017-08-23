/*
* Template Name: Unify - Responsive Bootstrap Template
* Author: @htmlstream
* Website: http://htmlstream.com
*/

var Unify = function () {
	// We extend $ by method hasAttr
	$.fn.hasAttr = function(name) {
	  return this.attr(name) !== undefined;
	};

	// Fixed Header
	function handleHeader() {
		$(window).scroll(function() {
		  if ($(window).scrollTop() > 100) {
			$('.header-fixed .header-sticky').addClass('header-fixed-shrink');
		  } else {
			$('.header-fixed .header-sticky').removeClass('header-fixed-shrink');
		  }
		});
	}

	// Header Mega Menu
	function handleMegaMenu() {
		$(document).on('click', '.mega-menu .dropdown-menu', function(e) {
			e.stopPropagation();
		})
	}

	// Search Box (Header)
	function handleSearch() {
		$('.search').on("click", function () {
			if($('.search-btn').hasClass('fa-search')){
				$('.search-open').fadeIn(500);
				$('.search-btn').removeClass('fa-search');
				$('.search-btn').addClass('fa-times');
			} else {
				$('.search-open').fadeOut(500);
				$('.search-btn').addClass('fa-search');
				$('.search-btn').removeClass('fa-times');
			}
		});
	}

	// Search Box v1 (Header v5)
	function handleSearchV1() {
		$('.header-v5 .search-button').click(function () {
			$('.header-v5 .search-open').slideDown();
		});

		$('.header-v5 .search-close').click(function () {
			$('.header-v5 .search-open').slideUp();
		});

		$(window).scroll(function(){
		  if($(this).scrollTop() > 1) $('.header-v5 .search-open').fadeOut('fast');
		});
	}

	// Search Box v2 (Header v8)
	function handleSearchV2() {
		$(".blog-topbar .search-btn").on("click", function() {
		  if ($(".topbar-search-block").hasClass("topbar-search-visible")) {
			$(".topbar-search-block").slideUp();
			$(".topbar-search-block").removeClass("topbar-search-visible");
		  } else {
			$(".topbar-search-block").slideDown();
			$(".topbar-search-block").addClass("topbar-search-visible");
		  }
		});
		$(".blog-topbar .search-close").on("click", function() {
		  $(".topbar-search-block").slideUp();
		  $(".topbar-search-block").removeClass("topbar-search-visible");
		});
		$(window).scroll(function() {
		  $(".topbar-search-block").slideUp();
		  $(".topbar-search-block").removeClass("topbar-search-visible");
		});
	}

	// TopBar (Header v8)
	function handleTopBar() {
		$(".topbar-toggler").on("click", function() {
		  if ($(".topbar-toggler").hasClass("topbar-list-visible")) {
			$(".topbar-menu").slideUp();
			$(this).removeClass("topbar-list-visible");
		  } else {
			$(".topbar-menu").slideDown();
			$(this).addClass("topbar-list-visible");
		  }
		});
	}

	// TopBar SubMenu (Header v8)
	function handleTopBarSubMenu() {
		$(".topbar-list > li").on("click", function(e) {
		  if ($(this).children("ul").hasClass("topbar-dropdown")) {
			if ($(this).children("ul").hasClass("topbar-dropdown-visible")) {
			  $(this).children(".topbar-dropdown").slideUp();
			  $(this).children(".topbar-dropdown").removeClass("topbar-dropdown-visible");
			} else {
			  $(this).children(".topbar-dropdown").slideDown();
			  $(this).children(".topbar-dropdown").addClass("topbar-dropdown-visible");
			}
		  }
		  //e.preventDefault();
		});
	}

	// Sidebar Navigation Toggle
	function handleToggle() {
		$('.list-toggle').on('click', function() {
			$(this).toggleClass('active');
		});
	}

	// Equal Height Columns
	function handleEqualHeightColumns() {
		const EqualHeightColumns = () => {
			$(".equal-height-columns").each(function() {
				heights = [];
				$(".equal-height-column", this).each(function() {
					$(this).removeAttr("style");
					heights.push($(this).height()); // write column's heights to the array
				});
				$(".equal-height-column", this).height(Math.max.apply(Math, heights)); //find and set max
			});
		}

		EqualHeightColumns();
		$(window).resize(function() {
			EqualHeightColumns();
		});
		$(window).load(function() {
			EqualHeightColumns();
		});
	}

	// Equal Height Image-Columns
	function handleEqualHeightColumns__Images() {
		const EqualHeightColumns__Images = () => {
			$('.equal-height-columns-v2').each(function() {
				let heights = [];
				$('.equal-height-column-v2', this).each(function() {
					$(this).removeAttr('style');
					heights.push($(this).height()); // Write column's heights to the array
				});
				$('.equal-height-column-v2', this).height(Math.max.apply(Math, heights)); // Find and set max

				$('.equal-height-column-v2', this).each(function() {
					if ($(this).hasAttr('data-image-src')) {
						$(this).css('background', 'url('+$(this).attr('data-image-src')+') no-repeat scroll 50% 0 / cover');
					}
				});
			});
		}
    $('.equal-height-columns-v2').ready(function() {
      EqualHeightColumns__Images();
    });
		$(window).resize(function() {
			EqualHeightColumns__Images();
		});
	}

	// Full Screen
	var handleFullscreen = function() {
		let WindowHeight = $(window).height();
		let HeaderHeight = 0;

		if ($(document.body).hasClass("promo-padding-top")) {
		  HeaderHeight = $(".header").height();
		} else {
		  HeaderHeight = 0;
		}

		$(".fullheight").css("height", WindowHeight - HeaderHeight);

		$(window).resize(function() {
			let WindowHeight = $(window).height();
		  $(".fullheight").css("height", WindowHeight - HeaderHeight);
		});
	}

	// Align Middle
	var handleValignMiddle = function() {
		$(".valign__middle").each(function() {
		  $(this).css("padding-top", $(this).parent().height() / 2 - $(this).height() / 2);
		});
		$(window).resize(function() {
		  $(".valign__middle").each(function() {
			$(this).css("padding-top", $(this).parent().height() / 2 - $(this).height() / 2);
		  });
		});
	}

	// Hover Selector
	function handleHoverSelector() {
		// $('.hoverSelector').on('hover', function(e) {
		// 	$('.hoverSelectorBlock', this).toggleClass('show');
		// 	e.stopPropagation();
		// });
	    $('.hoverSelector').on('click', function(e) {
	      if ($(this).children('ul').hasClass('languages')) {
	        if ($(this).children('ul').hasClass('languages-visible')) {
	          $(this).children('.languages').slideUp();
	          $(this).children('.languages').removeClass('languages-visible');
	        } else {
	          $(this).children('.languages').slideDown();
	          $(this).children('.languages').addClass('languages-visible');
	        }
	      }
	      //e.preventDefault();
	    });
	}

	// Bootstrap Tooltips and Popovers
	function handleBootstrap() {
		/* Bootstrap Carousel */
		$('.carousel').carousel({
			interval: 15000,
			pause: 'hover'
		});

		/* Tooltips */
		$('.tooltips').tooltip();
		$('.tooltips-show').tooltip('show');
		$('.tooltips-hide').tooltip('hide');
		$('.tooltips-toggle').tooltip('toggle');
		$('.tooltips-destroy').tooltip('destroy');

		/* Popovers */
		$('.popovers').popover();
		$('.popovers-show').popover('show');
		$('.popovers-hide').popover('hide');
		$('.popovers-toggle').popover('toggle');
		$('.popovers-destroy').popover('destroy');
	}

	return {
		init: function () {
			handleBootstrap();
			//handleSearch();
			//handleSearchV1();
			//handleSearchV2();
			handleTopBar();
			handleTopBarSubMenu();
			handleToggle();
			handleHeader();
			handleMegaMenu();
			handleHoverSelector();
			handleFullscreen();
			handleValignMiddle();
			//handleEqualHeightColumns();
			//handleEqualHeightColumns__Images();
		},

		// Counters
		initCounter: function () {
			$('.counter').counterUp({
				delay: 10,
				time: 1000
			});
		},

		// Parallax Backgrounds
		initParallaxBg: function () {
			$(window).load(function() {
				$('.parallaxBg').parallax("50%", 0.2);
				$('.parallaxBg1').parallax("50%", 0.4);
			});
		},

		// Scroll Bar
		initScrollBar: function () {
			$('.mCustomScrollbar').mCustomScrollbar({
				theme:"minimal",
				setHeight: '220px',
				scrollEasing: "linear",
				autoHideScrollbar: true,
				scrollButtons: true
			});
		},

		// Sidebar Menu Dropdown
		initSidebarMenuDropdown: function() {
		  function SidebarMenuDropdown() {
			$('.header-v7 .dropdown-toggle').on('click', function() {
			  $('.header-v7 .dropdown-menu').stop(true, false).slideUp();
			  $('.header-v7 .dropdown').removeClass('open');

			  if ($(this).siblings('.dropdown-menu').is(":hidden") == true) {
				$(this).siblings('.dropdown-menu').stop(true, false).slideDown();
				$(this).parents('.dropdown').addClass('open');
			  }
			});
		  }
		  SidebarMenuDropdown();
		},

		// Animate Dropdown
		initAnimateDropdown: function() {
		  function MenuMode() {
			$('.dropdown').on('show.bs.dropdown', function() {
			  $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
			});
			$('.dropdown').on('hide.bs.dropdown', function() {
			  $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
			});
		  }

		  $(window).resize(function() {
			if ($(window).width() > 768) {
			  MenuMode();
			}
		  });

		  if ($(window).width() > 768) {
			MenuMode();
		  }
		},
	};
}();
