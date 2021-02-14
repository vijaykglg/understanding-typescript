class Department{
    //we can use constructor to define the class fields directly
    /* private id: string;
    private name: string; */
    protected employees: string[] = [];

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

class ITDepartment extends Department{
    admins: string[];//this class field is specific to ITDepartment class
    constructor(id: string,admins: string[]){
        super(id,'IT');
        this.admins = admins;
    }
}

const accounting = new Department('d1','Accounting');
accounting.describe();
accounting.addEmployee('Vijay');
accounting.addEmployee('Kumar');

//accounting.employees[2] = 'Gupta';//If not private then we can access the filed out side of the class

accounting.printEmployees();

const itDepartment = new ITDepartment('d1',['Max']);
itDepartment.describe();
itDepartment.addEmployee('Max');
itDepartment.addEmployee('Milan');

//accounting.employees[2] = 'Gupta';//If not private then we can access the filed out side of the class

itDepartment.printEmployees();
console.log(itDepartment);

class AccountingDepartment extends Department{
    private lastReport: string;

    get getLastReport(){
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error('No Report Found!!');
    }

    set setLastReport(value: string){
        if(!value){
            throw new Error('Please enter a valid value');
        }
        this.addReports(value);
    }

    constructor(id: string,public reports: string[]){
        super(id,'Accounting');
        this.lastReport = reports[0];
    }

    addEmployee(employee: string){
        if(employee !== 'Max'){
            this.employees.push(employee);    
        }
    }

    addReports(text: string){
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports(){
        console.log(this.reports);
    }
}

const accountingDept = new AccountingDepartment('d2',[]);
accountingDept.addEmployee('Trump');
accountingDept.addEmployee('Milenia');
accountingDept.addEmployee('Max');//This will not be added to the employee array

accountingDept.addReports('Something went wrong...');
accountingDept.getLastReport;
accountingDept.setLastReport = 'Year End Report';
accountingDept.printReports();
console.log(accountingDept);

/* 'this' refers to the calling object.
If you assign your class method to another copy object then 'this' will not be able to read the fields which is not available in your copied object. */

/* const accountingCopy = {name: 'DUMMY',describe: accounting.describe};//Added name property to match the Department class
accountingCopy.describe();//This will give undefined */