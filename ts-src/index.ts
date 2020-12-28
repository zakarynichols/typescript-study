const bool = (b: boolean) => b;

const myBool = bool(false);

const greeter = (person: string) => {
    return `Hello ${person}!`;
};

const greet = greeter('Jane');

document.body.textContent = greet;

interface Person {
    firstName: string,
    lastName: string
};

const sayHello = ({ firstName, lastName }: Person) => `Hello ${firstName} ${lastName}`;

sayHello({ firstName: 'Jack', lastName: 'William' });