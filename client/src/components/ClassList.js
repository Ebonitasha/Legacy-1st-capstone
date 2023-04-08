import React, {useState, useContext, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from '../context/UserProvider.js'
import Class from './Class.js'


export default function ClassList(props){
    const {getData, setGetData} = useState([])
    const {userState, userAxios, getClasess} = useContext(UserContext)

   
    // const pullData = showData.map(data => <Class {...data} key={data._id}/>)
    //   const pullData = showData.map(item => <Class {...data} key={data._id}/>)
    return(
        <div>
            
            <Class getData={getData}/>
       
        </div>
    )
}