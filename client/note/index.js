const getNote = require('./get-note');
const deleteNote = require('./delete-note');
const insertNote = require('./insert-note');
const updateNote = require('./update-note');
const listNotes = require('./list-notes');
const watchNote = require('./watch-note');

module.exports = {
  getNote,
  deleteNote,
  insertNote,
  updateNote,
  listNotes,
  watchNote,
};
