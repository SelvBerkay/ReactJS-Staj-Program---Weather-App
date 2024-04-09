import './css/app.css'
import WeatherCard from "./pages/WeatherCard"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import PrivateRoutes from './privateRoutes/PrivateRoutes';
import Favorites from './pages/Favorites';
function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="*" element={<Home />} />
          <Route path="/:cityName" element={<PrivateRoutes><WeatherCard /></PrivateRoutes>} />
          <Route path="/favorites" element={<Favorites/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
