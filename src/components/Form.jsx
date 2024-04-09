import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherWithCityName } from '../redux/features/weatherSlice';
import Loading from './Loading';
import Error from './Error';
import SearchWithLocation from './SearchWithLocation';
import citiesJson from "../cities/city.list.json"
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
export default function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const weather = useSelector((state) => state.weather)
  const cities = citiesJson.map(city => city.name)
  const validationSchema = Yup.object({
    city: Yup.string().required("Please enter a city name"),
  });
  useEffect(() => {
    weather.isLoaded && navigate(`/${weather.name}`)
  }, [weather.isLoaded])
  return (
    <>
      <Formik
        initialValues={{ city: '' }}
        validationSchema={validationSchema}
        onSubmit={values => {
          dispatch(fetchWeatherWithCityName(values.city))
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <form onSubmit={handleSubmit} className='form'>
            {errors.city && <h5 className='errmsg'>{errors.city}</h5>}
            <Error isError={weather.isError} msg={weather.errorMsg} />
            <div className='searchInputDiv mb-15'>
              <input autoComplete='off' type="text" className='search' placeholder='Search location' id='city' name='city' onChange={handleChange} values={values.city} />
              <div className="icons">
                <FaSearch size={24} color='#8FB2F5' className='searchIcon' onClick={handleSubmit} />
                <SearchWithLocation />
                {
                  weather.isLoading && <Loading />
                }
              </div>
            </div>
            <div className="data" style={values.city === "" ? { display: "none" } : { display: "block" }}>
              {
                values.city === "" ? <></> :
                  cities.filter(city => city.includes(values.city[0].toUpperCase() + values.city.slice(1).toLowerCase()) && city).map((item, i) => <p className='dataItem' onClick={() => dispatch(fetchWeatherWithCityName(item))} key={i} value={item}>{item}</p>)
              }
            </div>
          </form>
        )
        }
      </Formik >
    </>
  )
}
