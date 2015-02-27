var Future = Npm.require('fibers/future');

// Inside blocking context functions should not be throwing exceptions but
// call callback with first argument an error. Exceptions will not propagate
// and will only be printed to the console.
blocking = function (obj, fun) {
  if (!fun) {
    fun = obj;
    obj = undefined;
  }
  var future = new Future();
  var f = function () {
    if (_.isUndefined(obj)) {
      obj = this;
    }
    var args = _.toArray(arguments);
    fun.apply(obj, args.concat(future.resolver()));
    return future.wait();
  };
  f._blocking = true;
  return f;
};
