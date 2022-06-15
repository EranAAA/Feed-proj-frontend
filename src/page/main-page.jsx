import React, { useEffect, useState } from 'react'

import { commentService } from '../services/comment.service'
import { CommentList } from '../cmps/comment-list'
import { CommentFilter } from '../cmps/comment-filter'
import { CommentForm } from '../cmps/comment-form'

export const MainPage = () => {

   const [comments, setComments] = useState()
   const [filterdComments, setFilterdComments] = useState()

   useEffect(() => {
      loadComments()
   }, [])

   const loadComments = async () => {
      const commentsFromDb = await commentService.query()
      commentsFromDb.sort((a,b) => b.createdAt - a.createdAt) 
      setComments(commentsFromDb)
   }

   const saveComment = async (comment) => {
      const newComment = await commentService.save(comment)
      const saveComments = [...comments]
      saveComments.push(newComment)
      setComments(saveComments)
   }

   const onFilter = (comments) => {
      setFilterdComments(comments)
   }

   if (!comments) return

   return (
      <section className="main-page">
         <div className="comment-container">
            <CommentForm onSave={saveComment} />
            <CommentFilter comments={comments} onFilter={onFilter} />
            <CommentList comments={ filterdComments ? filterdComments : comments} />
         </div>
      </section>
   )
}

