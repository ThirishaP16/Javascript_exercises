const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Read the countries API using fetch and print the name of country, capital, languages, 
// population and area.

const countriesAPI = 'https://restcountries.com/v2/all';

fetch(countriesAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    data.forEach(country => {
      const { name, capital, languages, population, area } = country;
      console.log(`
        Country: ${name}
        Capital: ${capital}
        Languages: ${languages.map(lang => lang.name).join(', ')}
        Population: ${population.toLocaleString()}
        Area: ${area.toLocaleString()} square kilometers
        -------------------------------
      `);
    });
  })
  .catch(error => console.error('There was a problem fetching the data:', error));
// Read the countries API using fetch and print the name of country, capital, languages, 
// population and area.