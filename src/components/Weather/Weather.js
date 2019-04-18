import React, { Component } from 'react'

class Weather extends Component {
  render() {
    return (
      <div className="weather__info">
        {this.props.info.city && this.props.info.country && <p className="weather__key">Location: <span className="weather__value">{this.props.info.city}, {this.props.info.country}</span></p>}
        {this.props.info.temperature && <p className="weather__key">Temperature: <span className="weather__value">{this.props.info.temperature} &deg;C</span></p>}
        {this.props.info.humidity && <p className="weather__key">Humidity: <span className="weather__value">{this.props.info.humidity} %</span></p>}
        {this.props.info.description && <p className="weather__key">Conditions: <span className="weather__value">{this.props.info.description}</span></p>}
        {this.props.info.windSpeed && <p className="weather__key">Wind speed: <span className="weather__value">{this.props.info.windSpeed} m/s</span></p>}
        {this.props.info.minTemp && <p className="weather__key">Min. temperature: <span className="weather__value">{this.props.info.minTemp} &deg;C</span></p>}
        {this.props.info.maxTemp && <p className="weather__key">Max. temperature: <span className="weather__value">{this.props.info.maxTemp} &deg;C</span></p>}
      </div>
    )
  }
}

export default Weather;