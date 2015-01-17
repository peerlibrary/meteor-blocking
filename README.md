blocking
========

Meteor smart package which makes node.js asynchronous functions blocking. It is assumed that the last argument of the
function you want to make blocking is a standard callback which takes two arguments, an error value and a return value.
Example:

    blocking(function (a, b, cb) { cb(null, a + b) })(1, 2) === 3

In the case of an error, an exception is thrown. Additionally, an object to bind `this` can be passed. This is useful when
wrapping object methods:

    blocking(obj, obj.method)(42)

Adding this package to your [Meteor](http://www.meteor.com/) application adds `blocking` function into the global scope
which you can use to wrap an asynchronous function into a blocking function.

Server side only.

Installation
------------

```
meteor add peerlibrary:blocking
```

Related projects
----------------

* Meteor provides now a [Meteor.wrapAsync](http://docs.meteor.com/#/full/meteor_wrapasync) function with similar
  functionality, but if the last provided argument to the resulting blocking function is a function, it will
  process it in a special way as a callback. This might lead to [issues if you are making blocking functions
  which might normally take non-callback functions as arguments](https://github.com/meteor/meteor/issues/2408).
  This package is thus more suitable for functions which take functions as arguments.
* [meteorhacks:async](https://github.com/meteorhacks/meteor-async) provides additionally a whole suite of helper
  functions which makes it easier to make blocking object methods. This package can also do that, but you have
  to manually do it for each method (or create your own loop).
