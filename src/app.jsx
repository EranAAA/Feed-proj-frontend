import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import './style/main.scss'

import { MainPage } from './page/main-page'
import { AppHeader } from './cmps/app-header'

export function App() {

   return (
      <div className='app'>
         {/* <AppHeader /> */}
         <MainPage />
         {/* <Routes>
            <Route path="/" element={<MainPage />} />
         </Routes> */}
      </div>
   )
}
