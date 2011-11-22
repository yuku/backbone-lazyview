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
})(jQuery, _, Backbone);
