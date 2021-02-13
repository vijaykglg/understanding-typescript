function add(n1: number,n2: number){
    return n1 + n2;
}

function printResult(num: number){
    console.log('Result is '+num);
}

printResult(add(10,15));

let combinedResult;
combinedResult = add;//Assign a function as a Type
printResult(combinedResult(10,15));//Call that function with variable name

//app.js:12 Uncaught TypeError: combinedResult is not a function
//combinedResult = 5;
//printResult(combinedResult(10,15));//Call that function with variable name

//Undefined
//combinedResult = printResult;//Assign a function as a Type
//printResult(combinedResult(10,15));//Call that function with variable name

//To overcome this we can define it Function type
let combinedValues: Function;
combinedValues = add;//Assign a function as a Type
printResult(combinedValues(15,15));//Call that function with variable name

//But since we have declared it as Function type means it can accept any funtion
combinedValues = printResult;
printResult(combinedValues(100));//Call that function with variable name

//To overcome this we can define it Function type
//Function Types are the types which defines the function regarding the parameters and the return type of that function.

let combine: (a: number,b: number) => number;
combine = add;
//combine = printResult;//It gives error now since combine can only accept function with two parameter and number as return type
printResult(combine(50,50));

//Call back function
function addAndHandle(n1: number,n2: number,cb: (num:number) => void){
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10,20,(result) => {
    console.log(result);
});

