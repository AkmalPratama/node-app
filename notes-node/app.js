console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('Akmal'));
var filteredArray = _.uniq(['Yololo', 1, 'Akmal', 1, 2 , 3, 4]);
console.log(filteredArray);

// console.log('Result:', notes.add(12, 8));

// var user = os.userInfo();

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
