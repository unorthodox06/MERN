// Que-1

// let randomValue = { name: "Lydia" };
// randomValue = 23;

// if (!typeof randomValue === "string") {
// console.log("It's not a string!");
// }
// else {
// console.log("Yay it's a string!");
// }

// Que-2

// const user = {
//     email: "my@email.com",
//     updateEmail: function (email){
//         this.email = email
//     }
// }

// user.updateEmail("new@email.com")
// console.log(user.email)

// Que-3

    // const fruit = ['🍌', '🍊', '🍎']

    // fruit.slice(0, 1)
    // fruit.splice(0, 1)
    // fruit.unshift('🍇')

    // console.log(fruit)

    // Que - 4

    // let count = 0;
    // const nums = [10, 11, 12, 13]; 
    // for(var i in nums){
    //     if (i) count += 1
    // }

    // console.log(count)

// Que - 5

// var emojis = ['🎄', '🎅🏼', '🎁', '⭐'];

// // /* 1 */ emojis.push('🦌');
// // /* 2 */ emojis.splice(0, 2);
// /* 3 */ emojis = [...emojis, '🥂'];
// // /* 4 */ emojis.length = 0;

// console.log(emojis);

// Que - 6

// const add = function (x) {
//     return x + x;
// }

// function myFunc(num = 2, value = add(num)) {
// console.log(num, value);
// }

// myFunc();
// myFunc(3);

// Que - 7

// const person = {
//     name: 'Lydia Hallie',
//     address: {
//         street: '100 Main St',
//     },
//     };

//     Object.freeze(person);

//     console.log(person);

// Que - 8

// const person = { name: 'Lydia Hallie' };

//     Object.seal(person);

 //properties cannot be added, deleted but can be modified

//  Que - 9

// const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];

// console.log(emojis.flat(1));

// const emojis = ["🥑", //0th level 
//     ["✨", "✨",      //1st level 
//         ["🍕", "🍕"] //2nd level starts and ends
//     ]//1st level ends 
// ]; //0th evel ends 

// console.log(emojis.flat(Infinity)); //default value is one

// ["🥑", "✨", "✨", "🍕", "🍕"];
// //concatenate-> 2 cheezo ko jodna 

// // 8 - 10 level deep 

// console.log(typeof Infinity);

// Que - 10 

// var randomValue = 21;
//     function getInfo() {
//     console.log(typeof randomValue);
//     var randomValue = 'Lydia Hallie';
//     }

//     getInfo();

// Que - 11

// const add = function (x) {
//     function inner (y) {
//         function innermost (z) {
//             console.log(x, y, z);
//             return x + y + z;
//         }
//         innermost(6);
//     }
//     inner(5);
// }

// add(4);

// Que - 12

// const groceries = ['banana', 'apple', 'peanuts'];

//     if (groceries.indexOf('banana')) {
//     console.log('We have to buy bananas!');
//     } else {
//     console.log(`We don't have to buy bananas!`);
//     }

// Que - 13

// const person = {
//     firstName: 'Lydia',
//     lastName: 'Hallie',
//     pet: {
//         name: 'Mara',
//         breed: 'Dutch Tulip Hound',
//     },
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
//     };

//     console.log(person.pet?.name);
//     console.log(person.pet?.family?.name);
//     console.log(person.getFullName?.());
//     console.log(member.getLastName?.());

// Que -14

// let num = 1;
//     const list = ['🥳', '🤠', '🥰', '🤪'];

//     console.log(list[(num += 1)]);

// Que -15

// function sumValues(x, y, z) {
//     return x + y + z;
//     }

//    console.log(sumValues(4,4,4));

// Que - 16

const person = {
    name: 'Lydia',
    age: 21,
    };

    const changeAge = function (x = { ...person }) {
    x.age += 1;
    }
    const changeAgeAndName = function (x = { ...person }) {
    x.age += 1;
    x.name = 'Sarah';
    // console.log(x);
    };

    changeAge(person);
    // console.log(person);
    // changeAgeAndName();

    console.log(person);

// Que - 17

// const food = ['🍕', '🍫', '🥑', '🍔'];
//     const info = { favoriteFood: food[0] };

//     info.favoriteFood = '🍝';
// // console.log(info);
//     console.log(food);

// Que - 18

// const colorConfig = {
//     red: true,
//     blue: false,
//     green: true,
//     black: true,
//     yellow: false,
//     };

//     const colors = ['pink', 'red', 'blue'];

//     console.log(colorConfig.colors[1]);

// Que - 19

// function nums(a, b) {
//     if (a > b) console.log('a is bigger');
//     else console.log('b is bigger');
//     return
//     a + b;
//     }

//     console.log(nums(4, 2));
//     console.log(nums(1, 2));

// Que- 20

// const person = {
//     name: 'Lydia',
//     age: 21,
//     };

//     for (const [x, y] of Object.entries(person)) {
//     console.log(x, y);
//     }

