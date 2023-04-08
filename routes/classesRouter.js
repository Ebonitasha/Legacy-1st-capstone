const express = require("express")
const classesRouter = express.Router()
const ClassSetup = require('../models/classSetup.js')

// Get All Classes
classesRouter.get("/", (req, res, next) => {
  ClassSetup.find((err, classes) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(classes)
  })
})

// Post classes
classesRouter.post("/", (req, res, next) => {
  const newClassSetup = new ClassSetup(req.body)
  newClassSetup.save((err, savedClass) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedClass)
  })
})
//GET BY CLASS
classesRouter.get("/search/genre", (req, res, next) => {
  ClassSetup.find({Type: req.query.Type}, (err, classes) =>{
      if(err){
          res.status(500)
          return next(err)
      }
      return res.status(200).send(classes)
  })
})  
// classRouter.post("/addcomment/:classId", (req,res,next) =>{
//   req.body.user = req.auth._id
//   const classId = req.params.classId

//   Class.findById({_id: classId}, (err, class) =>{
//       if(err){
//         res.status(500)
//         return next(err)
//       }
//       classId.comment.push(req.body)
//       classId.populate("comment")
//       classId.save()

//       return res.status(200).send(class)
//   })
// })
// classRouter.post("/comment/:issueId", (req,res, next)=>{
//   req.body.user = req.auth._id
//   const issueId= req.params.issueId
//   // const newComment = new Comment(req.body)
//   // newComment.save((err, newComment ) =>{
//   Class.findById({_id: issueId}, (err, issue) => {
//       if(err){
//       res.status(500)
//       return next(err)
//     }
  
//     class.comment.push(req.body)
//     class.populate("comment")

//     return res.status(201).send(class)
//   })
// })

module.exports = classesRouter