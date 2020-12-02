const fs = require('fs');

const input = fs.readFileSync('data.txt', 'utf8').split('\n').map(i => parseInt(i, 10));

let numberMatrix = input.map(i => input.map(x => [i, x]));

numberMatrix = numberMatrix.flat().filter(([x, y]) => x !== y);

const found = numberMatrix.find(([x, y]) => x+y === 2020);

console.log(found[0] * found[1]);
