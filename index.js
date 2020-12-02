const fs = require('fs');

const input =
    fs.readFileSync('data.txt', 'utf8')
        .split('\n')
        .filter(i => i !== '')
        .map(i => {
            i = i.split(' ');
            return {min: i[0].split('-')[0], max: i[0].split('-')[1], char: i[1].slice(0,1), pwd: i[2]}
        })
        .flat();

let nbOfValidPwd1 = input.reduce((accumulator, currentValue) => {
    let nbOfOccurrences = currentValue.pwd.split('').reduce((a,v) => {
        if(currentValue.char === v) {
            ++a;
        }
        return a;
    }, 0);
    if(currentValue.min <= nbOfOccurrences && nbOfOccurrences <= currentValue.max) ++accumulator;
    return accumulator;
}, 0);

let nbOfValidPwd2 = input.reduce((accumulator, currentValue) => {
    let count = 0;
    if(currentValue.pwd.charAt(currentValue.min - 1) === currentValue.char) ++count;
    if(currentValue.pwd.charAt(currentValue.max - 1) === currentValue.char) ++count;
    if(count === 1) ++accumulator;
    return accumulator;
}, 0);

console.log("nb valid pwd, part 1", nbOfValidPwd1);


console.log("nb valid pwd, part 2", nbOfValidPwd2);
