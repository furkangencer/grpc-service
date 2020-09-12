const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const protoFiles = require(__dirname + '/../protos');
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || '3000';

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
};
const packageDefinition = protoLoader.loadSync(protoFiles, options);
const { noteservice } = grpc.loadPackageDefinition(packageDefinition);

const { noteHandlers } = require('./handlers');

const server = new grpc.Server();
server.addService(noteservice.NoteService.service, noteHandlers);

server.bindAsync(`${host}:${port}`, grpc.ServerCredentials.createInsecure(), (err)=> {
  if (err) throw err;
  server.start()
  console.log(`Server running at ${host}:${port}`);
});
