Tinytest.add('blocking', function (test) {
  var isDefined = false;
  try {
    blocking;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "blocking is not defined");
  test.isTrue(Package['peerlibrary:blocking'].blocking, "Package.peerlibrary:blocking.blocking is not defined");

  var blockingFunction = blocking(function (a, b, cb) { cb(null, a + b) });

  // We run it twice to catch possible bugs of reusing old futures.
  test.equal(blockingFunction(1, 2), 3);
  test.equal(blockingFunction(1, 2), 3);

  // We want to support the last argument of a blocking function being a function
  // (and not switch to a non-blocking mode like Meteor.wrapAsync does).
  test.equal(blocking(function (a, b, f, cb) { cb(null, f(a, b)) })(1, 2, function (a, b) {return a + b}), 3);

  // We want to work also with varargs functions .
  test.equal(blocking(function () {
    var a = arguments[0];
    var b = arguments[1];
    var f = arguments[2];
    var cb = arguments[3];

    cb(null, f(a, b));
  })(1, 2, function (a, b) {return a + b}), 3);

  test.throws(function () {
    blocking(function (a, b, cb) { cb("test error") })(1, 2);
  });
});
