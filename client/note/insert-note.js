module.exports = (client, title, content) => {
  const newNote = {
    title,
    content,
  };
  client.insert(newNote, (error, note) => {
    if (error) {
      console.error('Error occured when creating note', error);
    } else {
      console.log('New note created successfully', note);
    }
  })
}
