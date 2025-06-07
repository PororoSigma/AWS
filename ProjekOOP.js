class Animal {
    constructor(name, age, isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

// 2. Class Rabbit yang mewarisi dari Animal
class Rabbit extends Animal {
    constructor(name, age) {
        super(name, age, true); // isMammal selalu true untuk Rabbit
    }
    
    eat() {
        return `${this.name} sedang makan!`;
    }
}

// 3. Class Eagle yang mewarisi dari Animal
class Eagle extends Animal {
    constructor(name, age) {
        super(name, age, false); // isMammal selalu false untuk Eagle
    }
    
    fly() {
        return `${this.name} sedang terbang!`;
    }
}

// 4. Instance dari class Rabbit
const myRabbit = new Rabbit("Labi", 2);

// 5. Instance dari class Eagle
const myEagle = new Eagle("Elo", 4);

// Testing the implementation
console.log("=== Testing Animal Classes ===");
console.log("myRabbit properties:");
console.log(`Name: ${myRabbit.name}`);
console.log(`Age: ${myRabbit.age}`);
console.log(`Is Mammal: ${myRabbit.isMammal}`);
console.log(`Action: ${myRabbit.eat()}`);

console.log("\nmyEagle properties:");
console.log(`Name: ${myEagle.name}`);
console.log(`Age: ${myEagle.age}`);
console.log(`Is Mammal: ${myEagle.isMammal}`);
console.log(`Action: ${myEagle.fly()}`);
