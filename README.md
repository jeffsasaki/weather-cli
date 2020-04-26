# Simple Weather CLI

## Description: 
A command-line interface for getting the temperature for the given city or zip code. Data pulled from Open Weather Map.

## Installation:
- `npm i`

## Usage:
`node weather.js`

## Assumptions:
- Zipcode will always be a 5-digit number (no dashes, no alphabets).
- Assume the given arguments are either city names or zip codes. The library will not look for countries, states, neighbourhood, etc.
- `.env` file included for testing purpose.
