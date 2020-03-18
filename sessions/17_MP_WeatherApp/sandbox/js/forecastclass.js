class WeatherReport{
  constructor(){
    this.key = 'xGAI5gxGP3LtbT5jVZpUPQN41lXKAoc3';
    this.weatherPath = 'http://dataservice.accuweather.com/currentconditions/v1/';
    this.cityPath = `http://dataservice.accuweather.com/locations/v1/cities/search`; 
  }
  async updateCity(city){
    //console.log(city);
    const cityDets = await this.getCity(city);
    const weather = await this.getWeather(cityDets.Key);  
    return { cityDets,weather }
  }

  async getCity(city){
    const query = `?apikey=${this.key}&q=${city}`;  
    const response = await fetch(this.cityPath + query);
    const data = await response.json();  
    return data[0];
  }

  async getWeather(id){
    const query = `${id}?apikey=${this.key}`;  
    const response = await fetch(this.weatherPath + query);
    const data = await response.json();  
    // console.log(data);
    return data[0];
  }
}
