var Future = Npm.require('fibers/future');

// Inside blocking context functions should not be throwing exceptions but
// call callback with first argument an error. Exceptions will not propagate
// and will only be printed to the console.
blocking = function (obj, fun) {
  if (!fun) {
    fun = obj;
    obj = undefined;
  }
  var f = function () {
    if (_.isUndefined(obj)) {
      obj = this;
    }
    var args = _.toArray(arguments);
    var future = new Future();
    fun.apply(obj, args.concat(future.resolver()));
    return future.wait();
  };
  f._blocking = true;
  return f;
};
