const OpenWeather = require('./model/OpenWeather.js')
const locations = [
  'New York',
  '10005',
  'Tokyo',
  'São Paulo',
  'Pluto'
]

locations.forEach(loc => {
  new OpenWeather(loc).getTemperature()
})
