import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import houses from './assets/bg-houses.png'
import Services from './components/Services';

const App = () => {
  return (
    <div className="App relative font-serif pt-6"> 
      <Navbar />
      <Hero />
      <main className="" >
        <div className="houses-wrapper w-full md:h-60 overflow-hidden">
          <img className="w-full" src={houses} alt="bg-houses" />
        </div>
        <Services />
      </main>
    </div>
  )
}

export default App
