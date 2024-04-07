import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'

export default function PrivateRoutes({children}) {
  const {data} = useSelector((state) => state.weather)
  
  if (data === null) {
    return <Navigate to="/" replace={true}/>
  }
  return children
}