import React, {useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import ClassList from './ClassList.js'
import { UserContext } from '../context/UserProvider.js'
import { Routes, Route, Navigate } from 'react-router-dom'



export default function Home(props){
const [showData, setShowData] = useState([])
    const [dropDown, setDropDown] = useState(false)
    const {handleClassType,  handleClassType1,  handleClassType3} = props
const {
     user: { 
    username 
  }, 
userState, setUserState, userAxios, getClasses} = useContext(UserContext)

// const navigate = useNavigate()

  return (
    <div className="header">
        <div className='companyheader'>
            <h1 className='companyName'>Legacy 1st LLC</h1>
        </div>

        <div className='container'>
            <img className="companyImg"src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT96VDPMmlSZ0xuUFp6xdO-uLMWVJKxVyGNZw&usqp=CAU'/>
            {/* <img className='companyImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZDIhaDquGUI5gSoIEkpNuaOFAZoNfiTJpg&usqp=CAU'></img> */}
        </div>

        <div className='filterbox'>
        <div>
                         <h1 className='welcome'>Welcome @{username} to Legacy 1st LLC, below you can select the available class options!</h1>
                {/* <h3 className="options">*Click here for Class Options*</h3> */}
                <div className="filter-form">
                {dropDown? 
                 < >
                 <button className='close' onClick={ () => setDropDown(!dropDown)}>Close View</button>
                    <div className='link'>
                     <Link className='link1' to="/invest">Investing</Link>
                     <Link className='link2' to="/start">Start to Finish</Link> 
                     <Link className='link3' to="/bbasic">The Basic</Link>
                     </div>
                 </>
                :
               
                <button className='open' onClick={ () => setDropDown(!dropDown)}>Select to View Class Options</button>
            }
                    
          
         

                </div>
        </div>
            
        </div>
    </div>
  )
}