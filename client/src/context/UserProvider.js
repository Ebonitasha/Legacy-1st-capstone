import React, { useState } from 'react'
import axios from 'axios'


export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function UserProvider(props){
  const initState = 
  { user: { }, 
    token: "",
    errMsg:""
  }
    // user: JSON.parse(localStorage.getItem("user")) || {}, 
    // token: localStorage.getItem("token") || "", 
  
    
  const [classes, setClasses] = useState([])
  const [userState, setUserState] = useState(initState)
  const [allComments, setAllComments] = useState([])
  // user: JSON.parse(localStorage.getItem("user")) || {}, 
  // token: localStorage.getItem("token") || "", 
  


  function signup(credentials){
    axios.post("/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))
  }

  function login(credentials){
    axios.post("/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        getClasses()
        // getUserComments()
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))
  }

  function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {},
      token: "",
      Comment: []
    })
  }
  function handleAuthErr(errMsg){
    setUserState(prevState => ({
      ...prevState,
      errMsg
    }))
  }
  function resetAuthErr(){
  setUserState(prevState => ({
    ...prevState,
    errMsg: ""
  }))
}

  function getClasses(){
    userAxios.get('/api/classSetup')
    // .then(res => console.log(res.data))
    .then(res => setClasses(res.data))
    .catch(err => console.log(err.response.data.errMsg))
  }

//   //  console.log(userState, "test user state")
  
function handleClassType(e){
  if(e.target.value === "reset"){
  } else {
    userAxios.get(`api/classSetup/search/genre?Type=${e.target.value}`)
    // .then (res =>console.log(res))
    .then(res => setUserState(res.data))
    .catch(err => console.log(err))
}}

function getComment(){
  userAxios.get('/api/addComment')
  // .then(res => console.log(res.data))
  .then(res =>  setAllComments(res.data))
  .catch(err => console.log(err))
}

function postComment(newComments){
  console.log(newComments, "test commnets")
  userAxios.post('/api/addComment', newComments)
  // .then(res => setAllComments(res.data))
  // .then(res => console.log(res.data))
  .then(res => {
    setAllComments(prevState =>([
      ...prevState, res.data
    ]))
  })
  .catch(err => console.log(err))
}

// function deleteComment(){
//   userAxios.post('/api/addComment')
//   .then(res => console.log(res))
//   .catch(err => console.log(err))
// }


// function updateComment(updates, commentId){
//   console.log("test update")
//   userAxios.put(`/api/addComment/${commentId}`, updates)
//   .then(res => console.log(res))
//   .then(res => { 
//     setAllComments(prevState => ({
//     ...prevState,
//     comment: prevState.comment.map(item => item._id !== commentId ? item : res.data)
//   }))
// })
//   .catch(err => console.log(err))
// }

// function upVote(commentId){
//   userAxios.put(`/api/addComment/upvote/${commentId}`)
//   .then(res => console.log(res.data))
//   .then(res =>{
//   // console.log(res.data)
//   setUserState( prevState => {
//       return { 
//           ...prevState,
//           comment: [...prevState.comment]
//       }
//    })
//   })
//   .catch(err => console.log(err))
// }
// function downVote(userId){
//   userAxios.put(`/api/addComment/downvote/${userId}`)
//   .then(res => console.log(res.data))
//   // .then(res =>{
  // console.log(res.data)
  // setUserState( prevState => {
  //     return { 
  //         ...prevState,
  //         comment: [...prevState.comment]
  //     }
  //  })
  // })
//   .catch(err => console.log(err))
// }

  return (
    <UserContext.Provider
      value={{
        ...userState,
        // user,
        // username,
        userAxios,
        signup,
        login,
        logout,
        getClasses,
        handleClassType,
        postComment,
        getComment,
        setAllComments,
        allComments,
       
        resetAuthErr,
       

      
   
        // setShowData,
      }}>
      { props.children }
    </UserContext.Provider>
    )
  }

