/*const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

const { readFile, readFileSync } = require('fs');

eventEmitter.on('lunch', () => {
   console.log('oh lunch');
});

eventEmitter.emit('lunch');


readFile('./hello.txt', 'utf-8', (err, txt) => { // does not block other actions
   console.log(txt);
});

console.log("should not be blocked");


const { readFile } = require('fs').promises;

async function hello() {
   const file = await readFile('./hello.txt', 'utf-8');
   console.log(file);
}

hello();


const myModule = require('./my-module');

console.log(myModule);
*/
const { readFile } = require('fs');
const express = require('express');

const app = express();

app.get('/', (request, response) => {


   readFile('./hello.txt', 'utf-8', (err, res) => {
      if (err) {
         response.status(500).send("out of order");
      }
      response.send(res);
   });

});

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`));