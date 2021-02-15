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
    privileges: ['create-server'],
    startDate: new Date()
};

type CombinableType = string | number;
type Numeric = number | boolean;

type Universal = CombinableType & Numeric;//Interctions Type for primitive data types.


//================================ Types Gurds =================================

function add(a: CombinableType,b:CombinableType) {
    if(typeof a === 'string' || typeof b === 'string'){//This is Type Guard
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;//UnknownEmployee is either Employee or Admin
function printEmployeeInfo(emp: UnknownEmployee){
    console.log('Name: ' + emp.name);
    if('privileges' in emp){//Type Guard in case of objects defined using 'type'
        console.log('Privilege: '+emp.privileges);
    }

    if('startDate' in emp){ //Type Guard in case of objects defined using 'type'
        console.log('Start Date: '+emp.startDate);
    }
}

printEmployeeInfo(e1);


class Car {
    drive(){
        console.log('Driving .....');
    }
}

class Truck {
    drive(){
        console.log('Driving a Truck.....');
    }
    loadCargo(){
        console.log('Loading Cargo.....');
    }
}

const v1 = new Car();
const v2 = new Truck();

type Vehicle = Car | Truck;
function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    /* if('loadCargo' in vehicle){
        vehicle.loadCargo();
    } */

    //Other way to Type Guard in case of classes
    if(vehicle instanceof Truck){
        vehicle.loadCargo();
    }
        
}

useVehicle(v1);
useVehicle(v2);