var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];



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


console.log(atticus);
console.log(jem);
console.log(boo);
console.log(scout);

function calcBonus(person) {
    var employeeName = person.name;
    var employeeNumber = person.employeeNum;
    var employeeSalary = person.salary;
    var employeeRating = person.rating;
    var employeeBonus;

    console.log('Employee Name:', employeeName);
    console.log('Employee Number:', employeeNumber);
    console.log('Employee Salary:', employeeSalary);
    console.log('Employee Rating:', employeeRating);

    switch (employeeRating) {
        case 0:
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            employeeBonus = .04;
            break;
        case 4:
            employeeBonus = .06;
            break;
        case 5:
            employeeBonus = .1;
            break;
        default:
            console.log("I have no idea what the bonus is.");
            break; //break statement optional on default case
    }

    if (employeeNumber.length <= 4) {
        employeeBonus = employeeBonus + .05;
    }
    if (employeeSalary > 65000) {
        employeeBonus = employeeBonus - .01;
    }
    if (employeeBonus >= .13) {
        employeeBonus = 0.13;
    }
    console.log("Employee Bonus", employeeBonus);
}

//iterate through array and call function
calcBonus(atticus);
calcBonus(jem);
calcBonus(boo);
calcBonus(scout);
