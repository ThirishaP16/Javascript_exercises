const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

const union = [...new Set([...a, ...b])];


const intersection = a.filter(value => b.includes(value));


const difference = a.filter(value => !b.includes(value));

console.log("Union of a and b:", union);
console.log("Intersection of a and b:", intersection);
console.log("Elements in a but not in b:", difference);


const differenceB = b.filter(value => !a.includes(value));
console.log("Elements in b but not in a:", differenceB);


const countriesIntersection = countries.filter(country => ['Sweden', 'Norway'].includes(country));
console.log("Intersection of countries with Sweden and Norway:", countriesIntersection);

// Find a union b
// Find a intersection b
// Find a with b