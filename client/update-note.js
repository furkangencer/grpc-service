const client = require('./index');

const updateNote = {
  id: '1',
  title: 'Hello',
  content: 'World'
}

client.update(updateNote, (error, note) => {
  if (error) {
    console.error('Error occured when updating note', error);
  } else {
    console.log('Note has been updated successfully', note);
  }
})
