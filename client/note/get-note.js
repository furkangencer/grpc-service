module.exports = (client, id) => {
  client.get({ id }, (error, note) => {
    if (error) {
      console.error('Error occured when fetching the note', error);
    }else {
      console.log('The note fetched succesfully', note);
    }
  })
}
