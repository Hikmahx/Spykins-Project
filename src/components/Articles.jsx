import React from 'react'

const Articles = () => {
  return (
    <section className="py-8 lg:py-12 px-8 md:px-20 xl:px-32 bg-light-grayish-blue">
      <h2 className="text-blue font-bold text-xl mb-8 text-center lg:text-left">
        LES
        <div className="text-5xl">ARTICLES</div>
      </h2>
      <div className="articles flex flex-col lg:flex-row max-w-md lg:max-w-none mx-auto">
        <div className="card bg-white p-8 mr-2 mx-2 lg:ml-0 my-3 lg:my-4 rounded-lg flex-1 max-w-md min-w-md shadow-md hover:shadow-xl cursor-pointer">
          <h3 className="font-bold mb-4">Titre de l'article</h3>
          <div className="details mb-6">
            <span className="date">18 mars 2021</span>
            <span className="font-bolder">{'.'}</span>
            <span className="underline">immobilier</span>
          </div>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ipsam nam consequatur perspiciatis, voluptates eveniet perferendis...
          </p>
        </div>
        <div className="card bg-white p-8 mx-2 my-3 lg:my-4 rounded-lg flex-1 max-w-md shadow-md hover:shadow-xl cursor-pointer">
          <h3 className="font-bold mb-4">Titre de l'article</h3>
          <div className="details mb-6">
            <span className="date">18 mars 2021</span>
            <span className="font-bolder">{'.'}</span>
            <span className="underline">immobilier</span>
          </div>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ipsam nam consequatur perspiciatis, voluptates eveniet perferendis...
          </p>
        </div>
        <div className="card bg-white p-8 mx-2 my-3 lg:my-4 rounded-lg flex-1 max-w-md shadow-md hover:shadow-xl cursor-pointer">
          <h3 className="font-bold mb-4">Titre de l'article</h3>
          <div className="details mb-6">
            <span className="date">18 mars 2021</span>
            <span className="font-bolder">{'.'}</span>
            <span className="underline">immobilier</span>
          </div>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ipsam nam consequatur perspiciatis, voluptates eveniet perferendis...
          </p>
        </div>
        <div className="card bg-white p-8 mx-2 lg:mr-0 lg:ml-2 my-3 lg:my-4 rounded-lg flex-1 max-w-md shadow-md hover:shadow-xl cursor-pointer">
          <h3 className="font-bold mb-4">Titre de l'article</h3>
          <div className="details mb-6">
            <span className="date">18 mars 2021</span>
            <span className="font-bolder">{'.'}</span>
            <span className="underline">immobilier</span>
          </div>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ipsam nam consequatur perspiciatis, voluptates eveniet perferendis...
          </p>
        </div>
      </div>
    </section>
  )
}

export default Articles