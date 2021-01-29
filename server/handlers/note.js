const grpc = require('@grpc/grpc-js');
const { v4: uuidv4 } = require('uuid');
const events = require('events');
const noteStream = new events.EventEmitter();

const notes = [
  {id: '1A', title: 'Note 1', content: 'Content 1'},
  {id: '2B', title: 'Note 2', content: 'Content 2'}
]

module.exports = {
  list: (call, callback) => {
    callback(null, { notes });
  },
  get: (call, callback) => {
    let foundNote = notes.find((note) => note.id === call.request.id);
    if (foundNote) {
      callback(null, foundNote);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found"
      });
    }
  },
  insert: (call, callback) => {
    let newNote = call.request;
    newNote.id = uuidv4();
    notes.push(newNote);
    noteStream.emit('new_note', newNote);
    callback(null, newNote);
  },
  update: (call, callback) => {
    let existingNote = notes.find((note) => note.id === call.request.id)
    if (existingNote) {
      existingNote.title = call.request.title
      existingNote.content = call.request.content
      callback(null, existingNote)
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found"
      })
    }
  },
  delete: (call, callback) => {
    let existingNoteIndex = notes.findIndex((note) => note.id === call.request.id)
    if (existingNoteIndex !== -1) {
      notes.splice(existingNoteIndex, 1)
      callback(null, {})
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found"
      })
    }
  },
  watch: (call, callback) => {
    noteStream.on('new_note', (note) => {
      call.write(note);
    });
  }
}
