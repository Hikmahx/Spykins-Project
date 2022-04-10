import React from 'react'

const Hero = () => {
  return (
    <div className="hero bg-gradient-to-b from-white to-pale-red mt-16 lg:mt-12 pb-8 lg:pb-20 relative flex items-center justify-center flex-col md:flex-row">
      <div className="hero-text order-2 md:order-1 flex-1 px-8 sm:px-16 md:pr-0 md:pl-20 xl:pl-32 text-center md:text-left lg:max-w-2xl 2xl:max-w-3xl">
        <h1 className="text-xl text-soft-red mb-4 lg:mb-8">NOUS VALORISONS LA
        <div className="text-5xl font-bold">CLARTÉ {'>'}</div> 
        </h1>
        <p className="mb-4 mb-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est tempora obcaecati repellat nam nostrum distinctio dicta! Harum voluptas alias commodi, cum adipisci modi magni distinctio quis accusantium, dolor suscipit est?
        </p>
        <button className="bg-transparent text-soft-red border border-soft-red hover:text-pale-red hover:bg-soft-red transition-colors px-12 py-2 rounded-md">En savoir plus</button>
      </div>
      <div className="hero-image order-1 md:order-2 flex-1">
        <img className="lg:ml-auto" src={require('../assets/pen.png')} alt="pen" />
      </div>
    </div>
  )
}

export default Hero