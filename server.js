(function () {
  var fibers = Npm.require('fibers');
  var future = Npm.require('fibers/future');

  blocking = function (obj, fun) {
    if (!fun) {
      fun = obj;
      obj = undefined;
    }
    var wrapped = Meteor._wrapAsync(fun);
    var f = function () {
      if (typeof obj === 'undefined') {
        obj = this;
      }
      return wrapped.apply(obj, arguments);
    };
    f._blocking = true;
    return f;
  };
})();
