# Extended Backbone.View for lazy loading

**backbone-lazyview** is a Backbone plugin writtern in JavaScript.
It watches the **scroll** event of the *window* object and triggers an **appear** event on a lazyview object when it's *el* property appeared on the screen.

## Usage

Include required js libraries and backbone.lazyview.js into your HTML.

```html
<script src="jquery.js"></script>
<script src="underscore.js"></script>
<script src="backbone.js"></script>
<script src="lazyview.js"></script>
```

You can use **appear** event as well as other DOM events.

```js
var MyLazyView = Backbone.LazyView.extend({
    events: {
        appear: 'appearEventHandler'
    },
    appearEventHandler: function () {
        /* do something */
    }
});
var view = new LazyView({el: '#element'});
```

See [Demo](http://yuku-t.com/backbone-lazyview).

## License

Licensed under MIT
