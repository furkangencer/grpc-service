const fs = require('fs');
const protoFiles = [];

fs.readdirSync(__dirname).forEach(file => {
  if (file.indexOf('.proto') >= 0) {
    protoFiles.push(__dirname + '/' + file)
  }
});

//console.log(protoFiles)

module.exports = protoFiles;
