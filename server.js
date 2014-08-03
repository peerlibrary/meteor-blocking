(function () {
  // Inside blocking context functions should not be throwing exceptions but
  // call callback with first argument an error. Exceptions will not propagate
  // and will only be printed to the console.
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
