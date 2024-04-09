import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchWeatherWithCityName, removeCityToFavorites } from '../redux/features/weatherSlice';
import { useNavigate } from "react-router-dom"
import { CiCircleRemove } from "react-icons/ci";

const Favorites = () => {
  const { favorites } = useSelector(state => state.weather)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickFavItem = (item) => {
    dispatch(fetchWeatherWithCityName(item))
    navigate(`/${item}`)
  }
  const handleClickRemoveItem = (item) => {
    dispatch(removeCityToFavorites(item))
  }
  if (favorites.length === 0) {
    return (
      <div className="favorites">
        <h4 className='favEmptyText'>Your favorites are empty. Search now and add a few cities to your favorites.</h4>
      </div>
    )
  }
  return (
    <>
      <h1 className='favoritesText'>Favorites</h1>
      <div className="favorites">
        {
          favorites.map((item, i) =>
            <div className="favItem" key={i}>
              <p className='favItemName'
                onClick={() => handleClickFavItem(item)}
              >
                {item}
              </p>
              <CiCircleRemove size={24} color='red'
                className='favItemRemove'
                onClick={() => handleClickRemoveItem(item)}
              />
            </div>
          )
        }
      </div>
    </>
  )
}

export default Favorites