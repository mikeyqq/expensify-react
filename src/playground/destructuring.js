// //ES6 OBJECT DESTRUCTURING

// const person = {
//   name: "anchen",
//   age: 26,
//   location: {
//     city: "toronto",
//     temp: 101
//   }
// };

// //name = "Anonymous" --> this is default incase there is no name in person object
// const { name: firstName = "Anonymous", age } = person;
// const { city, temp: temperature } = person.location;

// console.log(`${firstName} is ${age} `);
// console.log(`${city} is ${temperature}`);

//PRACTICING SECTION
const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName); //Penguin, if not name then default to Self-Published

//
//
//
//
//
//
//

//ES6 ARRAY DESTRUCTING

const address = ["1299 S Juniper Street", "Toronto", "Ontario", "M1V1Y1"];

// const [, city, province] = address; --> this will skip first item
// const [, , province] = address; --> this will skip first and second item

const [street, city = "Vancouver", province, postal] = address;
console.log(`You are in ${city} ${province}`);

//PRACTICE

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.70"];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
