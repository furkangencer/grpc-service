const client = require('./index');

client.list({}, (error, notes) => {
  if (error) {
    console.error('Error occured when listing notes', error);
  } else {
    console.log('Notes fetched succesfully', notes);
  }
})
