#!/usr/bin/node
const fs = require('fs');
const [, , sourceFilePath1, sourceFilePath2, destinationFilePath] = process.argv;
fs.readFile(sourceFilePath1, 'utf8', (err1, data1) => {
  if (err1) {
    console.error(`Error reading ${sourceFilePath1}:`, err1);
    process.exit(1);
  }
  fs.readFile(sourceFilePath2, 'utf8', (err2, data2) => {
    if (err2) {
      console.error(`Error reading ${sourceFilePath2}:`, err2);
      process.exit(1);
    }
    const concatenatedContent = data1.trim() + '\n' + data2.trim();
    fs.writeFile(destinationFilePath, concatenatedContent, (err3) => {
      if (err3) {
        console.error(`Error writing to ${destinationFilePath}:`, err3);
        process.exit(1);
      }
      console.log(`Concatenated contents written to ${destinationFilePath}`);
    });
  });
});

