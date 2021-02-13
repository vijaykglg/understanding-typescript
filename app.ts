let userInput: unknown;
let userName: String;

userInput = 5;
userInput = 'Five';

userName = 'Ten';
userInput = userName;//This gives not error, cause unknown can hold any type
console.log(userInput);

//userName = userInput;//This gives compilation error as userName can accept only string and not unknown type
if(typeof userInput === 'string'){
    userName = userInput;
}