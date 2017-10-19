'use script';

// 1. Object Literal
// var dog = {
//     name: 'Barney',
//     race: 'beagle',
//     speak: function() { console.log('Woof!') }
// }


// 2. Using Constructors with the new keyword
// function Dog(name, race) {
//     this.name = name
//     this.race = race
// }

// var dog = new Dog('Barney', 'Beagle');
// console.log(dog);


// 3. Using Object.create()
// var dog = Object.create(Object.prototype,
//     {
//         name: {
//             value: 'Barney',
//             enumerable: true,
//             writable: true,
//             configurable: true
//         },
//         race: {
//             value: 'Beagle',
//             enumerable: true,
//             writable: true,
//             configurable: true
//         }
//     })
// console.log(dog);


// 4. ES6 Class Constructor
class Dog {
    constructor(name, race) {
        this.name = name
        this.race = race
    }

    // Method
    speak() {
        console.log('Woof!')
    }
}

var dog = new Dog('Rufus', 'Dalmata')

console.log(dog)
