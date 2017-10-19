'use strict';

var dog = {
    name: { first: 'Barney', last: 'Coutinho' },
    race: 'Beagle'
}

// Writable Property
// Object.defineProperty(dog, 'name', { writable: false })
// console.log(Object.getOwnPropertyDescriptor(dog, 'name'));


// Enumerable Property
// Object.defineProperty(dog, 'name', { enumerable: true })

// for (var propertyName in dog) {
//     console.log(propertyName + ': ' + dog[propertyName]);
// }

// console.log(Object.keys(dog));
// console.log(JSON.stringify(dog));
// console.log(dog['name']);


// Configurable Property
// Object.defineProperty(dog, 'name', { configurable: true });


// Getters and Setters
Object.defineProperty(dog, 'fullname',
    {
        get: function() {
            return this.name.first + ' ' + this.name.last
        },
        set: function(value) {
            var nameParts = value.split(' ')
            this.name.first = nameParts[0]
            this.name.last = nameParts[1]
        }
    })

console.log(dog.fullname);