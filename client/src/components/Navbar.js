import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(props){
  const { logout } = props
  return (
    <div className="navbar">
      <Link to="/home">Home</Link> 
      <Link to="/about">About</Link>
      <Link to="/public">Public</Link>
      {/* <Link to="/basic">Basic</Link> */}
      <Link to="/invest">Invest</Link>
      <Link to="/start">Start</Link> 
      <Link to="/Bbasic">Basic</Link>
      <button onClick={logout}>Logout</button>
    </div>
  )
}