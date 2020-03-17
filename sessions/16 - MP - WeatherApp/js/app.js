const form = document.querySelector('.location-change');
const card = document.querySelector('.card');
const cityName = document.querySelector('.city-name');
const weatherType = document.querySelector('.weather-type');
const temp = document.querySelector('.degs');
const time = document.querySelector('.time');


const generateUi = (data) => {

  //destructure data
  const {"LocalizedName": place,"PrimaryPostalCode" : zip, "Key" : key, "Rank" : rank, "Type" : type } = data.cityDets;
  const {"WeatherText" : conditions, "Link" : link, "WeatherIcon": icon} = data.weather;
  const { "Value" : degVal, "Unit": unit } = data.weather.Temperature.Imperial;
  
  if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
  }

  cityName.innerText = place;
  weatherType.innerText = conditions;
  temp.innerText = degVal;



  // console.log(data.cityDets);
  // console.log(data.cityDets);
};

const updateCity = async (city)=> {
  //console.log(city);
  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);

  return { cityDets,weather }
};

form.addEventListener('submit', (e)=> {
  e.preventDefault();


  //store form input
  const city = form.city.value.trim();
  form.reset();

  // console.log(city);
  
  // update city name
  updateCity(city)
    .then(data =>  generateUi(data))
    .catch(err => console.log(err));

  //set local storage
  localStorage.setItem('city', city);

});

if(localStorage.getItem('city')){
  updateCity(localStorage.getItem('city'))
    .then(data => generateUi(data))
    .catch(err => console.log(err));
}

