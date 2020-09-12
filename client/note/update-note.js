module.exports = (client, id, title, content) => {
  const updateNote = {
    id,
    title,
    content,
  };

  client.update(updateNote, (error, note) => {
    if (error) {
      console.error('Error occured when updating note', error);
    } else {
      console.log('Note has been updated successfully', note);
    }
  })
}
