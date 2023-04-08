import React, {useContext, useState, useEffect} from 'react'
import {UserContext} from '../context/UserProvider.js'
import {FaHandPointUp, FaHandPointDown} from "react-icons/fa";
import AddCommentForm from './AddcommentForm.js';

export default function CommentList(props){
const { userAxios, getComment, upVote, downVote, allComments ,userState, setAllComments} = useContext(UserContext)
const {comments} = props
  useEffect(() => {
    //  getComment()
    userAxios.get("/api/addComment")
    .then(res => setAllComments(res.data))
    .catch(err => console.log(err))  
}, []
)

console.log(allComments, "test all comment")
  return (
    <div className='commentcomment'>
        {
           allComments.map(item =>
            <div key={item._id} className='eachcomment'>
              <h2 >{item.comment}</h2>
                {/* <div className='thrumb'>
                      <FaHandPointUp onClick={() => 
                      {upVote(item._id)
                      }}
                        />
                          <h3>{item.upvote}</h3>
                        <FaHandPointDown onClick={() => 
                        {downVote(item._id)}}
                        />
                          <h3>{item.downvote}</h3>
                </div> */}
              </div>
            )
          }
         
    </div>
  )
}

   {/* <div>
    allComments.map(item =>
            <div className='eachcomment'>
            <h3>{item}</h3>
               <div className='vote'>
                <AddCommentForm key={item._id} itemId={item._id}/>

                  {item.map((index =>
                <p key={index}  className='commentTag'>{index}</p>
              ))}
              </div>
                          <div className='thrumb'>
                        <FaHandPointUp onClick={() => 
                        {upVote(item._id)
                        }}/>
                            <h3>{item.upvote}</h3>

                          <FaHandPointDown onClick={() => downVote(item._id)}
                          />
                            <h3>{item.downvote}</h3>
                        </div> */}
               {/* <FaHandPointUp onClick={() => upVote(item.comment)} 
                 />
                     <h3 className='votecount'>{item.upvote}</h3>
                   
                 <FaHandPointDown onClick={() => downVote(item.comment)} 
                  />
                    <h3 className='votecount'>{item.downvote}</h3> */}
{/* <div className="commentsadded">
{
  allComments.map(item =>
  <div className='eachcomment'>
  <p key={item._id}>{item.comment}</p>
     <div className='vote'>
     <FaHandPointUp onClick={() => upVote(item.comment)} 
       />
           <h3 className='votecount'>{item.upvote}</h3>
         
       <FaHandPointDown onClick={() => downVote(item.comment)} 
        />
          <h3 className='votecount'>{item.downvote}</h3>
      </div> 
    </div>
  )
}
</div> */}