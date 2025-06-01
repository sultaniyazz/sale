import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const RootLayout = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex-shrink-0">
        <Header />
      </div>
      <div className='overflow-y-auto'>
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout