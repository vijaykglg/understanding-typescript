type Combinable = number | string;//This is Type Alias
type CombinableResult = 'as-number' | 'as-text';//This is Type Alias
type User = { name: string; age: number };//We can define our own type and use it to declare variables

function greet(user: User) { 
     console.log('Hi, I am ' + user.name +' and my age is '+user.age);
} 

function isOlder(user: User, checkAge: number) { 
     return checkAge > user.age;
    
}

greet({ name: 'Vijay', age: 30 });
const result = isOlder({ name: 'Vijay', age: 30 },25);
console.log(result);

function combine(input1: Combinable,input2: Combinable, resultConversion: CombinableResult){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2;
    }else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30,26,'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30','26','as-number');
console.log(combinedStringAges);

const combinedNames = combine('Vijay','Kumar','as-text');
console.log(combinedNames);