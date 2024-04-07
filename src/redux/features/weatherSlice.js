import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
const APIKEY = import.meta.env.VITE_OPENWWEATHERMAP_API_KEY

async function fetchDataWithCityName(cityName) {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIKEY}&units=metric&cnt=6`)
  const data = response.data
  const hourly = response.data.list
  const {city : {name, country, coord : {lat, lon}}} = data
  const {sys : {pod}} = hourly[0]
  const {daily} = await fetchForecastData(lat, lon)
  return {
    name,
    country,
    pod,
    daily,
    hourly,
  }
}

async function fetchDataWithLatLon(coordinats) {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinats[0]}&lon=${coordinats[1]}&appid=${APIKEY}&units=metric&cnt=6`)
  const data = response.data
  const hourly = response.data.list
  const {city : {name, country}} = data
  const {sys : {pod}} = hourly[0]
  const {daily} = await fetchForecastData(coordinats[0], coordinats[1])
  return {
    name,
    country,
    pod,
    daily,
    hourly,
  }
}

async function fetchForecastData(lat, lon) {
  const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current%2C+minutely%2C+alerts&units=metric&appid=${APIKEY}`)
  const data = response.data
  const {daily} = data
  return {
    daily
  }
}

export const fetchWeatherWithCityName = createAsyncThunk("fetchWeatherWithCityName", async (cityName) => {
  const {name, country, pod, daily,hourly} = await fetchDataWithCityName(cityName)
  return {
    name,
    country,
    pod,
    daily,
    hourly
  }
})


export const fetchWeatherWithLatLon = createAsyncThunk("fetchWeatherWithLatLon", async (coordinats) => {
  const {name, country, pod, daily,hourly} = await fetchDataWithLatLon(coordinats)
  return {
    name,
    country,
    pod,
    daily,
    hourly
  }
}) 

const initialState = {
  name : "",
  country : "",
  data: null,
  hourlyData : null,
  nextDaysData : null,
  isLoading: false,
  isError: false,
  errorMsg: "",
  isLoaded: false,
  pod : null,
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherWithCityName.pending, (state) => {
      state.isLoading = true
      state.isError = false
    })
    builder.addCase(fetchWeatherWithCityName.fulfilled, (state, action) => {
      state.name = action.payload.name
      state.country = action.payload.country
      state.data = action.payload.daily[0]
      state.pod = action.payload.pod
      state.nextDaysData = action.payload.daily.slice(1, 6)
      state.hourlyData = action.payload.hourly.slice(1, 6)
      state.isLoading = false
      state.isLoaded = true
      state.isError = false
    })
    builder.addCase(fetchWeatherWithCityName.rejected, (state, action) => {
      state.isError = true
      state.isLoading = false
      if (action.error.message === "Request failed with status code 404") {
        state.errorMsg = "You have entered a wrong city name. Please try again."
      } else if (action.error.message === "Request failed with status code 429") {
        state.errorMsg = "You've made too many requests recently. Please wait and try your request again later."
      } else {
        state.errorMsg = "There was a problem receiving the data. Please try again."
      }
    })
    builder.addCase(fetchWeatherWithLatLon.pending, (state) => {
      state.isLoading = true
      state.isError = false
    })
    builder.addCase(fetchWeatherWithLatLon.fulfilled, (state, action) => {
      state.name = action.payload.name
      state.country = action.payload.country
      state.data = action.payload.daily[0]
      state.pod = action.payload.pod
      state.nextDaysData = action.payload.daily.slice(1, 6)
      state.hourlyData = action.payload.hourly.slice(1, 6)
      state.isLoading = false
      state.isLoaded = true
      state.isError = false
    })
    builder.addCase(fetchWeatherWithLatLon.rejected, (state, action) => {
      state.isError = true
      state.isLoading = false
      if (action.error.message === "Request failed with status code 404") {
        state.errorMsg = "You have entered an incorrect city name. Please try again."
      } else if (action.error.message === "Request failed with status code 429") {
        state.errorMsg = "You've made too many requests recently. Please wait and try your request again later."
      } else {
        state.errorMsg = "There was a problem receiving the data. Please try again."
      }
    })
    
  }
})

export default weatherSlice.reducer