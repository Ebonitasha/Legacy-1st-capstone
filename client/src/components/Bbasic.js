import React, {useContext, useEffect, useState} from "react";
import Class from "./Class";
import { UserContext } from "../context/UserProvider";

export default function Bbasic(){
const [Bbasic, setBbasic] = useState({})

const {userAxios} = useContext(UserContext)

useEffect(() => {
userAxios.get(`api/classSetup/search/genre?Type=10`)
.then(res => setBbasic(res.data[0]))
.catch(err => console.log(err))
},[])

// )
    return(
        <div className="bacis">
            
            <Class info = {Bbasic}/>
        </div>
    )
}