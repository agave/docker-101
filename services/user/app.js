'use strict';

const grpc = require('grpc');
const PROTO_PATH = `${__dirname}/shared/protos/greeter.proto`;
const greeter_proto = grpc.load(PROTO_PATH).greeter;
const greeterController = require('./api/controllers/greeter');
const PORT = process.env.PORT || 50051;

function main() {
  const server = new grpc.Server();

  server.addService(greeter_proto.Greeter.service, greeterController);
  server.bind(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
