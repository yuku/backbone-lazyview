/*
 * LazyView - extended Backbone.View for lazy loading
 *
 * (c) 2011 Yuku Takahashi
 *
 * Licensed under the MIT license.
 * 
 * Version: 0.1.3
 */
;(function ($, _, Backbone) {
  var containers = {};

  Backbone.LazyView = function (options) {
    var settings = {
      threshold: 0,
      container: window
    };
    _.extend(settings, options);
    Backbone.View.call(this, options);

    if (!(settings.container in containers)) {
      containers[settings.container] = [];

      // Fire one scroll event per scroll.
      $(settings.container).bind("scroll", function (ev) {
        var views = containers[this],
            appeared = [];
        _(views).each(function (view) {
          if (!belowTheFold(view.el, settings) && !rightOfFold(view.el, settings)) {
            $(view.el).trigger("appear.delegateEvents" + view.cid);
            appeared.push(view);
          }
        });
        containers[this] = _.filter(views, function (view) {
          return _.indexOf(appeared, view) == -1;
        });
        if (containers[this].length == 0) {
          $(this).unbind("scroll");
          delete containers[this];
        }
      });
    }
    containers[settings.container].push(this);
  };
  Backbone.LazyView.extend = Backbone.View.extend;
  _.extend(Backbone.LazyView.prototype, Backbone.View.prototype);


  /**
   * Convenience functions such as defined in ``jquery.lazyload.js``
   *
   * jquery.lazyload.js project home:
   *   http:www.appelsiini.net/projects/lazyload
   */
  var checkContainer = function (container) {
    return _.isUndefined(container) || container === window;
  };
  var belowTheFold = function (element, settings) {
    var container = settings.container,
        fold = checkContainer(container) ?
               $(window).height() + $(window).scrollTop() :
               $(container).offset().top + $(container).height();
    return fold <= $(element).offset().top - settings.threshold;
  };
  var rightOfFold = function (element, settings) {
    var container = settings.container,
        fold = checkContainer(container) ?
               $(window).width() + $(window).scrollLeft() :
               $(container).offset().left + $(container).width();
    return fold <= $(element).offset().left - settings.threshold;
  };
})(jQuery, _, Backbone);
