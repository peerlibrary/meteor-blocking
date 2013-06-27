Tinytest.add('meteor-blocking', function (test) {
  var isDefined = false;
  try {
    blocking;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "blocking is not defined");

  test.equal(blocking(function (a, b, cb) { cb(null, a + b) })(1, 2), 3);

  test.throws(function () {
      blocking(function (a, b, cb) { cb("test error") })(1, 2)
  }, /^test error$/);
});