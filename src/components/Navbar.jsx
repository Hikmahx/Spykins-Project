import React, {useState} from 'react'
import hamburger from '../assets/icon-hamburger.svg'
import close from '../assets/icon-close.svg'

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(true);

  const displayMenu = ()=>{
    setMenuToggle(!menuToggle)
  }


  return (
    <header className="mx-auto px-8 md:px-20 xl:px-32 relative flex items-baseline md:items-center justify-between z-20">
      <div className="logo">
        <a href="/" className="text-base flex items-center">
          <img className="w-4 h-4 m-2" src={require('../assets/logo.png')} alt="barbe and cimon" />
          <span className="">BARBE & CIMON NOTAIRES</span>
        </a>
      </div>        
      <div onClick={displayMenu} className="hamburger-menu z-10 lg:m-0 lg:hidden cursor-pointer flex flex-col items-center">
        <img className="hamburger-icon w-full" src={menuToggle? hamburger : close} alt="icon" />
      </div>
      <nav className={"menu bg-white flex-1 fixed lg:relative top-0 " + (menuToggle? ' -right-full': 'right-0') + " transition-all lg:left-0 pt-28 lg:pt-0 px-8 md:px-20 lg:pr-0 lg:pl-0"}>
        <ul className="flex lg:items-center lg:justify-end uppercase h-screen lg:h-auto flex-col lg:flex-row overflow-hidden">
          <li className="px-2 tracking-wider mx-6 md:mx-3 my-3 md:w-auto text-center">
            <a href="/" className="hover:text-soft-red transition-colors">Á PROPOS</a>
          </li>
          <li className="px-2 tracking-wider mx-6 md:mx-3 my-3 md:w-auto text-center">
            <a href="/" className="hover:text-soft-red transition-colors">NOS SERVICE</a>
          </li>
          <li className="px-2 tracking-wider mx-6 md:mx-3 my-3 md:w-auto text-center">
            <a href="/" className="hover:text-soft-red transition-colors">ARTICLES</a>
          </li>
          <li className="px-2 tracking-wider mx-6 md:mx-3 my-3 md:w-auto text-center">
            <a href="/" className="hover:text-soft-red transition-colors">CONTACT</a>
          </li>
          <li className="px-2 tracking-wider mx-6 md:mx-3 my-3 md:w-auto text-center font-bold">
            <a href="/" className="hover:text-soft-red transition-colors">EN</a>
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default Navbar