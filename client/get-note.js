const client = require('./index');

client.get({ id: '1' }, (error, note) => {
  if (error) {
    console.error('Error occured when fetching the note', error);
  }else {
    console.log('The note fetched succesfully', note);
  }
})
