import React, { Component } from 'react';
import './App.css';
import Title from '../Title/Title';
import Form from '../Form/Form';
import Weather from '../Weather/Weather';

const API_KEY = "8eceabea62da8bd886380d683289804e";

class App extends Component {
  state = {
    temperature: undefined,
    minTemp: undefined,
    maxTemp: undefined,
    windSpeed: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      minTemp: data.main.temp_min,
      maxTemp: data.main.temp_max,
      windSpeed: data.wind.speed,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    })
  }
  render() {
    return (
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-5 title-container">
                  <Title />
                </div>
                <div className="col-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather info={this.state} />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
