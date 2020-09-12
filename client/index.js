const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const protoFiles = require(__dirname + '/../protos');
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || '50051';

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
};
const packageDefinition = protoLoader.loadSync(protoFiles, options);
const {
  noteservice: { NoteService },
} = grpc.loadPackageDefinition(packageDefinition);

const client = new NoteService(`${host}:${port}`, grpc.credentials.createInsecure());

module.exports = client;
