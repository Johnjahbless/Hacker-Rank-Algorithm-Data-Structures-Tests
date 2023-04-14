'use strict';
const express = require('express');
const fs = require("fs");

const PORT = process.env.PORT || 5001; 

//start the express app
const app = express();

//IMPORT MIDDLEWARES
app.use(express.urlencoded({limit: '10mb',  extended: true}));
app.use(express.json());
app.set('trust proxy', true);





app.get('/', (req, res) => res.status(200).json("'API's working"));



process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    console.log(inputString)
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});




function miniMaxSum(arr) {
    // Write your code here
console.log(arr)
let minSum = 0;
let maxSum = 0;
const arrLength = arr.length;
const maxNum = Math.max(...arr);
const minNum = Math.min(...arr);

arr.forEach(e => {
    minSum = maxNum !== e? minSum + e : minSum;
    maxSum = minNum !== e? maxSum + e : maxSum;
});

console.log(minSum, maxSum);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}






  
process.on('uncaughtException', err => {
  fs.writeFileSync('uncaughtException.txt', `Uncaught Exception: ${err.message}`);
  //process.exit(1)
});


process.on('unhandledRejection', (reason, promise) => {
  fs.writeFileSync('unhandledRejection.txt', 'Unhandled rejection at ', promise, `reason: ${err.message}`);
  //process.exit(1)
});

miniMaxSum([7, 69, 2, 221, 8974])

app.listen(PORT, ()=> console.log(`Test app running on ${PORT}`));
