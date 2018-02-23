'use strict';

const gateway = require('../lib/gateway');

class GreeterController {
  async sayHello(req, res, next) {
    try {
      const response = await gateway.sendUser('sayHello', {
        name: req.query.name
      });

      res.send(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new GreeterController();
