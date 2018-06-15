const fs = require('fs');
const { app } = require('./app');

(function main(inputFile) {
  const input = fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
      return console.error(err);
    }
    console.log(app(data));
  });
})('./input');
