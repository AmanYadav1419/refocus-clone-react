import React from 'react'
import NavBar from './components/NavBar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 font-["satoshi"] text-white'>
      <NavBar />
      <Work />
      <Stripes />
      <Products />
    </div>
  )
}

export default App