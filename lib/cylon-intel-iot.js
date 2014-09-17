/*
 * intel-iot
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var Cylon = require('cylon');

var Adaptor = require('./adaptor'),
  GPIO = require('cylon-gpio'),
  I2C = require('cylon-i2c');

module.exports = {
  adaptor: function(opts) {
    return new Adaptor(opts);
  },

  register: function(robot) {                                                                                                                                                 
    Cylon.Logger.debug("Registering intel-iot adaptor for " + robot.name);                                                                                                    
    robot.registerAdaptor('cylon-intel-iot', 'intel-iot');

    GPIO.register(robot);                                                                                                                                                     
    I2C.register(robot);                                                                                                                                                     
  }  
};