import React, {useContext} from 'react'
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from '../context/UserProvider.js'

export default function Class(props){
  const {info} = props


  return (
    <div className="class-container">
      <div className='design'>
              
        <img className='classimg' src={info.Url}/> 
        {/* <h2 className='classtitle'>{info.Title}</h2> */}
        <h4 className='classdescription' >{info.Description}</h4>
        <h1 className='classprice'>${info.Price}</h1>

      </div>
       <hr/> 
  </div>
   )
}