import React, { useContext, useEffect } from 'react'
import CommentList from './CommentList.js'
import { UserContext } from '../context/UserProvider.js'
import AddCommentForm from './AddcommentForm.js'

export default function Profile(props){
  const {allComments, comments} = props
  const { 
    user: { 
      username 
    }, 
    postComment, 
  } = useContext(UserContext)

  return (
    <div className='public-body'>   
        <div className="public">
          <h1>Welcome @{username}!</h1>
          <h3>Add Any Comments or Question</h3>
          <h5>Please note every user can see your comments, like or dislike</h5>
        </div>

              <div>
              <AddCommentForm submit={postComment}/>
              </div>
        <div>
          <h3 className='question'>All Questions & Comments</h3>
        
        <CommentList {...allComments}/>
        </div>
    </div>
  )
}