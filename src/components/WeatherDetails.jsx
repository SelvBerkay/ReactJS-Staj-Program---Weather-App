import { useSelector } from 'react-redux'
import icons from '../images/icon'
export default function WeatherDetails() {
  const data = useSelector((state) => state.weather.data)
  const detail = [
    {
      name: "Thermal sensation",
      value: `${Math.round(data.main.feels_like)}ºc`,
      icon: icons.thermometer
    },
    {
      name : "Probability of rain",
      value : `${(data.pop * 100).toFixed()}%`,
      icon : icons.cloud
    },
    {
      name: "Wind speed",
      value: `${data.wind.speed} km/h`,
      icon: icons.wind
    },
    {
      name: "Air humidity",
      value: `${data.main.humidity}%`,
      icon: icons.drop
    }
  ]
  return (
    <ul className='weatherDetail'>
      {
        detail.map((item, i) => <li key={i} className='detailItem'>
          <p className='detailName'><img src={item.icon} className='detailIcon' />{item.name}</p>
          <p className='detailValue'>{item.value}</p>
        </li>)
      }
    </ul>
  )
}
