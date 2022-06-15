import React, { useState } from 'react'

export const CommentForm = ({ onSave }) => {

   const [mail, setMail] = useState('')
   const [msg, setMsg] = useState('')

   const handleInput = ({ target }) => {
      if (target.name === 'mail') setMail(target.value)
      if (target.name === 'msg') setMsg(target.value)
   }

   const onSaveComment = (ev) => {
      ev.preventDefault()
      onSave({ mail: mail.toLowerCase().trim(), message: msg, createdAt: Date.now() })
      setMail('')
      setMsg('')
   }

   return (
      <section className="comment-form">
         <form action="" onSubmit={onSaveComment}>
            <input type="mail" value={mail} name='mail' placeholder='Email' onChange={handleInput} required />
            <textarea cols="30" value={msg} name='msg' rows="3" placeholder='Message' onChange={handleInput} required />
            <input type="submit" />
         </form>
      </section>
   )
}

