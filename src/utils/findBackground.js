import { dayBG, nightBG } from "../images/weatherbackground";
export default function findBG(pod, description) {
  if(pod === "d") {
    const bg = dayBG.find(item => item.name === description)
    return bg.url
  } else {
    const bg = nightBG.find(item => item.name === description)
    return bg.url
  } 
}