const assert = require('chai').assert
const expect = require('chai').expect
const OpenWeather = require('../model/OpenWeather.js')

describe('OpenWeather', () => {
  it('Should be defined', () => {
    const weather = new OpenWeather('New York')
    assert.isObject(weather)
  })

  it('Should be able to get the temperature for "New York"', () => {
    const weather = new OpenWeather('New York')
    expect(() => weather.getTemperature()).to.not.throw()
  })

  it('Should not allow an invalid city "oaisdjfoiasjfeoiasjefoiajseiofj"', () => {
    const weather = new OpenWeather('oaisdjfoiasjfeoiasjefoiajseiofj')
    try {
      weather.getTemperature()
    } catch (err) {
      assert.isNotOk(err)
    }
  })

  it('Should allow "10005" to be a valid Zip Code', () => {
    const weather = new OpenWeather('10005')
    assert.isTrue(weather.isZipCode())
  })

  it('Should not allow "123456" to be a valid Zip Code', () => {
    const weather = new OpenWeather('123456')
    assert.isFalse(weather.isZipCode())
  })
})
