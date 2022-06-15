import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const AppHeader = ({ onSave }) => {

   return (
      <section className="app-header">
         <h1>LOGO</h1>
         <nav>
            {/* <Link to='/login' className='login'>Log in</Link> */}
            <div className="home">Home</div>
            <div className="main">Main</div>
            <div className="about">About</div>
         </nav>
      </section>
   )
}

