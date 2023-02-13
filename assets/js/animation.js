(function() {
  var Util,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Util = (function() {
    function Util() {}

    Util.prototype.extend = function(custom, defaults) {
      var key, value;
      for (key in custom) {
        value = custom[key];
        if (value != null) {
          defaults[key] = value;
        }
      }
      return defaults;
    };

    Util.prototype.isMobile = function(agent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
    };

    return Util;

  })();

  this.WOW = (function() {
    WOW.prototype.defaults = {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true
    };

    function WOW(options) {
      if (options == null) {
        options = {};
      }
      this.scrollCallback = __bind(this.scrollCallback, this);
      this.scrollHandler = __bind(this.scrollHandler, this);
      this.start = __bind(this.start, this);
      this.scrolled = true;
      this.config = this.util().extend(options, this.defaults);
    }

    WOW.prototype.init = function() {
      var _ref;
      this.element = window.document.documentElement;
      if ((_ref = document.readyState) === "interactive" || _ref === "complete") {
        return this.start();
      } else {
        return document.addEventListener('DOMContentLoaded', this.start);
      }
    };

    WOW.prototype.start = function() {
      var box, _i, _len, _ref;
      this.boxes = this.element.getElementsByClassName(this.config.boxClass);
      if (this.boxes.length) {
        if (this.disabled()) {
          return this.resetStyle();
        } else {
          _ref = this.boxes;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            box = _ref[_i];
            this.applyStyle(box, true);
          }
          window.addEventListener('scroll', this.scrollHandler, false);
          window.addEventListener('resize', this.scrollHandler, false);
          return this.interval = setInterval(this.scrollCallback, 50);
        }
      }
    };

    WOW.prototype.stop = function() {
      window.removeEventListener('scroll', this.scrollHandler, false);
      window.removeEventListener('resize', this.scrollHandler, false);
      if (this.interval != null) {
        return clearInterval(this.interval);
      }
    };

    WOW.prototype.show = function(box) {
      this.applyStyle(box);
      return box.className = "" + box.className + " " + this.config.animateClass;
    };

    WOW.prototype.applyStyle = function(box, hidden) {
      var delay, duration, iteration;
      duration = box.getAttribute('data-wow-duration');
      delay = box.getAttribute('data-wow-delay');
      iteration = box.getAttribute('data-wow-iteration');
      return box.setAttribute('style', this.customStyle(hidden, duration, delay, iteration));
    };

    WOW.prototype.resetStyle = function() {
      var box, _i, _len, _ref, _results;
      _ref = this.boxes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        box = _ref[_i];
        _results.push(box.setAttribute('style', 'visibility: visible;'));
      }
      return _results;
    };

    WOW.prototype.customStyle = function(hidden, duration, delay, iteration) {
      var style;
      style = hidden ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;" : "visibility: visible;";
      if (duration) {
        style += "-webkit-animation-duration: " + duration + "; -moz-animation-duration: " + duration + "; animation-duration: " + duration + ";";
      }
      if (delay) {
        style += "-webkit-animation-delay: " + delay + "; -moz-animation-delay: " + delay + "; animation-delay: " + delay + ";";
      }
      if (iteration) {
        style += "-webkit-animation-iteration-count: " + iteration + "; -moz-animation-iteration-count: " + iteration + "; animation-iteration-count: " + iteration + ";";
      }
      return style;
    };

    WOW.prototype.scrollHandler = function() {
      return this.scrolled = true;
    };

    WOW.prototype.scrollCallback = function() {
      var box;
      if (this.scrolled) {
        this.scrolled = false;
        this.boxes = (function() {
          var _i, _len, _ref, _results;
          _ref = this.boxes;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            box = _ref[_i];
            if (!(box)) {
              continue;
            }
            if (this.isVisible(box)) {
              this.show(box);
              continue;
            }
            _results.push(box);
          }
          return _results;
        }).call(this);
        if (!this.boxes.length) {
          return this.stop();
        }
      }
    };

    WOW.prototype.offsetTop = function(element) {
      var top;
      top = element.offsetTop;
      while (element = element.offsetParent) {
        top += element.offsetTop;
      }
      return top;
    };

    WOW.prototype.isVisible = function(box) {
      var bottom, offset, top, viewBottom, viewTop;
      offset = box.getAttribute('data-wow-offset') || this.config.offset;
      viewTop = window.pageYOffset;
      viewBottom = viewTop + this.element.clientHeight - offset;
      top = this.offsetTop(box);
      bottom = top + box.clientHeight;
      return top <= viewBottom && bottom >= viewTop;
    };

    WOW.prototype.util = function() {
      return this._util || (this._util = new Util());
    };

    WOW.prototype.disabled = function() {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    };

    return WOW;

  })();

}).call(this);


wow = new WOW(
  {
    animateClass: 'animated',
    offset: 50
  }
);
wow.init();

//Empty carousel array
var carousel = [];

//default items to show if option is not provided
var desktopItems = 6;
var tabletItems = 4;
var mobileItems = 2;

//default navigation speed and smart speed
var navSpeed = 800;

//Push carousel options into array
carousel.push({'id' : '#owl-carousel1', 'desktop' : 3, 'tablet' : 2.5, 'mobile' : 1.5, 'speed' : 800});
carousel.push({'id' : '#owl-carousel2', 'desktop' : 5, 'tablet' : 4.5, 'mobile' : 3.5, 'speed' : 800});		
carousel.push({'id' : '#owl-carousel3', 'desktop' : 4, 'tablet' : 3.5, 'mobile' : 2.5, 'speed' : 800});
carousel.push({'id' : '#owl-carousel4', 'desktop' : 3, 'tablet' : 2.5, 'mobile' : 1.5, 'speed' : 800});
carousel.push({'id' : '#owl-carousel5', 'desktop' : 4, 'tablet' : 3.5, 'mobile' : 2.5, 'speed' : 800});
carousel.push({'id' : '#owl-carousel6', 'desktop' : 3, 'tablet' : 2.5, 'mobile' : 1.5, 'speed' : 800});
carousel.push({'id' : '#owl-carousel7', 'desktop' : 4, 'tablet' : 3.5, 'mobile' : 2.5, 'speed' : 800});       
carousel.push({'id' : '#owl-carousel8', 'desktop' : 3, 'tablet' : 2.5, 'mobile' : 1.5, 'speed' : 800});
carousel.push({'id' : '#owl-carousel9', 'desktop' : 4, 'tablet' : 3.5, 'mobile' : 2.5, 'speed' : 800}); 
carousel.push({'id' : '#owl-carousel10', 'desktop' : 3, 'tablet' : 2.5, 'mobile' : 1.5, 'speed' : 800});
carousel.push({'id' : '#owl-carousel11', 'desktop' : 4, 'tablet' : 3.5, 'mobile' : 2.5, 'speed' : 800});
carousel.push({'id' : '#owl-carousel12', 'desktop' : 3, 'tablet' : 2.5, 'mobile' : 1.5, 'speed' : 800});


for(var i = 0; i < carousel.length; i++){
      
      //Check of items properties were set on each device size
      if( carousel[i].hasOwnProperty('desktop') && carousel[i]['desktop'] ){
        desktopItems = carousel[i].desktop;
      }

      if( carousel[i].hasOwnProperty('tablet') && carousel[i]['tablet']){
        tabletItems = carousel[i].tablet;
      }

      if( carousel[i].hasOwnProperty('mobile') && carousel[i]['mobile'] ){
        mobileItems = carousel[i].mobile;
      }
      
      //Check if carousel nav speed property is set
      if( carousel[i].hasOwnProperty('speed') && carousel[i]['speed'] ){
        navSpeed = carousel[i].speed;
      }
      

      $(carousel[i].id).owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
        ],
        navSpeed: navSpeed,
        smartSpeed: navSpeed,
        autoplay: false,
        autoplayHoverPause: false,
        responsive: {
          0: {
            items: mobileItems
            
          },
          600: {
            items: tabletItems
          },
          1080: {
            
            items: desktopItems  
          }
                      }
      });
  }


