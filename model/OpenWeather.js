require('dotenv').config()
const fetch = require('node-fetch')
const API_KEY = process.env.OPEN_WEATHER_API_KEY
const API_ROOT = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&appid='

class OpenWeather {
  constructor (location) {
    this.location = location
    this.temperature = ''
  }

  /**
   * Set the temperature for the OpenWeather object
   * 
   * @param {string} temp
   * @returns void
   */
  setTemperature = temp => {
    this.temperature = temp
  }

  /**
   * Get the temperature for the OpenWeather object
   * 
   * @returns void
   */
  getTemperature = () => {
    const url = this.buildURL()
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(`${new Date().toLocaleTimeString()} - The current temperature in ${this.location} is ${data.main.temp}°F`)
        //this.setTemperature(data.main.temp)
      })
      .catch(err => console.log(`${new Date().toLocaleTimeString()} - ERROR: Cannot get temperature for ${this.location}`))
  }

  /**
   * Helper function to determine if the location is a zip code
   * 
   * @returns {boolean}
   */
  isZipCode = () => {
    return /^\d{5}$/.test(this.location)
  }
  
  /**
   * Helper function to build the final url prior to fetch
   * 
   * @returns {string}
   */
  buildURL = () => {
    const url = API_ROOT + API_KEY
    return encodeURI((
      this.isZipCode()
        ? `${url}&zip=${this.location}`
        : `${url}&q=${this.location}`
    ))
  }
}

module.exports = OpenWeather