// Sample data
const firstName = 'Anne';
const age = 20;
const country = 'India';
const city = 'Chennai';


localStorage.setItem('Name', firstName);
localStorage.setItem('age', age);
localStorage.setItem('country', country);
localStorage.setItem('city', city);


const student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 25,
    skills: ['HTML', 'CSS', 'JavaScript'],
    country: 'Canada',
    enrolled: true
};

localStorage.setItem('student', JSON.stringify(student));


function createPersonAccount(firstName) {
    let incomes = [];
    let expenses = [];

    function addIncome(description, amount) {
        incomes.push({ description, amount });
        localStorage.setItem('incomes', JSON.stringify(incomes)); // Store incomes in localStorage
    }


    function addExpense(description, amount) {
        expenses.push({ description, amount });
        localStorage.setItem('expenses', JSON.stringify(expenses)); // Store expenses in localStorage
    }


    function totalIncome() {
        return incomes.reduce((total, item) => total + item.amount, 0);
    }


    function totalExpense() {
        return expenses.reduce((total, item) => total + item.amount, 0);
    }

    function accountInfo() {
        return `${firstName} ${lastName}'s account:\nTotal Income: ${totalIncome()}\nTotal Expense: ${totalExpense()}`;
    }


    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    return { firstName, incomes, expenses, addIncome, addExpense, totalIncome, totalExpense, accountInfo, accountBalance };
}


const maxAccount = createPersonAccount('Max');


maxAccount.addIncome('Salary', 3000);
maxAccount.addIncome('Petrol', 1000);
maxAccount.addExpense('Rent', 1200);
maxAccount.addExpense('Food', 300);


localStorage.setItem('maxAccount', JSON.stringify(maxAccount));
// Level 1

// Store you first name, last name, age, country, city in your browser localStorage.


// Level 2

// Create a student object. The student object will have first name, last name, age, skills, 
// country, enrolled keys and values for the keys. Store the student object in your browser 
// localStorage.


// Level 3

// Create an object called personAccount. It has firstname, lastname, incomes, expenses 
// properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and 
// accountBalance methods. Incomes is a set of incomes and its description and expenses is 
// also a set of expenses and its description.