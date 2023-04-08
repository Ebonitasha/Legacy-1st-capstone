import React, { useContext } from 'react'
// import ClassFormList from './ClassFormList.js'
// import Class from './Class.js'
import { UserContext } from '../context/UserProvider.js'

export default function Profile(){
  const { 
    user: { 
      username 
    }, 
    addComment, 
    getClasses
    // comment 
  } = useContext(UserContext)

  return (
    <div className="profile">
      {/* <h1>Welcome @{username}!</h1>
      <h3>Add Any Comments or Question</h3>
      <CommentForm addComment={addComment}/>
      <h3>Your Concerns</h3> */}
     
    </div>
  )
}