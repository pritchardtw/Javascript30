let searchBox = document.querySelector('.search');
let suggestions = document.querySelector('.suggestions');
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let cities = [];

function handleChange(e) {
  let regex = new RegExp(e.target.value, 'gi');
  cities = cities.map(city => {
    city.population = numberWithCommas(city.population);
    return city;
  });
  let filteredCities = cities.filter(city => {
    return (city.city.match(regex) || city.state.match(regex) || city.population.match(regex));
  });
  updateCities(filteredCities, e.target.value);
}

searchBox.oninput = handleChange;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function updateCities(cities, matcher) {
  suggestions.innerHTML = "<li>Filter for a city</li> <li>or a state</li>"
  cities.forEach(city => {
    let regex = new RegExp(matcher, 'gi');
    let cityName = city.city.replace(regex, `<span class='hl'>${matcher}</span>`);
    let cityState = city.state.replace(regex, `<span class='hl'>${matcher}</span>`);
    let cityPop = city.population.replace(regex, `<span class='hl'>${matcher}</span>`);

    let cityLi = document.createElement('li');
    cityLi.innerHTML = `<span class="name">${cityName}, ${cityState}</span> <span class="population">${numberWithCommas(cityPop)}</span>`;
    suggestions.appendChild(cityLi);
  });
}

fetch(endpoint)
.then(response => {
  response.json()
  .then(data => {
    cities = cities.concat(data);
    cities = cities.map(city => {
      city.population = numberWithCommas(city.population);
      return city;
    });
    updateCities(cities, '');
  })
});
