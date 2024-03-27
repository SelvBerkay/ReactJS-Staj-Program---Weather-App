import rainDay from "./rainDay.png"
import rainNight from "./rainNight.png"
import clearDay from "./clearDay.png"
import clearNight from "./clearNight.png"
import cloudyDay from "./cloudyDay.png"
import cloudyNight from "./cloudyNight.png"
import stormDay from "./stormDay.png"
import stormNight from "./stormNight.png"
import fewCloudsDay from "./fewCloudsDay.png"
import fewCloudsNight from "./fewCloudsNight.png"

const dayIcon = [
  {name : "Clear", url : clearDay},
  {name : "Clouds", url : fewCloudsDay},
  {name : "scattered clouds", url : cloudyDay},
  {name : "broken clouds", url : cloudyDay},
  {name : "Rain", url : rainDay},
  {name : "Snow", url : rainDay},
  {name : "Thunderstorm", url : stormDay},
  {name : "Drizzle", url : rainDay},
  {name : "Mist", url : fewCloudsDay},
  {name : "Smoke", url : fewCloudsDay},
  {name : "Haze", url : fewCloudsDay},
  {name : "Dust", url : fewCloudsDay},
  {name : "Fog", url : fewCloudsDay},
  {name : "Sand", url : fewCloudsDay},
  {name : "Dust", url : fewCloudsDay},
  {name : "Ash", url : fewCloudsDay},
  {name : "Squall", url : fewCloudsDay},
  {name : "Tornado", url : fewCloudsDay},

]

const nightIcon = [
  {name : "Clear", url : clearNight},
  {name : "Clouds", url : fewCloudsNight},
  {name : "scattered clouds", url : cloudyNight},
  {name : "broken clouds", url : cloudyNight},
  {name : "Rain", url : rainNight},
  {name : "Snow", url : rainNight},
  {name : "Thunderstorm", url : stormNight},
  {name : "Drizzle", url : rainNight},
  {name : "Mist", url : fewCloudsNight},
  {name : "Smoke", url : fewCloudsNight},
  {name : "Haze", url : fewCloudsNight},
  {name : "Dust", url : fewCloudsNight},
  {name : "Fog", url : fewCloudsNight},
  {name : "Sand", url : fewCloudsNight},
  {name : "Dust", url : fewCloudsNight},
  {name : "Ash", url : fewCloudsNight},
  {name : "Squall", url : fewCloudsNight},
  {name : "Tornado", url : fewCloudsNight},
]

export {dayIcon, nightIcon}
