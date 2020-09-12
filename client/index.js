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

const {
  getNote,
  insertNote,
  updateNote,
  deleteNote,
  listNotes,
  watchNote,
} = require('./note');

const { argv }  = require('yargs');
const command = argv._[0];
if (command === 'list')
  listNotes(client);
else if (command === 'insert')
  insertNote(client, argv.title, argv.content);
else if (command === 'get')
  getNote(client, argv.id);
else if (command === 'delete')
  deleteNote(client, argv.id);
else if (command === 'update')
  updateNote(client, argv.id, argv.title, argv.content);
else if (command === 'watch')
  watchNote(client);


module.exports = client;
