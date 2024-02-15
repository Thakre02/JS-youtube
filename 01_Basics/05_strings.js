const name = "ankur"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`); // recommended syntax

const gammeName = new String("firefree")

console.log(gammeName[2]);
console.log(gammeName.__proto__);

console.log(gammeName.length);
console.log(gammeName.toUpperCase());
console.log(gammeName.charAt(2));
console.log(gammeName.indexOf('f'));

const neeString = gammeName.substring(0,4)
console.log(neeString);

const neString = gammeName.slice(-5,4)
console.log(neString);

const neeString1 =  "  thakre  "
console.log(neeString1);
console.log(neeString1.trim());

const url = " https://ankur.com/ank%20ur"

console.log(url.replace('%20',''));
console.log(url.includes('safe'));

const gamename ="anku-ur-thak-re"
console.log(gamename.split('-'));
