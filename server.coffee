blocking = null

do -> # To not pollute the namespace
  require = __meteor_bootstrap__.require

  fibers = require 'fibers'
  future = require 'fibers/future'

  blocking = (obj, fun) ->
    if not fun?
      fun = obj
      obj = null

    wrapped = future.wrap fun
    () ->
      wrapped.apply(obj, arguments).wait()

  blocking.Fiber = fibers
