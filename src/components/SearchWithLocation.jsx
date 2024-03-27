import React from 'react'
import { FaSearchLocation } from "react-icons/fa";
import { fetchWeatherWithLatLon } from '../redux/features/weatherSlice';
import { useDispatch } from 'react-redux';
export default function SearchWithLocation() {
  const dispatch = useDispatch();
  const showPosition = (position) => {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const coordinats = [lat, lon]
    dispatch(fetchWeatherWithLatLon(coordinats))
  }
  // Search with your location 
  return (
    <button type='submit' className='searchLocationBtn' onClick={() => navigator.geolocation.getCurrentPosition(showPosition)}><span className='findLocationText'>Find your location</span><FaSearchLocation /></button>
  )
}
