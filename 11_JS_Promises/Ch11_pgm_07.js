// Read the cats api and find the average weight of cat in metric unit.
// Read the countries api and find out the 10 largest countries
// Read the countries api and count total number of languages in the world used as officials.

const catsAPI = 'https://api.thecatapi.com/v1/breeds';

fetch(catsAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Filter out cats with weight information
    const catsWithWeight = data.filter(cat => cat.weight.metric);

    // Calculate the total weight and count of cats with weight information
    const totalWeight = catsWithWeight.reduce((acc, cat) => acc + parseFloat(cat.weight.metric), 0);
    const count = catsWithWeight.length;

    // Calculate average weight in grams
    const averageWeight = totalWeight / count;

    console.log(`Average weight of a cat (metric): ${averageWeight.toFixed(2)} grams`);
  })
  .catch(error => console.error('There was a problem fetching the data:', error));

  const countriesAPI = 'https://restcountries.com/v2/all';

fetch(countriesAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Sort countries by area in descending order
    data.sort((a, b) => b.area - a.area);

    // Get the top 10 largest countries
    const largestCountries = data.slice(0, 10);

    // Print out the names of the largest countries
    console.log('Top 10 largest countries by area:');
    largestCountries.forEach((country, index) => {
      console.log(`${index + 1}. ${country.name} - Area: ${country.area.toLocaleString()} square kilometers`);
    });
  })
  .catch(error => console.error('There was a problem fetching the data:', error));

    fetch(countriesAPI)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Initialize an empty Set to store unique languages
      const officialLanguages = new Set();
  
      // Iterate through each country and add its official languages to the Set
      data.forEach(country => {
        if (country.languages && country.languages.length > 0) {
          country.languages.forEach(language => {
            if (language.official) {
              officialLanguages.add(language.name);
            }
          });
        }
      });
  
      // Count the total number of unique official languages
      const totalLanguages = officialLanguages.size;
  
      console.log(`Total number of official languages in the world: ${totalLanguages}`);
    })
    .catch(error => console.error('There was a problem fetching the data:', error));
  