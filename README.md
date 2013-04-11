blocking
========

Meteor smart package which makes node.js asynchronous functions blocking. It is assumed that the last argument of the
function you want to make blocking is a standard callback which takes two arguments, an error value and a return value.
Example:

    blocking(function (a, b, cb) { cb(null, a + b) })(1, 2) === 3

In the case of an error, an exception is thrown. Additionally, an object to bind `this` can be passed. This is useful when
wrapping object methods:

    blocking(obj, obj.method)(42)

Adding this package to you [Meteor](http://www.meteor.com/) application adds `blocking` function into the global scope
which you can use to wrap an asynchronous function into a blocking function.
