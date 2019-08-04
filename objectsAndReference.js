const x = { one: 1, two: 2 };

// const y = x; // pass the value by reference

const y = Object.assign({}, x);

const ySpread = { ...x };

const z = Object.assign({four: 4, five: 5}, x);

// merge two objects

/**
 * Destructuring
 */
const zSpread = { ...x, ...y, ...z, ...{four: 4}, five: 5 }

const { one, two } = x;
// const one = x.one;


const person = {
    name: "Sid",
    age: 24,
    gender: "male",
    dob: null,
};

const {
    name,
    ...otherProps
} = person;

const {
    name, 
    age, 
    dob, 
    address = "chennai"
} = person;