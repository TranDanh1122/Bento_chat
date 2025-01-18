
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'

import React from 'react'
import Modal from './components/Modal'
import { NotificationContext } from './context/NotificationContext'
function App() {
  const { noti } = React.useContext(NotificationContext)

  return (
    <>
      <Routes>
        <Route path='auth/:type' element={<Auth />}></Route>
      </Routes>
      {noti.isShow == true && <Modal />}
    </>


  )
}

export default App
