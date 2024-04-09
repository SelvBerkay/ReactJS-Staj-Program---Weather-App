import React from 'react'
import logoSrc from "../images/Logo.png"
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import { resetState } from "../redux/features/weatherSlice"
import { useDispatch } from "react-redux"
import { MdBookmark } from "react-icons/md";
export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  return (
    <div className="navbar">
      <img src={logoSrc} alt="logo" className='logo' />
      <div className="navbarIcons">
        <FaHome size={24} color='#8FB2F5' className='navbarIcon' onClick={() => {
          dispatch(resetState())
          navigate("/")
        }} />
        <MdBookmark size={24} color='#8FB2F5' className='navbarIcon' onClick={() => {
          dispatch(resetState())
          navigate("/favorites")
        }} />
      </div>
    </div>
  )
}
