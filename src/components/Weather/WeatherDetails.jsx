import { useSelector } from 'react-redux'
import icons from '../../images/icon'
export default function WeatherDetails() {
  const {data} = useSelector((state) => state.weather)
  const detail = [
    {
      name: "Thermal sensation",
      value: `${Math.trunc(data.feels_like.day)}ºc`,
      icon: icons.thermometer
    },
    {
      name : "Probability of rain",
      value : `${(data.pop * 100).toFixed()}%`,
      icon : icons.cloud
    },
    {
      name: "Wind speed",
      value: `${data.wind_speed} km/h`,
      icon: icons.wind
    },
    {
      name: "Air humidity",
      value: `${data.humidity}%`,
      icon: icons.drop
    },
    {
      name: "UV index",
      value: `${data.uvi}`,
      icon: icons.sun
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
