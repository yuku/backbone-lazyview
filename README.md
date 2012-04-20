#What is this?

**backbone-lazyview** is a Backbone plugin writtern in JavaScript.
It watches the **scroll** event of the *window* object and triggers an **appear** event on a lazyview object when it's *el* property appeared on the screen.

#How to use?

Include required js libraries and lazyview.js in your HTML code.

```html
<script src="jquery.js"></script>
<script src="underscore.js"></script>
<script src="backbone.js"></script>
<script src="lazyview.js"></script>
```

Then *LazyView* is added to the Backbone's original namespace.
You can catch the **appear** event and invoke a function as follows.

```js
var FooLazyView = Backbone.LazyView.extend({
    events: {
        "appear": "appear"
    },
    initialize: function () {
        _.bindAll(this, "appear");
    },
    appear: function () {
        /* do something */
    }
});
var view = new FooLazyView({el: $("#element")});
```

enjoy!
