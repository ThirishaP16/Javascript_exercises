// Level 1

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


// 1. Explain the difference between forEach, map, filter, and reduce.
// 2. Define a callback function before you use it in forEach, map, filter or reduce.
// 3. Use forEach to console.log each country in the countries array.
// 4. Use forEach to console.log each name in the names array.
// 5. Use forEach to console.log each number in the numbers array.
// 6. Use map to create a new array by changing each country to uppercase in the countries array.
// 7. Use map to create an array of countries length from countries array.
// 8. Use map to create a new array by changing each number to square in the numbers array
// 9. Use map to change to each name to uppercase in the names array
// 10. Use map to map the products array to its corresponding prices.
// 11. Use filter to filter out countries containing land.
// 12. Use filter to filter out countries having six character.
// 13. Use filter to filter out countries containing six letters and more in the country array.
// 14. Use filter to filter out country start with 'E';
// 15. Use filter to filter out only prices with values.
// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
// 17. Use reduce to sum all the numbers in the numbers array.
// 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
// 19. Explain the difference between some and every
// 20. Use some to check if some names' length greater than seven in names array
// 21. Use every to check if all the countries contain the word land
// 22. Explain the difference between find and findIndex.
// 23. Use find to find the first country containing only six letters in the countries array
// 24. Use findIndex to find the position of the first country containing only six letters in the countries array
// 25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
// 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

countries.forEach(country => console.log(country));
names.forEach(name => console.log(name));
numbers.forEach(number => console.log(number));
const countriesUpperCase = countries.map(country => country.toUpperCase());
console.log(countriesUpperCase);
const countriesLength = countries.map(country => country.length);
console.log(countriesLength);
const numbersSquared = numbers.map(number => number ** 2);
console.log(numbersSquared);
const namesUpperCase = names.map(name => name.toUpperCase());
console.log(namesUpperCase);
const productPrices = products.map(product => product.price);
console.log(productPrices);
const countriesWithLand = countries.filter(country => country.includes('land'));
console.log(countriesWithLand);
const countriesWithSixChars = countries.filter(country => country.length === 6);
console.log(countriesWithSixChars);
const countriesWithSixOrMoreLetters = countries.filter(country => country.length >= 6);
console.log(countriesWithSixOrMoreLetters);
const countriesStartingWithE = countries.filter(country => country.startsWith('E'));
console.log(countriesStartingWithE);
const validPrices = products.filter(product => typeof product.price === 'number' && !isNaN(product.price));
console.log(validPrices);
function getStringLists(arr) {
    return arr.filter(item => typeof item === 'string');
}

console.log(getStringLists([1, 'hello', true, 'world'])); // Output: ['hello', 'world']
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
const countriesSentence = countries.reduce((acc, curr, index) => {
    if (index === countries.length - 1) {
        return acc + ' and ' + curr;
    } else {
        return acc + ', ' + curr;
    }
}, 'Estonia');
console.log(`${countriesSentence} are north European countries`);

const hasNamesGreaterThanSeven = names.some(name => name.length > 7);
console.log(hasNamesGreaterThanSeven);
const allCountriesContainLand = countries.every(country => country.includes('land'));
console.log(allCountriesContainLand);
const countryWithSixLetters = countries.find(country => country.length === 6);
console.log(countryWithSixLetters);
const indexCountryWithSixLetters = countries.findIndex(country => country.length === 6);
console.log(indexCountryWithSixLetters);
const indexNorway = countries.findIndex(country => country === 'Norway');
console.log(indexNorway);

const indexRussia = countries.findIndex(country => country === 'Russia');
console.log(indexRussia);