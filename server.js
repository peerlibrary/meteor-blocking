(function () {
  var fibers = Npm.require('fibers');
  var future = Npm.require('fibers/future');

  blocking = function(obj, fun) {
    if (fun == null) {
      fun = obj;
      obj = null;
    }
    var wrapped = future.wrap(fun);
    return function() {
      return wrapped.apply(obj, arguments).wait();
    };
  };

  blocking.Fiber = fibers;
})();
