import { dayIcon, nightIcon } from "../images/weathericon"
export default function findIcon(pod, main) {
  if(pod === "d") {
    const icon = dayIcon.find(item => item.name === main)
    return icon.url
  } else {
    const icon = nightIcon.find(item => item.name === main)
    return icon.url
  } 
}