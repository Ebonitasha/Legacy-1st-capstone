const express = require("express")
const addcommentRouter = express.Router()
const Addcomment = require("../models/addcomment.js")

//GET COMMENTS ALL
addcommentRouter.get("/", (req,res,next)=>{
    Addcomment.find( (err, comments) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(comments)
    })
  })
  // POST COMMENT
addcommentRouter.post("/", (req,res,next) =>{
  req.body.user = req.auth._id
  //req.body.userName = req.auth.userName
  // const userId = req.params.userId
  const newAddComment = new Addcomment (req.body)
  newAddComment.save((err, savedComment) =>{
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(savedComment)
  })
})

//GET USER COMMENTS
addcommentRouter.get('/:userId', (req,res, next) =>{
  Addcomment.find({comment: req.params.userId })
  .exec((err, comments) =>{
    if(err){
      res.status(500)
      return next(err)
    }
    return res.send(comments)
  })
})

 
  // Delete Comment
// addcommentRouter.delete("/", (req, res, next) => {
//    Addcomment.findOneAndDelete(
//       { _id: req.params.userId, user: req.auth._id },
//       (err, deletedComment) => {
//         if(err){
//           res.status(500)
//           return next(err)
//         }
//         return res.status(200).send(`Successfully delete todo: ${deletedComment.title}`)
//       }
//     )
//   })
//   // Update comment
 addcommentRouter.put("/:commentId", (req, res, next) => {
    Addcomment.findOneAndUpdate(
      { _id: req.params.commentId},
      req.body,
      { new: true },
      (err, updatedComment) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedComment)
      }
    )
  })

  addcommentRouter.put("/upvote/:commentId", (req,res,next) =>{
    Addcomment.findByIdAndUpdate(
      {_id: req.params.commentId,  user: req.auth._id },
      {$inc: {upvote: 1}, $addToSet: { votedUsers: req.auth._id } },
    {new: true},
    (err, undatedComment) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(undatedComment)
    }
      )
  })
 
  // DOWNVOTE
  // addcommentRouter.put("/downvote", (req,res,next) =>{
  //   Addcomment.findByIdAndUpdate({_id: req.params.userId },
  //     {$inc: {downvote: 1}, $addToSet: { votedUsers: req.auth._id } },
  //     {new: true},
  //   (err, undatedIssue) => {
  //     if(err){
  //       res.status(500)
  //       return next(err)
  //     }
  //     return res.status(201).send(undatedIssue)
  //   }
  //     )
  // })
module.exports = addcommentRouter