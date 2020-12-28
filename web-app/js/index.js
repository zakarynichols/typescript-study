const bool = (b) => b;
const myBool = bool(false);
const greeter = (person) => {
    return `Hello ${person}!`;
};
const greet = greeter('Jane');
document.body.textContent = greet;
;
const sayHello = ({ firstName, lastName }) => `Hello ${firstName} ${lastName}`;
sayHello({ firstName: 'Jack', lastName: 'William' });
