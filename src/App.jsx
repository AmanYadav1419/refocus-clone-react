import React from 'react'
import NavBar from './components/NavBar'
import Work from './components/Work'

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 font-["satoshi"] text-white'>
      <NavBar />
      <Work />
    </div>
  )
}

export default App