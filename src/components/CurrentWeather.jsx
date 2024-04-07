import React from 'react'
import { useSelector } from 'react-redux'
import timeConverter from '../utils/unixTimeConverter';
import findBG from '../utils/findBackground';
import findIcon from '../utils/findIcon';

export default function CurrentWeather() {
  const weatherData = useSelector((state) => state.weather)
  const {data, pod, name, country} = weatherData
  const {temp : {day, max, min}, weather : [{description, main}], dt, } = data
  const countryFlag = `https://flagsapi.com/${country}/flat/64.png`
  const bgUrl = findBG(pod,description)
  const iconUrl = findIcon(pod, main)
  return (
    <div className="currentWeather" style={{ backgroundImage: `url(${bgUrl})` }}>
      <div className="location">
        <h3>{name}, {country}, <img src={countryFlag} alt="flag" className='countryFlag' /></h3>
        <p>{timeConverter(dt)}</p>
      </div>
      <div className="tempDetail">
        <div>
          <p className='temp'>{Math.trunc(day)}ºc</p>
          <p className='tempMaxMin'>{Math.trunc(min)}ºc / {Math.trunc(max)}ºc</p>
          <p className='description'>{description}</p>
        </div>
        <img src={iconUrl} alt="" className='weatherIcon' />
      </div>
    </div>
  )
}
