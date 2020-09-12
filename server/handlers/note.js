const grpc = require('@grpc/grpc-js');
const { v4: uuidv4 } = require('uuid');

const note = [
  {id: '1', title: 'Note 1', content: 'Content 1'},
  {id: '2', title: 'Note 2', content: 'Content 2'}
]

module.exports = {
  list: (call, callback) => {
    callback(null, note)
  },
  get: (call, callback) => {
    let note = note.find((note) => note.id === call.request.id)
    if (note) {
      callback(null, note)
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found"
      })
    }
  },
  insert: (call, callback) => {
    let note = call.request
    note.id = uuidv4()
    note.push(note)
    callback(null, note)
  },
  update: (call, callback) => {
    let existingNote = note.find((note) => note.id === call.request.id)
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
    let existingNoteIndex = note.findIndex((note) => note.id === call.request.id)
    if (existingNoteIndex !== -1) {
      note.splice(existingNoteIndex, 1)
      callback(null, {})
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found"
      })
    }
  }
}
