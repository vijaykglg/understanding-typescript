class Department{
    //we can use constructor to define the class fields directly
    /* private id: string;
    private name: string; */
    private employees: string[] = [];

    constructor(private readonly id: string,public name: string){
        //this.name = s;
    }

    describe(this: Department){//To have extra layer of Type Safty we can add this refer line 20
        //console.log('Department: '+this.name);
        console.log(`Department - (${this.id}) : (${this.name})`);//other way of writing
    }

    addEmployee(employee: string){
        this.employees.push(employee);
    }

    printEmployees(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('d1','Accounting');
accounting.describe();
accounting.addEmployee('Vijay');
accounting.addEmployee('Kumar');

//accounting.employees[2] = 'Gupta';//If not private then we can access the filed out side of the class

accounting.printEmployees();


/* 'this' refers to the calling object.
If you assign your class method to another copy object then 'this' will not be able to read the fields which is not available in your copied object. */

/* const accountingCopy = {name: 'DUMMY',describe: accounting.describe};//Added name property to match the Department class
accountingCopy.describe();//This will give undefined */