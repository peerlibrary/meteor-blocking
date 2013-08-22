(function () {
  var fibers = Npm.require('fibers');
  var future = Npm.require('fibers/future');

  blocking = function (obj, fun) {
    if (fun == null) {
      fun = obj;
      obj = null;
    }
    var wrapped = future.wrap(fun);
    var f = function () {
      return wrapped.apply(obj, arguments).wait();
    };
    f._blocking = true;
    return f;
  };
})();
