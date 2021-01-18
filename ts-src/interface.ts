// Interfaces

interface LabeledValue {
    label: string;
}

const printLabel = (labelObj: LabeledValue) => {
    console.log(labelObj.label);
};

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// Optional Properties

interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

const createSquare = (
    config: SquareConfig
): { color: string; area: number } => {
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

// Readonly Properties

interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

// Can't perform push, fill, pop, etc.. 
const noMutation = ro.map(r => r * 2);
console.log(noMutation);

// Can be reassigned with type assertion
a = ro as number[]

// Function types

interface SearchFunc {
    (source: string, subString: string): boolean;
}

// You don't need to specify the return type of the function
// it is implied by the return value. In this case (true or false).
// If mySearch() returned a string it would throw an error expecting
// a boolean value.
const mySearch: SearchFunc = (source: string, subString: string) => {
    let result = source.search(subString);
    return result > -1;
};

// Indexable types
interface StringArray {
    [index: number]: string;
}

const myArray: StringArray = ["Bob", "Fred"];

const myStr: string = myArray[0];

console.log(myStr);

interface Animal {
    name: string;
};

interface Dog extends Animal {
    breed: string;
};

interface NotOkay {
    [x: number]: Animal;
}

// Below throws an error unless
// the index signature is a 
// union | of property types
// [index: string]: number;
// name: string;
interface NumberDictionary {
    [index: string]: number | string;
    length: number;
    name: string;
};

interface ReadOnlyStringArray {
    readonly [index: number]: string;
}

const myArr: ReadOnlyStringArray = ["Alice", "Bob"];

// Class types

interface ClockConstructor {
    new(hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
    tick(): void;
}

const createClock = (ctor: ClockConstructor, hour: number, minute: number): ClockInterface => {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}

class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tick");
    }
}

const d = new DigitalClock(12, 19);
d.tick();

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

const Clock: ClockConstructor = class Clock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep")
    }
}

let clock = new Clock(12, 17);
clock.tick();

// Extending interfaces

interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

const square = {} as Square;
square.color = "blue";
square.sideLength = 10;

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let s = {} as Square;

s.color = "blue";
s.sideLength = 10;
s.penWidth = 5.0;

console.log(s)

// Hybrid types

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

const getCounter = (): Counter => {
    let counter = function (start: number) { } as Counter;
    counter.interval = 123;
    counter.reset = () => {};
    return counter;
}

let count = getCounter();
count(10);
count.reset();
count.interval = 5.0;

// Interfaces extending classes

class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() {}
}

class TextBox extends Control {
    select() {}
}

// Incorrect usage below
// class ImageControl implements SelectableControl {
//     private state: any;
//     select() {}
// }