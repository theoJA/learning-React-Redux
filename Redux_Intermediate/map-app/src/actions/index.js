import axios from 'axios' // library for making ajax reqs

const API_KEY = '022a30ffb00cf55be334d97bbe64088d'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

// we are going to be making an action creator that will be responsible for creating 
//  an ajax request

export const FETCH_WEATHER = 'FETCH_WEATHER'

// asynchronous in nature
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url) // take the const url and make a get request on it
  // on line above, we made a promise called, request

  //console.log('Request:', request)
  // (this console log is good for seeing what request contains)

  return {
    type: FETCH_WEATHER,
    payload: request // promise is returned here as the payload
  }
}