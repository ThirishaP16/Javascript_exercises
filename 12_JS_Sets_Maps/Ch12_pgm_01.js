const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
const emptySet = new Set();


const numberSet = new Set();
for (let i = 0; i <= 10; i++) {
    numberSet.add(i);
}

numberSet.delete(5);
emptySet.clear(); 
const countrySet = new Set(countries.slice(0, 5));
const countryMap = new Map();
countries.forEach(country => {
    countryMap.set(country, country.length);
});

console.log(emptySet);
console.log(numberSet);
console.log(countrySet);
console.log(countryMap);



// create an empty set
// Create a set containing 0 to 10 using loop
// Remove an element from a set
// Clear a set
// Create a set of 5 string elements from array
// Create a map of countries and number of characters of a country