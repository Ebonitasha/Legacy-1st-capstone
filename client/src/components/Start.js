import React, {useState,useContext, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from '../context/UserProvider.js'
import Class from './Class.js'

export default function Start(props){
  const [start, setStart]= useState({})
  const { info} = props

  const {userState, userAxios} = useContext(UserContext)

  useEffect(() => {
    userAxios.get(`api/classSetup/search/genre?Type=12`)
    .then(res => setStart(res.data[0]))
    .catch(err => console.log(err))
  },[])

  return (
    <div className="start">
          
            <Class info = {start}/>
    </div>
  )
}