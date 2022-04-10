import React from 'react'

const Services = () => {
  return (
    <section className="my-8 lg:my-12 px-8 md:px-20 xl:px-32">
      <h2 className="text-blue font-bold text-xl mb-8 text-center lg:text-left">
        NOS
        <div className="text-5xl">SERVICES</div>
      </h2>
      <div className="services text-white flex flex-col lg:flex-row max-w-md lg:max-w-none mx-auto">
        <div className="p-8 mx-2 my-2 lg:my-4 rounded-lg flex-1 flex justify-center items-center text-center tracking-wide text-base md:text-xl bg-blue">CORPROPRIETE {'>'}</div>
        <div className="p-8 mx-2 my-2 lg:my-4 rounded-lg flex-1 flex justify-center items-center text-center tracking-wide text-base md:text-xl bg-brown">PLANIFICATION FAMILIALE {'>'}</div>
        <div className="p-8 mx-2 my-2 lg:my-4 rounded-lg flex-1 flex justify-center items-center text-center tracking-wide text-base md:text-xl bg-deep-red">IMMOBILIER {'>'}</div>
      </div>
    </section>
  )
}

export default Services