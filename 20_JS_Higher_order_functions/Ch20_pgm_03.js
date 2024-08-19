// Use the countries information, in the data folder. Sort countries by name, by capital, by population
// Example countries data
const countries = [
    {name: 'France', capital: 'Paris', population: 65273511, languages: ['French']},
    {name: 'Germany', capital: 'Berlin', population: 83783942, languages: ['German']},
    {name: 'Italy', capital: 'Rome', population: 60244639, languages: ['Italian']},
    {name: 'China', capital: 'Beijing', population: 1377422166, languages: ['Chinese']},
    {name: 'India', capital: 'New Delhi', population: 1295210000, languages: ['Hindi', 'English']},
    {name: 'United States of America', capital: 'Washington, D.C.', population: 323947000, languages: ['English']},
    {name: 'Indonesia', capital: 'Jakarta', population: 258705000, languages: ['Indonesian']},
    {name: 'Brazil', capital: 'Brasília', population: 206135893, languages: ['Portuguese']},
    {name: 'Pakistan', capital: 'Islamabad', population: 194125062, languages: ['Urdu', 'English']},
    {name: 'Nigeria', capital: 'Abuja', population: 186988000, languages: ['English']},
    {name: 'Bangladesh', capital: 'Dhaka', population: 161006790, languages: ['Bengali']},
    {name: 'Russia', capital: 'Moscow', population: 146599183, languages: ['Russian']},
    {name: 'Japan', capital: 'Tokyo', population: 126960000, languages: ['Japanese']}
];

// Sorting functions
const sortByName = (countries) => countries.slice().sort((a, b) => a.name.localeCompare(b.name));
const sortByCapital = (countries) => countries.slice().sort((a, b) => a.capital.localeCompare(b.capital));
const sortByPopulation = (countries) => countries.slice().sort((a, b) => b.population - a.population);

// Most spoken languages function
const mostSpokenLanguages = (countries, topN) => {
    const languageCounts = {};

    countries.forEach(country => {
        country.languages.forEach(language => {
            if (languageCounts[language]) {
                languageCounts[language]++;
            } else {
                languageCounts[language] = 1;
            }
        });
    });

    const sortedLanguages = Object.entries(languageCounts)
        .map(([language, count]) => ({country: language, count}))
        .sort((a, b) => b.count - a.count)
        .slice(0, topN);

    return sortedLanguages;
};

// Most populated countries function
const mostPopulatedCountries = (countries, topN) => {
    const sortedCountries = countries.slice().sort((a, b) => b.population - a.population);
    return sortedCountries.slice(0, topN).map(country => ({
        country: country.name,
        population: country.population
    }));
};

// Example usage
console.log("Sorted by name:", sortByName(countries));
console.log("Sorted by capital:", sortByCapital(countries));
console.log("Sorted by population:", sortByPopulation(countries));
console.log("Most spoken languages (top 10):", mostSpokenLanguages(countries, 10));
console.log("Most spoken languages (top 3):", mostSpokenLanguages(countries, 3));
console.log("Most populated countries (top 10):", mostPopulatedCountries(countries, 10));
console.log("Most populated countries (top 3):", mostPopulatedCountries(countries, 3));

// *** Find the 10 most spoken languages:

// Your output should look like this
console.log(mostSpokenLanguages(countries, 10))
[
{country: 'English',count:91},
{country: 'French',count:45},
{country: 'Arabic',count:25},
{country: 'Spanish',count:24},
{country:'Russian',count:9},
{country:'Portuguese', count:9},
{country:'Dutch',count:8},
{country:'German',count:7},
{country:'Chinese',count:5},
{country:'Swahili',count:4}
]

// Your output should look like this
console.log(mostSpokenLanguages(countries, 3))
[
{country: 'English',count: 91},
{country: 'French',count: 45},
{country: 'Arabic',count: 25}
]


// *** Use countries_data.js file create a function which create the ten most populated countries

console.log(mostPopulatedCountries(countries, 10))

[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000},
{country: 'Indonesia', population: 258705000},
{country: 'Brazil', population: 206135893},
{country: 'Pakistan', population: 194125062},
{country: 'Nigeria', population: 186988000},
{country: 'Bangladesh', population: 161006790},
{country: 'Russian Federation', population: 146599183},
{country: 'Japan', population: 126960000}
]

console.log(mostPopulatedCountries(countries, 3))
[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000}
]