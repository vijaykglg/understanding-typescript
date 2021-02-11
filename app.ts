/* const person: {
    name: string;
    age: number;
} = { */
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number,string];//To define Tuple type we need to define the type of object
} = {
    name: "Vijay",
    age: 37,
    hobbies: ['Sports','Cooking'],
    role: [2,'Author']
}

//person.role.push('Admin');//A person can have only one role but TypeScript won't know that
//person.role[1] = 10;//role array of string and/or number but TypeScript won't know that second field is String
//To overcome this TypeScript have added another type which Tuple 
//person.role = [5,'Admin','User'];//Its giving error as role is defined to have only two parameteres.

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}