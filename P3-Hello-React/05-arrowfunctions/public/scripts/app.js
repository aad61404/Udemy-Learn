'use strict';

/* 
開發指令
babel src/playground/es6-arrowfunction.js --out-file=public/scripts/app.js --presets=env,react --watch
live-server public
*/

// argument object -- no longer bound with arrow functions
var add = function add(a, b) {
    console.log(argument); //RefernceError argument is not defined
    return a + b;
};

// this. keyword -- no longer bound
var user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    // printPlacesLived() 等同 => rintPlacesLived: function() { ...}
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + 'has lived in' + city;
        });
    }
};
// user.printPlacesLived();
// console.log(user.printPlacesLived())


// Challenge area

// const multiplier = { }
// console.log(multiplier.multiply()); // [1,2,3] 2 [2,4,6]


var multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (x) {
            return x * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply()); // [1,2,3] 2 [2,4,6]


/* 正確1.
    printPlacesLived() { 
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    },
*/

/* 正確2.
    printPlacesLived() { 
        const cityMessages = this.cities.map((city) => {
            return city + '!';
        });
        console.log(cityMessages);
        return cityMessages;
    },
*/

/* 正確3.
    printPlacesLived() { 
        return this.cities.map((city) => {
            console.log(this.name + 'has lived in' + city);
            return this.name + 'has lived in' + city;
        });
    },
*/

/* 以下為錯誤
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived: () => {
        // 此處printPlacesLived用 () => arrow function 會造成錯誤,this 不綁定,name is undefined
        this.cities.forEach((city) =>{
            console.log(that.name + ' has lived in ' + city);
        });
    },
*/

/*
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
        // read property 'name' of undefined
        this.cities.forEach(function(city){
            console.log(this.name + ' has lived in ' + city);
        });
    },
*/
