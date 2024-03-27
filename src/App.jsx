import './css/app.css'
import { useSelector } from "react-redux"
import WeatherCard from "./components/WeatherCard"
import Home from "./components/Home"
import Logo from "./components/Logo"
function App() {
  const isLoaded = useSelector((state) => state.weather.isLoaded)
  
  return (
    <>
      <div className='container'>
        <Logo/>
        {
          isLoaded ? <WeatherCard /> : <Home/>
        }   
      </div>
    </>
  )
}

export default App
