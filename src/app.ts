type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;//Intersection Type containes the common fileds 

const e1: ElevatedEmployee = {
    name: 'Vijay',
    privileges: [''],
    startDate: new Date()
};

type CombinableType = String | number;
type Numeric = number | boolean;

type Universal = CombinableType & Numeric;//Interctions Type for primitive data types.

