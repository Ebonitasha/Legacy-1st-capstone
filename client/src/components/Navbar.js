import React,{useContext} from 'react'
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from '../context/UserProvider.js'
import Invest from './Invest.js'

export default function Navbar(props){
  const { logout, invest } = props

  // const navigate = useNavigate()

  const {userState, handleClassType, getClasses} = useContext(UserContext)


  return (
    <div className="navbar">
      <Link className='navbar-words' to="/home">Home</Link> 
      <Link className='navbar-words' to="/about">About</Link>
      <Link className='navbar-words' to="/public">Public</Link>
   
        
          <Link className='navbar-words' to="/invest">Invest</Link>
          <Link className='navbar-words' to="/start">Start</Link> 
          <Link className='navbar-words' to="/Bbasic">Basic</Link>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
{/* <Route 
          path="/invest"
          element={<ProtectedRoute token={token}>
              <Invest/>
          </ProtectedRoute>}
        
        />
         <Route 
          path="/start"
          element={<ProtectedRoute token={token}>
              <Start/>
          </ProtectedRoute>}
        /> 
        <Route
        path={"/Bbasic"}
        element={<ProtectedRoute token={token}>
              <Bbasic/>
        </ProtectedRoute>}
        /> */}