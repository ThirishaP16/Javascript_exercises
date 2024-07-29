const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]



const countries = [
    { name: 'Finland', languages: ['Finnish', 'Swedish'] },
    { name: 'Sweden', languages: ['Swedish'] },
    { name: 'Norway', languages: ['Norwegian'] },
  
  ];
  

  function countUniqueLanguages(countries) {
    const languagesSet = new Set();
    countries.forEach(country => {
      country.languages.forEach(language => {
        languagesSet.add(language);
      });
    });
    return languagesSet.size;
  }
  

  function mostSpokenLanguages(countries, N) {

    const languageCounts = countries.reduce((counts, country) => {
      country.languages.forEach(language => {
        counts[language] = (counts[language] || 0) + 1;
      });
      return counts;
    }, {});
  

    const sortedLanguages = Object.entries(languageCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, N)
      .map(([language, count]) => ({ [language]: count }));
  
    return sortedLanguages;
  }
  
 
  console.log("Number of unique languages:", countUniqueLanguages(countries));
  console.log("Top 10 most spoken languages:", mostSpokenLanguages(countries, 10));
  console.log("Top 3 most spoken languages:", mostSpokenLanguages(countries, 3));
  
// How many languages are there in the countries object file.

// *** Use the countries data to find the 10 most spoken languages:


//    // Your output should look like this
//    console.log(mostSpokenLanguages(countries, 10))
//    [
//      { English: 91 },
//      { French: 45 },
//      { Arabic: 25 },
//      { Spanish: 24 },
//      { Russian: 9 },
//      { Portuguese: 9 },
//      { Dutch: 8 },
//      { German: 7 },
//      { Chinese: 5 },
//      { Swahili: 4 },
//      { Serbian: 4 }
//    ]

//   // Your output should look like this
//   console.log(mostSpokenLanguages(countries, 3))
//   [
//   {English:91},
//   {French:45},
//   {Arabic:25}
//   ]