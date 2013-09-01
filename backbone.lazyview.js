/*!
 * Backbone.LazyView - extended Backbone.View for lazy loading
 *
 * Version : 1.0
 * Author  : Yuku Takahashi
 * Lisence : MIT license with starring the repository at GitHub,
 *           OR GPL without starring.
 */
;(function ($, _, Backbone) {

  var containers = {}; // Shared containers

  Backbone.LazyView = Backbone.View.extend({

    constructor: function () {
      Backbone.View.apply(this, arguments);
      this.onScrollHandler();  // Trigger appear on initially shown views
    },

    initialize: function () {
      Backbone.View.prototype.initialize.apply(this, arguments);

      this.options = _.defaults(this.options, {
        threshold: 0,
        container: window
      });
      _.bindAll(this, 'onScrollHandler');
      this.delegateAppearEvent();
    },

    onScrollHandler: function () {
      _.each(containers[this.options.container], function (view) {
        if (!belowTheFold(view.$el, view.options) &&
            !rightOfFold(view.$el, view.options)) {
          view.$el.trigger("appear.delegateEvents" + view.cid);
          view.undelegateAppearEvent();
        }
      });
    },

    delegateAppearEvent: function () {
      if (!(this.options.container in containers)) {
        // Register scroll handler to container element.
        containers[this.options.container] = [];
        $(this.options.container)
          .on('scroll', _.throttle(this.onScrollHandler, Backbone.LazyView.throttle));
      }
      containers[this.options.container].push(this);
    },

    undelegateAppearEvent: function () {
      containers[this.options.container] =
        _.filter(containers[this.options.container], function (view) {
          return view !== this
        }, this);
    }
  }, {
    // Check appearance once in throttle msec.
    throttle: 10
  });

  /**
   * Convenience functions such as defined in ``jquery.lazyload.js``
   *
   * jquery.lazyload.js project home:
   *   http:www.appelsiini.net/projects/lazyload
   */
  var $window = $(window);
  var checkContainer = function (container) {
    return _.isUndefined(container) || container === window;
  };
  var belowTheFold = function ($element, options) {
    var $container, fold;
    if (checkContainer(options.container)) {
      fold = $window.height() + $window.scrollTop();
    } else {
      $container = $(options.container);
      fold = $container.offset().top + $container.height();
    }
    return fold <= $element.offset().top - options.threshold;
  };
  var rightOfFold = function ($element, options) {
    var $container, fold;
    if (checkContainer(options.container)) {
      fold = $window.width() + $window.scrollLeft();
    } else {
      $container = $(options.container);
      fold = $container.offset().left + $container.width();
    }
    return fold <= $element.offset().left - options.threshold;
  };
})(jQuery, _, Backbone);
