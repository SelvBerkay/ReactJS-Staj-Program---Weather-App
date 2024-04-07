import './css/app.css'
import WeatherCard from "./pages/WeatherCard"
import Home from "./pages/Home"
import Logo from "./components/Logo"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import PrivateRoutes from './privateRoutes/PrivateRoutes';
function App() {
  return (
    <div className="container">
      <Router>
        <Logo />
        <Routes>
          <Route exact path="*" element={<Home />} />
          <Route path="/:cityName" element={<PrivateRoutes><WeatherCard /></PrivateRoutes>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
