// Error handleing method

const dogObj = null;

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