import React, {useContext, useState, useEffect} from 'react'
import { UserContext } from '../context/UserProvider.js'
import Class from './Class.js'


export default function Invest(props){
  const [invest, setInvest] = useState([])

  const {userAxios} = useContext(UserContext)

  useEffect(()=>{
    userAxios.get("/api/classSetup/search/genre?Type=11")
    // .then(res => console.log(res.data))
    .then(res => setInvest(res.data[0]))
    .catch(err => console.log(err))
  },[])


  return (
    <div className="invest">
        
     
        <Class info={invest}/>
    
    </div>
  )
}