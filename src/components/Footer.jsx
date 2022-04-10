import React from 'react'

const Footer = () => {
  return (
    <footer className="mx-auto px-8 md:px-20 xl:px-32 my-10 lg:my-20 relative flex flex-col md:flex-row md:items-start justify-between container">
      <div className="logo">
        <a href="/" className="text-base flex items-center">
          <img className="w-4 h-4 m-2" src={require('../assets/logo.png')} alt="barbe and cimon" />
          <span className="">BARBE & CIMON NOTAIRES</span>
        </a>
      </div>  
      <nav className="flex flex-col md:flex-row">
        <ul className="my-6 md:my-0 md:mr-3">
          <li className="mb-4">
          <a href="/" className="hover:text-soft-red transition-colors">Á PROPOS</a>
          </li>
          <li className="my-4">
          <a href="/" className="hover:text-soft-red transition-colors">NOS SERVICE</a>
          </li>
          <li className="my-4">
          <a href="/" className="hover:text-soft-red transition-colors">ARTICLES</a>
          </li>
          <li className="mt-4">
          <a href="/" className="hover:text-soft-red transition-colors">CONTACT</a>
          </li>
        </ul>

        <ul className="max-w-xs lg:px-16 flex flex-col flex-1">
          <li className="mb-2 ">
            <h3 className="font-bold">BUREAU</h3>
          </li>
          <li className="my-2 ">
            <address className="max-w-sm not-italic">
              101 BOULEVARD SAINT JOSEPH O, MONTRÉAL, QC
              H2T 2P7
            </address>
          </li>
          <li className="mt-2 font-bold">
            NOUS SUIVRE
          </li>
        </ul>
      </nav>      
    </footer>

  )
}

export default Footer