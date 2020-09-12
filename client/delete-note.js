const client = require('./index');

client.delete({ id: '1' }, (error, _) => {
  if (error) {
    console.error('Error occured when deleting note');
  } else {
    console.log('Note has been successfully deleted');
  }
})
