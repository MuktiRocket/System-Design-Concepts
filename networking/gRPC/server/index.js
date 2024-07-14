const PROTO_PATH = "./customers.proto";
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});

const customersProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

const customers = [
  {
    id: "fhsdfnjhsfdgjn",
    name: "Jaydeep",
    age: 28,
    address: "address 1",
  },
  {
    id: "wetwqybbh",
    name: "Dada",
    age: 38,
    address: "address 2",
  },
  {
    id: "njs3215mz",
    name: "Fury",
    age: 29,
    address: "address 3",
  },
  {
    id: "jwrtjwrkm",
    name: "Deblina",
    age: 26,
    address: "address 4",
  },
];
server.addService(customersProto.CustomerService.service, {
  getAll: (call, callback) => {
    callback(null, { customers });
  },
  get: (call, callback) => {
    let customer = customers.find((n) => n.id === call.request.id);
    if (customer) {
      callback(null, customer);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found",
      });
    }
  },
  insert: (call, callback) => {
    let customer = call.request;
    customer.id = Math.random();
    customers.push(customer);
    callback(null, customer);
  },
  update: (call, callback) => {
    let existingCustomer = customers.find((n) => n.id === call.request.id);

    if (existingCustomer) {
      existingCustomer.name = call.request.name;
      existingCustomer.age = call.request.age;
      existingCustomer.address = call.request.address;
      callback(null, existingCustomer);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found",
      });
    }
  },
  remove: (call, callback) => {
    let existingCustomerIndex = customers.findIndex(
      (n) => n.id === call.request.id
    );

    if (existingCustomerIndex) {
      customers.splice(existingCustomerIndex, 1);
      callback(null, {});
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found",
      });
    }
  },
});

server.bindAsync(
  "127.0.0.1:30043",
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error("Error secure GRPC connection: ", err);
    } else {
      server.start();
      console.error("GRPC connection started: ", port);
    }
  }
);
