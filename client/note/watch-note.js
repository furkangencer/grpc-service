module.exports = (client) => {
  const call = client.watch({});

  call.on('data', (data) => {
    console.log(data);
  })
  call.on('end', () => {
    console.log('Stream ended');
  });
}
