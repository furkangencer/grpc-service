const client = require('./index');
let newNote = {
  title: "New Note",
  content: "New note content"
};

client.insert(newNote, (error, note) => {
  if (error) {
    console.error('Error occured when creating note', error);
  } else {
    console.log('New note created successfully', note);
  }
})
