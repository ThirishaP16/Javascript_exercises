// Level 2

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

const totalPrice = products
  .filter(product => typeof product.price === 'number' && !isNaN(product.price))
  .map(product => product.price)
  .reduce((acc, curr) => acc + curr, 0);

console.log('Total Price of Products:', totalPrice);

const totalPriceReduce = products.reduce((acc, curr) => {
    if (typeof curr.price === 'number' && !isNaN(curr.price)) {
      return acc + curr.price;
    } else {
      return acc;
    }
  }, 0);

  console.log('Total Price of Products (Reduce):', totalPriceReduce);

  const categorizeCountries = () => {
    const patterns = ['land', 'ia', 'island', 'stan'];
    return countries.filter(country => patterns.some(pattern => country.toLowerCase().includes(pattern)));
  };

  console.log('Categorized Countries:', categorizeCountries());

  const getInitialLettersFrequency = () => {
    const letterFrequency = {};
    countries.forEach(country => {
      const initial = country.charAt(0).toUpperCase();
      letterFrequency[initial] = letterFrequency[initial] ? letterFrequency[initial] + 1 : 1;
    });

    return Object.entries(letterFrequency).map(([letter, count]) => ({ letter, count }));
  };

  console.log('Initial Letters Frequency:', getInitialLettersFrequency());

  const getFirstTenCountries = () => countries.slice(0, 10);

console.log('First Ten Countries:', getFirstTenCountries());

const getLastTenCountries = () => countries.slice(-10);

console.log('Last Ten Countries:', getLastTenCountries());


const getMostFrequentInitialLetter = () => {
    const letterFrequency = {};
    countries.forEach(country => {
      const initial = country.charAt(0).toUpperCase();
      letterFrequency[initial] = letterFrequency[initial] ? letterFrequency[initial] + 1 : 1;
    });

    let mostFrequentLetter = '';
    let maxCount = 0;

    Object.entries(letterFrequency).forEach(([letter, count]) => {
      if (count > maxCount) {
        mostFrequentLetter = letter;
        maxCount = count;
      }
    });

    return mostFrequentLetter;
  };

  console.log('Most Frequent Initial Letter:', getMostFrequentInitialLetter());
// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
// 2. Find the sum of price of products using only reduce reduce(callback))
// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
// 4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
// 5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
// 6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
// 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)