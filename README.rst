LazyView
========

Backbone.LazyView is a Backbone plugin writtern in JavaScript.
It watches the **scroll** event of the *window* and trigger an **appear** event when *el* property of the LazyView object is appeared on the screen.

Requirements
------------

* jQuery
* underscore.js
* Backbone.js

How to use?
-----------

Include required js libraries and lazyview.js in your HTML code.::

    <script src="jquery.js"></script>
    <script src="underscore.js"></script>
    <script src="backbone.js"></script>
    <script src="lazyview.js"></script>

Then *Backbone.LazyView* constructor is added to the Backbone's namespace.
The interface of the cunstructor is same as *Backbone.View*'s interface.
**appear** event will be triggered, so you can catch the event and invoke a function as follows.::

    var FooLazyView = Backbone.LazyView.extend({
        initialize: function () {
            this.bind("appear", function () {
              /* do something */
            });
        }
    });

enjoy!
