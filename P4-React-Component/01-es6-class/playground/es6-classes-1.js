// babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch

// Setup constructor to take name and age (default to 0)
// getDescription - Andrew Mead is 26 year(s) old.

class Person {
    constructor(name = 'Anonymous', age =0) {
        this.name = name || 'test';
        this.age = age
    }
    gretGretting() {
        // return 'Hi. I am' + this.name + '!';
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years(s) old`;p
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age); // 繼承Person的constructor ,包含預設值,不用再寫一次
        this.major = major;
    }
    hasMajor() {
        return !!this.major; // flip it twice , 避免 undefined
    }
    getDescription() {
        let description = super.getDescription(); // 此處使用super 繼承Function

        if (this.hasMajor()) {
            description += `This major is ${this.major}`
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.homeLocation) {
            greeting += `I am visiting from ${this.homeLocation}`
        }

        return greeting;
    }
}

// Traveler -> Person
// Add supert for homeLocation
// Override getGreeting
// 1.Hi I am Andrew Mead. I'm viviting from Philadephia
// 2.Hi I am Andrew Mead


const me = new Person('Andrew Mead', 26);
console.log(me.getDescription());

const ME2 = new Student('BBBBB YO', 26, 'Computer Science');
console.log('ME2', ME2)
console.log('ME2 hasMajor', ME2.hasMajor())
console.log('ME2 getDescription', ME2.getDescription())
console.log('--------------------------')
console.log('--------------------------')

const other = new Person();
const Other2 = new Traveler(undefined, undefined, 'Nowhere');
console.log('other ',other);
console.log('Other2:', Other2)
console.log('other gretGretting', other.gretGretting());


