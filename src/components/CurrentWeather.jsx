import React from 'react'
import { useSelector } from 'react-redux'
import { getDate } from '../utils/getDate'
import { dayBG, nightBG } from '../images/weatherbackground';
import { dayIcon, nightIcon } from '../images/weathericon';

export default function CurrentWeather() {
  const data = useSelector((state) => state.weather.data)
  const cityName = useSelector((state) => state.weather.name)
  const country = useSelector((state) => state.weather.country);
  const temp = data.main.temp;
  const temp_max = Math.round(data.main.temp_max);
  const temp_min = Math.round(data.main.temp_min);
  const description = data.weather[0].description;
  const main = data.weather[0].main;
  const partOfDay = data.sys.pod;
  const bg = partOfDay === "d" ? dayBG.find(item => item.name === description) : nightBG.find(item => item.name === description)
  const icon = partOfDay === "d" ? dayIcon.find(item => item.name === main) : nightIcon.find(item => item.name === main)
  return (
    <div className="currentWeather" style={{ backgroundImage: `url(${bg.url})` }}>
      <div className="location">
        <h3>{cityName}, {country}</h3>
        <p>{getDate()}</p>
      </div>
      <div className="tempDetail">
        <div>
          <p className='temp'>{Math.round(temp)}ºc</p>
          <p className='tempMaxMin'>{temp_min}ºc / {temp_max}ºc</p>
          <p className='description'>{description}</p>
        </div>
        <img src={icon.url} alt="" className='weatherIcon' />
      </div>
    </div>
  )
}
