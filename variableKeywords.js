var someVariable = 23; // Global

someVariable = "name";

someVariable = [1,2,3];

function myClosedFunction() {
    var anotherVariable = 23;
}

var userName = "Dani";
var userName = "Sathya"; // valid

if(true) {
    var age = 20;
}

console.log(age); // work

console.log(anotherVariable); // not work

for(var i = 0; i<25; i++) { // i = 0
    console.log(i);
}

// i = 24
// i destroyed
// i = 0
for(var i = 0; i<25; i++) {
    console.log(i);
}

// var is function scoped

let newVariable = 10;

let newVariable = 20; // not valid

newVariable = 30; //valid

let myUndefinedVariable; //undefined

if(true) {
    let speed = 40;
}

function speedoMeter() {
    let speed = 40;
}

console.log(speed); // Not work

for(let i = 0; i<25; i++) {
    console.log(i);
}

for(let i = 0; i<25; i++) {
    console.log(i);
}

console.log(i);

// let and const both are block scoped

const constantVariable = "one";

constantVariable = "two" // will not work

const constantArray = [1,2,3]

constantArray = [1,2,3,4]

constantArray.push(4); // will work

const constantObject = {}

constantObject.one = 1 // will work {one: 1}

const anotherObject = {one: 1}

delete anotherObject["one"] // will work

// Always use const
// only use let when you have an 
// explicit need to change it