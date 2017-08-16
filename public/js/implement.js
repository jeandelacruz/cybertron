var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
* Template Name: Unify - Responsive Bootstrap Template
* Author: @htmlstream
* Website: http://htmlstream.com
*/

var Unify = function () {
	// We extend $ by method hasAttr
	$.fn.hasAttr = function (name) {
		return this.attr(name) !== undefined;
	};

	// Fixed Header
	function handleHeader() {
		$(window).scroll(function () {
			if ($(window).scrollTop() > 100) {
				$('.header-fixed .header-sticky').addClass('header-fixed-shrink');
			} else {
				$('.header-fixed .header-sticky').removeClass('header-fixed-shrink');
			}
		});
	}

	// Header Mega Menu
	function handleMegaMenu() {
		$(document).on('click', '.mega-menu .dropdown-menu', function (e) {
			e.stopPropagation();
		});
	}

	// Search Box (Header)
	function handleSearch() {
		$('.search').on("click", function () {
			if ($('.search-btn').hasClass('fa-search')) {
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

		$(window).scroll(function () {
			if ($(this).scrollTop() > 1) $('.header-v5 .search-open').fadeOut('fast');
		});
	}

	// Search Box v2 (Header v8)
	function handleSearchV2() {
		$(".blog-topbar .search-btn").on("click", function () {
			if ($(".topbar-search-block").hasClass("topbar-search-visible")) {
				$(".topbar-search-block").slideUp();
				$(".topbar-search-block").removeClass("topbar-search-visible");
			} else {
				$(".topbar-search-block").slideDown();
				$(".topbar-search-block").addClass("topbar-search-visible");
			}
		});
		$(".blog-topbar .search-close").on("click", function () {
			$(".topbar-search-block").slideUp();
			$(".topbar-search-block").removeClass("topbar-search-visible");
		});
		$(window).scroll(function () {
			$(".topbar-search-block").slideUp();
			$(".topbar-search-block").removeClass("topbar-search-visible");
		});
	}

	// TopBar (Header v8)
	function handleTopBar() {
		$(".topbar-toggler").on("click", function () {
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
		$(".topbar-list > li").on("click", function (e) {
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
		$('.list-toggle').on('click', function () {
			$(this).toggleClass('active');
		});
	}

	// Equal Height Columns
	function handleEqualHeightColumns() {
		var EqualHeightColumns = function EqualHeightColumns() {
			$(".equal-height-columns").each(function () {
				heights = [];
				$(".equal-height-column", this).each(function () {
					$(this).removeAttr("style");
					heights.push($(this).height()); // write column's heights to the array
				});
				$(".equal-height-column", this).height(Math.max.apply(Math, heights)); //find and set max
			});
		};

		EqualHeightColumns();
		$(window).resize(function () {
			EqualHeightColumns();
		});
		$(window).load(function () {
			EqualHeightColumns();
		});
	}

	// Equal Height Image-Columns
	function handleEqualHeightColumns__Images() {
		var EqualHeightColumns__Images = function EqualHeightColumns__Images() {
			$('.equal-height-columns-v2').each(function () {
				var heights = [];
				$('.equal-height-column-v2', this).each(function () {
					$(this).removeAttr('style');
					heights.push($(this).height()); // Write column's heights to the array
				});
				$('.equal-height-column-v2', this).height(Math.max.apply(Math, heights)); // Find and set max

				$('.equal-height-column-v2', this).each(function () {
					if ($(this).hasAttr('data-image-src')) {
						$(this).css('background', 'url(' + $(this).attr('data-image-src') + ') no-repeat scroll 50% 0 / cover');
					}
				});
			});
		};
		$('.equal-height-columns-v2').ready(function () {
			EqualHeightColumns__Images();
		});
		$(window).resize(function () {
			EqualHeightColumns__Images();
		});
	}

	// Full Screen
	var handleFullscreen = function handleFullscreen() {
		var WindowHeight = $(window).height();
		var HeaderHeight = 0;

		if ($(document.body).hasClass("promo-padding-top")) {
			HeaderHeight = $(".header").height();
		} else {
			HeaderHeight = 0;
		}

		$(".fullheight").css("height", WindowHeight - HeaderHeight);

		$(window).resize(function () {
			var WindowHeight = $(window).height();
			$(".fullheight").css("height", WindowHeight - HeaderHeight);
		});
	};

	// Align Middle
	var handleValignMiddle = function handleValignMiddle() {
		$(".valign__middle").each(function () {
			$(this).css("padding-top", $(this).parent().height() / 2 - $(this).height() / 2);
		});
		$(window).resize(function () {
			$(".valign__middle").each(function () {
				$(this).css("padding-top", $(this).parent().height() / 2 - $(this).height() / 2);
			});
		});
	};

	// Hover Selector
	function handleHoverSelector() {
		// $('.hoverSelector').on('hover', function(e) {
		// 	$('.hoverSelectorBlock', this).toggleClass('show');
		// 	e.stopPropagation();
		// });
		$('.hoverSelector').on('click', function (e) {
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
		init: function init() {
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
		initCounter: function initCounter() {
			$('.counter').counterUp({
				delay: 10,
				time: 1000
			});
		},

		// Parallax Backgrounds
		initParallaxBg: function initParallaxBg() {
			$(window).load(function () {
				$('.parallaxBg').parallax("50%", 0.2);
				$('.parallaxBg1').parallax("50%", 0.4);
			});
		},

		// Scroll Bar
		initScrollBar: function initScrollBar() {
			$('.mCustomScrollbar').mCustomScrollbar({
				theme: "minimal",
				scrollInertia: 200,
				scrollEasing: "linear",
				autoHideScrollbar: true,
				scrollButtons: true
			});
		},

		// Sidebar Menu Dropdown
		initSidebarMenuDropdown: function initSidebarMenuDropdown() {
			function SidebarMenuDropdown() {
				$('.header-v7 .dropdown-toggle').on('click', function () {
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
		initAnimateDropdown: function initAnimateDropdown() {
			function MenuMode() {
				$('.dropdown').on('show.bs.dropdown', function () {
					$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
				});
				$('.dropdown').on('hide.bs.dropdown', function () {
					$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
				});
			}

			$(window).resize(function () {
				if ($(window).width() > 768) {
					MenuMode();
				}
			});

			if ($(window).width() > 768) {
				MenuMode();
			}
		}
	};
}();

var Datepicker = function () {

	return {

		//Datepickers
		initDatepicker: function initDatepicker() {
			// Regular datepicker
			$('#date').datepicker({
				dateFormat: 'dd.mm.yy',
				prevText: '<i class="fa fa-angle-left"></i>',
				nextText: '<i class="fa fa-angle-right"></i>'
			});

			// Date range
			$('#start').datepicker({
				dateFormat: 'dd.mm.yy',
				prevText: '<i class="fa fa-angle-left"></i>',
				nextText: '<i class="fa fa-angle-right"></i>',
				onSelect: function onSelect(selectedDate) {
					$('#finish').datepicker('option', 'minDate', selectedDate);
				}
			});
			$('#finish').datepicker({
				dateFormat: 'dd.mm.yy',
				prevText: '<i class="fa fa-angle-left"></i>',
				nextText: '<i class="fa fa-angle-right"></i>',
				onSelect: function onSelect(selectedDate) {
					$('#start').datepicker('option', 'maxDate', selectedDate);
				}
			});

			// Inline datepicker
			$('#inline').datepicker({
				dateFormat: 'dd.mm.yy',
				prevText: '<i class="fa fa-angle-left"></i>',
				nextText: '<i class="fa fa-angle-right"></i>'
			});

			// Inline date range
			$('#inline-start').datepicker({
				dateFormat: 'dd.mm.yy',
				prevText: '<i class="fa fa-angle-left"></i>',
				nextText: '<i class="fa fa-angle-right"></i>',
				onSelect: function onSelect(selectedDate) {
					$('#inline-finish').datepicker('option', 'minDate', selectedDate);
				}
			});
			$('#inline-finish').datepicker({
				dateFormat: 'dd.mm.yy',
				prevText: '<i class="fa fa-angle-left"></i>',
				nextText: '<i class="fa fa-angle-right"></i>',
				onSelect: function onSelect(selectedDate) {
					$('#inline-start').datepicker('option', 'maxDate', selectedDate);
				}
			});
		}

	};
}();
/*! Backstretch - v2.0.3 - 2012-11-30
* http://srobbin.com/jquery-plugins/backstretch/
* Copyright (c) 2012 Scott Robbin; Licensed MIT */
(function (e, t, n) {
	"use strict";
	e.fn.backstretch = function (r, s) {
		return (r === n || r.length === 0) && e.error("No images were supplied for Backstretch"), e(t).scrollTop() === 0 && t.scrollTo(0, 0), this.each(function () {
			var t = e(this),
			    n = t.data("backstretch");n && (s = e.extend(n.options, s), n.destroy(!0)), n = new i(this, r, s), t.data("backstretch", n);
		});
	}, e.backstretch = function (t, n) {
		return e("body").backstretch(t, n).data("backstretch");
	}, e.expr[":"].backstretch = function (t) {
		return e(t).data("backstretch") !== n;
	}, e.fn.backstretch.defaults = { centeredX: !0, centeredY: !0, duration: 5e3, fade: 0 };var r = { wrap: { left: 0, top: 0, overflow: "hidden", margin: 0, padding: 0, height: "100%", width: "100%", zIndex: -999999 }, img: { position: "absolute", display: "none", margin: 0, padding: 0, border: "none", width: "auto", height: "auto", maxWidth: "none", zIndex: -999999 } },
	    i = function i(n, _i, o) {
		this.options = e.extend({}, e.fn.backstretch.defaults, o || {}), this.images = e.isArray(_i) ? _i : [_i], e.each(this.images, function () {
			e("<img />")[0].src = this;
		}), this.isBody = n === document.body, this.$container = e(n), this.$wrap = e('<div class="backstretch"></div>').css(r.wrap).appendTo(this.$container), this.$root = this.isBody ? s ? e(t) : e(document) : this.$container;if (!this.isBody) {
			var u = this.$container.css("position"),
			    a = this.$container.css("zIndex");this.$container.css({ position: u === "static" ? "relative" : u, zIndex: a === "auto" ? 0 : a, background: "none" }), this.$wrap.css({ zIndex: -999998 });
		}this.$wrap.css({ position: this.isBody && s ? "fixed" : "absolute" }), this.index = 0, this.show(this.index), e(t).on("resize.backstretch", e.proxy(this.resize, this)).on("orientationchange.backstretch", e.proxy(function () {
			this.isBody && t.pageYOffset === 0 && (t.scrollTo(0, 1), this.resize());
		}, this));
	};i.prototype = { resize: function resize() {
			try {
				var e = { left: 0, top: 0 },
				    n = this.isBody ? this.$root.width() : this.$root.innerWidth(),
				    r = n,
				    i = this.isBody ? t.innerHeight ? t.innerHeight : this.$root.height() : this.$root.innerHeight(),
				    s = r / this.$img.data("ratio"),
				    o;s >= i ? (o = (s - i) / 2, this.options.centeredY && (e.top = "-" + o + "px")) : (s = i, r = s * this.$img.data("ratio"), o = (r - n) / 2, this.options.centeredX && (e.left = "-" + o + "px")), this.$wrap.css({ width: n, height: i }).find("img:not(.deleteable)").css({ width: r, height: s }).css(e);
			} catch (u) {}return this;
		}, show: function show(t) {
			if (Math.abs(t) > this.images.length - 1) return;this.index = t;var n = this,
			    i = n.$wrap.find("img").addClass("deleteable"),
			    s = e.Event("backstretch.show", { relatedTarget: n.$container[0] });return clearInterval(n.interval), n.$img = e("<img />").css(r.img).bind("load", function (t) {
				var r = this.width || e(t.target).width(),
				    o = this.height || e(t.target).height();e(this).data("ratio", r / o), e(this).fadeIn(n.options.speed || n.options.fade, function () {
					i.remove(), n.paused || n.cycle(), n.$container.trigger(s, n);
				}), n.resize();
			}).appendTo(n.$wrap), n.$img.attr("src", n.images[t]), n;
		}, next: function next() {
			return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0);
		}, prev: function prev() {
			return this.show(this.index === 0 ? this.images.length - 1 : this.index - 1);
		}, pause: function pause() {
			return this.paused = !0, this;
		}, resume: function resume() {
			return this.paused = !1, this.next(), this;
		}, cycle: function cycle() {
			return this.images.length > 1 && (clearInterval(this.interval), this.interval = setInterval(e.proxy(function () {
				this.paused || this.next();
			}, this), this.options.duration)), this;
		}, destroy: function destroy(n) {
			e(t).off("resize.backstretch orientationchange.backstretch"), clearInterval(this.interval), n || this.$wrap.remove(), this.$container.removeData("backstretch");
		} };var s = function () {
		var e = navigator.userAgent,
		    n = navigator.platform,
		    r = e.match(/AppleWebKit\/([0-9]+)/),
		    i = !!r && r[1],
		    s = e.match(/Fennec\/([0-9]+)/),
		    o = !!s && s[1],
		    u = e.match(/Opera Mobi\/([0-9]+)/),
		    a = !!u && u[1],
		    f = e.match(/MSIE ([0-9]+)/),
		    l = !!f && f[1];return !((n.indexOf("iPhone") > -1 || n.indexOf("iPad") > -1 || n.indexOf("iPod") > -1) && i && i < 534 || t.operamini && {}.toString.call(t.operamini) === "[object OperaMini]" || u && a < 7458 || e.indexOf("Android") > -1 && i && i < 533 || o && o < 6 || "palmGetResource" in t && i && i < 534 || e.indexOf("MeeGo") > -1 && e.indexOf("NokiaBrowser/8.5.0") > -1 || l && l <= 6);
	}();
})(jQuery, window);
/*!
 Waypoints - 4.0.1
 Copyright © 2011-2016 Caleb Troughton
 Licensed under the MIT license.
 https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
 */
!function () {
	"use strict";
	function t(o) {
		if (!o) throw new Error("No options passed to Waypoint constructor");if (!o.element) throw new Error("No element option passed to Waypoint constructor");if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({ name: this.options.group, axis: this.axis }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1;
	}var e = 0,
	    i = {};t.prototype.queueTrigger = function (t) {
		this.group.queueTrigger(this, t);
	}, t.prototype.trigger = function (t) {
		this.enabled && this.callback && this.callback.apply(this, t);
	}, t.prototype.destroy = function () {
		this.context.remove(this), this.group.remove(this), delete i[this.key];
	}, t.prototype.disable = function () {
		return this.enabled = !1, this;
	}, t.prototype.enable = function () {
		return this.context.refresh(), this.enabled = !0, this;
	}, t.prototype.next = function () {
		return this.group.next(this);
	}, t.prototype.previous = function () {
		return this.group.previous(this);
	}, t.invokeAll = function (t) {
		var e = [];for (var o in i) {
			e.push(i[o]);
		}for (var n = 0, r = e.length; r > n; n++) {
			e[n][t]();
		}
	}, t.destroyAll = function () {
		t.invokeAll("destroy");
	}, t.disableAll = function () {
		t.invokeAll("disable");
	}, t.enableAll = function () {
		t.Context.refreshAll();for (var e in i) {
			i[e].enabled = !0;
		}return this;
	}, t.refreshAll = function () {
		t.Context.refreshAll();
	}, t.viewportHeight = function () {
		return window.innerHeight || document.documentElement.clientHeight;
	}, t.viewportWidth = function () {
		return document.documentElement.clientWidth;
	}, t.adapters = [], t.defaults = { context: window, continuous: !0, enabled: !0, group: "default", horizontal: !1, offset: 0 }, t.offsetAliases = { "bottom-in-view": function bottomInView() {
			return this.context.innerHeight() - this.adapter.outerHeight();
		}, "right-in-view": function rightInView() {
			return this.context.innerWidth() - this.adapter.outerWidth();
		} }, window.Waypoint = t;
}(), function () {
	"use strict";
	function t(t) {
		window.setTimeout(t, 1e3 / 60);
	}function e(t) {
		this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }, this.waypoints = { vertical: {}, horizontal: {} }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, n.windowContext || (n.windowContext = !0, n.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler();
	}var i = 0,
	    o = {},
	    n = window.Waypoint,
	    r = window.onload;e.prototype.add = function (t) {
		var e = t.options.horizontal ? "horizontal" : "vertical";this.waypoints[e][t.key] = t, this.refresh();
	}, e.prototype.checkEmpty = function () {
		var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
		    e = this.Adapter.isEmptyObject(this.waypoints.vertical),
		    i = this.element == this.element.window;t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key]);
	}, e.prototype.createThrottledResizeHandler = function () {
		function t() {
			e.handleResize(), e.didResize = !1;
		}var e = this;this.adapter.on("resize.waypoints", function () {
			e.didResize || (e.didResize = !0, n.requestAnimationFrame(t));
		});
	}, e.prototype.createThrottledScrollHandler = function () {
		function t() {
			e.handleScroll(), e.didScroll = !1;
		}var e = this;this.adapter.on("scroll.waypoints", function () {
			(!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t));
		});
	}, e.prototype.handleResize = function () {
		n.Context.refreshAll();
	}, e.prototype.handleScroll = function () {
		var t = {},
		    e = { horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } };for (var i in e) {
			var o = e[i],
			    n = o.newScroll > o.oldScroll,
			    r = n ? o.forward : o.backward;for (var s in this.waypoints[i]) {
				var a = this.waypoints[i][s];if (null !== a.triggerPoint) {
					var l = o.oldScroll < a.triggerPoint,
					    h = o.newScroll >= a.triggerPoint,
					    p = l && h,
					    u = !l && !h;(p || u) && (a.queueTrigger(r), t[a.group.id] = a.group);
				}
			}
		}for (var c in t) {
			t[c].flushTriggers();
		}this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
	}, e.prototype.innerHeight = function () {
		return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight();
	}, e.prototype.remove = function (t) {
		delete this.waypoints[t.axis][t.key], this.checkEmpty();
	}, e.prototype.innerWidth = function () {
		return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth();
	}, e.prototype.destroy = function () {
		var t = [];for (var e in this.waypoints) {
			for (var i in this.waypoints[e]) {
				t.push(this.waypoints[e][i]);
			}
		}for (var o = 0, n = t.length; n > o; o++) {
			t[o].destroy();
		}
	}, e.prototype.refresh = function () {
		var t,
		    e = this.element == this.element.window,
		    i = e ? void 0 : this.adapter.offset(),
		    o = {};this.handleScroll(), t = { horizontal: { contextOffset: e ? 0 : i.left, contextScroll: e ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" }, vertical: { contextOffset: e ? 0 : i.top, contextScroll: e ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" } };for (var r in t) {
			var s = t[r];for (var a in this.waypoints[r]) {
				var l,
				    h,
				    p,
				    u,
				    c,
				    d = this.waypoints[r][a],
				    f = d.options.offset,
				    w = d.triggerPoint,
				    y = 0,
				    g = null == w;d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = Math.floor(y + l - f), h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group);
			}
		}return n.requestAnimationFrame(function () {
			for (var t in o) {
				o[t].flushTriggers();
			}
		}), this;
	}, e.findOrCreateByElement = function (t) {
		return e.findByElement(t) || new e(t);
	}, e.refreshAll = function () {
		for (var t in o) {
			o[t].refresh();
		}
	}, e.findByElement = function (t) {
		return o[t.waypointContextKey];
	}, window.onload = function () {
		r && r(), e.refreshAll();
	}, n.requestAnimationFrame = function (e) {
		var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;i.call(window, e);
	}, n.Context = e;
}(), function () {
	"use strict";
	function t(t, e) {
		return t.triggerPoint - e.triggerPoint;
	}function e(t, e) {
		return e.triggerPoint - t.triggerPoint;
	}function i(t) {
		this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this;
	}var o = { vertical: {}, horizontal: {} },
	    n = window.Waypoint;i.prototype.add = function (t) {
		this.waypoints.push(t);
	}, i.prototype.clearTriggerQueues = function () {
		this.triggerQueues = { up: [], down: [], left: [], right: [] };
	}, i.prototype.flushTriggers = function () {
		for (var i in this.triggerQueues) {
			var o = this.triggerQueues[i],
			    n = "up" === i || "left" === i;o.sort(n ? e : t);for (var r = 0, s = o.length; s > r; r += 1) {
				var a = o[r];(a.options.continuous || r === o.length - 1) && a.trigger([i]);
			}
		}this.clearTriggerQueues();
	}, i.prototype.next = function (e) {
		this.waypoints.sort(t);var i = n.Adapter.inArray(e, this.waypoints),
		    o = i === this.waypoints.length - 1;return o ? null : this.waypoints[i + 1];
	}, i.prototype.previous = function (e) {
		this.waypoints.sort(t);var i = n.Adapter.inArray(e, this.waypoints);return i ? this.waypoints[i - 1] : null;
	}, i.prototype.queueTrigger = function (t, e) {
		this.triggerQueues[e].push(t);
	}, i.prototype.remove = function (t) {
		var e = n.Adapter.inArray(t, this.waypoints);e > -1 && this.waypoints.splice(e, 1);
	}, i.prototype.first = function () {
		return this.waypoints[0];
	}, i.prototype.last = function () {
		return this.waypoints[this.waypoints.length - 1];
	}, i.findOrCreate = function (t) {
		return o[t.axis][t.name] || new i(t);
	}, n.Group = i;
}(), function () {
	"use strict";
	function t(t) {
		this.$element = e(t);
	}var e = window.jQuery,
	    i = window.Waypoint;e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, i) {
		t.prototype[i] = function () {
			var t = Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element, t);
		};
	}), e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
		t[o] = e[o];
	}), i.adapters.push({ name: "jquery", Adapter: t }), i.Adapter = t;
}(), function () {
	"use strict";
	function t(t) {
		return function () {
			var i = [],
			    o = arguments[0];return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function () {
				var n = t.extend({}, o, { element: this });"string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n));
			}), i;
		};
	}var e = window.Waypoint;window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
}();
/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/(function (e) {
	"use strict";
	e.fn.counterUp = function (t) {
		var n = e.extend({ time: 400, delay: 10 }, t);return this.each(function () {
			var t = e(this),
			    r = n,
			    i = function i() {
				var e = [],
				    n = r.time / r.delay,
				    i = t.text(),
				    s = /[0-9]+,[0-9]+/.test(i);i = i.replace(/,/g, "");var o = /^[0-9]+$/.test(i),
				    u = /^[0-9]+\.[0-9]+$/.test(i),
				    a = u ? (i.split(".")[1] || []).length : 0;for (var f = n; f >= 1; f--) {
					var l = parseInt(i / n * f);u && (l = parseFloat(i / n * f).toFixed(a));if (s) while (/(\d+)(\d{3})/.test(l.toString())) {
						l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");
					}e.unshift(l);
				}t.data("counterup-nums", e);t.text("0");var c = function c() {
					t.text(t.data("counterup-nums").shift());if (t.data("counterup-nums").length) setTimeout(t.data("counterup-func"), r.delay);else {
						delete t.data("counterup-nums");t.data("counterup-nums", null);t.data("counterup-func", null);
					}
				};t.data("counterup-func", c);setTimeout(t.data("counterup-func"), r.delay);
			};t.waypoint(i, { offset: "100%", triggerOnce: !0 });
		});
	};
})(jQuery);
// SmoothScroll for websites v1.2.1
// Licensed under the terms of the MIT license.

// People involved
//  - Balazs Galambosi (maintainer)  
//  - Michael Herf     (Pulse Algorithm)

(function () {

	// Scroll Variables (tweakable)
	var defaultOptions = {

		// Scrolling Core
		frameRate: 150, // [Hz]
		animationTime: 400, // [px]
		stepSize: 120, // [px]

		// Pulse (less tweakable)
		// ratio of "tail" to "acceleration"
		pulseAlgorithm: true,
		pulseScale: 8,
		pulseNormalize: 1,

		// Acceleration
		accelerationDelta: 20, // 20
		accelerationMax: 1, // 1

		// Keyboard Settings
		keyboardSupport: true, // option
		arrowScroll: 50, // [px]

		// Other
		touchpadSupport: true,
		fixedBackground: true,
		excluded: ""
	};

	var options = defaultOptions;

	// Other Variables
	var isExcluded = false;
	var isFrame = false;
	var direction = { x: 0, y: 0 };
	var initDone = false;
	var root = document.documentElement;
	var activeElement;
	var observer;
	var deltaBuffer = [120, 120, 120];

	var key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32,
		pageup: 33, pagedown: 34, end: 35, home: 36 };

	/***********************************************
  * SETTINGS
  ***********************************************/

	var options = defaultOptions;

	/***********************************************
  * INITIALIZE
  ***********************************************/

	/**
  * Tests if smooth scrolling is allowed. Shuts down everything if not.
  */
	function initTest() {

		var disableKeyboard = false;

		// disable keyboard support if anything above requested it
		if (disableKeyboard) {
			removeEvent("keydown", keydown);
		}

		if (options.keyboardSupport && !disableKeyboard) {
			addEvent("keydown", keydown);
		}
	}

	/**
  * Sets up scrolls array, determines if frames are involved.
  */
	function init() {

		if (!document.body) return;

		var body = document.body;
		var html = document.documentElement;
		var windowHeight = window.innerHeight;
		var scrollHeight = body.scrollHeight;

		// check compat mode for root element
		root = document.compatMode.indexOf('CSS') >= 0 ? html : body;
		activeElement = body;

		initTest();
		initDone = true;

		// Checks if this script is running in a frame
		if (top != self) {
			isFrame = true;
		}

		/**
   * This fixes a bug where the areas left and right to 
   * the content does not trigger the onmousewheel event
   * on some pages. e.g.: html, body { height: 100% }
   */
		else if (scrollHeight > windowHeight && (body.offsetHeight <= windowHeight || html.offsetHeight <= windowHeight)) {

				// DOMChange (throttle): fix height
				var pending = false;
				var refresh = function refresh() {
					if (!pending && html.scrollHeight != document.height) {
						pending = true; // add a new pending action
						setTimeout(function () {
							html.style.height = document.height + 'px';
							pending = false;
						}, 500); // act rarely to stay fast
					}
				};
				html.style.height = 'auto';
				setTimeout(refresh, 10);

				// clearfix
				if (root.offsetHeight <= windowHeight) {
					var underlay = document.createElement("div");
					underlay.style.clear = "both";
					body.appendChild(underlay);
				}
			}

		// disable fixed background
		if (!options.fixedBackground && !isExcluded) {
			body.style.backgroundAttachment = "scroll";
			html.style.backgroundAttachment = "scroll";
		}
	}

	/************************************************
  * SCROLLING 
  ************************************************/

	var que = [];
	var pending = false;
	var lastScroll = +new Date();

	/**
  * Pushes scroll actions to the scrolling queue.
  */
	function scrollArray(elem, left, top, delay) {

		delay || (delay = 1000);
		directionCheck(left, top);

		if (options.accelerationMax != 1) {
			var now = +new Date();
			var elapsed = now - lastScroll;
			if (elapsed < options.accelerationDelta) {
				var factor = (1 + 30 / elapsed) / 2;
				if (factor > 1) {
					factor = Math.min(factor, options.accelerationMax);
					left *= factor;
					top *= factor;
				}
			}
			lastScroll = +new Date();
		}

		// push a scroll command
		que.push({
			x: left,
			y: top,
			lastX: left < 0 ? 0.99 : -0.99,
			lastY: top < 0 ? 0.99 : -0.99,
			start: +new Date()
		});

		// don't act if there's a pending queue
		if (pending) {
			return;
		}

		var scrollWindow = elem === document.body;

		var step = function step(time) {

			var now = +new Date();
			var scrollX = 0;
			var scrollY = 0;

			for (var i = 0; i < que.length; i++) {

				var item = que[i];
				var elapsed = now - item.start;
				var finished = elapsed >= options.animationTime;

				// scroll position: [0, 1]
				var position = finished ? 1 : elapsed / options.animationTime;

				// easing [optional]
				if (options.pulseAlgorithm) {
					position = pulse(position);
				}

				// only need the difference
				var x = item.x * position - item.lastX >> 0;
				var y = item.y * position - item.lastY >> 0;

				// add this to the total scrolling
				scrollX += x;
				scrollY += y;

				// update last values
				item.lastX += x;
				item.lastY += y;

				// delete and step back if it's over
				if (finished) {
					que.splice(i, 1);i--;
				}
			}

			// scroll left and top
			if (scrollWindow) {
				window.scrollBy(scrollX, scrollY);
			} else {
				if (scrollX) elem.scrollLeft += scrollX;
				if (scrollY) elem.scrollTop += scrollY;
			}

			// clean up if there's nothing left to do
			if (!left && !top) {
				que = [];
			}

			if (que.length) {
				requestFrame(step, elem, delay / options.frameRate + 1);
			} else {
				pending = false;
			}
		};

		// start a new queue of actions
		requestFrame(step, elem, 0);
		pending = true;
	}

	/***********************************************
  * EVENTS
  ***********************************************/

	/**
  * Mouse wheel handler.
  * @param {Object} event
  */
	function wheel(event) {

		if (!initDone) {
			init();
		}

		var target = event.target;
		var overflowing = overflowingAncestor(target);

		// use default if there's no overflowing
		// element or default action is prevented    
		if (!overflowing || event.defaultPrevented || isNodeName(activeElement, "embed") || isNodeName(target, "embed") && /\.pdf/i.test(target.src)) {
			return true;
		}

		var deltaX = event.wheelDeltaX || 0;
		var deltaY = event.wheelDeltaY || 0;

		// use wheelDelta if deltaX/Y is not available
		if (!deltaX && !deltaY) {
			deltaY = event.wheelDelta || 0;
		}

		// check if it's a touchpad scroll that should be ignored
		if (!options.touchpadSupport && isTouchpad(deltaY)) {
			return true;
		}

		// scale by step size
		// delta is 120 most of the time
		// synaptics seems to send 1 sometimes
		if (Math.abs(deltaX) > 1.2) {
			deltaX *= options.stepSize / 120;
		}
		if (Math.abs(deltaY) > 1.2) {
			deltaY *= options.stepSize / 120;
		}

		scrollArray(overflowing, -deltaX, -deltaY);
		event.preventDefault();
	}

	/**
  * Keydown event handler.
  * @param {Object} event
  */
	function keydown(event) {

		var target = event.target;
		var modifier = event.ctrlKey || event.altKey || event.metaKey || event.shiftKey && event.keyCode !== key.spacebar;

		// do nothing if user is editing text
		// or using a modifier key (except shift)
		// or in a dropdown
		if (/input|textarea|select|embed/i.test(target.nodeName) || target.isContentEditable || event.defaultPrevented || modifier) {
			return true;
		}
		// spacebar should trigger button press
		if (isNodeName(target, "button") && event.keyCode === key.spacebar) {
			return true;
		}

		var shift,
		    x = 0,
		    y = 0;
		var elem = overflowingAncestor(activeElement);
		var clientHeight = elem.clientHeight;

		if (elem == document.body) {
			clientHeight = window.innerHeight;
		}

		switch (event.keyCode) {
			case key.up:
				y = -options.arrowScroll;
				break;
			case key.down:
				y = options.arrowScroll;
				break;
			case key.spacebar:
				// (+ shift)
				shift = event.shiftKey ? 1 : -1;
				y = -shift * clientHeight * 0.9;
				break;
			case key.pageup:
				y = -clientHeight * 0.9;
				break;
			case key.pagedown:
				y = clientHeight * 0.9;
				break;
			case key.home:
				y = -elem.scrollTop;
				break;
			case key.end:
				var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
				y = damt > 0 ? damt + 10 : 0;
				break;
			case key.left:
				x = -options.arrowScroll;
				break;
			case key.right:
				x = options.arrowScroll;
				break;
			default:
				return true; // a key we don't care about
		}

		scrollArray(elem, x, y);
		event.preventDefault();
	}

	/**
  * Mousedown event only for updating activeElement
  */
	function mousedown(event) {
		activeElement = event.target;
	}

	/***********************************************
  * OVERFLOW
  ***********************************************/

	var cache = {}; // cleared out every once in while
	setInterval(function () {
		cache = {};
	}, 10 * 1000);

	var uniqueID = function () {
		var i = 0;
		return function (el) {
			return el.uniqueID || (el.uniqueID = i++);
		};
	}();

	function setCache(elems, overflowing) {
		for (var i = elems.length; i--;) {
			cache[uniqueID(elems[i])] = overflowing;
		}return overflowing;
	}

	function overflowingAncestor(el) {
		var elems = [];
		var rootScrollHeight = root.scrollHeight;
		do {
			var cached = cache[uniqueID(el)];
			if (cached) {
				return setCache(elems, cached);
			}
			elems.push(el);
			if (rootScrollHeight === el.scrollHeight) {
				if (!isFrame || root.clientHeight + 10 < rootScrollHeight) {
					return setCache(elems, document.body); // scrolling root in WebKit
				}
			} else if (el.clientHeight + 10 < el.scrollHeight) {
				overflow = getComputedStyle(el, "").getPropertyValue("overflow-y");
				if (overflow === "scroll" || overflow === "auto") {
					return setCache(elems, el);
				}
			}
		} while (el = el.parentNode);
	}

	/***********************************************
  * HELPERS
  ***********************************************/

	function addEvent(type, fn, bubble) {
		window.addEventListener(type, fn, bubble || false);
	}

	function removeEvent(type, fn, bubble) {
		window.removeEventListener(type, fn, bubble || false);
	}

	function isNodeName(el, tag) {
		return (el.nodeName || "").toLowerCase() === tag.toLowerCase();
	}

	function directionCheck(x, y) {
		x = x > 0 ? 1 : -1;
		y = y > 0 ? 1 : -1;
		if (direction.x !== x || direction.y !== y) {
			direction.x = x;
			direction.y = y;
			que = [];
			lastScroll = 0;
		}
	}

	var deltaBufferTimer;

	function isTouchpad(deltaY) {
		if (!deltaY) return;
		deltaY = Math.abs(deltaY);
		deltaBuffer.push(deltaY);
		deltaBuffer.shift();
		clearTimeout(deltaBufferTimer);
		var allDivisable = isDivisible(deltaBuffer[0], 120) && isDivisible(deltaBuffer[1], 120) && isDivisible(deltaBuffer[2], 120);
		return !allDivisable;
	}

	function isDivisible(n, divisor) {
		return Math.floor(n / divisor) == n / divisor;
	}

	var requestFrame = function () {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (callback, element, delay) {
			window.setTimeout(callback, delay || 1000 / 60);
		};
	}();

	/***********************************************
  * PULSE
  ***********************************************/

	/**
  * Viscous fluid with a pulse for part and decay for the rest.
  * - Applies a fixed force over an interval (a damped acceleration), and
  * - Lets the exponential bleed away the velocity over a longer interval
  * - Michael Herf, http://stereopsis.com/stopping/
  */
	function pulse_(x) {
		var val, start, expx;
		// test
		x = x * options.pulseScale;
		if (x < 1) {
			// acceleartion
			val = x - (1 - Math.exp(-x));
		} else {
			// tail
			// the previous animation ended here:
			start = Math.exp(-1);
			// simple viscous drag
			x -= 1;
			expx = 1 - Math.exp(-x);
			val = start + expx * (1 - start);
		}
		return val * options.pulseNormalize;
	}

	function pulse(x) {
		if (x >= 1) return 1;
		if (x <= 0) return 0;

		if (options.pulseNormalize == 1) {
			options.pulseNormalize /= pulse_(1);
		}
		return pulse_(x);
	}

	var isChrome = /chrome/i.test(window.navigator.userAgent);
	var wheelEvent = null;
	if ("onwheel" in document.createElement("div")) wheelEvent = "wheel";else if ("onmousewheel" in document.createElement("div")) wheelEvent = "mousewheel";

	if (wheelEvent && isChrome) {
		addEvent(wheelEvent, wheel);
		addEvent("mousedown", mousedown);
		addEvent("load", init);
	}
})();
//** jQuery Scroll to Top Control script- (c) Dynamic Drive DHTML code library: http://www.dynamicdrive.com.
//** Available/ usage terms at http://www.dynamicdrive.com (March 30th, 09')
//** v1.1 (April 7th, 09'):
//** 1) Adds ability to scroll to an absolute position (from top of page) or specific element on the page instead.
//** 2) Fixes scroll animation not working in Opera. 


var scrolltotop = {
	//startline: Integer. Number of pixels from top of doc scrollbar is scrolled before showing control
	//scrollto: Keyword (Integer, or "Scroll_to_Element_ID"). How far to scroll document up when control is clicked on (0=top).
	setting: { startline: 100, scrollto: 0, scrollduration: 1000, fadeduration: [500, 100] },
	controlHTML: '', //<img src="assets/img/up.png" style="width:51px; height:42px" /> //HTML for control, which is auto wrapped in DIV w/ ID="topcontrol"
	controlattrs: { offsetx: 5, offsety: 5 }, //offset of control relative to right/ bottom of window corner
	anchorkeyword: '#top', //Enter href value of HTML anchors on the page that should also act as "Scroll Up" links

	state: { isvisible: false, shouldvisible: false },

	scrollup: function scrollup() {
		if (!this.cssfixedsupport) //if control is positioned using JavaScript
			this.$control.css({ opacity: 0 }); //hide control immediately after clicking it
		var dest = isNaN(this.setting.scrollto) ? this.setting.scrollto : parseInt(this.setting.scrollto);
		if (typeof dest == "string" && jQuery('#' + dest).length == 1) //check element set by string exists
			dest = jQuery('#' + dest).offset().top;else dest = 0;
		this.$body.animate({ scrollTop: dest }, this.setting.scrollduration);
	},

	keepfixed: function keepfixed() {
		var $window = jQuery(window);
		var controlx = $window.scrollLeft() + $window.width() - this.$control.width() - this.controlattrs.offsetx;
		var controly = $window.scrollTop() + $window.height() - this.$control.height() - this.controlattrs.offsety;
		this.$control.css({ left: controlx + 'px', top: controly + 'px' });
	},

	togglecontrol: function togglecontrol() {
		var scrolltop = jQuery(window).scrollTop();
		if (!this.cssfixedsupport) this.keepfixed();
		this.state.shouldvisible = scrolltop >= this.setting.startline ? true : false;
		if (this.state.shouldvisible && !this.state.isvisible) {
			this.$control.stop().animate({ opacity: 1 }, this.setting.fadeduration[0]);
			this.state.isvisible = true;
		} else if (this.state.shouldvisible == false && this.state.isvisible) {
			this.$control.stop().animate({ opacity: 0 }, this.setting.fadeduration[1]);
			this.state.isvisible = false;
		}
	},

	init: function init() {
		jQuery(document).ready(function ($) {
			var mainobj = scrolltotop;
			var iebrws = document.all;
			mainobj.cssfixedsupport = !iebrws || iebrws && document.compatMode == "CSS1Compat" && window.XMLHttpRequest; //not IE or IE7+ browsers in standards mode
			mainobj.$body = window.opera ? document.compatMode == "CSS1Compat" ? $('html') : $('body') : $('html,body');
			mainobj.$control = $('<div id="topcontrol">' + mainobj.controlHTML + '</div>').css({ position: mainobj.cssfixedsupport ? 'fixed' : 'absolute', bottom: mainobj.controlattrs.offsety, right: mainobj.controlattrs.offsetx, opacity: 0, cursor: 'pointer' }).attr({ title: 'Scroll Back to Top' }).click(function () {
				mainobj.scrollup();return false;
			}).appendTo('body');
			if (document.all && !window.XMLHttpRequest && mainobj.$control.text() != '') //loose check for IE6 and below, plus whether control contains any text
				mainobj.$control.css({ width: mainobj.$control.width() }); //IE6- seems to require an explicit width on a DIV containing text
			mainobj.togglecontrol();
			$('a[href="' + mainobj.anchorkeyword + '"]').click(function () {
				mainobj.scrollup();
				return false;
			});
			$(window).bind('scroll resize', function (e) {
				mainobj.togglecontrol();
			});
		});
	}
};

scrolltotop.init();
/* == jquery mousewheel plugin == Version: 3.1.13, License: MIT License (MIT) */
!function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) ? module.exports = a : a(jQuery);
}(function (a) {
	function b(b) {
		var g = b || window.event,
		    h = i.call(arguments, 1),
		    j = 0,
		    l = 0,
		    m = 0,
		    n = 0,
		    o = 0,
		    p = 0;if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
			if (1 === g.deltaMode) {
				var q = a.data(this, "mousewheel-line-height");j *= q, m *= q, l *= q;
			} else if (2 === g.deltaMode) {
				var r = a.data(this, "mousewheel-page-height");j *= r, m *= r, l *= r;
			}if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
				var s = this.getBoundingClientRect();o = b.clientX - s.left, p = b.clientY - s.top;
			}return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h);
		}
	}function c() {
		f = null;
	}function d(a, b) {
		return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0;
	}var e,
	    f,
	    g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
	    h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
	    i = Array.prototype.slice;if (a.event.fixHooks) for (var j = g.length; j;) {
		a.event.fixHooks[g[--j]] = a.event.mouseHooks;
	}var k = a.event.special.mousewheel = { version: "3.1.12", setup: function setup() {
			if (this.addEventListener) for (var c = h.length; c;) {
				this.addEventListener(h[--c], b, !1);
			} else this.onmousewheel = b;a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this));
		}, teardown: function teardown() {
			if (this.removeEventListener) for (var c = h.length; c;) {
				this.removeEventListener(h[--c], b, !1);
			} else this.onmousewheel = null;a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height");
		}, getLineHeight: function getLineHeight(b) {
			var c = a(b),
			    d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
		}, getPageHeight: function getPageHeight(b) {
			return a(b).height();
		}, settings: { adjustOldDeltas: !0, normalizeOffset: !0 } };a.fn.extend({ mousewheel: function mousewheel(a) {
			return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
		}, unmousewheel: function unmousewheel(a) {
			return this.unbind("mousewheel", a);
		} });
});!function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) ? module.exports = a : a(jQuery);
}(function (a) {
	function b(b) {
		var g = b || window.event,
		    h = i.call(arguments, 1),
		    j = 0,
		    l = 0,
		    m = 0,
		    n = 0,
		    o = 0,
		    p = 0;if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
			if (1 === g.deltaMode) {
				var q = a.data(this, "mousewheel-line-height");j *= q, m *= q, l *= q;
			} else if (2 === g.deltaMode) {
				var r = a.data(this, "mousewheel-page-height");j *= r, m *= r, l *= r;
			}if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
				var s = this.getBoundingClientRect();o = b.clientX - s.left, p = b.clientY - s.top;
			}return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h);
		}
	}function c() {
		f = null;
	}function d(a, b) {
		return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0;
	}var e,
	    f,
	    g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
	    h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
	    i = Array.prototype.slice;if (a.event.fixHooks) for (var j = g.length; j;) {
		a.event.fixHooks[g[--j]] = a.event.mouseHooks;
	}var k = a.event.special.mousewheel = { version: "3.1.12", setup: function setup() {
			if (this.addEventListener) for (var c = h.length; c;) {
				this.addEventListener(h[--c], b, !1);
			} else this.onmousewheel = b;a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this));
		}, teardown: function teardown() {
			if (this.removeEventListener) for (var c = h.length; c;) {
				this.removeEventListener(h[--c], b, !1);
			} else this.onmousewheel = null;a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height");
		}, getLineHeight: function getLineHeight(b) {
			var c = a(b),
			    d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
		}, getPageHeight: function getPageHeight(b) {
			return a(b).height();
		}, settings: { adjustOldDeltas: !0, normalizeOffset: !0 } };a.fn.extend({ mousewheel: function mousewheel(a) {
			return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
		}, unmousewheel: function unmousewheel(a) {
			return this.unbind("mousewheel", a);
		} });
});
/* == malihu jquery custom scrollbar plugin == Version: 3.1.5, License: MIT License (MIT) */
!function (e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document);
}(function (e) {
	!function (t) {
		var o = "function" == typeof define && define.amd,
		    a = "undefined" != typeof module && module.exports,
		    n = "https:" == document.location.protocol ? "https:" : "http:",
		    i = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";o || (a ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + n + "//" + i + "%3E%3C/script%3E"))), t();
	}(function () {
		var t,
		    o = "mCustomScrollbar",
		    a = "mCS",
		    n = ".mCustomScrollbar",
		    i = { setTop: 0, setLeft: 0, axis: "y", scrollbarPosition: "inside", scrollInertia: 950, autoDraggerLength: !0, alwaysShowScrollbar: 0, snapOffset: 0, mouseWheel: { enable: !0, scrollAmount: "auto", axis: "y", deltaFactor: "auto", disableOver: ["select", "option", "keygen", "datalist", "textarea"] }, scrollButtons: { scrollType: "stepless", scrollAmount: "auto" }, keyboard: { enable: !0, scrollType: "stepless", scrollAmount: "auto" }, contentTouchScroll: 25, documentTouchScroll: !0, advanced: { autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']", updateOnContentResize: !0, updateOnImageLoad: "auto", autoUpdateTimeout: 60 }, theme: "light", callbacks: { onTotalScrollOffset: 0, onTotalScrollBackOffset: 0, alwaysTriggerOffsets: !0 } },
		    r = 0,
		    l = {},
		    s = window.attachEvent && !window.addEventListener ? 1 : 0,
		    c = !1,
		    d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
		    u = { init: function init(t) {
				var t = e.extend(!0, {}, i, t),
				    o = f.call(this);if (t.live) {
					var s = t.liveSelector || this.selector || n,
					    c = e(s);if ("off" === t.live) return void m(s);l[s] = setTimeout(function () {
						c.mCustomScrollbar(t), "once" === t.live && c.length && m(s);
					}, 500);
				} else m(s);return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : p(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != _typeof(t.mouseWheel) && 1 == t.mouseWheel && (t.mouseWheel = { enable: !0, scrollAmount: "auto", axis: "y", preventDefault: !1, deltaFactor: "auto", normalizeDelta: !1, invert: !1 }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), h(t), e(o).each(function () {
					var o = e(this);if (!o.data(a)) {
						o.data(a, { idx: ++r, opt: t, scrollRatio: { y: null, x: null }, overflowed: null, contentReset: { y: null, x: null }, bindEvents: !1, tweenRunning: !1, sequential: {}, langDir: o.css("direction"), cbOffsets: null, trigger: null, poll: { size: { o: 0, n: 0 }, img: { o: 0, n: 0 }, change: { o: 0, n: 0 } } });var n = o.data(a),
						    i = n.opt,
						    l = o.data("mcs-axis"),
						    s = o.data("mcs-scrollbar-position"),
						    c = o.data("mcs-theme");l && (i.axis = l), s && (i.scrollbarPosition = s), c && (i.theme = c, h(i)), v.call(this), n && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this), e("#mCSB_" + n.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, o);
					}
				});
			}, update: function update(t, o) {
				var n = t || f.call(this);return e(n).each(function () {
					var t = e(this);if (t.data(a)) {
						var n = t.data(a),
						    i = n.opt,
						    r = e("#mCSB_" + n.idx + "_container"),
						    l = e("#mCSB_" + n.idx),
						    s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];if (!r.length) return;n.tweenRunning && Q(t), o && n && i.callbacks.onBeforeUpdate && "function" == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this), t.hasClass(d[3]) && t.removeClass(d[3]), t.hasClass(d[4]) && t.removeClass(d[4]), l.css("max-height", "none"), l.height() !== t.height() && l.css("max-height", t.height()), _.call(this), "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r)), n.overflowed = y.call(this), M.call(this), i.autoDraggerLength && S.call(this), b.call(this), T.call(this);var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];"x" !== i.axis && (n.overflowed[0] ? s[0].height() > s[0].parent().height() ? B.call(this) : (G(t, c[0].toString(), { dir: "y", dur: 0, overwrite: "none" }), n.contentReset.y = null) : (B.call(this), "y" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[1] && G(t, c[1].toString(), { dir: "x", dur: 0, overwrite: "none" }))), "y" !== i.axis && (n.overflowed[1] ? s[1].width() > s[1].parent().width() ? B.call(this) : (G(t, c[1].toString(), { dir: "x", dur: 0, overwrite: "none" }), n.contentReset.x = null) : (B.call(this), "x" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[0] && G(t, c[0].toString(), { dir: "y", dur: 0, overwrite: "none" }))), o && n && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)), N.call(this);
					}
				});
			}, scrollTo: function scrollTo(t, o) {
				if ("undefined" != typeof t && null != t) {
					var n = f.call(this);return e(n).each(function () {
						var n = e(this);if (n.data(a)) {
							var i = n.data(a),
							    r = i.opt,
							    l = { trigger: "external", scrollInertia: r.scrollInertia, scrollEasing: "mcsEaseInOut", moveDragger: !1, timeout: 60, callbacks: !0, onStart: !0, onUpdate: !0, onComplete: !0 },
							    s = e.extend(!0, {}, l, o),
							    c = Y.call(this, t),
							    d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;c[0] = X.call(this, c[0], "y"), c[1] = X.call(this, c[1], "x"), s.moveDragger && (c[0] *= i.scrollRatio.y, c[1] *= i.scrollRatio.x), s.dur = ne() ? 0 : d, setTimeout(function () {
								null !== c[0] && "undefined" != typeof c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y", s.overwrite = "all", G(n, c[0].toString(), s)), null !== c[1] && "undefined" != typeof c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x", s.overwrite = "none", G(n, c[1].toString(), s));
							}, s.timeout);
						}
					});
				}
			}, stop: function stop() {
				var t = f.call(this);return e(t).each(function () {
					var t = e(this);t.data(a) && Q(t);
				});
			}, disable: function disable(t) {
				var o = f.call(this);return e(o).each(function () {
					var o = e(this);if (o.data(a)) {
						o.data(a);N.call(this, "remove"), k.call(this), t && B.call(this), M.call(this, !0), o.addClass(d[3]);
					}
				});
			}, destroy: function destroy() {
				var t = f.call(this);return e(t).each(function () {
					var n = e(this);if (n.data(a)) {
						var i = n.data(a),
						    r = i.opt,
						    l = e("#mCSB_" + i.idx),
						    s = e("#mCSB_" + i.idx + "_container"),
						    c = e(".mCSB_" + i.idx + "_scrollbar");r.live && m(r.liveSelector || e(t).selector), N.call(this, "remove"), k.call(this), B.call(this), n.removeData(a), $(this, "mcs"), c.remove(), s.find("img." + d[2]).removeClass(d[2]), l.replaceWith(s.contents()), n.removeClass(o + " _" + a + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4]);
					}
				});
			} },
		    f = function f() {
			return "object" != _typeof(e(this)) || e(this).length < 1 ? n : this;
		},
		    h = function h(t) {
			var o = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
			    a = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
			    n = ["minimal", "minimal-dark"],
			    i = ["minimal", "minimal-dark"],
			    r = ["minimal", "minimal-dark"];t.autoDraggerLength = e.inArray(t.theme, o) > -1 ? !1 : t.autoDraggerLength, t.autoExpandScrollbar = e.inArray(t.theme, a) > -1 ? !1 : t.autoExpandScrollbar, t.scrollButtons.enable = e.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, i) > -1 ? !0 : t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition;
		},
		    m = function m(e) {
			l[e] && (clearTimeout(l[e]), $(l, e));
		},
		    p = function p(e) {
			return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y";
		},
		    g = function g(e) {
			return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless";
		},
		    v = function v() {
			var t = e(this),
			    n = t.data(a),
			    i = n.opt,
			    r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
			    l = ["<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
			    s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical",
			    c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0],
			    u = "yx" === i.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
			    f = i.autoHideScrollbar ? " " + d[6] : "",
			    h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";i.setWidth && t.css("width", i.setWidth), i.setHeight && t.css("height", i.setHeight), i.setLeft = "y" !== i.axis && "rtl" === n.langDir ? "989999px" : i.setLeft, t.addClass(o + " _" + a + "_" + n.idx + f + h).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + s + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir='" + n.langDir + "' /></div>");var m = e("#mCSB_" + n.idx),
			    p = e("#mCSB_" + n.idx + "_container");"y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p)), "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c), p.wrap(u)), w.call(this);var g = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width());
		},
		    x = function x(t) {
			var o = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function () {
				return e(this).outerWidth(!0);
			}).get())],
			    a = t.parent().width();return o[0] > a ? o[0] : o[1] > a ? o[1] : "100%";
		},
		    _ = function _() {
			var t = e(this),
			    o = t.data(a),
			    n = o.opt,
			    i = e("#mCSB_" + o.idx + "_container");if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) {
				i.css({ width: "auto", "min-width": 0, "overflow-x": "scroll" });var r = Math.ceil(i[0].scrollWidth);3 === n.advanced.autoExpandHorizontalScroll || 2 !== n.advanced.autoExpandHorizontalScroll && r > i.parent().width() ? i.css({ width: r, "min-width": "100%", "overflow-x": "inherit" }) : i.css({ "overflow-x": "inherit", position: "absolute" }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({ width: Math.ceil(i[0].getBoundingClientRect().right + .4) - Math.floor(i[0].getBoundingClientRect().left), "min-width": "100%", position: "relative" }).unwrap();
			}
		},
		    w = function w() {
			var t = e(this),
			    o = t.data(a),
			    n = o.opt,
			    i = e(".mCSB_" + o.idx + "_scrollbar:first"),
			    r = oe(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : "",
			    l = ["<a href='#' class='" + d[13] + "' " + r + " />", "<a href='#' class='" + d[14] + "' " + r + " />", "<a href='#' class='" + d[15] + "' " + r + " />", "<a href='#' class='" + d[16] + "' " + r + " />"],
			    s = ["x" === n.axis ? l[2] : l[0], "x" === n.axis ? l[3] : l[1], l[2], l[3]];n.scrollButtons.enable && i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3]);
		},
		    S = function S() {
			var t = e(this),
			    o = t.data(a),
			    n = e("#mCSB_" + o.idx),
			    i = e("#mCSB_" + o.idx + "_container"),
			    r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
			    l = [n.height() / i.outerHeight(!1), n.width() / i.outerWidth(!1)],
			    c = [parseInt(r[0].css("min-height")), Math.round(l[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(l[1] * r[1].parent().width())],
			    d = s && c[1] < c[0] ? c[0] : c[1],
			    u = s && c[3] < c[2] ? c[2] : c[3];r[0].css({ height: d, "max-height": r[0].parent().height() - 10 }).find(".mCSB_dragger_bar").css({ "line-height": c[0] + "px" }), r[1].css({ width: u, "max-width": r[1].parent().width() - 10 });
		},
		    b = function b() {
			var t = e(this),
			    o = t.data(a),
			    n = e("#mCSB_" + o.idx),
			    i = e("#mCSB_" + o.idx + "_container"),
			    r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
			    l = [i.outerHeight(!1) - n.height(), i.outerWidth(!1) - n.width()],
			    s = [l[0] / (r[0].parent().height() - r[0].height()), l[1] / (r[1].parent().width() - r[1].width())];o.scrollRatio = { y: s[0], x: s[1] };
		},
		    C = function C(e, t, o) {
			var a = o ? d[0] + "_expanded" : "",
			    n = e.closest(".mCSB_scrollTools");"active" === t ? (e.toggleClass(d[0] + " " + a), n.toggleClass(d[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]), n.removeClass(d[1])) : (e.addClass(d[0]), n.addClass(d[1])));
		},
		    y = function y() {
			var t = e(this),
			    o = t.data(a),
			    n = e("#mCSB_" + o.idx),
			    i = e("#mCSB_" + o.idx + "_container"),
			    r = null == o.overflowed ? i.height() : i.outerHeight(!1),
			    l = null == o.overflowed ? i.width() : i.outerWidth(!1),
			    s = i[0].scrollHeight,
			    c = i[0].scrollWidth;return s > r && (r = s), c > l && (l = c), [r > n.height(), l > n.width()];
		},
		    B = function B() {
			var t = e(this),
			    o = t.data(a),
			    n = o.opt,
			    i = e("#mCSB_" + o.idx),
			    r = e("#mCSB_" + o.idx + "_container"),
			    l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];if (Q(t), ("x" !== n.axis && !o.overflowed[0] || "y" === n.axis && o.overflowed[0]) && (l[0].add(r).css("top", 0), G(t, "_resetY")), "y" !== n.axis && !o.overflowed[1] || "x" === n.axis && o.overflowed[1]) {
				var s = dx = 0;"rtl" === o.langDir && (s = i.width() - r.outerWidth(!1), dx = Math.abs(s / o.scrollRatio.x)), r.css("left", s), l[1].css("left", dx), G(t, "_resetX");
			}
		},
		    T = function T() {
			function t() {
				r = setTimeout(function () {
					e.event.special.mousewheel ? (clearTimeout(r), W.call(o[0])) : t();
				}, 100);
			}var o = e(this),
			    n = o.data(a),
			    i = n.opt;if (!n.bindEvents) {
				if (I.call(this), i.contentTouchScroll && D.call(this), E.call(this), i.mouseWheel.enable) {
					var r;t();
				}P.call(this), U.call(this), i.advanced.autoScrollOnFocus && H.call(this), i.scrollButtons.enable && F.call(this), i.keyboard.enable && q.call(this), n.bindEvents = !0;
			}
		},
		    k = function k() {
			var t = e(this),
			    o = t.data(a),
			    n = o.opt,
			    i = a + "_" + o.idx,
			    r = ".mCSB_" + o.idx + "_scrollbar",
			    l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a"),
			    s = e("#mCSB_" + o.idx + "_container");n.advanced.releaseDraggableSelectors && l.add(e(n.advanced.releaseDraggableSelectors)), n.advanced.extraDraggableSelectors && l.add(e(n.advanced.extraDraggableSelectors)), o.bindEvents && (e(document).add(e(!A() || top.document)).unbind("." + i), l.each(function () {
				e(this).unbind("." + i);
			}), clearTimeout(t[0]._focusTimeout), $(t[0], "_focusTimeout"), clearTimeout(o.sequential.step), $(o.sequential, "step"), clearTimeout(s[0].onCompleteTimeout), $(s[0], "onCompleteTimeout"), o.bindEvents = !1);
		},
		    M = function M(t) {
			var o = e(this),
			    n = o.data(a),
			    i = n.opt,
			    r = e("#mCSB_" + n.idx + "_container_wrapper"),
			    l = r.length ? r : e("#mCSB_" + n.idx + "_container"),
			    s = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")],
			    c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")];"x" !== i.axis && (n.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"), l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"), l.removeClass(d[10])) : (s[0].css("display", "none"), l.addClass(d[10])), l.addClass(d[8]))), "y" !== i.axis && (n.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"), l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"), l.removeClass(d[11])) : (s[1].css("display", "none"), l.addClass(d[11])), l.addClass(d[9]))), n.overflowed[0] || n.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5]);
		},
		    O = function O(t) {
			var o = t.type,
			    a = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null,
			    n = A() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];switch (o) {case "pointerdown":case "MSPointerDown":case "pointermove":case "MSPointerMove":case "pointerup":case "MSPointerUp":
					return a ? [t.originalEvent.pageY - a[0] + n[0], t.originalEvent.pageX - a[1] + n[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];case "touchstart":case "touchmove":case "touchend":
					var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
					    r = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;return t.target.ownerDocument !== document ? [i.screenY, i.screenX, r > 1] : [i.pageY, i.pageX, r > 1];default:
					return a ? [t.pageY - a[0] + n[0], t.pageX - a[1] + n[1], !1] : [t.pageY, t.pageX, !1];}
		},
		    I = function I() {
			function t(e, t, a, n) {
				if (h[0].idleTimer = d.scrollInertia < 233 ? 250 : 0, o.attr("id") === f[1]) var i = "x",
				    s = (o[0].offsetLeft - t + n) * l.scrollRatio.x;else var i = "y",
				    s = (o[0].offsetTop - e + a) * l.scrollRatio.y;G(r, s.toString(), { dir: i, drag: !0 });
			}var o,
			    n,
			    i,
			    r = e(this),
			    l = r.data(a),
			    d = l.opt,
			    u = a + "_" + l.idx,
			    f = ["mCSB_" + l.idx + "_dragger_vertical", "mCSB_" + l.idx + "_dragger_horizontal"],
			    h = e("#mCSB_" + l.idx + "_container"),
			    m = e("#" + f[0] + ",#" + f[1]),
			    p = d.advanced.releaseDraggableSelectors ? m.add(e(d.advanced.releaseDraggableSelectors)) : m,
			    g = d.advanced.extraDraggableSelectors ? e(!A() || top.document).add(e(d.advanced.extraDraggableSelectors)) : e(!A() || top.document);m.bind("contextmenu." + u, function (e) {
				e.preventDefault();
			}).bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function (t) {
				if (t.stopImmediatePropagation(), t.preventDefault(), ee(t)) {
					c = !0, s && (document.onselectstart = function () {
						return !1;
					}), L.call(h, !1), Q(r), o = e(this);var a = o.offset(),
					    l = O(t)[0] - a.top,
					    u = O(t)[1] - a.left,
					    f = o.height() + a.top,
					    m = o.width() + a.left;f > l && l > 0 && m > u && u > 0 && (n = l, i = u), C(o, "active", d.autoExpandScrollbar);
				}
			}).bind("touchmove." + u, function (e) {
				e.stopImmediatePropagation(), e.preventDefault();var a = o.offset(),
				    r = O(e)[0] - a.top,
				    l = O(e)[1] - a.left;t(n, i, r, l);
			}), e(document).add(g).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function (e) {
				if (o) {
					var a = o.offset(),
					    r = O(e)[0] - a.top,
					    l = O(e)[1] - a.left;if (n === r && i === l) return;t(n, i, r, l);
				}
			}).add(p).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function () {
				o && (C(o, "active", d.autoExpandScrollbar), o = null), c = !1, s && (document.onselectstart = null), L.call(h, !0);
			});
		},
		    D = function D() {
			function o(e) {
				if (!te(e) || c || O(e)[2]) return void (t = 0);t = 1, b = 0, C = 0, d = 1, y.removeClass("mCS_touch_action");var o = I.offset();u = O(e)[0] - o.top, f = O(e)[1] - o.left, z = [O(e)[0], O(e)[1]];
			}function n(e) {
				if (te(e) && !c && !O(e)[2] && (T.documentTouchScroll || e.preventDefault(), e.stopImmediatePropagation(), (!C || b) && d)) {
					g = K();var t = M.offset(),
					    o = O(e)[0] - t.top,
					    a = O(e)[1] - t.left,
					    n = "mcsLinearOut";if (E.push(o), W.push(a), z[2] = Math.abs(O(e)[0] - z[0]), z[3] = Math.abs(O(e)[1] - z[1]), B.overflowed[0]) var i = D[0].parent().height() - D[0].height(),
					    r = u - o > 0 && o - u > -(i * B.scrollRatio.y) && (2 * z[3] < z[2] || "yx" === T.axis);if (B.overflowed[1]) var l = D[1].parent().width() - D[1].width(),
					    h = f - a > 0 && a - f > -(l * B.scrollRatio.x) && (2 * z[2] < z[3] || "yx" === T.axis);r || h ? (U || e.preventDefault(), b = 1) : (C = 1, y.addClass("mCS_touch_action")), U && e.preventDefault(), w = "yx" === T.axis ? [u - o, f - a] : "x" === T.axis ? [null, f - a] : [u - o, null], I[0].idleTimer = 250, B.overflowed[0] && s(w[0], R, n, "y", "all", !0), B.overflowed[1] && s(w[1], R, n, "x", L, !0);
				}
			}function i(e) {
				if (!te(e) || c || O(e)[2]) return void (t = 0);t = 1, e.stopImmediatePropagation(), Q(y), p = K();var o = M.offset();h = O(e)[0] - o.top, m = O(e)[1] - o.left, E = [], W = [];
			}function r(e) {
				if (te(e) && !c && !O(e)[2]) {
					d = 0, e.stopImmediatePropagation(), b = 0, C = 0, v = K();var t = M.offset(),
					    o = O(e)[0] - t.top,
					    a = O(e)[1] - t.left;if (!(v - g > 30)) {
						_ = 1e3 / (v - p);var n = "mcsEaseOut",
						    i = 2.5 > _,
						    r = i ? [E[E.length - 2], W[W.length - 2]] : [0, 0];x = i ? [o - r[0], a - r[1]] : [o - h, a - m];var u = [Math.abs(x[0]), Math.abs(x[1])];_ = i ? [Math.abs(x[0] / 4), Math.abs(x[1] / 4)] : [_, _];var f = [Math.abs(I[0].offsetTop) - x[0] * l(u[0] / _[0], _[0]), Math.abs(I[0].offsetLeft) - x[1] * l(u[1] / _[1], _[1])];w = "yx" === T.axis ? [f[0], f[1]] : "x" === T.axis ? [null, f[1]] : [f[0], null], S = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia];var y = parseInt(T.contentTouchScroll) || 0;w[0] = u[0] > y ? w[0] : 0, w[1] = u[1] > y ? w[1] : 0, B.overflowed[0] && s(w[0], S[0], n, "y", L, !1), B.overflowed[1] && s(w[1], S[1], n, "x", L, !1);
					}
				}
			}function l(e, t) {
				var o = [1.5 * t, 2 * t, t / 1.5, t / 2];return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3];
			}function s(e, t, o, a, n, i) {
				e && G(y, e.toString(), { dur: t, scrollEasing: o, dir: a, overwrite: n, drag: i });
			}var d,
			    u,
			    f,
			    h,
			    m,
			    p,
			    g,
			    v,
			    x,
			    _,
			    w,
			    S,
			    b,
			    C,
			    y = e(this),
			    B = y.data(a),
			    T = B.opt,
			    k = a + "_" + B.idx,
			    M = e("#mCSB_" + B.idx),
			    I = e("#mCSB_" + B.idx + "_container"),
			    D = [e("#mCSB_" + B.idx + "_dragger_vertical"), e("#mCSB_" + B.idx + "_dragger_horizontal")],
			    E = [],
			    W = [],
			    R = 0,
			    L = "yx" === T.axis ? "none" : "all",
			    z = [],
			    P = I.find("iframe"),
			    H = ["touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, "touchmove." + k + " pointermove." + k + " MSPointerMove." + k, "touchend." + k + " pointerup." + k + " MSPointerUp." + k],
			    U = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;I.bind(H[0], function (e) {
				o(e);
			}).bind(H[1], function (e) {
				n(e);
			}), M.bind(H[0], function (e) {
				i(e);
			}).bind(H[2], function (e) {
				r(e);
			}), P.length && P.each(function () {
				e(this).bind("load", function () {
					A(this) && e(this.contentDocument || this.contentWindow.document).bind(H[0], function (e) {
						o(e), i(e);
					}).bind(H[1], function (e) {
						n(e);
					}).bind(H[2], function (e) {
						r(e);
					});
				});
			});
		},
		    E = function E() {
			function o() {
				return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0;
			}function n(e, t, o) {
				d.type = o && i ? "stepped" : "stepless", d.scrollAmount = 10, j(r, e, t, "mcsLinearOut", o ? 60 : null);
			}var i,
			    r = e(this),
			    l = r.data(a),
			    s = l.opt,
			    d = l.sequential,
			    u = a + "_" + l.idx,
			    f = e("#mCSB_" + l.idx + "_container"),
			    h = f.parent();f.bind("mousedown." + u, function () {
				t || i || (i = 1, c = !0);
			}).add(document).bind("mousemove." + u, function (e) {
				if (!t && i && o()) {
					var a = f.offset(),
					    r = O(e)[0] - a.top + f[0].offsetTop,
					    c = O(e)[1] - a.left + f[0].offsetLeft;r > 0 && r < h.height() && c > 0 && c < h.width() ? d.step && n("off", null, "stepped") : ("x" !== s.axis && l.overflowed[0] && (0 > r ? n("on", 38) : r > h.height() && n("on", 40)), "y" !== s.axis && l.overflowed[1] && (0 > c ? n("on", 37) : c > h.width() && n("on", 39)));
				}
			}).bind("mouseup." + u + " dragend." + u, function () {
				t || (i && (i = 0, n("off", null)), c = !1);
			});
		},
		    W = function W() {
			function t(t, a) {
				if (Q(o), !z(o, t.target)) {
					var r = "auto" !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : s && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100,
					    d = i.scrollInertia;if ("x" === i.axis || "x" === i.mouseWheel.axis) var u = "x",
					    f = [Math.round(r * n.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount)],
					    h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.width() ? .9 * l.width() : f[0],
					    m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetLeft),
					    p = c[1][0].offsetLeft,
					    g = c[1].parent().width() - c[1].width(),
					    v = "y" === i.mouseWheel.axis ? t.deltaY || a : t.deltaX;else var u = "y",
					    f = [Math.round(r * n.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount)],
					    h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.height() ? .9 * l.height() : f[0],
					    m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetTop),
					    p = c[0][0].offsetTop,
					    g = c[0].parent().height() - c[0].height(),
					    v = t.deltaY || a;"y" === u && !n.overflowed[0] || "x" === u && !n.overflowed[1] || ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (v = -v), i.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1), (v > 0 && 0 !== p || 0 > v && p !== g || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), t.deltaFactor < 5 && !i.mouseWheel.normalizeDelta && (h = t.deltaFactor, d = 17), G(o, (m - v * h).toString(), { dir: u, dur: d }));
				}
			}if (e(this).data(a)) {
				var o = e(this),
				    n = o.data(a),
				    i = n.opt,
				    r = a + "_" + n.idx,
				    l = e("#mCSB_" + n.idx),
				    c = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
				    d = e("#mCSB_" + n.idx + "_container").find("iframe");d.length && d.each(function () {
					e(this).bind("load", function () {
						A(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, function (e, o) {
							t(e, o);
						});
					});
				}), l.bind("mousewheel." + r, function (e, o) {
					t(e, o);
				});
			}
		},
		    R = new Object(),
		    A = function A(t) {
			var o = !1,
			    a = !1,
			    n = null;if (void 0 === t ? a = "#empty" : void 0 !== e(t).attr("id") && (a = e(t).attr("id")), a !== !1 && void 0 !== R[a]) return R[a];if (t) {
				try {
					var i = t.contentDocument || t.contentWindow.document;n = i.body.innerHTML;
				} catch (r) {}o = null !== n;
			} else {
				try {
					var i = top.document;n = i.body.innerHTML;
				} catch (r) {}o = null !== n;
			}return a !== !1 && (R[a] = o), o;
		},
		    L = function L(e) {
			var t = this.find("iframe");if (t.length) {
				var o = e ? "auto" : "none";t.css("pointer-events", o);
			}
		},
		    z = function z(t, o) {
			var n = o.nodeName.toLowerCase(),
			    i = t.data(a).opt.mouseWheel.disableOver,
			    r = ["select", "textarea"];return e.inArray(n, i) > -1 && !(e.inArray(n, r) > -1 && !e(o).is(":focus"));
		},
		    P = function P() {
			var t,
			    o = e(this),
			    n = o.data(a),
			    i = a + "_" + n.idx,
			    r = e("#mCSB_" + n.idx + "_container"),
			    l = r.parent(),
			    s = e(".mCSB_" + n.idx + "_scrollbar ." + d[12]);s.bind("mousedown." + i + " touchstart." + i + " pointerdown." + i + " MSPointerDown." + i, function (o) {
				c = !0, e(o.target).hasClass("mCSB_dragger") || (t = 1);
			}).bind("touchend." + i + " pointerup." + i + " MSPointerUp." + i, function () {
				c = !1;
			}).bind("click." + i, function (a) {
				if (t && (t = 0, e(a.target).hasClass(d[12]) || e(a.target).hasClass("mCSB_draggerRail"))) {
					Q(o);var i = e(this),
					    s = i.find(".mCSB_dragger");if (i.parent(".mCSB_scrollTools_horizontal").length > 0) {
						if (!n.overflowed[1]) return;var c = "x",
						    u = a.pageX > s.offset().left ? -1 : 1,
						    f = Math.abs(r[0].offsetLeft) - u * (.9 * l.width());
					} else {
						if (!n.overflowed[0]) return;var c = "y",
						    u = a.pageY > s.offset().top ? -1 : 1,
						    f = Math.abs(r[0].offsetTop) - u * (.9 * l.height());
					}G(o, f.toString(), { dir: c, scrollEasing: "mcsEaseInOut" });
				}
			});
		},
		    H = function H() {
			var t = e(this),
			    o = t.data(a),
			    n = o.opt,
			    i = a + "_" + o.idx,
			    r = e("#mCSB_" + o.idx + "_container"),
			    l = r.parent();r.bind("focusin." + i, function () {
				var o = e(document.activeElement),
				    a = r.find(".mCustomScrollBox").length,
				    i = 0;o.is(n.advanced.autoScrollOnFocus) && (Q(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = a ? (i + 17) * a : 0, t[0]._focusTimeout = setTimeout(function () {
					var e = [ae(o)[0], ae(o)[1]],
					    a = [r[0].offsetTop, r[0].offsetLeft],
					    s = [a[0] + e[0] >= 0 && a[0] + e[0] < l.height() - o.outerHeight(!1), a[1] + e[1] >= 0 && a[0] + e[1] < l.width() - o.outerWidth(!1)],
					    c = "yx" !== n.axis || s[0] || s[1] ? "all" : "none";"x" === n.axis || s[0] || G(t, e[0].toString(), { dir: "y", scrollEasing: "mcsEaseInOut", overwrite: c, dur: i }), "y" === n.axis || s[1] || G(t, e[1].toString(), { dir: "x", scrollEasing: "mcsEaseInOut", overwrite: c, dur: i });
				}, t[0]._focusTimer));
			});
		},
		    U = function U() {
			var t = e(this),
			    o = t.data(a),
			    n = a + "_" + o.idx,
			    i = e("#mCSB_" + o.idx + "_container").parent();i.bind("scroll." + n, function () {
				0 === i.scrollTop() && 0 === i.scrollLeft() || e(".mCSB_" + o.idx + "_scrollbar").css("visibility", "hidden");
			});
		},
		    F = function F() {
			var t = e(this),
			    o = t.data(a),
			    n = o.opt,
			    i = o.sequential,
			    r = a + "_" + o.idx,
			    l = ".mCSB_" + o.idx + "_scrollbar",
			    s = e(l + ">a");s.bind("contextmenu." + r, function (e) {
				e.preventDefault();
			}).bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function (a) {
				function r(e, o) {
					i.scrollAmount = n.scrollButtons.scrollAmount, j(t, e, o);
				}if (a.preventDefault(), ee(a)) {
					var l = e(this).attr("class");switch (i.type = n.scrollButtons.scrollType, a.type) {case "mousedown":case "touchstart":case "pointerdown":case "MSPointerDown":
							if ("stepped" === i.type) return;c = !0, o.tweenRunning = !1, r("on", l);break;case "mouseup":case "touchend":case "pointerup":case "MSPointerUp":case "mouseout":case "pointerout":case "MSPointerOut":
							if ("stepped" === i.type) return;c = !1, i.dir && r("off", l);break;case "click":
							if ("stepped" !== i.type || o.tweenRunning) return;r("on", l);}
				}
			});
		},
		    q = function q() {
			function t(t) {
				function a(e, t) {
					r.type = i.keyboard.scrollType, r.scrollAmount = i.keyboard.scrollAmount, "stepped" === r.type && n.tweenRunning || j(o, e, t);
				}switch (t.type) {case "blur":
						n.tweenRunning && r.dir && a("off", null);break;case "keydown":case "keyup":
						var l = t.keyCode ? t.keyCode : t.which,
						    s = "on";if ("x" !== i.axis && (38 === l || 40 === l) || "y" !== i.axis && (37 === l || 39 === l)) {
							if ((38 === l || 40 === l) && !n.overflowed[0] || (37 === l || 39 === l) && !n.overflowed[1]) return;"keyup" === t.type && (s = "off"), e(document.activeElement).is(u) || (t.preventDefault(), t.stopImmediatePropagation(), a(s, l));
						} else if (33 === l || 34 === l) {
							if ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) {
								Q(o);var f = 34 === l ? -1 : 1;if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
								    m = Math.abs(c[0].offsetLeft) - f * (.9 * d.width());else var h = "y",
								    m = Math.abs(c[0].offsetTop) - f * (.9 * d.height());G(o, m.toString(), { dir: h, scrollEasing: "mcsEaseInOut" });
							}
						} else if ((35 === l || 36 === l) && !e(document.activeElement).is(u) && ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
							if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
							    m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0;else var h = "y",
							    m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0;G(o, m.toString(), { dir: h, scrollEasing: "mcsEaseInOut" });
						}}
			}var o = e(this),
			    n = o.data(a),
			    i = n.opt,
			    r = n.sequential,
			    l = a + "_" + n.idx,
			    s = e("#mCSB_" + n.idx),
			    c = e("#mCSB_" + n.idx + "_container"),
			    d = c.parent(),
			    u = "input,textarea,select,datalist,keygen,[contenteditable='true']",
			    f = c.find("iframe"),
			    h = ["blur." + l + " keydown." + l + " keyup." + l];f.length && f.each(function () {
				e(this).bind("load", function () {
					A(this) && e(this.contentDocument || this.contentWindow.document).bind(h[0], function (e) {
						t(e);
					});
				});
			}), s.attr("tabindex", "0").bind(h[0], function (e) {
				t(e);
			});
		},
		    j = function j(t, o, n, i, r) {
			function l(e) {
				u.snapAmount && (f.scrollAmount = u.snapAmount instanceof Array ? "x" === f.dir[0] ? u.snapAmount[1] : u.snapAmount[0] : u.snapAmount);var o = "stepped" !== f.type,
				    a = r ? r : e ? o ? p / 1.5 : g : 1e3 / 60,
				    n = e ? o ? 7.5 : 40 : 2.5,
				    s = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
				    d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x],
				    m = "x" === f.dir[0] ? s[1] + f.dir[1] * (d[1] * n) : s[0] + f.dir[1] * (d[0] * n),
				    v = "x" === f.dir[0] ? s[1] + f.dir[1] * parseInt(f.scrollAmount) : s[0] + f.dir[1] * parseInt(f.scrollAmount),
				    x = "auto" !== f.scrollAmount ? v : m,
				    _ = i ? i : e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
				    w = !!e;return e && 17 > a && (x = "x" === f.dir[0] ? s[1] : s[0]), G(t, x.toString(), { dir: f.dir[0], scrollEasing: _, dur: a, onComplete: w }), e ? void (f.dir = !1) : (clearTimeout(f.step), void (f.step = setTimeout(function () {
					l();
				}, a)));
			}function s() {
				clearTimeout(f.step), $(f, "step"), Q(t);
			}var c = t.data(a),
			    u = c.opt,
			    f = c.sequential,
			    h = e("#mCSB_" + c.idx + "_container"),
			    m = "stepped" === f.type,
			    p = u.scrollInertia < 26 ? 26 : u.scrollInertia,
			    g = u.scrollInertia < 1 ? 17 : u.scrollInertia;switch (o) {case "on":
					if (f.dir = [n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y", n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1], Q(t), oe(n) && "stepped" === f.type) return;l(m);break;case "off":
					s(), (m || c.tweenRunning && f.dir) && l(!0);}
		},
		    Y = function Y(t) {
			var o = e(this).data(a).opt,
			    n = [];return "function" == typeof t && (t = t()), t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t, n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t), "function" == typeof n[0] && (n[0] = n[0]()), "function" == typeof n[1] && (n[1] = n[1]()), n;
		},
		    X = function X(t, o) {
			if (null != t && "undefined" != typeof t) {
				var n = e(this),
				    i = n.data(a),
				    r = i.opt,
				    l = e("#mCSB_" + i.idx + "_container"),
				    s = l.parent(),
				    c = typeof t === 'undefined' ? 'undefined' : _typeof(t);o || (o = "x" === r.axis ? "x" : "y");var d = "x" === o ? l.outerWidth(!1) - s.width() : l.outerHeight(!1) - s.height(),
				    f = "x" === o ? l[0].offsetLeft : l[0].offsetTop,
				    h = "x" === o ? "left" : "top";switch (c) {case "function":
						return t();case "object":
						var m = t.jquery ? t : e(t);if (!m.length) return;return "x" === o ? ae(m)[1] : ae(m)[0];case "string":case "number":
						if (oe(t)) return Math.abs(t);if (-1 !== t.indexOf("%")) return Math.abs(d * parseInt(t) / 100);if (-1 !== t.indexOf("-=")) return Math.abs(f - parseInt(t.split("-=")[1]));if (-1 !== t.indexOf("+=")) {
							var p = f + parseInt(t.split("+=")[1]);return p >= 0 ? 0 : Math.abs(p);
						}if (-1 !== t.indexOf("px") && oe(t.split("px")[0])) return Math.abs(t.split("px")[0]);if ("top" === t || "left" === t) return 0;if ("bottom" === t) return Math.abs(s.height() - l.outerHeight(!1));if ("right" === t) return Math.abs(s.width() - l.outerWidth(!1));if ("first" === t || "last" === t) {
							var m = l.find(":" + t);return "x" === o ? ae(m)[1] : ae(m)[0];
						}return e(t).length ? "x" === o ? ae(e(t))[1] : ae(e(t))[0] : (l.css(h, t), void u.update.call(null, n[0]));}
			}
		},
		    N = function N(t) {
			function o() {
				return clearTimeout(f[0].autoUpdate), 0 === l.parents("html").length ? void (l = null) : void (f[0].autoUpdate = setTimeout(function () {
					return c.advanced.updateOnSelectorChange && (s.poll.change.n = i(), s.poll.change.n !== s.poll.change.o) ? (s.poll.change.o = s.poll.change.n, void r(3)) : c.advanced.updateOnContentResize && (s.poll.size.n = l[0].scrollHeight + l[0].scrollWidth + f[0].offsetHeight + l[0].offsetHeight + l[0].offsetWidth, s.poll.size.n !== s.poll.size.o) ? (s.poll.size.o = s.poll.size.n, void r(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (s.poll.img.n = f.find("img").length, s.poll.img.n === s.poll.img.o) ? void ((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && o()) : (s.poll.img.o = s.poll.img.n, void f.find("img").each(function () {
						n(this);
					}));
				}, c.advanced.autoUpdateTimeout));
			}function n(t) {
				function o(e, t) {
					return function () {
						return t.apply(e, arguments);
					};
				}function a() {
					this.onload = null, e(t).addClass(d[2]), r(2);
				}if (e(t).hasClass(d[2])) return void r();var n = new Image();n.onload = o(n, a), n.src = t.src;
			}function i() {
				c.advanced.updateOnSelectorChange === !0 && (c.advanced.updateOnSelectorChange = "*");var e = 0,
				    t = f.find(c.advanced.updateOnSelectorChange);return c.advanced.updateOnSelectorChange && t.length > 0 && t.each(function () {
					e += this.offsetHeight + this.offsetWidth;
				}), e;
			}function r(e) {
				clearTimeout(f[0].autoUpdate), u.update.call(null, l[0], e);
			}var l = e(this),
			    s = l.data(a),
			    c = s.opt,
			    f = e("#mCSB_" + s.idx + "_container");return t ? (clearTimeout(f[0].autoUpdate), void $(f[0], "autoUpdate")) : void o();
		},
		    V = function V(e, t, o) {
			return Math.round(e / t) * t - o;
		},
		    Q = function Q(t) {
			var o = t.data(a),
			    n = e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal");n.each(function () {
				Z.call(this);
			});
		},
		    G = function G(t, o, n) {
			function i(e) {
				return s && c.callbacks[e] && "function" == typeof c.callbacks[e];
			}function r() {
				return [c.callbacks.alwaysTriggerOffsets || w >= S[0] + y, c.callbacks.alwaysTriggerOffsets || -B >= w];
			}function l() {
				var e = [h[0].offsetTop, h[0].offsetLeft],
				    o = [x[0].offsetTop, x[0].offsetLeft],
				    a = [h.outerHeight(!1), h.outerWidth(!1)],
				    i = [f.height(), f.width()];t[0].mcs = { content: h, top: e[0], left: e[1], draggerTop: o[0], draggerLeft: o[1], topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(a[0]) - i[0])), leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(a[1]) - i[1])), direction: n.dir };
			}var s = t.data(a),
			    c = s.opt,
			    d = { trigger: "internal", dir: "y", scrollEasing: "mcsEaseOut", drag: !1, dur: c.scrollInertia, overwrite: "all", callbacks: !0, onStart: !0, onUpdate: !0, onComplete: !0 },
			    n = e.extend(d, n),
			    u = [n.dur, n.drag ? 0 : n.dur],
			    f = e("#mCSB_" + s.idx),
			    h = e("#mCSB_" + s.idx + "_container"),
			    m = h.parent(),
			    p = c.callbacks.onTotalScrollOffset ? Y.call(t, c.callbacks.onTotalScrollOffset) : [0, 0],
			    g = c.callbacks.onTotalScrollBackOffset ? Y.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];if (s.trigger = n.trigger, 0 === m.scrollTop() && 0 === m.scrollLeft() || (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"), m.scrollTop(0).scrollLeft(0)), "_resetY" !== o || s.contentReset.y || (i("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), s.contentReset.y = 1), "_resetX" !== o || s.contentReset.x || (i("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), s.contentReset.x = 1), "_resetY" !== o && "_resetX" !== o) {
				if (!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (i("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), s.contentReset.x = null), !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (i("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), s.contentReset.x = null), c.snapAmount) {
					var v = c.snapAmount instanceof Array ? "x" === n.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount;o = V(o, v, c.snapOffset);
				}switch (n.dir) {case "x":
						var x = e("#mCSB_" + s.idx + "_dragger_horizontal"),
						    _ = "left",
						    w = h[0].offsetLeft,
						    S = [f.width() - h.outerWidth(!1), x.parent().width() - x.width()],
						    b = [o, 0 === o ? 0 : o / s.scrollRatio.x],
						    y = p[1],
						    B = g[1],
						    T = y > 0 ? y / s.scrollRatio.x : 0,
						    k = B > 0 ? B / s.scrollRatio.x : 0;break;case "y":
						var x = e("#mCSB_" + s.idx + "_dragger_vertical"),
						    _ = "top",
						    w = h[0].offsetTop,
						    S = [f.height() - h.outerHeight(!1), x.parent().height() - x.height()],
						    b = [o, 0 === o ? 0 : o / s.scrollRatio.y],
						    y = p[0],
						    B = g[0],
						    T = y > 0 ? y / s.scrollRatio.y : 0,
						    k = B > 0 ? B / s.scrollRatio.y : 0;}b[1] < 0 || 0 === b[0] && 0 === b[1] ? b = [0, 0] : b[1] >= S[1] ? b = [S[0], S[1]] : b[0] = -b[0], t[0].mcs || (l(), i("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(h[0].onCompleteTimeout), J(x[0], _, Math.round(b[1]), u[1], n.scrollEasing), !s.tweenRunning && (0 === w && b[0] >= 0 || w === S[0] && b[0] <= S[0]) || J(h[0], _, Math.round(b[0]), u[0], n.scrollEasing, n.overwrite, { onStart: function onStart() {
						n.callbacks && n.onStart && !s.tweenRunning && (i("onScrollStart") && (l(), c.callbacks.onScrollStart.call(t[0])), s.tweenRunning = !0, C(x), s.cbOffsets = r());
					}, onUpdate: function onUpdate() {
						n.callbacks && n.onUpdate && i("whileScrolling") && (l(), c.callbacks.whileScrolling.call(t[0]));
					}, onComplete: function onComplete() {
						if (n.callbacks && n.onComplete) {
							"yx" === c.axis && clearTimeout(h[0].onCompleteTimeout);var e = h[0].idleTimer || 0;h[0].onCompleteTimeout = setTimeout(function () {
								i("onScroll") && (l(), c.callbacks.onScroll.call(t[0])), i("onTotalScroll") && b[1] >= S[1] - T && s.cbOffsets[0] && (l(), c.callbacks.onTotalScroll.call(t[0])), i("onTotalScrollBack") && b[1] <= k && s.cbOffsets[1] && (l(), c.callbacks.onTotalScrollBack.call(t[0])), s.tweenRunning = !1, h[0].idleTimer = 0, C(x, "hide");
							}, e);
						}
					} });
			}
		},
		    J = function J(e, t, o, a, n, i, r) {
			function l() {
				S.stop || (x || m.call(), x = K() - v, s(), x >= S.time && (S.time = x > S.time ? x + f - (x - S.time) : x + f - 1, S.time < x + 1 && (S.time = x + 1)), S.time < a ? S.id = h(l) : g.call());
			}function s() {
				a > 0 ? (S.currVal = u(S.time, _, b, a, n), w[t] = Math.round(S.currVal) + "px") : w[t] = o + "px", p.call();
			}function c() {
				f = 1e3 / 60, S.time = x + f, h = window.requestAnimationFrame ? window.requestAnimationFrame : function (e) {
					return s(), setTimeout(e, .01);
				}, S.id = h(l);
			}function d() {
				null != S.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(S.id) : clearTimeout(S.id), S.id = null);
			}function u(e, t, o, a, n) {
				switch (n) {case "linear":case "mcsLinear":
						return o * e / a + t;case "mcsLinearOut":
						return e /= a, e--, o * Math.sqrt(1 - e * e) + t;case "easeInOutSmooth":
						return e /= a / 2, 1 > e ? o / 2 * e * e + t : (e--, -o / 2 * (e * (e - 2) - 1) + t);case "easeInOutStrong":
						return e /= a / 2, 1 > e ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, o / 2 * (-Math.pow(2, -10 * e) + 2) + t);case "easeInOut":case "mcsEaseInOut":
						return e /= a / 2, 1 > e ? o / 2 * e * e * e + t : (e -= 2, o / 2 * (e * e * e + 2) + t);case "easeOutSmooth":
						return e /= a, e--, -o * (e * e * e * e - 1) + t;case "easeOutStrong":
						return o * (-Math.pow(2, -10 * e / a) + 1) + t;case "easeOut":case "mcsEaseOut":default:
						var i = (e /= a) * e,
						    r = i * e;return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e);}
			}e._mTween || (e._mTween = { top: {}, left: {} });var f,
			    h,
			    r = r || {},
			    m = r.onStart || function () {},
			    p = r.onUpdate || function () {},
			    g = r.onComplete || function () {},
			    v = K(),
			    x = 0,
			    _ = e.offsetTop,
			    w = e.style,
			    S = e._mTween[t];"left" === t && (_ = e.offsetLeft);var b = o - _;S.stop = 0, "none" !== i && d(), c();
		},
		    K = function K() {
			return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : new Date().getTime();
		},
		    Z = function Z() {
			var e = this;e._mTween || (e._mTween = { top: {}, left: {} });for (var t = ["top", "left"], o = 0; o < t.length; o++) {
				var a = t[o];e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id), e._mTween[a].id = null, e._mTween[a].stop = 1);
			}
		},
		    $ = function $(e, t) {
			try {
				delete e[t];
			} catch (o) {
				e[t] = null;
			}
		},
		    ee = function ee(e) {
			return !(e.which && 1 !== e.which);
		},
		    te = function te(e) {
			var t = e.originalEvent.pointerType;return !(t && "touch" !== t && 2 !== t);
		},
		    oe = function oe(e) {
			return !isNaN(parseFloat(e)) && isFinite(e);
		},
		    ae = function ae(e) {
			var t = e.parents(".mCSB_container");return [e.offset().top - t.offset().top, e.offset().left - t.offset().left];
		},
		    ne = function ne() {
			function e() {
				var e = ["webkit", "moz", "ms", "o"];if ("hidden" in document) return "hidden";for (var t = 0; t < e.length; t++) {
					if (e[t] + "Hidden" in document) return e[t] + "Hidden";
				}return null;
			}var t = e();return t ? document[t] : !1;
		};e.fn[o] = function (t) {
			return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != (typeof t === 'undefined' ? 'undefined' : _typeof(t)) && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments);
		}, e[o] = function (t) {
			return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != (typeof t === 'undefined' ? 'undefined' : _typeof(t)) && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments);
		}, e[o].defaults = i, window[o] = !0, e(window).bind("load", function () {
			e(n)[o](), e.extend(e.expr[":"], { mcsInView: e.expr[":"].mcsInView || function (t) {
					var o,
					    a,
					    n = e(t),
					    i = n.parents(".mCSB_container");if (i.length) return o = i.parent(), a = [i[0].offsetTop, i[0].offsetLeft], a[0] + ae(n)[0] >= 0 && a[0] + ae(n)[0] < o.height() - n.outerHeight(!1) && a[1] + ae(n)[1] >= 0 && a[1] + ae(n)[1] < o.width() - n.outerWidth(!1);
				}, mcsInSight: e.expr[":"].mcsInSight || function (t, o, a) {
					var n,
					    i,
					    r,
					    l,
					    s = e(t),
					    c = s.parents(".mCSB_container"),
					    d = "exact" === a[3] ? [[1, 0], [1, 0]] : [[.9, .1], [.6, .4]];if (c.length) return n = [s.outerHeight(!1), s.outerWidth(!1)], r = [c[0].offsetTop + ae(s)[0], c[0].offsetLeft + ae(s)[1]], i = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], l = [n[0] < i[0] ? d[0] : d[1], n[1] < i[1] ? d[0] : d[1]], r[0] - i[0] * l[0][0] < 0 && r[0] + n[0] - i[0] * l[0][1] >= 0 && r[1] - i[1] * l[1][0] < 0 && r[1] + n[1] - i[1] * l[1][1] >= 0;
				}, mcsOverflow: e.expr[":"].mcsOverflow || function (t) {
					var o = e(t).data(a);if (o) return o.overflowed[0] || o.overflowed[1];
				} });
		});
	});
});
/*! jQuery Validation Plugin - v1.11.0 - 2/4/2013
 https://github.com/jzaefferer/jquery-validation
 Copyright (c) 2013 Jörn Zaefferer; Licensed MIT */
(function ($) {
	$.extend($.fn, { validate: function validate(options) {
			if (!this.length) {
				if (options && options.debug && window.console) {
					console.warn("Nothing selected, can't validate, returning nothing.");
				}return;
			}var validator = $.data(this[0], "validator");if (validator) {
				return validator;
			}this.attr("novalidate", "novalidate");validator = new $.validator(options, this[0]);$.data(this[0], "validator", validator);if (validator.settings.onsubmit) {
				this.validateDelegate(":submit", "click", function (event) {
					if (validator.settings.submitHandler) {
						validator.submitButton = event.target;
					}if ($(event.target).hasClass("cancel")) {
						validator.cancelSubmit = true;
					}
				});this.submit(function (event) {
					if (validator.settings.debug) {
						event.preventDefault();
					}function handle() {
						var hidden;if (validator.settings.submitHandler) {
							if (validator.submitButton) {
								hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val(validator.submitButton.value).appendTo(validator.currentForm);
							}validator.settings.submitHandler.call(validator, validator.currentForm, event);if (validator.submitButton) {
								hidden.remove();
							}return false;
						}return true;
					}if (validator.cancelSubmit) {
						validator.cancelSubmit = false;return handle();
					}if (validator.form()) {
						if (validator.pendingRequest) {
							validator.formSubmitted = true;return false;
						}return handle();
					} else {
						validator.focusInvalid();return false;
					}
				});
			}return validator;
		}, valid: function valid() {
			if ($(this[0]).is("form")) {
				return this.validate().form();
			} else {
				var valid = true;var validator = $(this[0].form).validate();this.each(function () {
					valid &= validator.element(this);
				});return valid;
			}
		}, removeAttrs: function removeAttrs(attributes) {
			var result = {},
			    $element = this;$.each(attributes.split(/\s/), function (index, value) {
				result[value] = $element.attr(value);$element.removeAttr(value);
			});return result;
		}, rules: function rules(command, argument) {
			var element = this[0];if (command) {
				var settings = $.data(element.form, "validator").settings;var staticRules = settings.rules;var existingRules = $.validator.staticRules(element);switch (command) {case "add":
						$.extend(existingRules, $.validator.normalizeRule(argument));staticRules[element.name] = existingRules;if (argument.messages) {
							settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
						}break;case "remove":
						if (!argument) {
							delete staticRules[element.name];return existingRules;
						}var filtered = {};$.each(argument.split(/\s/), function (index, method) {
							filtered[method] = existingRules[method];delete existingRules[method];
						});return filtered;}
			}var data = $.validator.normalizeRules($.extend({}, $.validator.classRules(element), $.validator.attributeRules(element), $.validator.dataRules(element), $.validator.staticRules(element)), element);if (data.required) {
				var param = data.required;delete data.required;data = $.extend({ required: param }, data);
			}return data;
		} });$.extend($.expr[":"], { blank: function blank(a) {
			return !$.trim("" + a.value);
		}, filled: function filled(a) {
			return !!$.trim("" + a.value);
		}, unchecked: function unchecked(a) {
			return !a.checked;
		} });$.validator = function (options, form) {
		this.settings = $.extend(true, {}, $.validator.defaults, options);this.currentForm = form;this.init();
	};$.validator.format = function (source, params) {
		if (arguments.length === 1) {
			return function () {
				var args = $.makeArray(arguments);args.unshift(source);return $.validator.format.apply(this, args);
			};
		}if (arguments.length > 2 && params.constructor !== Array) {
			params = $.makeArray(arguments).slice(1);
		}if (params.constructor !== Array) {
			params = [params];
		}$.each(params, function (i, n) {
			source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function () {
				return n;
			});
		});return source;
	};$.extend($.validator, { defaults: { messages: {}, groups: {}, rules: {}, errorClass: "invalid", validClass: "valid", errorElement: "em", focusInvalid: true, errorContainer: $([]), errorLabelContainer: $([]), onsubmit: true, ignore: ":hidden", ignoreTitle: false, onfocusin: function onfocusin(element, event) {
				this.lastActive = element;if (this.settings.focusCleanup && !this.blockFocusCleanup) {
					if (this.settings.unhighlight) {
						this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
					}this.addWrapper(this.errorsFor(element)).hide();
				}
			}, onfocusout: function onfocusout(element, event) {
				if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
					this.element(element);
				}
			}, onkeyup: function onkeyup(element, event) {
				if (event.which === 9 && this.elementValue(element) === "") {
					return;
				} else if (element.name in this.submitted || element === this.lastElement) {
					this.element(element);
				}
			}, onclick: function onclick(element, event) {
				if (element.name in this.submitted) {
					this.element(element);
				} else if (element.parentNode.name in this.submitted) {
					this.element(element.parentNode);
				}
			}, highlight: function highlight(element, errorClass, validClass) {
				if (element.type === "radio") {
					this.findByName(element.name).addClass(errorClass).removeClass(validClass).parent().addClass('state-error').removeClass('state-success');
				} else {
					$(element).addClass(errorClass).removeClass(validClass).parent().addClass('state-error').removeClass('state-success');
				}
			}, unhighlight: function unhighlight(element, errorClass, validClass) {
				if (element.type === "radio") {
					this.findByName(element.name).removeClass(errorClass).addClass(validClass).parent().addClass('state-success').removeClass('state-error');
				} else {
					$(element).removeClass(errorClass).addClass(validClass).parent().addClass('state-success').removeClass('state-error');
				}
			} }, setDefaults: function setDefaults(settings) {
			$.extend($.validator.defaults, settings);
		}, messages: { required: "This field is required", remote: "Please fix this field", email: "Please enter a valid email address", url: "Please enter a valid URL", date: "Please enter a valid date", dateISO: "Please enter a valid date (ISO)", number: "Please enter a valid number", digits: "Please enter only digits", creditcard: "Please enter a valid credit card number", equalTo: "Please enter the same value again", maxlength: $.validator.format("Please enter no more than {0} characters"), minlength: $.validator.format("Please enter at least {0} characters"), rangelength: $.validator.format("Please enter a value between {0} and {1} characters long"), range: $.validator.format("Please enter a value between {0} and {1}"), max: $.validator.format("Please enter a value less than or equal to {0}"), min: $.validator.format("Please enter a value greater than or equal to {0}") }, autoCreateRanges: false, prototype: { init: function init() {
				this.labelContainer = $(this.settings.errorLabelContainer);this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted = {};this.valueCache = {};this.pendingRequest = 0;this.pending = {};this.invalid = {};this.reset();var groups = this.groups = {};$.each(this.settings.groups, function (key, value) {
					if (typeof value === "string") {
						value = value.split(/\s/);
					}$.each(value, function (index, name) {
						groups[name] = key;
					});
				});var rules = this.settings.rules;$.each(rules, function (key, value) {
					rules[key] = $.validator.normalizeRule(value);
				});function delegate(event) {
					var validator = $.data(this[0].form, "validator"),
					    eventType = "on" + event.type.replace(/^validate/, "");if (validator.settings[eventType]) {
						validator.settings[eventType].call(validator, this[0], event);
					}
				}$(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, " + "[type='number'], [type='search'] ,[type='tel'], [type='url'], " + "[type='email'], [type='datetime'], [type='date'], [type='month'], " + "[type='week'], [type='time'], [type='datetime-local'], " + "[type='range'], [type='color'] ", "focusin focusout keyup", delegate).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", delegate);if (this.settings.invalidHandler) {
					$(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
				}
			}, form: function form() {
				this.checkForm();$.extend(this.submitted, this.errorMap);this.invalid = $.extend({}, this.errorMap);if (!this.valid()) {
					$(this.currentForm).triggerHandler("invalid-form", [this]);
				}this.showErrors();return this.valid();
			}, checkForm: function checkForm() {
				this.prepareForm();for (var i = 0, elements = this.currentElements = this.elements(); elements[i]; i++) {
					this.check(elements[i]);
				}return this.valid();
			}, element: function element(_element) {
				_element = this.validationTargetFor(this.clean(_element));this.lastElement = _element;this.prepareElement(_element);this.currentElements = $(_element);var result = this.check(_element) !== false;if (result) {
					delete this.invalid[_element.name];
				} else {
					this.invalid[_element.name] = true;
				}if (!this.numberOfInvalids()) {
					this.toHide = this.toHide.add(this.containers);
				}this.showErrors();return result;
			}, showErrors: function showErrors(errors) {
				if (errors) {
					$.extend(this.errorMap, errors);this.errorList = [];for (var name in errors) {
						this.errorList.push({ message: errors[name], element: this.findByName(name)[0] });
					}this.successList = $.grep(this.successList, function (element) {
						return !(element.name in errors);
					});
				}if (this.settings.showErrors) {
					this.settings.showErrors.call(this, this.errorMap, this.errorList);
				} else {
					this.defaultShowErrors();
				}
			}, resetForm: function resetForm() {
				if ($.fn.resetForm) {
					$(this.currentForm).resetForm();
				}this.submitted = {};this.lastElement = null;this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass).removeData("previousValue");
			}, numberOfInvalids: function numberOfInvalids() {
				return this.objectLength(this.invalid);
			}, objectLength: function objectLength(obj) {
				var count = 0;for (var i in obj) {
					count++;
				}return count;
			}, hideErrors: function hideErrors() {
				this.addWrapper(this.toHide).hide();
			}, valid: function valid() {
				return this.size() === 0;
			}, size: function size() {
				return this.errorList.length;
			}, focusInvalid: function focusInvalid() {
				if (this.settings.focusInvalid) {
					try {
						$(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
					} catch (e) {}
				}
			}, findLastActive: function findLastActive() {
				var lastActive = this.lastActive;return lastActive && $.grep(this.errorList, function (n) {
					return n.element.name === lastActive.name;
				}).length === 1 && lastActive;
			}, elements: function elements() {
				var validator = this,
				    rulesCache = {};return $(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
					if (!this.name && validator.settings.debug && window.console) {
						console.error("%o has no name assigned", this);
					}if (this.name in rulesCache || !validator.objectLength($(this).rules())) {
						return false;
					}rulesCache[this.name] = true;return true;
				});
			}, clean: function clean(selector) {
				return $(selector)[0];
			}, errors: function errors() {
				var errorClass = this.settings.errorClass.replace(" ", ".");return $(this.settings.errorElement + "." + errorClass, this.errorContext);
			}, reset: function reset() {
				this.successList = [];this.errorList = [];this.errorMap = {};this.toShow = $([]);this.toHide = $([]);this.currentElements = $([]);
			}, prepareForm: function prepareForm() {
				this.reset();this.toHide = this.errors().add(this.containers);
			}, prepareElement: function prepareElement(element) {
				this.reset();this.toHide = this.errorsFor(element);
			}, elementValue: function elementValue(element) {
				var type = $(element).attr("type"),
				    val = $(element).val();if (type === "radio" || type === "checkbox") {
					return $("input[name='" + $(element).attr("name") + "']:checked").val();
				}if (typeof val === "string") {
					return val.replace(/\r/g, "");
				}return val;
			}, check: function check(element) {
				element = this.validationTargetFor(this.clean(element));var rules = $(element).rules();var dependencyMismatch = false;var val = this.elementValue(element);var result;for (var method in rules) {
					var rule = { method: method, parameters: rules[method] };try {
						result = $.validator.methods[method].call(this, val, element, rule.parameters);if (result === "dependency-mismatch") {
							dependencyMismatch = true;continue;
						}dependencyMismatch = false;if (result === "pending") {
							this.toHide = this.toHide.not(this.errorsFor(element));return;
						}if (!result) {
							this.formatAndAdd(element, rule);return false;
						}
					} catch (e) {
						if (this.settings.debug && window.console) {
							console.log("Exception occured when checking element " + element.id + ", check the '" + rule.method + "' method.", e);
						}throw e;
					}
				}if (dependencyMismatch) {
					return;
				}if (this.objectLength(rules)) {
					this.successList.push(element);
				}return true;
			}, customDataMessage: function customDataMessage(element, method) {
				return $(element).data("msg-" + method.toLowerCase()) || element.attributes && $(element).attr("data-msg-" + method.toLowerCase());
			}, customMessage: function customMessage(name, method) {
				var m = this.settings.messages[name];return m && (m.constructor === String ? m : m[method]);
			}, findDefined: function findDefined() {
				for (var i = 0; i < arguments.length; i++) {
					if (arguments[i] !== undefined) {
						return arguments[i];
					}
				}return undefined;
			}, defaultMessage: function defaultMessage(element, method) {
				return this.findDefined(this.customMessage(element.name, method), this.customDataMessage(element, method), !this.settings.ignoreTitle && element.title || undefined, $.validator.messages[method], "<strong>Warning: No message defined for " + element.name + "</strong>");
			}, formatAndAdd: function formatAndAdd(element, rule) {
				var message = this.defaultMessage(element, rule.method),
				    theregex = /\$?\{(\d+)\}/g;if (typeof message === "function") {
					message = message.call(this, rule.parameters, element);
				} else if (theregex.test(message)) {
					message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
				}this.errorList.push({ message: message, element: element });this.errorMap[element.name] = message;this.submitted[element.name] = message;
			}, addWrapper: function addWrapper(toToggle) {
				if (this.settings.wrapper) {
					toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
				}return toToggle;
			}, defaultShowErrors: function defaultShowErrors() {
				var i, elements;for (i = 0; this.errorList[i]; i++) {
					var error = this.errorList[i];if (this.settings.highlight) {
						this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
					}this.showLabel(error.element, error.message);
				}if (this.errorList.length) {
					this.toShow = this.toShow.add(this.containers);
				}if (this.settings.success) {
					for (i = 0; this.successList[i]; i++) {
						this.showLabel(this.successList[i]);
					}
				}if (this.settings.unhighlight) {
					for (i = 0, elements = this.validElements(); elements[i]; i++) {
						this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
					}
				}this.toHide = this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show();
			}, validElements: function validElements() {
				return this.currentElements.not(this.invalidElements());
			}, invalidElements: function invalidElements() {
				return $(this.errorList).map(function () {
					return this.element;
				});
			}, showLabel: function showLabel(element, message) {
				var label = this.errorsFor(element);if (label.length) {
					label.removeClass(this.settings.validClass).addClass(this.settings.errorClass);label.html(message);
				} else {
					label = $("<" + this.settings.errorElement + ">").attr("for", this.idOrName(element)).addClass(this.settings.errorClass).html(message || "");if (this.settings.wrapper) {
						label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
					}if (!this.labelContainer.append(label).length) {
						if (this.settings.errorPlacement) {
							this.settings.errorPlacement(label, $(element));
						} else {
							label.insertAfter(element);
						}
					}
				}if (!message && this.settings.success) {
					label.text("");if (typeof this.settings.success === "string") {
						label.addClass(this.settings.success);
					} else {
						this.settings.success(label, element);
					}
				}this.toShow = this.toShow.add(label);
			}, errorsFor: function errorsFor(element) {
				var name = this.idOrName(element);return this.errors().filter(function () {
					return $(this).attr("for") === name;
				});
			}, idOrName: function idOrName(element) {
				return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
			}, validationTargetFor: function validationTargetFor(element) {
				if (this.checkable(element)) {
					element = this.findByName(element.name).not(this.settings.ignore)[0];
				}return element;
			}, checkable: function checkable(element) {
				return (/radio|checkbox/i.test(element.type)
				);
			}, findByName: function findByName(name) {
				return $(this.currentForm).find("[name='" + name + "']");
			}, getLength: function getLength(value, element) {
				switch (element.nodeName.toLowerCase()) {case "select":
						return $("option:selected", element).length;case "input":
						if (this.checkable(element)) {
							return this.findByName(element.name).filter(":checked").length;
						}}return value.length;
			}, depend: function depend(param, element) {
				return this.dependTypes[typeof param === 'undefined' ? 'undefined' : _typeof(param)] ? this.dependTypes[typeof param === 'undefined' ? 'undefined' : _typeof(param)](param, element) : true;
			}, dependTypes: { "boolean": function boolean(param, element) {
					return param;
				}, "string": function string(param, element) {
					return !!$(param, element.form).length;
				}, "function": function _function(param, element) {
					return param(element);
				} }, optional: function optional(element) {
				var val = this.elementValue(element);return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
			}, startRequest: function startRequest(element) {
				if (!this.pending[element.name]) {
					this.pendingRequest++;this.pending[element.name] = true;
				}
			}, stopRequest: function stopRequest(element, valid) {
				this.pendingRequest--;if (this.pendingRequest < 0) {
					this.pendingRequest = 0;
				}delete this.pending[element.name];if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
					$(this.currentForm).submit();this.formSubmitted = false;
				} else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
					$(this.currentForm).triggerHandler("invalid-form", [this]);this.formSubmitted = false;
				}
			}, previousValue: function previousValue(element) {
				return $.data(element, "previousValue") || $.data(element, "previousValue", { old: null, valid: true, message: this.defaultMessage(element, "remote") });
			} }, classRuleSettings: { required: { required: true }, email: { email: true }, url: { url: true }, date: { date: true }, dateISO: { dateISO: true }, number: { number: true }, digits: { digits: true }, creditcard: { creditcard: true } }, addClassRules: function addClassRules(className, rules) {
			if (className.constructor === String) {
				this.classRuleSettings[className] = rules;
			} else {
				$.extend(this.classRuleSettings, className);
			}
		}, classRules: function classRules(element) {
			var rules = {};var classes = $(element).attr("class");if (classes) {
				$.each(classes.split(" "), function () {
					if (this in $.validator.classRuleSettings) {
						$.extend(rules, $.validator.classRuleSettings[this]);
					}
				});
			}return rules;
		}, attributeRules: function attributeRules(element) {
			var rules = {};var $element = $(element);for (var method in $.validator.methods) {
				var value;if (method === "required") {
					value = $element.get(0).getAttribute(method);if (value === "") {
						value = true;
					}value = !!value;
				} else {
					value = $element.attr(method);
				}if (value) {
					rules[method] = value;
				} else if ($element[0].getAttribute("type") === method) {
					rules[method] = true;
				}
			}if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
				delete rules.maxlength;
			}return rules;
		}, dataRules: function dataRules(element) {
			var method,
			    value,
			    rules = {},
			    $element = $(element);for (method in $.validator.methods) {
				value = $element.data("rule-" + method.toLowerCase());if (value !== undefined) {
					rules[method] = value;
				}
			}return rules;
		}, staticRules: function staticRules(element) {
			var rules = {};var validator = $.data(element.form, "validator");if (validator.settings.rules) {
				rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
			}return rules;
		}, normalizeRules: function normalizeRules(rules, element) {
			$.each(rules, function (prop, val) {
				if (val === false) {
					delete rules[prop];return;
				}if (val.param || val.depends) {
					var keepRule = true;switch (_typeof(val.depends)) {case "string":
							keepRule = !!$(val.depends, element.form).length;break;case "function":
							keepRule = val.depends.call(element, element);break;}if (keepRule) {
						rules[prop] = val.param !== undefined ? val.param : true;
					} else {
						delete rules[prop];
					}
				}
			});$.each(rules, function (rule, parameter) {
				rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
			});$.each(['minlength', 'maxlength'], function () {
				if (rules[this]) {
					rules[this] = Number(rules[this]);
				}
			});$.each(['rangelength'], function () {
				var parts;if (rules[this]) {
					if ($.isArray(rules[this])) {
						rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
					} else if (typeof rules[this] === "string") {
						parts = rules[this].split(/[\s,]+/);rules[this] = [Number(parts[0]), Number(parts[1])];
					}
				}
			});if ($.validator.autoCreateRanges) {
				if (rules.min && rules.max) {
					rules.range = [rules.min, rules.max];delete rules.min;delete rules.max;
				}if (rules.minlength && rules.maxlength) {
					rules.rangelength = [rules.minlength, rules.maxlength];delete rules.minlength;delete rules.maxlength;
				}
			}return rules;
		}, normalizeRule: function normalizeRule(data) {
			if (typeof data === "string") {
				var transformed = {};$.each(data.split(/\s/), function () {
					transformed[this] = true;
				});data = transformed;
			}return data;
		}, addMethod: function addMethod(name, method, message) {
			$.validator.methods[name] = method;$.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];if (method.length < 3) {
				$.validator.addClassRules(name, $.validator.normalizeRule(name));
			}
		}, methods: { required: function required(value, element, param) {
				if (!this.depend(param, element)) {
					return "dependency-mismatch";
				}if (element.nodeName.toLowerCase() === "select") {
					var val = $(element).val();return val && val.length > 0;
				}if (this.checkable(element)) {
					return this.getLength(value, element) > 0;
				}return $.trim(value).length > 0;
			}, remote: function remote(value, element, param) {
				if (this.optional(element)) {
					return "dependency-mismatch";
				}var previous = this.previousValue(element);if (!this.settings.messages[element.name]) {
					this.settings.messages[element.name] = {};
				}previous.originalMessage = this.settings.messages[element.name].remote;this.settings.messages[element.name].remote = previous.message;param = typeof param === "string" && { url: param } || param;if (previous.old === value) {
					return previous.valid;
				}previous.old = value;var validator = this;this.startRequest(element);var data = {};data[element.name] = value;$.ajax($.extend(true, { url: param, mode: "abort", port: "validate" + element.name, dataType: "json", data: data, success: function success(response) {
						validator.settings.messages[element.name].remote = previous.originalMessage;var valid = response === true || response === "true";if (valid) {
							var submitted = validator.formSubmitted;validator.prepareElement(element);validator.formSubmitted = submitted;validator.successList.push(element);delete validator.invalid[element.name];validator.showErrors();
						} else {
							var errors = {};var message = response || validator.defaultMessage(element, "remote");errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;validator.invalid[element.name] = true;validator.showErrors(errors);
						}previous.valid = valid;validator.stopRequest(element, valid);
					} }, param));return "pending";
			}, minlength: function minlength(value, element, param) {
				var length = $.isArray(value) ? value.length : this.getLength($.trim(value), element);return this.optional(element) || length >= param;
			}, maxlength: function maxlength(value, element, param) {
				var length = $.isArray(value) ? value.length : this.getLength($.trim(value), element);return this.optional(element) || length <= param;
			}, rangelength: function rangelength(value, element, param) {
				var length = $.isArray(value) ? value.length : this.getLength($.trim(value), element);return this.optional(element) || length >= param[0] && length <= param[1];
			}, min: function min(value, element, param) {
				return this.optional(element) || value >= param;
			}, max: function max(value, element, param) {
				return this.optional(element) || value <= param;
			}, range: function range(value, element, param) {
				return this.optional(element) || value >= param[0] && value <= param[1];
			}, email: function email(value, element) {
				return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);
			}, url: function url(value, element) {
				return this.optional(element) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
			}, date: function date(value, element) {
				return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
			}, dateISO: function dateISO(value, element) {
				return this.optional(element) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(value);
			}, number: function number(value, element) {
				return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
			}, digits: function digits(value, element) {
				return this.optional(element) || /^\d+$/.test(value);
			}, creditcard: function creditcard(value, element) {
				if (this.optional(element)) {
					return "dependency-mismatch";
				}if (/[^0-9 \-]+/.test(value)) {
					return false;
				}var nCheck = 0,
				    nDigit = 0,
				    bEven = false;value = value.replace(/\D/g, "");for (var n = value.length - 1; n >= 0; n--) {
					var cDigit = value.charAt(n);nDigit = parseInt(cDigit, 10);if (bEven) {
						if ((nDigit *= 2) > 9) {
							nDigit -= 9;
						}
					}nCheck += nDigit;bEven = !bEven;
				}return nCheck % 10 === 0;
			}, equalTo: function equalTo(value, element, param) {
				var target = $(param);if (this.settings.onfocusout) {
					target.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
						$(element).valid();
					});
				}return value === target.val();
			} } });$.format = $.validator.format;
})(jQuery);(function ($) {
	var pendingRequests = {};if ($.ajaxPrefilter) {
		$.ajaxPrefilter(function (settings, _, xhr) {
			var port = settings.port;if (settings.mode === "abort") {
				if (pendingRequests[port]) {
					pendingRequests[port].abort();
				}pendingRequests[port] = xhr;
			}
		});
	} else {
		var ajax = $.ajax;$.ajax = function (settings) {
			var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
			    port = ("port" in settings ? settings : $.ajaxSettings).port;if (mode === "abort") {
				if (pendingRequests[port]) {
					pendingRequests[port].abort();
				}return pendingRequests[port] = ajax.apply(this, arguments);
			}return ajax.apply(this, arguments);
		};
	}
})(jQuery);(function ($) {
	$.extend($.fn, { validateDelegate: function validateDelegate(delegate, type, handler) {
			return this.bind(type, function (event) {
				var target = $(event.target);if (target.is(delegate)) {
					return handler.apply(target, arguments);
				}
			});
		} });
})(jQuery);
/* Masked Input plugin for jQuery
Copyright (c) 2007-2013 Josh Bush (digitalbush.com)
Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
Version: 1.3.1 */
(function (e) {
	function t() {
		var e = document.createElement("input"),
		    t = "onpaste";return e.setAttribute(t, ""), "function" == typeof e[t] ? "paste" : "input";
	}var n,
	    a = t() + ".mask",
	    r = navigator.userAgent,
	    i = /iphone/i.test(r),
	    o = /android/i.test(r);e.mask = { definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" }, dataName: "rawMaskFn", placeholder: "_" }, e.fn.extend({ caret: function caret(e, t) {
			var n;if (0 !== this.length && !this.is(":hidden")) return "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each(function () {
				this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && (n = this.createTextRange(), n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select());
			})) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (n = document.selection.createRange(), e = 0 - n.duplicate().moveStart("character", -1e5), t = e + n.text.length), { begin: e, end: t });
		}, unmask: function unmask() {
			return this.trigger("unmask");
		}, mask: function mask(t, r) {
			var c, l, s, u, f, h;return !t && this.length > 0 ? (c = e(this[0]), c.data(e.mask.dataName)()) : (r = e.extend({ placeholder: e.mask.placeholder, completed: null }, r), l = e.mask.definitions, s = [], u = h = t.length, f = null, e.each(t.split(""), function (e, t) {
				"?" == t ? (h--, u = e) : l[t] ? (s.push(RegExp(l[t])), null === f && (f = s.length - 1)) : s.push(null);
			}), this.trigger("unmask").each(function () {
				function c(e) {
					for (; h > ++e && !s[e];) {}return e;
				}function d(e) {
					for (; --e >= 0 && !s[e];) {}return e;
				}function m(e, t) {
					var n, a;if (!(0 > e)) {
						for (n = e, a = c(t); h > n; n++) {
							if (s[n]) {
								if (!(h > a && s[n].test(R[a]))) break;R[n] = R[a], R[a] = r.placeholder, a = c(a);
							}
						}b(), x.caret(Math.max(f, e));
					}
				}function p(e) {
					var t, n, a, i;for (t = e, n = r.placeholder; h > t; t++) {
						if (s[t]) {
							if (a = c(t), i = R[t], R[t] = n, !(h > a && s[a].test(i))) break;n = i;
						}
					}
				}function g(e) {
					var t,
					    n,
					    a,
					    r = e.which;8 === r || 46 === r || i && 127 === r ? (t = x.caret(), n = t.begin, a = t.end, 0 === a - n && (n = 46 !== r ? d(n) : a = c(n - 1), a = 46 === r ? c(a) : a), k(n, a), m(n, a - 1), e.preventDefault()) : 27 == r && (x.val(S), x.caret(0, y()), e.preventDefault());
				}function v(t) {
					var n,
					    a,
					    i,
					    l = t.which,
					    u = x.caret();t.ctrlKey || t.altKey || t.metaKey || 32 > l || l && (0 !== u.end - u.begin && (k(u.begin, u.end), m(u.begin, u.end - 1)), n = c(u.begin - 1), h > n && (a = String.fromCharCode(l), s[n].test(a) && (p(n), R[n] = a, b(), i = c(n), o ? setTimeout(e.proxy(e.fn.caret, x, i), 0) : x.caret(i), r.completed && i >= h && r.completed.call(x))), t.preventDefault());
				}function k(e, t) {
					var n;for (n = e; t > n && h > n; n++) {
						s[n] && (R[n] = r.placeholder);
					}
				}function b() {
					x.val(R.join(""));
				}function y(e) {
					var t,
					    n,
					    a = x.val(),
					    i = -1;for (t = 0, pos = 0; h > t; t++) {
						if (s[t]) {
							for (R[t] = r.placeholder; pos++ < a.length;) {
								if (n = a.charAt(pos - 1), s[t].test(n)) {
									R[t] = n, i = t;break;
								}
							}if (pos > a.length) break;
						} else R[t] === a.charAt(pos) && t !== u && (pos++, i = t);
					}return e ? b() : u > i + 1 ? (x.val(""), k(0, h)) : (b(), x.val(x.val().substring(0, i + 1))), u ? t : f;
				}var x = e(this),
				    R = e.map(t.split(""), function (e) {
					return "?" != e ? l[e] ? r.placeholder : e : void 0;
				}),
				    S = x.val();x.data(e.mask.dataName, function () {
					return e.map(R, function (e, t) {
						return s[t] && e != r.placeholder ? e : null;
					}).join("");
				}), x.attr("readonly") || x.one("unmask", function () {
					x.unbind(".mask").removeData(e.mask.dataName);
				}).bind("focus.mask", function () {
					clearTimeout(n);var e;S = x.val(), e = y(), n = setTimeout(function () {
						b(), e == t.length ? x.caret(0, e) : x.caret(e);
					}, 10);
				}).bind("blur.mask", function () {
					y(), x.val() != S && x.change();
				}).bind("keydown.mask", g).bind("keypress.mask", v).bind(a, function () {
					setTimeout(function () {
						var e = y(!0);x.caret(e), r.completed && e == x.val().length && r.completed.call(x);
					}, 0);
				}), y();
			}));
		} });
})(jQuery);
/*! jQuery UI - v1.10.4 - 2014-03-05
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.datepicker.js, jquery.ui.slider.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function (e, t) {
	function i(t, i) {
		var s,
		    a,
		    o,
		    r = t.nodeName.toLowerCase();return "area" === r ? (s = t.parentNode, a = s.name, t.href && a && "map" === s.nodeName.toLowerCase() ? (o = e("img[usemap=#" + a + "]")[0], !!o && n(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || i : i) && n(t);
	}function n(t) {
		return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
			return "hidden" === e.css(this, "visibility");
		}).length;
	}var s = 0,
	    a = /^ui-id-\d+$/;e.ui = e.ui || {}, e.extend(e.ui, { version: "1.10.4", keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 } }), e.fn.extend({ focus: function (t) {
			return function (i, n) {
				return "number" == typeof i ? this.each(function () {
					var t = this;setTimeout(function () {
						e(t).focus(), n && n.call(t);
					}, i);
				}) : t.apply(this, arguments);
			};
		}(e.fn.focus), scrollParent: function scrollParent() {
			var t;return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
				return (/(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
				);
			}).eq(0) : this.parents().filter(function () {
				return (/(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
				);
			}).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t;
		}, zIndex: function zIndex(i) {
			if (i !== t) return this.css("zIndex", i);if (this.length) for (var n, s, a = e(this[0]); a.length && a[0] !== document;) {
				if (n = a.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(a.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;a = a.parent();
			}return 0;
		}, uniqueId: function uniqueId() {
			return this.each(function () {
				this.id || (this.id = "ui-id-" + ++s);
			});
		}, removeUniqueId: function removeUniqueId() {
			return this.each(function () {
				a.test(this.id) && e(this).removeAttr("id");
			});
		} }), e.extend(e.expr[":"], { data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
			return function (i) {
				return !!e.data(i, t);
			};
		}) : function (t, i, n) {
			return !!e.data(t, n[3]);
		}, focusable: function focusable(t) {
			return i(t, !isNaN(e.attr(t, "tabindex")));
		}, tabbable: function tabbable(t) {
			var n = e.attr(t, "tabindex"),
			    s = isNaN(n);return (s || n >= 0) && i(t, !s);
		} }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (i, n) {
		function s(t, i, n, s) {
			return e.each(a, function () {
				i -= parseFloat(e.css(t, "padding" + this)) || 0, n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (i -= parseFloat(e.css(t, "margin" + this)) || 0);
			}), i;
		}var a = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
		    o = n.toLowerCase(),
		    r = { innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight };e.fn["inner" + n] = function (i) {
			return i === t ? r["inner" + n].call(this) : this.each(function () {
				e(this).css(o, s(this, i) + "px");
			});
		}, e.fn["outer" + n] = function (t, i) {
			return "number" != typeof t ? r["outer" + n].call(this, t) : this.each(function () {
				e(this).css(o, s(this, t, !0, i) + "px");
			});
		};
	}), e.fn.addBack || (e.fn.addBack = function (e) {
		return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
	}), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
		return function (i) {
			return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this);
		};
	}(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({ disableSelection: function disableSelection() {
			return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
				e.preventDefault();
			});
		}, enableSelection: function enableSelection() {
			return this.unbind(".ui-disableSelection");
		} }), e.extend(e.ui, { plugin: { add: function add(t, i, n) {
				var s,
				    a = e.ui[t].prototype;for (s in n) {
					a.plugins[s] = a.plugins[s] || [], a.plugins[s].push([i, n[s]]);
				}
			}, call: function call(e, t, i) {
				var n,
				    s = e.plugins[t];if (s && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType) for (n = 0; s.length > n; n++) {
					e.options[s[n][0]] && s[n][1].apply(e.element, i);
				}
			} }, hasScroll: function hasScroll(t, i) {
			if ("hidden" === e(t).css("overflow")) return !1;var n = i && "left" === i ? "scrollLeft" : "scrollTop",
			    s = !1;return t[n] > 0 ? !0 : (t[n] = 1, s = t[n] > 0, t[n] = 0, s);
		} });
})(jQuery);(function (t, e) {
	var i = 0,
	    s = Array.prototype.slice,
	    n = t.cleanData;t.cleanData = function (e) {
		for (var i, s = 0; null != (i = e[s]); s++) {
			try {
				t(i).triggerHandler("remove");
			} catch (o) {}
		}n(e);
	}, t.widget = function (i, s, n) {
		var o,
		    a,
		    r,
		    h,
		    l = {},
		    c = i.split(".")[0];i = i.split(".")[1], o = c + "-" + i, n || (n = s, s = t.Widget), t.expr[":"][o.toLowerCase()] = function (e) {
			return !!t.data(e, o);
		}, t[c] = t[c] || {}, a = t[c][i], r = t[c][i] = function (t, i) {
			return this._createWidget ? (arguments.length && this._createWidget(t, i), e) : new r(t, i);
		}, t.extend(r, a, { version: n.version, _proto: t.extend({}, n), _childConstructors: [] }), h = new s(), h.options = t.widget.extend({}, h.options), t.each(n, function (i, n) {
			return t.isFunction(n) ? (l[i] = function () {
				var t = function t() {
					return s.prototype[i].apply(this, arguments);
				},
				    e = function e(t) {
					return s.prototype[i].apply(this, t);
				};return function () {
					var i,
					    s = this._super,
					    o = this._superApply;return this._super = t, this._superApply = e, i = n.apply(this, arguments), this._super = s, this._superApply = o, i;
				};
			}(), e) : (l[i] = n, e);
		}), r.prototype = t.widget.extend(h, { widgetEventPrefix: a ? h.widgetEventPrefix || i : i }, l, { constructor: r, namespace: c, widgetName: i, widgetFullName: o }), a ? (t.each(a._childConstructors, function (e, i) {
			var s = i.prototype;t.widget(s.namespace + "." + s.widgetName, r, i._proto);
		}), delete a._childConstructors) : s._childConstructors.push(r), t.widget.bridge(i, r);
	}, t.widget.extend = function (i) {
		for (var n, o, a = s.call(arguments, 1), r = 0, h = a.length; h > r; r++) {
			for (n in a[r]) {
				o = a[r][n], a[r].hasOwnProperty(n) && o !== e && (i[n] = t.isPlainObject(o) ? t.isPlainObject(i[n]) ? t.widget.extend({}, i[n], o) : t.widget.extend({}, o) : o);
			}
		}return i;
	}, t.widget.bridge = function (i, n) {
		var o = n.prototype.widgetFullName || i;t.fn[i] = function (a) {
			var r = "string" == typeof a,
			    h = s.call(arguments, 1),
			    l = this;return a = !r && h.length ? t.widget.extend.apply(null, [a].concat(h)) : a, r ? this.each(function () {
				var s,
				    n = t.data(this, o);return n ? t.isFunction(n[a]) && "_" !== a.charAt(0) ? (s = n[a].apply(n, h), s !== n && s !== e ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : e) : t.error("no such method '" + a + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + a + "'");
			}) : this.each(function () {
				var e = t.data(this, o);e ? e.option(a || {})._init() : t.data(this, o, new n(a, this));
			}), l;
		};
	}, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { disabled: !1, create: null }, _createWidget: function _createWidget(e, s) {
			s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, { remove: function remove(t) {
					t.target === s && this.destroy();
				} }), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init();
		}, _getCreateOptions: t.noop, _getCreateEventData: t.noop, _create: t.noop, _init: t.noop, destroy: function destroy() {
			this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus");
		}, _destroy: t.noop, widget: function widget() {
			return this.element;
		}, option: function option(i, s) {
			var n,
			    o,
			    a,
			    r = i;if (0 === arguments.length) return t.widget.extend({}, this.options);if ("string" == typeof i) if (r = {}, n = i.split("."), i = n.shift(), n.length) {
				for (o = r[i] = t.widget.extend({}, this.options[i]), a = 0; n.length - 1 > a; a++) {
					o[n[a]] = o[n[a]] || {}, o = o[n[a]];
				}if (i = n.pop(), 1 === arguments.length) return o[i] === e ? null : o[i];o[i] = s;
			} else {
				if (1 === arguments.length) return this.options[i] === e ? null : this.options[i];r[i] = s;
			}return this._setOptions(r), this;
		}, _setOptions: function _setOptions(t) {
			var e;for (e in t) {
				this._setOption(e, t[e]);
			}return this;
		}, _setOption: function _setOption(t, e) {
			return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this;
		}, enable: function enable() {
			return this._setOption("disabled", !1);
		}, disable: function disable() {
			return this._setOption("disabled", !0);
		}, _on: function _on(i, s, n) {
			var o,
			    a = this;"boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = o = t(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, o = this.widget()), t.each(n, function (n, r) {
				function h() {
					return i || a.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? a[r] : r).apply(a, arguments) : e;
				}"string" != typeof r && (h.guid = r.guid = r.guid || h.guid || t.guid++);var l = n.match(/^(\w+)\s*(.*)$/),
				    c = l[1] + a.eventNamespace,
				    u = l[2];u ? o.delegate(u, c, h) : s.bind(c, h);
			});
		}, _off: function _off(t, e) {
			e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e);
		}, _delay: function _delay(t, e) {
			function i() {
				return ("string" == typeof t ? s[t] : t).apply(s, arguments);
			}var s = this;return setTimeout(i, e || 0);
		}, _hoverable: function _hoverable(e) {
			this.hoverable = this.hoverable.add(e), this._on(e, { mouseenter: function mouseenter(e) {
					t(e.currentTarget).addClass("ui-state-hover");
				}, mouseleave: function mouseleave(e) {
					t(e.currentTarget).removeClass("ui-state-hover");
				} });
		}, _focusable: function _focusable(e) {
			this.focusable = this.focusable.add(e), this._on(e, { focusin: function focusin(e) {
					t(e.currentTarget).addClass("ui-state-focus");
				}, focusout: function focusout(e) {
					t(e.currentTarget).removeClass("ui-state-focus");
				} });
		}, _trigger: function _trigger(e, i, s) {
			var n,
			    o,
			    a = this.options[e];if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (n in o) {
				n in i || (i[n] = o[n]);
			}return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented());
		} }, t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, i) {
		t.Widget.prototype["_" + e] = function (s, n, o) {
			"string" == typeof n && (n = { effect: n });var a,
			    r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;n = n || {}, "number" == typeof n && (n = { duration: n }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function (i) {
				t(this)[e](), o && o.call(s[0]), i();
			});
		};
	});
})(jQuery);(function (t) {
	var e = !1;t(document).mouseup(function () {
		e = !1;
	}), t.widget("ui.mouse", { version: "1.10.4", options: { cancel: "input,textarea,button,select,option", distance: 1, delay: 0 }, _mouseInit: function _mouseInit() {
			var e = this;this.element.bind("mousedown." + this.widgetName, function (t) {
				return e._mouseDown(t);
			}).bind("click." + this.widgetName, function (i) {
				return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined;
			}), this.started = !1;
		}, _mouseDestroy: function _mouseDestroy() {
			this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
		}, _mouseDown: function _mouseDown(i) {
			if (!e) {
				this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;var s = this,
				    n = 1 === i.which,
				    a = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;return n && !a && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
					s.mouseDelayMet = !0;
				}, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
					return s._mouseMove(t);
				}, this._mouseUpDelegate = function (t) {
					return s._mouseUp(t);
				}, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0;
			}
		}, _mouseMove: function _mouseMove(e) {
			return t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted);
		}, _mouseUp: function _mouseUp(e) {
			return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1;
		}, _mouseDistanceMet: function _mouseDistanceMet(t) {
			return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance;
		}, _mouseDelayMet: function _mouseDelayMet() {
			return this.mouseDelayMet;
		}, _mouseStart: function _mouseStart() {}, _mouseDrag: function _mouseDrag() {}, _mouseStop: function _mouseStop() {}, _mouseCapture: function _mouseCapture() {
			return !0;
		} });
})(jQuery);(function (e, t) {
	function i() {
		this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"], monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Dic"], dayNames: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"], dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"], dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, e.extend(this._defaults, this.regional[""]), this.dpDiv = a(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
	}function a(t) {
		var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i, "mouseout", function () {
			e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover");
		}).delegate(i, "mouseover", function () {
			e.datepicker._isDisabledDatepicker(n.inline ? t.parent()[0] : n.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"));
		});
	}function s(t, i) {
		e.extend(t, i);for (var a in i) {
			null == i[a] && (t[a] = i[a]);
		}return t;
	}e.extend(e.ui, { datepicker: { version: "1.10.4" } });var n,
	    r = "datepicker";e.extend(i.prototype, { markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function _widgetDatepicker() {
			return this.dpDiv;
		}, setDefaults: function setDefaults(e) {
			return s(this._defaults, e || {}), this;
		}, _attachDatepicker: function _attachDatepicker(t, i) {
			var a, s, n;a = t.nodeName.toLowerCase(), s = "div" === a || "span" === a, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), n = this._newInst(e(t), s), n.settings = e.extend({}, i || {}), "input" === a ? this._connectDatepicker(t, n) : s && this._inlineDatepicker(t, n);
		}, _newInst: function _newInst(t, i) {
			var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");return { id: s, input: t, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i, dpDiv: i ? a(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv };
		}, _connectDatepicker: function _connectDatepicker(t, i) {
			var a = e(t);i.append = e([]), i.trigger = e([]), a.hasClass(this.markerClassName) || (this._attachments(a, i), a.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, r, i), i.settings.disabled && this._disableDatepicker(t));
		}, _attachments: function _attachments(t, i) {
			var a,
			    s,
			    n,
			    r = this._get(i, "appendText"),
			    o = this._get(i, "isRTL");i.append && i.append.remove(), r && (i.append = e("<span class='" + this._appendClass + "'>" + r + "</span>"), t[o ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), a = this._get(i, "showOn"), ("focus" === a || "both" === a) && t.focus(this._showDatepicker), ("button" === a || "both" === a) && (s = this._get(i, "buttonText"), n = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({ src: n, alt: s, title: s }) : e("<button type='button'></button>").addClass(this._triggerClass).html(n ? e("<img/>").attr({ src: n, alt: s, title: s }) : s)), t[o ? "before" : "after"](i.trigger), i.trigger.click(function () {
				return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1;
			}));
		}, _autoSize: function _autoSize(e) {
			if (this._get(e, "autoSize") && !e.inline) {
				var t,
				    i,
				    a,
				    s,
				    n = new Date(2009, 11, 20),
				    r = this._get(e, "dateFormat");r.match(/[DM]/) && (t = function t(e) {
					for (i = 0, a = 0, s = 0; e.length > s; s++) {
						e[s].length > i && (i = e[s].length, a = s);
					}return a;
				}, n.setMonth(t(this._get(e, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), n.setDate(t(this._get(e, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - n.getDay())), e.input.attr("size", this._formatDate(e, n).length);
			}
		}, _inlineDatepicker: function _inlineDatepicker(t, i) {
			var a = e(t);a.hasClass(this.markerClassName) || (a.addClass(this.markerClassName).append(i.dpDiv), e.data(t, r, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"));
		}, _dialogDatepicker: function _dialogDatepicker(t, i, a, n, o) {
			var u,
			    c,
			    h,
			    l,
			    d,
			    p = this._dialogInst;return p || (this.uuid += 1, u = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + u + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, e.data(this._dialogInput[0], r, p)), s(p.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(p, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (c = document.documentElement.clientWidth, h = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [c / 2 - 100 + l, h / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = a, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], r, p), this;
		}, _destroyDatepicker: function _destroyDatepicker(t) {
			var i,
			    a = e(t),
			    s = e.data(t, r);a.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, r), "input" === i ? (s.append.remove(), s.trigger.remove(), a.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && a.removeClass(this.markerClassName).empty());
		}, _enableDatepicker: function _enableDatepicker(t) {
			var i,
			    a,
			    s = e(t),
			    n = e.data(t, r);s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, n.trigger.filter("button").each(function () {
				this.disabled = !1;
			}).end().filter("img").css({ opacity: "1.0", cursor: "" })) : ("div" === i || "span" === i) && (a = s.children("." + this._inlineClass), a.children().removeClass("ui-state-disabled"), a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
				return e === t ? null : e;
			}));
		}, _disableDatepicker: function _disableDatepicker(t) {
			var i,
			    a,
			    s = e(t),
			    n = e.data(t, r);s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, n.trigger.filter("button").each(function () {
				this.disabled = !0;
			}).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : ("div" === i || "span" === i) && (a = s.children("." + this._inlineClass), a.children().addClass("ui-state-disabled"), a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
				return e === t ? null : e;
			}), this._disabledInputs[this._disabledInputs.length] = t);
		}, _isDisabledDatepicker: function _isDisabledDatepicker(e) {
			if (!e) return !1;for (var t = 0; this._disabledInputs.length > t; t++) {
				if (this._disabledInputs[t] === e) return !0;
			}return !1;
		}, _getInst: function _getInst(t) {
			try {
				return e.data(t, r);
			} catch (i) {
				throw "Missing instance data for this datepicker";
			}
		}, _optionDatepicker: function _optionDatepicker(i, a, n) {
			var r,
			    o,
			    u,
			    c,
			    h = this._getInst(i);return 2 === arguments.length && "string" == typeof a ? "defaults" === a ? e.extend({}, e.datepicker._defaults) : h ? "all" === a ? e.extend({}, h.settings) : this._get(h, a) : null : (r = a || {}, "string" == typeof a && (r = {}, r[a] = n), h && (this._curInst === h && this._hideDatepicker(), o = this._getDateDatepicker(i, !0), u = this._getMinMaxDate(h, "min"), c = this._getMinMaxDate(h, "max"), s(h.settings, r), null !== u && r.dateFormat !== t && r.minDate === t && (h.settings.minDate = this._formatDate(h, u)), null !== c && r.dateFormat !== t && r.maxDate === t && (h.settings.maxDate = this._formatDate(h, c)), "disabled" in r && (r.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(e(i), h), this._autoSize(h), this._setDate(h, o), this._updateAlternate(h), this._updateDatepicker(h)), t);
		}, _changeDatepicker: function _changeDatepicker(e, t, i) {
			this._optionDatepicker(e, t, i);
		}, _refreshDatepicker: function _refreshDatepicker(e) {
			var t = this._getInst(e);t && this._updateDatepicker(t);
		}, _setDateDatepicker: function _setDateDatepicker(e, t) {
			var i = this._getInst(e);i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i));
		}, _getDateDatepicker: function _getDateDatepicker(e, t) {
			var i = this._getInst(e);return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null;
		}, _doKeyDown: function _doKeyDown(t) {
			var i,
			    a,
			    s,
			    n = e.datepicker._getInst(t.target),
			    r = !0,
			    o = n.dpDiv.is(".ui-datepicker-rtl");if (n._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {case 9:
					e.datepicker._hideDatepicker(), r = !1;break;case 13:
					return s = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", n.dpDiv), s[0] && e.datepicker._selectDay(t.target, n.selectedMonth, n.selectedYear, s[0]), i = e.datepicker._get(n, "onSelect"), i ? (a = e.datepicker._formatDate(n), i.apply(n.input ? n.input[0] : null, [a, n])) : e.datepicker._hideDatepicker(), !1;case 27:
					e.datepicker._hideDatepicker();break;case 33:
					e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");break;case 34:
					e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");break;case 35:
					(t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), r = t.ctrlKey || t.metaKey;break;case 36:
					(t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), r = t.ctrlKey || t.metaKey;break;case 37:
					(t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? 1 : -1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");break;case 38:
					(t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), r = t.ctrlKey || t.metaKey;break;case 39:
					(t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? -1 : 1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");break;case 40:
					(t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), r = t.ctrlKey || t.metaKey;break;default:
					r = !1;} else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : r = !1;r && (t.preventDefault(), t.stopPropagation());
		}, _doKeyPress: function _doKeyPress(i) {
			var a,
			    s,
			    n = e.datepicker._getInst(i.target);return e.datepicker._get(n, "constrainInput") ? (a = e.datepicker._possibleChars(e.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || " " > s || !a || a.indexOf(s) > -1) : t;
		}, _doKeyUp: function _doKeyUp(t) {
			var i,
			    a = e.datepicker._getInst(t.target);if (a.input.val() !== a.lastVal) try {
				i = e.datepicker.parseDate(e.datepicker._get(a, "dateFormat"), a.input ? a.input.val() : null, e.datepicker._getFormatConfig(a)), i && (e.datepicker._setDateFromField(a), e.datepicker._updateAlternate(a), e.datepicker._updateDatepicker(a));
			} catch (s) {}return !0;
		}, _showDatepicker: function _showDatepicker(t) {
			if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
				var i, a, n, r, o, u, c;i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), a = e.datepicker._get(i, "beforeShow"), n = a ? a.apply(t, [t, i]) : {}, n !== !1 && (s(i.settings, n), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), r = !1, e(t).parents().each(function () {
					return r |= "fixed" === e(this).css("position"), !r;
				}), o = { left: e.datepicker._pos[0], top: e.datepicker._pos[1] }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), e.datepicker._updateDatepicker(i), o = e.datepicker._checkOffset(i, o, r), i.dpDiv.css({ position: e.datepicker._inDialog && e.blockUI ? "static" : r ? "fixed" : "absolute", display: "none", left: o.left + "px", top: o.top + "px" }), i.inline || (u = e.datepicker._get(i, "showAnim"), c = e.datepicker._get(i, "duration"), i.dpDiv.zIndex(e(t).zIndex() + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[u] ? i.dpDiv.show(u, e.datepicker._get(i, "showOptions"), c) : i.dpDiv[u || "show"](u ? c : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i));
			}
		}, _updateDatepicker: function _updateDatepicker(t) {
			this.maxRows = 4, n = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();var i,
			    a = this._getNumberOfMonths(t),
			    s = a[1],
			    r = 17;t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", r * s + "em"), t.dpDiv[(1 !== a[0] || 1 !== a[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function () {
				i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null;
			}, 0));
		}, _shouldFocusInput: function _shouldFocusInput(e) {
			return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus");
		}, _checkOffset: function _checkOffset(t, i, a) {
			var s = t.dpDiv.outerWidth(),
			    n = t.dpDiv.outerHeight(),
			    r = t.input ? t.input.outerWidth() : 0,
			    o = t.input ? t.input.outerHeight() : 0,
			    u = document.documentElement.clientWidth + (a ? 0 : e(document).scrollLeft()),
			    c = document.documentElement.clientHeight + (a ? 0 : e(document).scrollTop());return i.left -= this._get(t, "isRTL") ? s - r : 0, i.left -= a && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= a && i.top === t.input.offset().top + o ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > u && u > s ? Math.abs(i.left + s - u) : 0), i.top -= Math.min(i.top, i.top + n > c && c > n ? Math.abs(n + o) : 0), i;
		}, _findPos: function _findPos(t) {
			for (var i, a = this._getInst(t), s = this._get(a, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) {
				t = t[s ? "previousSibling" : "nextSibling"];
			}return i = e(t).offset(), [i.left, i.top];
		}, _hideDatepicker: function _hideDatepicker(t) {
			var i,
			    a,
			    s,
			    n,
			    o = this._curInst;!o || t && o !== e.data(t, r) || this._datepickerShowing && (i = this._get(o, "showAnim"), a = this._get(o, "duration"), s = function s() {
				e.datepicker._tidyDialog(o);
			}, e.effects && (e.effects.effect[i] || e.effects[i]) ? o.dpDiv.hide(i, e.datepicker._get(o, "showOptions"), a, s) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? a : null, s), i || s(), this._datepickerShowing = !1, n = this._get(o, "onClose"), n && n.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1);
		}, _tidyDialog: function _tidyDialog(e) {
			e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
		}, _checkExternalClick: function _checkExternalClick(t) {
			if (e.datepicker._curInst) {
				var i = e(t.target),
				    a = e.datepicker._getInst(i[0]);(i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== a) && e.datepicker._hideDatepicker();
			}
		}, _adjustDate: function _adjustDate(t, i, a) {
			var s = e(t),
			    n = this._getInst(s[0]);this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(n, i + ("M" === a ? this._get(n, "showCurrentAtPos") : 0), a), this._updateDatepicker(n));
		}, _gotoToday: function _gotoToday(t) {
			var i,
			    a = e(t),
			    s = this._getInst(a[0]);this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date(), s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(a);
		}, _selectMonthYear: function _selectMonthYear(t, i, a) {
			var s = e(t),
			    n = this._getInst(s[0]);n["selected" + ("M" === a ? "Month" : "Year")] = n["draw" + ("M" === a ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(n), this._adjustDate(s);
		}, _selectDay: function _selectDay(t, i, a, s) {
			var n,
			    r = e(t);e(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (n = this._getInst(r[0]), n.selectedDay = n.currentDay = e("a", s).html(), n.selectedMonth = n.currentMonth = i, n.selectedYear = n.currentYear = a, this._selectDate(t, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)));
		}, _clearDate: function _clearDate(t) {
			var i = e(t);this._selectDate(i, "");
		}, _selectDate: function _selectDate(t, i) {
			var a,
			    s = e(t),
			    n = this._getInst(s[0]);i = null != i ? i : this._formatDate(n), n.input && n.input.val(i), this._updateAlternate(n), a = this._get(n, "onSelect"), a ? a.apply(n.input ? n.input[0] : null, [i, n]) : n.input && n.input.trigger("change"), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], "object" != _typeof(n.input[0]) && n.input.focus(), this._lastInput = null);
		}, _updateAlternate: function _updateAlternate(t) {
			var i,
			    a,
			    s,
			    n = this._get(t, "altField");n && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), a = this._getDate(t), s = this.formatDate(i, a, this._getFormatConfig(t)), e(n).each(function () {
				e(this).val(s);
			}));
		}, noWeekends: function noWeekends(e) {
			var t = e.getDay();return [t > 0 && 6 > t, ""];
		}, iso8601Week: function iso8601Week(e) {
			var t,
			    i = new Date(e.getTime());return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1;
		}, parseDate: function parseDate(i, a, s) {
			if (null == i || null == a) throw "Invalid arguments";if (a = "object" == (typeof a === 'undefined' ? 'undefined' : _typeof(a)) ? "" + a : a + "", "" === a) return null;var n,
			    r,
			    o,
			    u,
			    c = 0,
			    h = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
			    l = "string" != typeof h ? h : new Date().getFullYear() % 100 + parseInt(h, 10),
			    d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
			    p = (s ? s.dayNames : null) || this._defaults.dayNames,
			    g = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
			    m = (s ? s.monthNames : null) || this._defaults.monthNames,
			    f = -1,
			    _ = -1,
			    v = -1,
			    k = -1,
			    y = !1,
			    b = function b(e) {
				var t = i.length > n + 1 && i.charAt(n + 1) === e;return t && n++, t;
			},
			    D = function D(e) {
				var t = b(e),
				    i = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
				    s = RegExp("^\\d{1," + i + "}"),
				    n = a.substring(c).match(s);if (!n) throw "Missing number at position " + c;return c += n[0].length, parseInt(n[0], 10);
			},
			    w = function w(i, s, n) {
				var r = -1,
				    o = e.map(b(i) ? n : s, function (e, t) {
					return [[t, e]];
				}).sort(function (e, t) {
					return -(e[1].length - t[1].length);
				});if (e.each(o, function (e, i) {
					var s = i[1];return a.substr(c, s.length).toLowerCase() === s.toLowerCase() ? (r = i[0], c += s.length, !1) : t;
				}), -1 !== r) return r + 1;throw "Unknown name at position " + c;
			},
			    M = function M() {
				if (a.charAt(c) !== i.charAt(n)) throw "Unexpected literal at position " + c;c++;
			};for (n = 0; i.length > n; n++) {
				if (y) "'" !== i.charAt(n) || b("'") ? M() : y = !1;else switch (i.charAt(n)) {case "d":
						v = D("d");break;case "D":
						w("D", d, p);break;case "o":
						k = D("o");break;case "m":
						_ = D("m");break;case "M":
						_ = w("M", g, m);break;case "y":
						f = D("y");break;case "@":
						u = new Date(D("@")), f = u.getFullYear(), _ = u.getMonth() + 1, v = u.getDate();break;case "!":
						u = new Date((D("!") - this._ticksTo1970) / 1e4), f = u.getFullYear(), _ = u.getMonth() + 1, v = u.getDate();break;case "'":
						b("'") ? M() : y = !0;break;default:
						M();}
			}if (a.length > c && (o = a.substr(c), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;if (-1 === f ? f = new Date().getFullYear() : 100 > f && (f += new Date().getFullYear() - new Date().getFullYear() % 100 + (l >= f ? 0 : -100)), k > -1) for (_ = 1, v = k;;) {
				if (r = this._getDaysInMonth(f, _ - 1), r >= v) break;_++, v -= r;
			}if (u = this._daylightSavingAdjust(new Date(f, _ - 1, v)), u.getFullYear() !== f || u.getMonth() + 1 !== _ || u.getDate() !== v) throw "Invalid date";return u;
		}, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)), formatDate: function formatDate(e, t, i) {
			if (!t) return "";var a,
			    s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
			    n = (i ? i.dayNames : null) || this._defaults.dayNames,
			    r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
			    o = (i ? i.monthNames : null) || this._defaults.monthNames,
			    u = function u(t) {
				var i = e.length > a + 1 && e.charAt(a + 1) === t;return i && a++, i;
			},
			    c = function c(e, t, i) {
				var a = "" + t;if (u(e)) for (; i > a.length;) {
					a = "0" + a;
				}return a;
			},
			    h = function h(e, t, i, a) {
				return u(e) ? a[t] : i[t];
			},
			    l = "",
			    d = !1;if (t) for (a = 0; e.length > a; a++) {
				if (d) "'" !== e.charAt(a) || u("'") ? l += e.charAt(a) : d = !1;else switch (e.charAt(a)) {case "d":
						l += c("d", t.getDate(), 2);break;case "D":
						l += h("D", t.getDay(), s, n);break;case "o":
						l += c("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);break;case "m":
						l += c("m", t.getMonth() + 1, 2);break;case "M":
						l += h("M", t.getMonth(), r, o);break;case "y":
						l += u("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;break;case "@":
						l += t.getTime();break;case "!":
						l += 1e4 * t.getTime() + this._ticksTo1970;break;case "'":
						u("'") ? l += "'" : d = !0;break;default:
						l += e.charAt(a);}
			}return l;
		}, _possibleChars: function _possibleChars(e) {
			var t,
			    i = "",
			    a = !1,
			    s = function s(i) {
				var a = e.length > t + 1 && e.charAt(t + 1) === i;return a && t++, a;
			};for (t = 0; e.length > t; t++) {
				if (a) "'" !== e.charAt(t) || s("'") ? i += e.charAt(t) : a = !1;else switch (e.charAt(t)) {case "d":case "m":case "y":case "@":
						i += "0123456789";break;case "D":case "M":
						return null;case "'":
						s("'") ? i += "'" : a = !0;break;default:
						i += e.charAt(t);}
			}return i;
		}, _get: function _get(e, i) {
			return e.settings[i] !== t ? e.settings[i] : this._defaults[i];
		}, _setDateFromField: function _setDateFromField(e, t) {
			if (e.input.val() !== e.lastVal) {
				var i = this._get(e, "dateFormat"),
				    a = e.lastVal = e.input ? e.input.val() : null,
				    s = this._getDefaultDate(e),
				    n = s,
				    r = this._getFormatConfig(e);try {
					n = this.parseDate(i, a, r) || s;
				} catch (o) {
					a = t ? "" : a;
				}e.selectedDay = n.getDate(), e.drawMonth = e.selectedMonth = n.getMonth(), e.drawYear = e.selectedYear = n.getFullYear(), e.currentDay = a ? n.getDate() : 0, e.currentMonth = a ? n.getMonth() : 0, e.currentYear = a ? n.getFullYear() : 0, this._adjustInstDate(e);
			}
		}, _getDefaultDate: function _getDefaultDate(e) {
			return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date()));
		}, _determineDate: function _determineDate(t, i, a) {
			var s = function s(e) {
				var t = new Date();return t.setDate(t.getDate() + e), t;
			},
			    n = function n(i) {
				try {
					return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t));
				} catch (a) {}for (var s = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date(), n = s.getFullYear(), r = s.getMonth(), o = s.getDate(), u = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, c = u.exec(i); c;) {
					switch (c[2] || "d") {case "d":case "D":
							o += parseInt(c[1], 10);break;case "w":case "W":
							o += 7 * parseInt(c[1], 10);break;case "m":case "M":
							r += parseInt(c[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(n, r));break;case "y":case "Y":
							n += parseInt(c[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(n, r));}c = u.exec(i);
				}return new Date(n, r, o);
			},
			    r = null == i || "" === i ? a : "string" == typeof i ? n(i) : "number" == typeof i ? isNaN(i) ? a : s(i) : new Date(i.getTime());return r = r && "Invalid Date" == "" + r ? a : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r);
		}, _daylightSavingAdjust: function _daylightSavingAdjust(e) {
			return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null;
		}, _setDate: function _setDate(e, t, i) {
			var a = !t,
			    s = e.selectedMonth,
			    n = e.selectedYear,
			    r = this._restrictMinMax(e, this._determineDate(e, t, new Date()));e.selectedDay = e.currentDay = r.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = r.getMonth(), e.drawYear = e.selectedYear = e.currentYear = r.getFullYear(), s === e.selectedMonth && n === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(a ? "" : this._formatDate(e));
		}, _getDate: function _getDate(e) {
			var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));return t;
		}, _attachHandlers: function _attachHandlers(t) {
			var i = this._get(t, "stepMonths"),
			    a = "#" + t.id.replace(/\\\\/g, "\\");t.dpDiv.find("[data-handler]").map(function () {
				var t = { prev: function prev() {
						e.datepicker._adjustDate(a, -i, "M");
					}, next: function next() {
						e.datepicker._adjustDate(a, +i, "M");
					}, hide: function hide() {
						e.datepicker._hideDatepicker();
					}, today: function today() {
						e.datepicker._gotoToday(a);
					}, selectDay: function selectDay() {
						return e.datepicker._selectDay(a, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1;
					}, selectMonth: function selectMonth() {
						return e.datepicker._selectMonthYear(a, this, "M"), !1;
					}, selectYear: function selectYear() {
						return e.datepicker._selectMonthYear(a, this, "Y"), !1;
					} };e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")]);
			});
		}, _generateHTML: function _generateHTML(e) {
			var t,
			    i,
			    a,
			    s,
			    n,
			    r,
			    o,
			    u,
			    c,
			    h,
			    l,
			    d,
			    p,
			    g,
			    m,
			    f,
			    _,
			    v,
			    k,
			    y,
			    b,
			    D,
			    w,
			    M,
			    C,
			    x,
			    I,
			    N,
			    T,
			    A,
			    E,
			    S,
			    Y,
			    F,
			    P,
			    O,
			    j,
			    K,
			    R,
			    H = new Date(),
			    W = this._daylightSavingAdjust(new Date(H.getFullYear(), H.getMonth(), H.getDate())),
			    L = this._get(e, "isRTL"),
			    U = this._get(e, "showButtonPanel"),
			    B = this._get(e, "hideIfNoPrevNext"),
			    z = this._get(e, "navigationAsDateFormat"),
			    q = this._getNumberOfMonths(e),
			    G = this._get(e, "showCurrentAtPos"),
			    J = this._get(e, "stepMonths"),
			    Q = 1 !== q[0] || 1 !== q[1],
			    V = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
			    $ = this._getMinMaxDate(e, "min"),
			    X = this._getMinMaxDate(e, "max"),
			    Z = e.drawMonth - G,
			    et = e.drawYear;if (0 > Z && (Z += 12, et--), X) for (t = this._daylightSavingAdjust(new Date(X.getFullYear(), X.getMonth() - q[0] * q[1] + 1, X.getDate())), t = $ && $ > t ? $ : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;) {
				Z--, 0 > Z && (Z = 11, et--);
			}for (e.drawMonth = Z, e.drawYear = et, i = this._get(e, "prevText"), i = z ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z - J, 1)), this._getFormatConfig(e)) : i, a = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "e" : "w") + " centerText'>" + i + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "e" : "w") + " centerText'>" + i + "</span></a>", s = this._get(e, "nextText"), s = z ? this.formatDate(s, this._daylightSavingAdjust(new Date(et, Z + J, 1)), this._getFormatConfig(e)) : s, n = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "w" : "e") + " centerText'>" + s + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "w" : "e") + " centerText'>" + s + "</span></a>", r = this._get(e, "currentText"), o = this._get(e, "gotoCurrent") && e.currentDay ? V : W, r = z ? this.formatDate(r, o, this._getFormatConfig(e)) : r, u = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", c = U ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (L ? u : "") + (this._isInRange(e, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (L ? "" : u) + "</div>" : "", h = parseInt(this._get(e, "firstDay"), 10), h = isNaN(h) ? 0 : h, l = this._get(e, "showWeek"), d = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), g = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), f = this._get(e, "beforeShowDay"), _ = this._get(e, "showOtherMonths"), v = this._get(e, "selectOtherMonths"), k = this._getDefaultDate(e), y = "", D = 0; q[0] > D; D++) {
				for (w = "", this.maxRows = 4, M = 0; q[1] > M; M++) {
					if (C = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), x = " ui-corner-all", I = "", Q) {
						if (I += "<div class='ui-datepicker-group", q[1] > 1) switch (M) {case 0:
								I += " ui-datepicker-group-first", x = " ui-corner-" + (L ? "right" : "left");break;case q[1] - 1:
								I += " ui-datepicker-group-last", x = " ui-corner-" + (L ? "left" : "right");break;default:
								I += " ui-datepicker-group-middle", x = "";}I += "'>";
					}for (I += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + x + "'>" + (/all|left/.test(x) && 0 === D ? L ? n : a : "") + (/all|right/.test(x) && 0 === D ? L ? a : n : "") + this._generateMonthYearHeader(e, Z, et, $, X, D > 0 || M > 0, g, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", N = l ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", b = 0; 7 > b; b++) {
						T = (b + h) % 7, N += "<th" + ((b + h + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[T] + "'>" + p[T] + "</span></th>";
					}for (I += N + "</tr></thead><tbody>", A = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), E = (this._getFirstDayOfMonth(et, Z) - h + 7) % 7, S = Math.ceil((E + A) / 7), Y = Q ? this.maxRows > S ? this.maxRows : S : S, this.maxRows = Y, F = this._daylightSavingAdjust(new Date(et, Z, 1 - E)), P = 0; Y > P; P++) {
						for (I += "<tr>", O = l ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(F) + "</td>" : "", b = 0; 7 > b; b++) {
							j = f ? f.apply(e.input ? e.input[0] : null, [F]) : [!0, ""], K = F.getMonth() !== Z, R = K && !v || !j[0] || $ && $ > F || X && F > X, O += "<td class='" + ((b + h + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (K ? " ui-datepicker-other-month" : "") + (F.getTime() === C.getTime() && Z === e.selectedMonth && e._keyEvent || k.getTime() === F.getTime() && k.getTime() === C.getTime() ? " " + this._dayOverClass : "") + (R ? " " + this._unselectableClass + " ui-state-disabled" : "") + (K && !_ ? "" : " " + j[1] + (F.getTime() === V.getTime() ? " " + this._currentClass : "") + (F.getTime() === W.getTime() ? " ui-datepicker-today" : "")) + "'" + (K && !_ || !j[2] ? "" : " title='" + j[2].replace(/'/g, "&#39;") + "'") + (R ? "" : " data-handler='selectDay' data-event='click' data-month='" + F.getMonth() + "' data-year='" + F.getFullYear() + "'") + ">" + (K && !_ ? "&#xa0;" : R ? "<span class='ui-state-default'>" + F.getDate() + "</span>" : "<a class='ui-state-default" + (F.getTime() === W.getTime() ? " ui-state-highlight" : "") + (F.getTime() === V.getTime() ? " ui-state-active" : "") + (K ? " ui-priority-secondary" : "") + "' href='#'>" + F.getDate() + "</a>") + "</td>", F.setDate(F.getDate() + 1), F = this._daylightSavingAdjust(F);
						}I += O + "</tr>";
					}Z++, Z > 11 && (Z = 0, et++), I += "</tbody></table>" + (Q ? "</div>" + (q[0] > 0 && M === q[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), w += I;
				}y += w;
			}return y += c, e._keyEvent = !1, y;
		}, _generateMonthYearHeader: function _generateMonthYearHeader(e, t, i, a, s, n, r, o) {
			var u,
			    c,
			    h,
			    l,
			    d,
			    p,
			    g,
			    m,
			    f = this._get(e, "changeMonth"),
			    _ = this._get(e, "changeYear"),
			    v = this._get(e, "showMonthAfterYear"),
			    k = "<div class='ui-datepicker-title'>",
			    y = "";if (n || !f) y += "<span class='ui-datepicker-month'>" + r[t] + "</span>";else {
				for (u = a && a.getFullYear() === i, c = s && s.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", h = 0; 12 > h; h++) {
					(!u || h >= a.getMonth()) && (!c || s.getMonth() >= h) && (y += "<option value='" + h + "'" + (h === t ? " selected='selected'" : "") + ">" + o[h] + "</option>");
				}y += "</select>";
			}if (v || (k += y + (!n && f && _ ? "" : "&#xa0;")), !e.yearshtml) if (e.yearshtml = "", n || !_) k += "<span class='ui-datepicker-year'>" + i + "</span>";else {
				for (l = this._get(e, "yearRange").split(":"), d = new Date().getFullYear(), p = function p(e) {
					var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? d + parseInt(e, 10) : parseInt(e, 10);
					return isNaN(t) ? d : t;
				}, g = p(l[0]), m = Math.max(g, p(l[1] || "")), g = a ? Math.max(g, a.getFullYear()) : g, m = s ? Math.min(m, s.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= g; g++) {
					e.yearshtml += "<option value='" + g + "'" + (g === i ? " selected='selected'" : "") + ">" + g + "</option>";
				}e.yearshtml += "</select>", k += e.yearshtml, e.yearshtml = null;
			}return k += this._get(e, "yearSuffix"), v && (k += (!n && f && _ ? "" : "&#xa0;") + y), k += "</div>";
		}, _adjustInstDate: function _adjustInstDate(e, t, i) {
			var a = e.drawYear + ("Y" === i ? t : 0),
			    s = e.drawMonth + ("M" === i ? t : 0),
			    n = Math.min(e.selectedDay, this._getDaysInMonth(a, s)) + ("D" === i ? t : 0),
			    r = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(a, s, n)));e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e);
		}, _restrictMinMax: function _restrictMinMax(e, t) {
			var i = this._getMinMaxDate(e, "min"),
			    a = this._getMinMaxDate(e, "max"),
			    s = i && i > t ? i : t;return a && s > a ? a : s;
		}, _notifyChange: function _notifyChange(e) {
			var t = this._get(e, "onChangeMonthYear");t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e]);
		}, _getNumberOfMonths: function _getNumberOfMonths(e) {
			var t = this._get(e, "numberOfMonths");return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t;
		}, _getMinMaxDate: function _getMinMaxDate(e, t) {
			return this._determineDate(e, this._get(e, t + "Date"), null);
		}, _getDaysInMonth: function _getDaysInMonth(e, t) {
			return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate();
		}, _getFirstDayOfMonth: function _getFirstDayOfMonth(e, t) {
			return new Date(e, t, 1).getDay();
		}, _canAdjustMonth: function _canAdjustMonth(e, t, i, a) {
			var s = this._getNumberOfMonths(e),
			    n = this._daylightSavingAdjust(new Date(i, a + (0 > t ? t : s[0] * s[1]), 1));return 0 > t && n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())), this._isInRange(e, n);
		}, _isInRange: function _isInRange(e, t) {
			var i,
			    a,
			    s = this._getMinMaxDate(e, "min"),
			    n = this._getMinMaxDate(e, "max"),
			    r = null,
			    o = null,
			    u = this._get(e, "yearRange");return u && (i = u.split(":"), a = new Date().getFullYear(), r = parseInt(i[0], 10), o = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += a), i[1].match(/[+\-].*/) && (o += a)), (!s || t.getTime() >= s.getTime()) && (!n || t.getTime() <= n.getTime()) && (!r || t.getFullYear() >= r) && (!o || o >= t.getFullYear());
		}, _getFormatConfig: function _getFormatConfig(e) {
			var t = this._get(e, "shortYearCutoff");return t = "string" != typeof t ? t : new Date().getFullYear() % 100 + parseInt(t, 10), { shortYearCutoff: t, dayNamesShort: this._get(e, "dayNamesShort"), dayNames: this._get(e, "dayNames"), monthNamesShort: this._get(e, "monthNamesShort"), monthNames: this._get(e, "monthNames") };
		}, _formatDate: function _formatDate(e, t, i, a) {
			t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);var s = t ? "object" == (typeof t === 'undefined' ? 'undefined' : _typeof(t)) ? t : this._daylightSavingAdjust(new Date(a, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));return this.formatDate(this._get(e, "dateFormat"), s, this._getFormatConfig(e));
		} }), e.fn.datepicker = function (t) {
		if (!this.length) return this;e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);var i = Array.prototype.slice.call(arguments, 1);return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function () {
			"string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t);
		}) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i));
	}, e.datepicker = new i(), e.datepicker.initialized = !1, e.datepicker.uuid = new Date().getTime(), e.datepicker.version = "1.10.4";
})(jQuery);(function (t) {
	var e = 5;t.widget("ui.slider", t.ui.mouse, { version: "1.10.4", widgetEventPrefix: "slide", options: { animate: !1, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null }, _create: function _create() {
			this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1;
		}, _refresh: function _refresh() {
			this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
		}, _createHandles: function _createHandles() {
			var e,
			    i,
			    s = this.options,
			    n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
			    a = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
			    o = [];for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) {
				o.push(a);
			}this.handles = n.add(t(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (e) {
				t(this).data("ui-slider-handle-index", e);
			});
		}, _createRange: function _createRange() {
			var e = this.options,
			    i = "";e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({ left: "", bottom: "" }) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(), this.range = null);
		}, _setupEvents: function _setupEvents() {
			var t = this.handles.add(this.range).filter("a");this._off(t), this._on(t, this._handleEvents), this._hoverable(t), this._focusable(t);
		}, _destroy: function _destroy() {
			this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy();
		}, _mouseCapture: function _mouseCapture(e) {
			var i,
			    s,
			    n,
			    a,
			    o,
			    r,
			    l,
			    h,
			    u = this,
			    c = this.options;return c.disabled ? !1 : (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), i = { x: e.pageX, y: e.pageY }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
				var i = Math.abs(s - u.values(e));(n > i || n === i && (e === u._lastChangedValue || u.values(e) === c.min)) && (n = i, a = t(this), o = e);
			}), r = this._start(e, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), l = a.offset(), h = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? { left: 0, top: 0 } : { left: e.pageX - l.left - a.width() / 2, top: e.pageY - l.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(e, o, s), this._animateOff = !0, !0));
		}, _mouseStart: function _mouseStart() {
			return !0;
		}, _mouseDrag: function _mouseDrag(t) {
			var e = { x: t.pageX, y: t.pageY },
			    i = this._normValueFromMouse(e);return this._slide(t, this._handleIndex, i), !1;
		}, _mouseStop: function _mouseStop(t) {
			return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1;
		}, _detectOrientation: function _detectOrientation() {
			this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
		}, _normValueFromMouse: function _normValueFromMouse(t) {
			var e, i, s, n, a;return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a);
		}, _start: function _start(t, e) {
			var i = { handle: this.handles[e], value: this.value() };return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i);
		}, _slide: function _slide(t, e, i) {
			var s, n, a;this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > s || 1 === e && s > i) && (i = s), i !== this.values(e) && (n = this.values(), n[e] = i, a = this._trigger("slide", t, { handle: this.handles[e], value: i, values: n }), s = this.values(e ? 0 : 1), a !== !1 && this.values(e, i))) : i !== this.value() && (a = this._trigger("slide", t, { handle: this.handles[e], value: i }), a !== !1 && this.value(i));
		}, _stop: function _stop(t, e) {
			var i = { handle: this.handles[e], value: this.value() };this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i);
		}, _change: function _change(t, e) {
			if (!this._keySliding && !this._mouseSliding) {
				var i = { handle: this.handles[e], value: this.value() };this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i);
			}
		}, value: function value(t) {
			return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), undefined) : this._value();
		}, values: function values(e, i) {
			var s, n, a;if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), undefined;if (!arguments.length) return this._values();if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) {
				s[a] = this._trimAlignValue(n[a]), this._change(null, a);
			}this._refreshValue();
		}, _setOption: function _setOption(e, i) {
			var s,
			    n = 0;switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {case "orientation":
					this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();break;case "value":
					this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;break;case "values":
					for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) {
						this._change(null, s);
					}this._animateOff = !1;break;case "min":case "max":
					this._animateOff = !0, this._refreshValue(), this._animateOff = !1;break;case "range":
					this._animateOff = !0, this._refresh(), this._animateOff = !1;}
		}, _value: function _value() {
			var t = this.options.value;return t = this._trimAlignValue(t);
		}, _values: function _values(t) {
			var e, i, s;if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);if (this.options.values && this.options.values.length) {
				for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) {
					i[s] = this._trimAlignValue(i[s]);
				}return i;
			}return [];
		}, _trimAlignValue: function _trimAlignValue(t) {
			if (this._valueMin() >= t) return this._valueMin();if (t >= this._valueMax()) return this._valueMax();var e = this.options.step > 0 ? this.options.step : 1,
			    i = (t - this._valueMin()) % e,
			    s = t - i;return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5));
		}, _valueMin: function _valueMin() {
			return this.options.min;
		}, _valueMax: function _valueMax() {
			return this.options.max;
		}, _refreshValue: function _refreshValue() {
			var e,
			    i,
			    s,
			    n,
			    a,
			    o = this.options.range,
			    r = this.options,
			    l = this,
			    h = this._animateOff ? !1 : r.animate,
			    u = {};this.options.values && this.options.values.length ? this.handles.each(function (s) {
				i = 100 * ((l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin())), u["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](u, r.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({ left: i + "%" }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({ width: i - e + "%" }, { queue: !1, duration: r.animate })) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({ bottom: i + "%" }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({ height: i - e + "%" }, { queue: !1, duration: r.animate }))), e = i;
			}) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({ width: i + "%" }, r.animate), "max" === o && "horizontal" === this.orientation && this.range[h ? "animate" : "css"]({ width: 100 - i + "%" }, { queue: !1, duration: r.animate }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({ height: i + "%" }, r.animate), "max" === o && "vertical" === this.orientation && this.range[h ? "animate" : "css"]({ height: 100 - i + "%" }, { queue: !1, duration: r.animate }));
		}, _handleEvents: { keydown: function keydown(i) {
				var s,
				    n,
				    a,
				    o,
				    r = t(i.target).data("ui-slider-handle-index");switch (i.keyCode) {case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:
						if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, t(i.target).addClass("ui-state-active"), s = this._start(i, r), s === !1)) return;}switch (o = this.options.step, n = a = this.options.values && this.options.values.length ? this.values(r) : this.value(), i.keyCode) {case t.ui.keyCode.HOME:
						a = this._valueMin();break;case t.ui.keyCode.END:
						a = this._valueMax();break;case t.ui.keyCode.PAGE_UP:
						a = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / e);break;case t.ui.keyCode.PAGE_DOWN:
						a = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / e);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:
						if (n === this._valueMax()) return;a = this._trimAlignValue(n + o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:
						if (n === this._valueMin()) return;a = this._trimAlignValue(n - o);}this._slide(i, r, a);
			}, click: function click(t) {
				t.preventDefault();
			}, keyup: function keyup(e) {
				var i = t(e.target).data("ui-slider-handle-index");this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"));
			} } });
})(jQuery);
/*
* jQuery Form Plugin; v20130711
* http://jquery.malsup.com/form/
* Copyright (c) 2013 M. Alsup; Dual licensed: MIT/GPL
* https://github.com/malsup/form#copyright-and-license
*/
;(function (e) {
	"use strict";
	function t(t) {
		var r = t.data;t.isDefaultPrevented() || (t.preventDefault(), e(this).ajaxSubmit(r));
	}function r(t) {
		var r = t.target,
		    a = e(r);if (!a.is("[type=submit],[type=image]")) {
			var n = a.closest("[type=submit]");if (0 === n.length) return;r = n[0];
		}var i = this;if (i.clk = r, "image" == r.type) if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY;else if ("function" == typeof e.fn.offset) {
			var o = a.offset();i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top;
		} else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;setTimeout(function () {
			i.clk = i.clk_x = i.clk_y = null;
		}, 100);
	}function a() {
		if (e.fn.ajaxSubmit.debug) {
			var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t);
		}
	}var n = {};n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData;var i = !!e.fn.prop;e.fn.attr2 = function () {
		if (!i) return this.attr.apply(this, arguments);var e = this.prop.apply(this, arguments);return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments);
	}, e.fn.ajaxSubmit = function (t) {
		function r(r) {
			var a,
			    n,
			    i = e.param(r, t.traditional).split("&"),
			    o = i.length,
			    s = [];for (a = 0; o > a; a++) {
				i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
			}return s;
		}function o(a) {
			for (var n = new FormData(), i = 0; a.length > i; i++) {
				n.append(a[i].name, a[i].value);
			}if (t.extraData) {
				var o = r(t.extraData);for (i = 0; o.length > i; i++) {
					o[i] && n.append(o[i][0], o[i][1]);
				}
			}t.data = null;var s = e.extend(!0, {}, e.ajaxSettings, t, { contentType: !1, processData: !1, cache: !1, type: u || "POST" });t.uploadProgress && (s.xhr = function () {
				var r = e.ajaxSettings.xhr();return r.upload && r.upload.addEventListener("progress", function (e) {
					var r = 0,
					    a = e.loaded || e.position,
					    n = e.total;e.lengthComputable && (r = Math.ceil(100 * (a / n))), t.uploadProgress(e, a, n, r);
				}, !1), r;
			}), s.data = null;var l = s.beforeSend;return s.beforeSend = function (e, t) {
				t.data = n, l && l.call(this, e, t);
			}, e.ajax(s);
		}function s(r) {
			function n(e) {
				var t = null;try {
					e.contentWindow && (t = e.contentWindow.document);
				} catch (r) {
					a("cannot get iframe.contentWindow document: " + r);
				}if (t) return t;try {
					t = e.contentDocument ? e.contentDocument : e.document;
				} catch (r) {
					a("cannot get iframe.contentDocument: " + r), t = e.document;
				}return t;
			}function o() {
				function t() {
					try {
						var e = n(g).readyState;a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50);
					} catch (r) {
						a("Server abort: ", r, " (", r.name, ")"), s(D), j && clearTimeout(j), j = void 0;
					}
				}var r = f.attr2("target"),
				    i = f.attr2("action");w.setAttribute("target", d), u || w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({ encoding: "multipart/form-data", enctype: "multipart/form-data" }), m.timeout && (j = setTimeout(function () {
					T = !0, s(k);
				}, m.timeout));var o = [];try {
					if (m.extraData) for (var l in m.extraData) {
						m.extraData.hasOwnProperty(l) && (e.isPlainObject(m.extraData[l]) && m.extraData[l].hasOwnProperty("name") && m.extraData[l].hasOwnProperty("value") ? o.push(e('<input type="hidden" name="' + m.extraData[l].name + '">').val(m.extraData[l].value).appendTo(w)[0]) : o.push(e('<input type="hidden" name="' + l + '">').val(m.extraData[l]).appendTo(w)[0]));
					}m.iframeTarget || (v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1)), setTimeout(t, 15);try {
						w.submit();
					} catch (c) {
						var p = document.createElement("form").submit;p.apply(w);
					}
				} finally {
					w.setAttribute("action", i), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(o).remove();
				}
			}function s(t) {
				if (!x.aborted && !F) {
					if (M = n(g), M || (a("cannot access response document"), t = D), t === k && x) return x.abort("timeout"), S.reject(x, "timeout"), void 0;if (t == D && x) return x.abort("server abort"), S.reject(x, "error", "server abort"), void 0;if (M && M.location.href != m.iframeSrc || T) {
						g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);var r,
						    i = "success";try {
							if (T) throw "timeout";var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O) return a("requeing onLoad callback, DOM not available"), setTimeout(s, 250), void 0;var u = M.body ? M.body : M.documentElement;x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function (e) {
								var t = { "content-type": m.dataType };return t[e];
							}, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);var l = (m.dataType || "").toLowerCase(),
							    c = /(json|script|text)/.test(l);if (c || m.textarea) {
								var f = M.getElementsByTagName("textarea")[0];if (f) x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText;else if (c) {
									var d = M.getElementsByTagName("pre")[0],
									    h = M.getElementsByTagName("body")[0];d ? x.responseText = d.textContent ? d.textContent : d.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText);
								}
							} else "xml" == l && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));try {
								L = _(x, l, m);
							} catch (b) {
								i = "parsererror", x.error = r = b || i;
							}
						} catch (b) {
							a("error caught: ", b), i = "error", x.error = r = b || i;
						}x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && 300 > x.status || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, L, "success", x), S.resolve(x.responseText, "success", x), p && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), p && e.event.trigger("ajaxError", [x, m, r])), p && e.event.trigger("ajaxComplete", [x, m]), p && ! --e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function () {
							m.iframeTarget || v.remove(), x.responseXML = null;
						}, 100);
					}
				}
			}var l,
			    c,
			    m,
			    p,
			    d,
			    v,
			    g,
			    x,
			    b,
			    y,
			    T,
			    j,
			    w = f[0],
			    S = e.Deferred();if (r) for (c = 0; h.length > c; c++) {
				l = e(h[c]), i ? l.prop("disabled", !1) : l.removeAttr("disabled");
			}if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, d = "jqFormIO" + new Date().getTime(), m.iframeTarget ? (v = e(m.iframeTarget), y = v.attr2("name"), y ? d = y : v.attr2("name", d)) : (v = e('<iframe name="' + d + '" src="' + m.iframeSrc + '" />'), v.css({ position: "absolute", top: "-1000px", left: "-1000px" })), g = v[0], x = { aborted: 0, responseText: null, responseXML: null, status: 0, statusText: "n/a", getAllResponseHeaders: function getAllResponseHeaders() {}, getResponseHeader: function getResponseHeader() {}, setRequestHeader: function setRequestHeader() {}, abort: function abort(t) {
					var r = "timeout" === t ? "timeout" : "aborted";a("aborting upload... " + r), this.aborted = 1;try {
						g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop");
					} catch (n) {}v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), p && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r);
				} }, p = m.global, p && 0 === e.active++ && e.event.trigger("ajaxStart"), p && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1) return m.global && e.active--, S.reject(), S;if (x.aborted) return S.reject(), S;b = w.clk, b && (y = b.name, y && !b.disabled && (m.extraData = m.extraData || {}, m.extraData[y] = b.value, "image" == b.type && (m.extraData[y + ".x"] = w.clk_x, m.extraData[y + ".y"] = w.clk_y)));var k = 1,
			    D = 2,
			    A = e("meta[name=csrf-token]").attr("content"),
			    E = e("meta[name=csrf-param]").attr("content");E && A && (m.extraData = m.extraData || {}, m.extraData[E] = A), m.forceSync ? o() : setTimeout(o, 10);var L,
			    M,
			    F,
			    O = 50,
			    X = e.parseXML || function (e, t) {
				return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = new DOMParser().parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null;
			},
			    C = e.parseJSON || function (e) {
				return window.eval("(" + e + ")");
			},
			    _ = function _(t, r, a) {
				var n = t.getResponseHeader("content-type") || "",
				    i = "xml" === r || !r && n.indexOf("xml") >= 0,
				    o = i ? t.responseXML : t.responseText;return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o;
			};return S;
		}if (!this.length) return a("ajaxSubmit: skipping submit process - no element selected"), this;var u,
		    l,
		    c,
		    f = this;"function" == typeof t ? t = { success: t } : void 0 === t && (t = {}), u = t.type || this.attr2("method"), l = t.url || this.attr2("action"), c = "string" == typeof l ? e.trim(l) : "", c = c || window.location.href || "", c && (c = (c.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, { url: c, success: e.ajaxSettings.success, type: u || "GET", iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank" }, t);var m = {};if (this.trigger("form-pre-serialize", [this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;var p = t.traditional;void 0 === p && (p = e.ajaxSettings.traditional);var d,
		    h = [],
		    v = this.formToArray(t.semantic, h);if (t.data && (t.extraData = t.data, d = e.param(t.data, p)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;var g = e.param(v, p);d && (g = g ? g + "&" + d : d), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;var x = [];if (t.resetForm && x.push(function () {
			f.resetForm();
		}), t.clearForm && x.push(function () {
			f.clearForm(t.includeHidden);
		}), !t.dataType && t.target) {
			var b = t.success || function () {};x.push(function (r) {
				var a = t.replaceTarget ? "replaceWith" : "html";e(t.target)[a](r).each(b, arguments);
			});
		} else t.success && x.push(t.success);if (t.success = function (e, r, a) {
			for (var n = t.context || this, i = 0, o = x.length; o > i; i++) {
				x[i].apply(n, [e, r, a || f, f]);
			}
		}, t.error) {
			var y = t.error;t.error = function (e, r, a) {
				var n = t.context || this;y.apply(n, [e, r, a, f]);
			};
		}if (t.complete) {
			var T = t.complete;t.complete = function (e, r) {
				var a = t.context || this;T.apply(a, [e, r, f]);
			};
		}var j = e('input[type=file]:enabled[value!=""]', this),
		    w = j.length > 0,
		    S = "multipart/form-data",
		    k = f.attr("enctype") == S || f.attr("encoding") == S,
		    D = n.fileapi && n.formdata;a("fileAPI :" + D);var A,
		    E = (w || k) && !D;t.iframe !== !1 && (t.iframe || E) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function () {
			A = s(v);
		}) : A = s(v) : A = (w || k) && D ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A);for (var L = 0; h.length > L; L++) {
			h[L] = null;
		}return this.trigger("form-submit-notify", [this, t]), this;
	}, e.fn.ajaxForm = function (n) {
		if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
			var i = { s: this.selector, c: this.context };return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function () {
				e(i.s, i.c).ajaxForm(n);
			}), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this);
		}return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r);
	}, e.fn.ajaxFormUnbind = function () {
		return this.unbind("submit.form-plugin click.form-plugin");
	}, e.fn.formToArray = function (t, r) {
		var a = [];if (0 === this.length) return a;var i = this[0],
		    o = t ? i.getElementsByTagName("*") : i.elements;if (!o) return a;var s, u, l, c, f, m, p;for (s = 0, m = o.length; m > s; s++) {
			if (f = o[s], l = f.name, l && !f.disabled) if (t && i.clk && "image" == f.type) i.clk == f && (a.push({ name: l, value: e(f).val(), type: f.type }), a.push({ name: l + ".x", value: i.clk_x }, { name: l + ".y", value: i.clk_y }));else if (c = e.fieldValue(f, !0), c && c.constructor == Array) for (r && r.push(f), u = 0, p = c.length; p > u; u++) {
				a.push({ name: l, value: c[u] });
			} else if (n.fileapi && "file" == f.type) {
				r && r.push(f);var d = f.files;if (d.length) for (u = 0; d.length > u; u++) {
					a.push({ name: l, value: d[u], type: f.type });
				} else a.push({ name: l, value: "", type: f.type });
			} else null !== c && c !== void 0 && (r && r.push(f), a.push({ name: l, value: c, type: f.type, required: f.required }));
		}if (!t && i.clk) {
			var h = e(i.clk),
			    v = h[0];l = v.name, l && !v.disabled && "image" == v.type && (a.push({ name: l, value: h.val() }), a.push({ name: l + ".x", value: i.clk_x }, { name: l + ".y", value: i.clk_y }));
		}return a;
	}, e.fn.formSerialize = function (t) {
		return e.param(this.formToArray(t));
	}, e.fn.fieldSerialize = function (t) {
		var r = [];return this.each(function () {
			var a = this.name;if (a) {
				var n = e.fieldValue(this, t);if (n && n.constructor == Array) for (var i = 0, o = n.length; o > i; i++) {
					r.push({ name: a, value: n[i] });
				} else null !== n && n !== void 0 && r.push({ name: this.name, value: n });
			}
		}), e.param(r);
	}, e.fn.fieldValue = function (t) {
		for (var r = [], a = 0, n = this.length; n > a; a++) {
			var i = this[a],
			    o = e.fieldValue(i, t);null === o || void 0 === o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o));
		}return r;
	}, e.fieldValue = function (t, r) {
		var a = t.name,
		    n = t.type,
		    i = t.tagName.toLowerCase();if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex)) return null;if ("select" == i) {
			var o = t.selectedIndex;if (0 > o) return null;for (var s = [], u = t.options, l = "select-one" == n, c = l ? o + 1 : u.length, f = l ? o : 0; c > f; f++) {
				var m = u[f];if (m.selected) {
					var p = m.value;if (p || (p = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), l) return p;s.push(p);
				}
			}return s;
		}return e(t).val();
	}, e.fn.clearForm = function (t) {
		return this.each(function () {
			e("input,select,textarea", this).clearFields(t);
		});
	}, e.fn.clearFields = e.fn.clearInputs = function (t) {
		var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function () {
			var a = this.type,
			    n = this.tagName.toLowerCase();r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "");
		});
	}, e.fn.resetForm = function () {
		return this.each(function () {
			("function" == typeof this.reset || "object" == _typeof(this.reset) && !this.reset.nodeType) && this.reset();
		});
	}, e.fn.enable = function (e) {
		return void 0 === e && (e = !0), this.each(function () {
			this.disabled = !e;
		});
	}, e.fn.selected = function (t) {
		return void 0 === t && (t = !0), this.each(function () {
			var r = this.type;if ("checkbox" == r || "radio" == r) this.checked = t;else if ("option" == this.tagName.toLowerCase()) {
				var a = e(this).parent("select");t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t;
			}
		});
	}, e.fn.ajaxSubmit.debug = !1;
})(jQuery);
/*! DataTables Bootstrap 3 integration
 * ©2011-2015 SpryMedia Ltd - datatables.net/license
 */

/**
 * DataTables integration for Bootstrap 3. This requires Bootstrap 3 and
 * DataTables 1.10 or newer.
 *
 * This file sets the defaults and adds options to DataTables to style its
 * controls using Bootstrap. See http://datatables.net/manual/styling/bootstrap
 * for further information.
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery', 'datatables.net'], function ($) {
			return factory($, window, document);
		});
	} else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
		// CommonJS
		module.exports = function (root, $) {
			if (!root) {
				root = window;
			}

			if (!$ || !$.fn.dataTable) {
				// Require DataTables, which attaches to jQuery, including
				// jQuery if needed and have a $ property so we can access the
				// jQuery object that is used
				$ = require('datatables.net')(root, $).$;
			}

			return factory($, root, root.document);
		};
	} else {
		// Browser
		factory(jQuery, window, document);
	}
})(function ($, window, document, undefined) {
	'use strict';

	var DataTable = $.fn.dataTable;

	/* Set the defaults for DataTables initialisation */
	$.extend(true, DataTable.defaults, {
		dom: "<'row'<'col-sm-6'l><'col-sm-6'f>>" + "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-5'i><'col-sm-7'p>>",
		renderer: 'bootstrap'
	});

	/* Default class modification */
	$.extend(DataTable.ext.classes, {
		sWrapper: "dataTables_wrapper form-inline dt-bootstrap",
		sFilterInput: "form-control input-sm",
		sLengthSelect: "form-control input-sm",
		sProcessing: "dataTables_processing panel panel-default"
	});

	/* Bootstrap paging button renderer */
	DataTable.ext.renderer.pageButton.bootstrap = function (settings, host, idx, buttons, page, pages) {
		var api = new DataTable.Api(settings);
		var classes = settings.oClasses;
		var lang = settings.oLanguage.oPaginate;
		var aria = settings.oLanguage.oAria.paginate || {};
		var btnDisplay,
		    btnClass,
		    counter = 0;

		var attach = function attach(container, buttons) {
			var i, ien, node, button;
			var clickHandler = function clickHandler(e) {
				e.preventDefault();
				if (!$(e.currentTarget).hasClass('disabled') && api.page() != e.data.action) {
					api.page(e.data.action).draw('page');
				}
			};

			for (i = 0, ien = buttons.length; i < ien; i++) {
				button = buttons[i];

				if ($.isArray(button)) {
					attach(container, button);
				} else {
					btnDisplay = '';
					btnClass = '';

					switch (button) {
						case 'ellipsis':
							btnDisplay = '&#x2026;';
							btnClass = 'disabled';
							break;

						case 'first':
							btnDisplay = lang.sFirst;
							btnClass = button + (page > 0 ? '' : ' disabled');
							break;

						case 'previous':
							btnDisplay = lang.sPrevious;
							btnClass = button + (page > 0 ? '' : ' disabled');
							break;

						case 'next':
							btnDisplay = lang.sNext;
							btnClass = button + (page < pages - 1 ? '' : ' disabled');
							break;

						case 'last':
							btnDisplay = lang.sLast;
							btnClass = button + (page < pages - 1 ? '' : ' disabled');
							break;

						default:
							btnDisplay = button + 1;
							btnClass = page === button ? 'active' : '';
							break;
					}

					if (btnDisplay) {
						node = $('<li>', {
							'class': classes.sPageButton + ' ' + btnClass,
							'id': idx === 0 && typeof button === 'string' ? settings.sTableId + '_' + button : null
						}).append($('<a>', {
							'href': '#',
							'aria-controls': settings.sTableId,
							'aria-label': aria[button],
							'data-dt-idx': counter,
							'tabindex': settings.iTabIndex
						}).html(btnDisplay)).appendTo(container);

						settings.oApi._fnBindAction(node, { action: button }, clickHandler);

						counter++;
					}
				}
			}
		};

		// IE9 throws an 'unknown error' if document.activeElement is used
		// inside an iframe or frame. 
		var activeEl;

		try {
			// Because this approach is destroying and recreating the paging
			// elements, focus is lost on the select button which is bad for
			// accessibility. So we want to restore focus once the draw has
			// completed
			activeEl = $(host).find(document.activeElement).data('dt-idx');
		} catch (e) {}

		attach($(host).empty().html('<ul class="pagination"/>').children('ul'), buttons);

		if (activeEl !== undefined) {
			$(host).find('[data-dt-idx=' + activeEl + ']').focus();
		}
	};

	return DataTable;
});

/**
 * Created by jdelacruz on 8/08/2017.
 */
/* Routes Menu */
$('a.viewUsers').click(function () {
	loadingSystem('system/viewUsers');
	activeDiv('li.list-group-item', '-');
});
/* End Routes Menu */

/* Routes System */
$('a.myProfile').click(function () {
	loadingSystem('profile/myProfile');
	activeDiv('li.list-group-item', '.listmyProfile');
});

$('a.settingsProfile').click(function () {
	loadingSystem('profile/Settings');
	activeDiv('li.list-group-item', '.listsettingsProfile');
});
/* End Routes System */