// Basic Types
// Boolean
const isDone = false;
// Number
const decimal = 6;
const hex = 0xf00d;
const binary = 0b1010;
const octal = 0o744;
const big = 100n;
// String
const color = 'blue';
const fullName = 'Bob Bobbington';
const age = 38;
const sentence = `Hello my name is ${fullName}`;
const otherSentence = `I'll be ${age + 1} next year!`;
// Array[]
const list = [1, 2, 3];
const otherList = [1, 2, 3];
let x = ["hello", 10];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
const c = Color.Green;
// Unknown
let notSure = 4;
notSure = 'maybe a string instead';
notSure = false;
// Any
const getValue = (key) => key[0];
const str = getValue([false]);
console.log(str);
// Void
const warnUser = () => {
    console.log('warning');
};
warnUser();
// Null & Undefined
let u = undefined;
let n = null;
// Never
const error = (message) => {
    throw new Error(message);
};
const fail = () => {
    return error('something failed');
};
const infiniteLoop = () => {
    while (true) {
        console.log('weee');
    }
    ;
};
const create = (o) => o;
console.log(create({ name: 'woo', age: 12 }));
// Type Assertions
let someValue = 'This is a string';
let strLength = someValue.length;
let otherStrLength = someValue.length;
console.log(otherStrLength);
console.log(strLength);
