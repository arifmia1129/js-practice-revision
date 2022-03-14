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

/* const dogObj = {
    name: "dog",
    color: "brown",
    age: 7
}

const dog = ({ name, color, age }) => {
    console.log("Dog name, color & age :", name, color, age);
}

dog(dogObj); */

// Nested Array

/* const dreamGirl = [
    {
        dream1: {
            name: "bbu",
            height: "5.4",
            family: [{ father: "rock", mother: "shila", sister: "chinki" }],
            age: undefined,
            contactInfo: [
                {
                    facebook: {
                        link: "https://www.facebook.com/",
                        followers: "12545",
                        status: "single",
                        friendsList: [
                            { name: "rofik" },
                            { name: "jobbar" },
                            { name: "salam" },
                            { name: "borkot" },
                            undefined,
                        ],
                    },
                },
                { instagram: "https://www.instagram.com/" },
                { twitter: "https://twitter.com/" },
                { github: "https://github.com/" },
                { phone: ["01254823212", "02152457"] },
            ],
        },
    },
];


const friends = dreamGirl[0].dream1.contactInfo[0].facebook.friendsList;
for (const friend of friends) {
    console.log(friend?.name);
} */

// for loop

/* const arr = ["Binu", "Arif", "Shahin", "Naim", "Shuvo"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */


// index of map

const products = [
    { name: "phone", brand: "samsung", price: 5000 },
    { name: "laptop", brand: "lenovo", price: 20000 },
    { name: "mouse", brand: "delux", price: 200 }
];

products.map((pd, index) => {
    console.log(index);
    console.log(pd);
})