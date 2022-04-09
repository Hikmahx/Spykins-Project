import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="App relative font-serif pt-6"> 
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
