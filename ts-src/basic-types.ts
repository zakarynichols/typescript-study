// Basic Types

// Boolean
const isDone: boolean = false;

// Number
const decimal: number = 6;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;
const big: bigint = 100n;

// String
const color: string = 'blue';
const fullName: string = 'Bob Bobbington';
const age: number = 38;
const sentence: string = `Hello my name is ${fullName}`;
const otherSentence: string = `I'll be ${age + 1} next year!`;

// Array[]
const list: number[] = [1, 2, 3];
const otherList: Array<number> = [1, 2, 3];
let x: [string, number] = ["hello", 10];

// Enum
enum Color {
    Red,
    Green = 2,
    Blue,
}

const c: Color = Color.Green;

// Unknown
let notSure: unknown = 4;
notSure = 'maybe a string instead';
notSure = false;

// Any
const getValue = (key: boolean[]): any => key[0];
const str: boolean[] = getValue([false]);
console.log(str);

// Void
const warnUser = (): void => {
    console.log('warning')
};
warnUser();

// Null & Undefined
let u: undefined = undefined;
let n: null = null;

// Never
const error = (message: string): never => {
    throw new Error(message);
};

const fail = (): never => {
    return error('something failed');
};
const infiniteLoop = (): never => {
    while (true) { console.log('weee') };
};

// Object
interface Thing {
    name: string,
    age: number,
    isHappy?: boolean
}

const create = (o: Thing) => o;

console.log(create({name: 'woo', age: 12}))

// Type Assertions
let someValue: unknown = 'This is a string';
let strLength: number = (someValue as string).length;
let otherStrLength: number = (<string>someValue).length;
console.log(otherStrLength);
console.log(strLength);