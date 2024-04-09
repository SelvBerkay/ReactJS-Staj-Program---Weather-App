import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import findBG from '../../utils/findBackground';
import findIcon from '../../utils/findIcon';
import { getFullTimeZone } from '../../utils/getTimeZone';
import { addCityToFavorites, removeCityToFavorites } from '../../redux/features/weatherSlice';
import { MdBookmarkRemove, MdBookmarkAdd } from "react-icons/md";
export default function CurrentWeather() {
  const weatherData = useSelector((state) => state.weather)
  const {data, pod, name, country, timezone, favorites} = weatherData
  const {temp : {day, max, min}, weather : [{description, main}]} = data
  const countryFlag = `https://flagsapi.com/${country}/flat/64.png`
  const dispatch = useDispatch();
  return (
    <div className="currentWeather" style={{ backgroundImage: `url(${findBG(pod,description)})` }}>
      <div className="location">
        <h3>{name}, {country}, <img src={countryFlag} alt="flag" className='countryFlag' /></h3>
        <p>{getFullTimeZone(timezone)}</p>
        {
          favorites.includes(name) ?
            <p className='favoritesHandle removeFavorite' onClick={() => dispatch(removeCityToFavorites(name))}>
              Remove Favorites <MdBookmarkRemove />
            </p>
            :
            <p className='favoritesHandle addFavorite' onClick={() => dispatch(addCityToFavorites())} >
              Add Favorites <MdBookmarkAdd />
            </p>
        }
      </div>
      <div className="tempDetail">
        <div>
          <p className='temp'>{Math.trunc(day)}ºc</p>
          <p className='tempMaxMin'>{Math.trunc(min)}ºc / {Math.trunc(max)}ºc</p>
          <p className='description'>{description}</p>
        </div>
        <img src={findIcon(pod, main)} alt="icon" className='weatherIcon' />
      </div>
    </div>
  )
}
