// DOM
var bool = function (b) { return b; };
var myBool = bool(false);
var greeter = function (person) {
    return "Hello " + person + "!";
};
var greet = greeter('Zak');
document.body.textContent = greet;
;
var sayHello = function (_a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    return "Hello " + firstName + " " + lastName;
};
sayHello({ firstName: 'Jack', lastName: 'William' });
var app = document.createElement("div");
app.setAttribute('id', 'app');
var p = document.createElement('p');
p.setAttribute('class', 'woo');
app === null || app === void 0 ? void 0 : app.appendChild(p);
p.textContent = 'Hello world!';
document.body.appendChild(app);
var test = document.getElementById('app');
console.log('test', test);
var q = document.querySelector('.woo');
console.log(q);
