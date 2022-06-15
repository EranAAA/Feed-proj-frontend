import React from 'react'
import Gravatar from 'react-gravatar'

export const CommentPreview = ({ comment, onDelete }) => {

   // const onDeleteComment = () => {
   //    onDelete(comment)
   // }

   return (
      <section className="comment-preview">

         <div className="img-container">
            {/* <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="" /> */}
            {/* <Gravatar email="a-email@example.com" /> */}
            {<Gravatar email={`${comment.mail}`} size={150} />}
         </div>

         <div className="data-container">
            <div className="mail">{comment.mail}</div>
            <div title={comment.message} className="msg">{comment.message}</div>
         </div>

      </section>
   )
}
