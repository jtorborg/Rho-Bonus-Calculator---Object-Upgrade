var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];


//Constructor
function Person(name, employeeNum, salary, rating) {
    this.name = name;
    this.employeeNum = employeeNum;
    this.salary = salary;
    this.rating = rating;
}

var atticus = new Person("Atticus", "2405", "47000", 3);
var jem = new Person("Jem", "62347", "63500", 4);
var boo = new Person("Boo", "11435", "54000", 3);
var scout = new Person("Scout", "6243", "74750", 5);

var employees = [atticus, jem, boo, scout];
console.log(atticus);
console.log(jem);
console.log(boo);
console.log(scout);



for (var i = 0; i < employees.length; i++) {
    var report = employeeReport(employees);
}

//function that takes in a single employee
function employeeReport(employee) {
    //assign index for employee name to variable
    var employeeName = employee[i].name;
    console.log(employeeName);
    //assign index for employee id to variable
    var employeeId = employee[i].employeeNum;
    console.log(employeeId);
    //assign index for employee salary to variable
    var employeeSalary = parseInt(employee[i].salary);
    console.log(employeeSalary);
    //assign index for employee rating to variable
    var employeeRating = employee[i].rating;
    console.log(employeeRating);
    var bonus = 0;
    //
    console.log("Employee Name", employeeName);
    console.log("Employee ID", employeeId);
    console.log("Employee Salary", employeeSalary);
    console.log("Employee Rating", employeeRating);

    //returns another array
    var newArray = [];

    //first index should also contain the employee's name
    newArray[0] = employeeName;

    //second index should contain the bonus percentage
    bonus = calcBonus(employeeId, employeeSalary, employeeRating);

    newArray[1] = bonus;

    //third index should be adjusted annual compensation (base annual + bonus)
    newArray[2] = employeeSalary + (employeeSalary * employeeBonusPercent);
    //fourth index should be the employee's total bonus rounded to nearest dollar
    newArray[3] = Math.round(employeeSalary * employeeBonusPercent);
    console.log(newArray);
    return newArray;

}

function calcBonus(employeeId, employeeSalary, employeeRating) {

    var employeeBonus = 0;


    switch (employeeRating) {
        case 0:
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            employeeBonusPercent = .04;
            break;
        case 4:
            employeeBonusPercent = .06;
            break;
        case 5:
            employeeBonusPercent = .1;
            break;
        default:
            console.log("No bonus.");
            break; //break statement optional on default case
    }

    if (employeeId.length <= 4) {
        employeeBonusPercent = employeeBonusPercent + .05;
    }
    if (employeeSalary > 65000) {
        employeeBonusPercent = employeeBonusPercent - .01;
    }
    if (employeeBonusPercent >= 0.13) {
        employeeBonusPercent = 0.13;
    }
    console.log("Employee Bonus Percent", employeeBonusPercent);
    return employeeBonusPercent;

}
