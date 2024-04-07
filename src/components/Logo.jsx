import React from 'react'
import logoSrc from "../images/Logo.png"
import { FaHome } from "react-icons/fa";
import {useNavigate} from "react-router-dom"
import {resetState} from "../redux/features/weatherSlice"
import {useDispatch} from "react-redux"
export default function Logo() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  return (
    <>
    <img src={logoSrc} alt="" className='logo' />
    <FaHome size={24} color='#8FB2F5' style={{cursor : "pointer"}} onClick={() => {
      dispatch(resetState())
      navigate("/")}} />
    </>
  )
}
