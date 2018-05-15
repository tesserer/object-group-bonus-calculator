const atticus = { name: 'Atticus', employeeNumber: '2405', annualSalary: '47000', reviewRating: 3 };
const jem = { name: 'Jem', employeeNumber: '62347', annualSalary: '63500', reviewRating: 4 };
const scout = { name: 'Scout', employeeNumber: '6243', annualSalary: '74750', reviewRating: 5 };
const robert = { name: 'Robert', employeeNumber: '26835', annualSalary: '66000', reviewRating: 1 };
const mayella = { name: 'Mayella', employeeNumber: '89068', annualSalary: '35000', reviewRating: 2 };

const employees = [ atticus, jem, scout, robert, mayella ];

class Employee{
  constructor( name, employeeNumber, annualSalary, reviewRating ){
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log( employees );
Skip to content
This repository

    Pull requests
    Issues
    Marketplace
    Explore

    @tesserer

0
0

    142

danross1/object-group-bonus-calculator forked from PrimeAcademy/object-group-bonus-calculator
Code
Pull requests 0
Projects 0
Wiki
Insights
object-group-bonus-calculator/client.js
9040f43 9 minutes ago
@danross1 danross1 first day work
@christopher-black
@LukeSchlangen
@kdszafranski
@danross1
@devjanaprime
executable file 73 lines (63 sloc) 2.25 KB
const atticus = { name: 'Atticus', employeeNumber: '2405', annualSalary: '47000', reviewRating: 3 };
const jem = { name: 'Jem', employeeNumber: '62347', annualSalary: '63500', reviewRating: 4 };
const scout = { name: 'Scout', employeeNumber: '6243', annualSalary: '74750', reviewRating: 5 };
const robert = { name: 'Robert', employeeNumber: '26835', annualSalary: '66000', reviewRating: 1 };
const mayella = { name: 'Mayella', employeeNumber: '89068', annualSalary: '35000', reviewRating: 2 };

const employees = [ atticus, jem, scout, robert, mayella ];

class Employee{
  constructor( name, bonusPercentage, totalCompensation, totalBonus ){
    this.name = name;
    this.bonusPercentage = bonusPercentage;
    this.totalCompensation = totalCompensation;
    this.totalBonus = totalBonus;
  } // end constructor
} // end Employee class

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log( employees );

// function enterEmployee(employee) {
//   if(employee.reviewRating === 3){
//     let bonusPercent = .04;
//     let bonus = employee.annualSalary * bonusPercent;
//   } else if(employee.reviewRating === 4){
//     let bonusPercent = .06;
//     let bonus = employee.annualSalary * bonusPercent;
//   } else if(employee.reviewRating === 5){
//     let bonusPercent = .1;
//     let bonus = employee.annualSalary * bonusPercent;
//   } else if()
//   return new Employee();
// }

function convertEmp(employee){
  let bonusPercent = bonusPercentage(employee.employeeNumber, employee.reviewRating, parseInt(employee.annualSalary));
  if(bonusPercent > .13){
    bonusPercent = .13;
  }
  let totalBonus = parseInt(employee.annualSalary) * bonusPercent;
  let totalCompensation = parseInt(employee.annualSalary) + totalBonus;
  return new Employee(employee.name, bonusPercent, totalCompensation, totalBonus);
}

function bonusPercentage(num, rating, salary){
  let bonusPercent;
  switch (rating) {
    case 1:
    case 2:
      bonusPercent = 0;
      break;
    case 3:
      bonusPercent = .04;
      break;
    case 4:
      bonusPercent = .06;
      break;
    case 5:
      bonusPercent = .1;
      break;
  } // end switch

  if(num.length === 4){
    bonusPercent += .05;
  }

  if(salary > 65000){
    bonusPercent -= .01;
  }
  return bonusPercent;
}  // end bonusPercent()

   
