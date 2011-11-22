#LazyView

Backbone.LazyView is a Backbone plugin writtern in JavaScript.
It watches the **scroll** event of the *window* and trigger an **appear** on the object when it's *el* property appeared on the screen.

##Requirements

* jQuery
* underscore.js
* Backbone.js

##How to use?

Include required js libraries and lazyview.js in your HTML code.

```html
<script src="jquery.js"></script>
<script src="underscore.js"></script>
<script src="backbone.js"></script>
<script src="lazyview.js"></script>
```

Then *Backbone.LazyView* constructor is added to the Backbone's namespace.
The interface of the cunstructor is same as *Backbone.View*'s interface, so you can catch the **appear** event and invoke a function as follows.

```js
var FooLazyView = Backbone.LazyView.extend({
    initialize: function () {
        _.bindAll(this, "appear");
        this.bind("appear", this.appear);
    },
    appear: function () {
        /* do something */
    }
});
var view = new FooLazyView({el: $("#element")});
```

enjoy!
