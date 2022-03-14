// Error handleing method

// const dogObj = null;

// This code run and output error
/* let { name, color, age } = dogObj;
console.log(name, color, age); */

// But this code run and output not error
/* const { name, color, age } = dogObj || {};
console.log(name, color, age); */


// Rest operator for object

/* const dog = {
    name: "dog",
    color: "brown",
    age: 7
}

const { name, ...rest } = dog;
console.log(rest);
 */


// function parameter as a destructuring object

const dogObj = {
    name: "dog",
    color: "brown",
    age: 7
}

const dog = ({ name, color, age }) => {
    console.log("Dog name, color & age :", name, color, age);
}

dog(dogObj);