import React, { useState } from 'react'

export const CommentFilter = ({ comments, onFilter }) => {

   const [filter, setFilter] = useState('')
   var timeInterval = ''

   const handleInput = ({ target }) => {
      if (target.name === 'filter') setFilter(target.value)

      if (target.value.length < 1) return
      const filterdComments = comments.filter(comment => (
         comment.mail.toLowerCase().includes(target.value.toLowerCase()) ||
         comment.message.toLowerCase().includes(target.value.toLowerCase())))
      onSetFilter(filterdComments)
   }

   const onSetFilter = (filterdComments) => {
      timeInterval = setTimeout(() => {
         onFilter(filterdComments)
         clearInterval(timeInterval)
      }, 500);
   }

   return (
      <section className="comment-filter">
         <input type="text" value={filter} name='filter' placeholder='Filter' onChange={handleInput} />
      </section>
   )
}

