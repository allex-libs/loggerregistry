function createLoggerRegistry(execlib){
  'use strict';
  var lib = execlib.lib,
    q = lib.q,
    execSuite = execlib.execSuite,
    gateLoggerRegistry = execSuite.additionalRegistries.get('loggers'),
    reg;
  if(!gateLoggerRegistry){
    reg = new execSuite.RegistryBase();
    execSuite.additionalRegistries.add('loggers', reg);
  }
  return {};
}

module.exports = createLoggerRegistry;