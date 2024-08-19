// Level 1

// Create a closure which has one inner function
function createClosure() {
    let outerVar = "I'm outside!";

    function innerFunction() {
        console.log(outerVar);
    }

    return innerFunction;
}
const innerFn = createClosure();
innerFn(); 

// Level 2

// Create a closure which has three inner functions
function createClosure() {
    let count = 0;

    function increment() {
        count++;
    }

    function decrement() {
        count--;
    }

    function getCount() {
        return count;
    }

    return {
        increment,
        decrement,
        getCount
    };
}

const counter = createClosure();
counter.increment();
counter.increment();
console.log(counter.getCount()); 
counter.decrement();
console.log(counter.getCount()); 

// Level 3
function personAccount(firstName, lastName) {
    let incomes = [];
    let expenses = [];

    function addIncome(description, amount) {
        incomes.push({ description, amount });
    }

    function addExpense(description, amount) {
        expenses.push({ description, amount });
    }

    function totalIncome() {
        let total = 0;
        for (let income of incomes) {
            total += income.amount;
        }
        return total;
    }

    function totalExpense() {
        let total = 0;
        for (let expense of expenses) {
            total += expense.amount;
        }
        return total;
    }

    function accountInfo() {
        return `${firstName} ${lastName} - Total Income: ${totalIncome()}, Total Expense: ${totalExpense()}`;
    }

    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    return {
        addIncome,
        addExpense,
        accountInfo,
        accountBalance
    };
}

const johnDoe = personAccount("John", "Doe");
johnDoe.addIncome("Salary", 3000);
johnDoe.addIncome("Freelance", 500);
johnDoe.addExpense("Rent", 1000);
johnDoe.addExpense("Groceries", 300);
console.log(johnDoe.accountInfo()); 
console.log(johnDoe.accountBalance()); 

// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner 
// variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and 
// accountBalance inner functions. Incomes is a set of incomes and its description and 
// expenses is also a set of expenses and its description.