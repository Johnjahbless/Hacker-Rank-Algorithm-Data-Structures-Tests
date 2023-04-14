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

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here

    console.log(arr);

    const arrLength = arr.length;
    let arrPositive = 0;
    let arrNegative = 0;
    let arrZero = 0;

    arr.forEach(e => {
        if (e == 0) {
            arrZero = arrZero + 1;
        }else if (e > 0) {
            arrPositive = arrPositive + 1;
        }else{
            arrNegative = arrNegative + 1;
        }
    });

    const positive = arrPositive / arrLength;
    const negative = arrNegative / arrLength;
    const zero = arrZero / arrLength;

    console.log(positive.toFixed(6));
    console.log(negative.toFixed(6));
    console.log(zero.toFixed(6));

}



function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}







  
process.on('uncaughtException', err => {
  fs.writeFileSync('uncaughtException.txt', `Uncaught Exception: ${err.message}`);
  //process.exit(1)
});


process.on('unhandledRejection', (reason, promise) => {
  fs.writeFileSync('unhandledRejection.txt', 'Unhandled rejection at ', promise, `reason: ${err.message}`);
  //process.exit(1)
});

plusMinus([1, 1, 0, -1, -1])

app.listen(PORT, ()=> console.log(`Test app running on ${PORT}`));
