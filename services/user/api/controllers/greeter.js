'use strict';

class GreeterController {
  sayHello(call, callback) {
    callback(null, {
      message: `Hello ${call.request.name}!`
    });
  }
}

module.exports = new GreeterController();
