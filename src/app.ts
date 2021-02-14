
interface Named{
    readonly name: string;
}

interface Greetable extends Named{
    greet(phrase: string): void;
}

class Person implements Greetable{
    name: string;
    age = 30;
    constructor(name: string){
        this.name = name;
    }

    greet(phrase: string){
        console.log(phrase +' '+this.name);
    }
}

let user1: Greetable;
user1 = new Person('VIJAY GUPTA');
user1.greet('Hi There - I am');

let user2: Greetable;
user2 = new Person('KUMAR');
user2.greet('Hi There - I am');

console.log(user1 === user2);//gives false
console.log(user1 instanceof Person);
