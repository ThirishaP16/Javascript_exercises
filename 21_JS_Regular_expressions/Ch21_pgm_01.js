// Write a pattern which identify if a string is a valid JavaScript variable

// is_valid_variable('first_name') # True
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True
function is_valid_variable(variableName) {
    const validVariablePattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

   
    return validVariablePattern.test(variableName);
}



console.log(is_valid_variable('first_name')); // true
console.log(is_valid_variable('first-name')); // false
console.log(is_valid_variable('1first_name')); // false
console.log(is_valid_variable('firstname')); // true