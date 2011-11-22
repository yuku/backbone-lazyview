/*
 * LazyView - extended Backbone.View for lazy loading
 *
 * (c) 2011 Yuku Takahashi
 *
 * Licensed under the MIT license.
 * 
 * Version: 0.0.1
 */
;(function ($, _, Backbone) {
  var Backbone.LazyView = function (options) {
    Backbone.View.call(this, options);
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
  var aboveTheTop = function (element, settings) {
    var container = settings.container,
        fold = checkContainer(container) ?
               $(window).scrollTop() :
               $(container).offset().top;
    return fold >= $(element).offset().top + settings.threshold + $(element).height();
  };
  var leftToBegin = function (element, settings) {
    var container = settings.container,
        fold = checkContainer(container) ?
               $(window).scrollLeft() :
               $(container).offset().left;
    return fold >= $(element).offset().left + settings.threshold + $(element).width();
  };
})(jQuery, _, Backbone);
