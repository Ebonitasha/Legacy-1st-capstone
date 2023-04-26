import { useContext, useState } from "react"
import React from 'react'
import { UserContext } from "../context/UserProvider"

const initInputs = {
  comment: ""
}

export default function AddCommentForm(props){
 const [comments, setComments] = useState(initInputs)

 const {postComment} = useContext(UserContext)
 const {commentId} = props

  function handleChange(e){
    const {name, value} = e.target
    setComments(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  const commentData = {
    comment: comments.comment
    // User: 
    //userName: pass in username
  }

  function handleSubmit(e){
    e.preventDefault()
    //pass in the inputs for the comments as the first argument
    //the issue id as the second argument
    postComment(commentData)
    // submit(commentData)
    setComments(initInputs)
  }

  return (
    
      <form className="form" onSubmit={handleSubmit}>
         <input
            type="text"
            placeholder="your comment here"
            onChange={handleChange}
            name="comment"
            value={comments.comment}
            className="addcomment"
            
            />
            <button className="addcommentBtn">Add comment</button>
      </form> 
   
  )
}