/* const person: {
    name: string;
    age: number;
} = { */
const person = {
    name: "Vijay",
    age: 37,
    hobbies: ['Sports','Cooking'],
    role: [2,'Author']
}

person.role.push('Admin');//A person can have only one role but TypeScript won't know that
person.role[1] = 10;//role array of string and/or number but TypeScript won't know that second field is String
//To overcome this TypeScript have added another type which Tuple 

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}