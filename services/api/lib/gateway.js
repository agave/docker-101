'use strict';

const grpc = require('grpc');
const PROTO_PATH = `${__dirname}/../shared/protos/greeter.proto`;
const USER_ADDRESS = process.env.USER_ADDRESS || 'localhost:50051';

class Gateway {
  constructor() {
    const credentials = grpc.credentials.createInsecure();
    const greeter_proto = grpc.load(PROTO_PATH).greeter;

    this.client = new greeter_proto.Greeter(USER_ADDRESS, credentials);
  }

  sendUser(method, body) {
    return new Promise((resolve, reject) => {
      this.client[method](body, (err, response) => {
        if (err) {
          return reject(err)
        }

        resolve(response);
      });
    });
  }
}

module.exports = new Gateway();

