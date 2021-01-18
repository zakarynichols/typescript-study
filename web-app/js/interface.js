// Interfaces
const printLabel = (labelObj) => {
    console.log(labelObj.label);
};
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
const createSquare = (config) => {
    const newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return { ...newSquare };
};
console.log(createSquare({ color: "white", width: 50, otherProp: 'prop' }));
let p1 = { x: 10, y: 20 };
let a = [1, 2, 3, 4];
let ro = a;
// Can't perform push, fill, pop, etc.. 
const noMutation = ro.map(r => r * 2);
console.log(noMutation);
// Can be reassigned with type assertion
a = ro;
// You don't need to specify the return type of the function
// it is implied by the return value. In this case (true or false).
// If mySearch() returned a string it would throw an error expecting
// a boolean value.
const mySearch = (source, subString) => {
    let result = source.search(subString);
    return result > -1;
};
const myArray = ["Bob", "Fred"];
const myStr = myArray[0];
console.log(myStr);
;
;
;
const myArr = ["Alice", "Bob"];
const createClock = (ctor, hour, minute) => {
    return new ctor(hour, minute);
};
class DigitalClock {
    constructor(h, m) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock {
    constructor(h, m) { }
    tick() {
        console.log("tick tick");
    }
}
const d = new DigitalClock(12, 19);
d.tick();
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
const Clock = class Clock {
    constructor(h, m) { }
    tick() {
        console.log("beep beep");
    }
};
let clock = new Clock(12, 17);
clock.tick();
const square = {};
square.color = "blue";
square.sideLength = 10;
let s = {};
s.color = "blue";
s.sideLength = 10;
s.penWidth = 5.0;
console.log(s);
const getCounter = () => {
    let counter = function (start) { };
    counter.interval = 123;
    counter.reset = () => { };
    return counter;
};
let count = getCounter();
count(10);
count.reset();
count.interval = 5.0;
// Interfaces extending classes
class Control {
}
class Button extends Control {
    select() { }
}
class TextBox extends Control {
    select() { }
}
// Incorrect usage below
// class ImageControl implements SelectableControl {
//     private state: any;
//     select() {}
// }
