import React from 'react'

import { CommentPreview } from './comment-preview'

export const CommentList = ({ comments, onSave, onDelete }) => {

   return (
      <section className="comment-list">
         {comments && comments.map((comment, idx) => <div key={idx}><CommentPreview comment={comment} onDelete={onDelete} /></div>)}
      </section>
   )
}

