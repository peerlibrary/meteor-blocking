blocking = null

do -> # To not pollute the namespace
  require = __meteor_bootstrap__.require

  future = require 'fibers/future'

  blocking = (fun) ->
    wrapped = future.wrap fun
    (args...) ->
      wrapped(args...).wait()
