// Basic Types
// Boolean
var isDone = false;
// Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var big = 100n;
// String
var color = 'blue';
var fullName = 'Bob Bobbington';
var age = 38;
var sentence = "Hello my name is " + fullName;
var otherSentence = "I'll be " + (age + 1) + " next year!";
// Array[]
var list = [1, 2, 3];
var otherList = [1, 2, 3];
var x = ["hello", 10];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// Unknown
var notSure = 4;
notSure = 'maybe a string instead';
notSure = false;
// Any
var getValue = function (key) { return key[0]; };
var str = getValue([false]);
console.log(str);
// Void
var warnUser = function () {
    console.log('warning');
};
warnUser();
// Null & Undefined
var u = undefined;
var n = null;
// Never
var error = function (message) {
    throw new Error(message);
};
var fail = function () {
    return error('something failed');
};
var infiniteLoop = function () {
    while (true) {
        console.log('weee');
    }
    ;
};
var create = function (o) { return o; };
console.log(create({ name: 'woo', age: 12 }));
// Type Assertions
var someValue = 'This is a string';
var strLength = someValue.length;
var otherStrLength = someValue.length;
console.log(otherStrLength);
console.log(strLength);
