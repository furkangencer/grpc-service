module.exports = (client, id) => {
  client.delete({ id }, (error, _) => {
    if (error) {
      console.error('Error occured when deleting note');
    } else {
      console.log('Note has been successfully deleted');
    }
  })
}
