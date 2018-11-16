/**
 * Question : 
 * Create an Employee class. If we want to store objects of this class in a Set to maintain a
 * unique list of employees - what should be done?
 */

class Employee {
    constructor(name, gender, role) {
        this.name = name;
        this.gender = gender;
        this.role = role;
    }
};


const employees = [];
employees.push(new Employee('Sathish Kumar', 'Male', 26));
employees.push(new Employee('Mirra', 'Female', 25));
employees.push(new Employee('Raja', 'Male', 26));
employees.push(new Employee('Ravi', 'Male', 28));
employees.push(new Employee('Steve', 'Male', 22));


function addEmployee(sample) {
    try {
        //check employee is already found or not 
        //if found throw error 
        if (isUniqueEmployee(sample))
            throw (`${sample.name} employee is already found!`);
        //if does not found push to employees array
        else {
            employees.push(sample);
            return employees;
        }
    } catch (error) {
        throw new Error(error);
    }
}

//check employees array already have this employee or not 
function isUniqueEmployee(employee) {
    let totalEmployees = employees.length;
    for (let i = 0; i < totalEmployees; i++) {
        if (employees[i].name.toLowerCase() == employee.name.toLowerCase()) {
            return true;
        }
    }
    return false;
}


let sample = new Employee('Mirra Amiritha', 'Male', 26);
console.log(addEmployee(sample));
