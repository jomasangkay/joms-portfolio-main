import { useState } from "react";
import NavBarBtn from "./NavBarBtn"
import NavBarLinks from "./NavBarLinks"
import NavBarLogo from "./NavBarLogo"
import { GiHamburgerMenu } from "react-icons/gi";


const NavBarMain = () => {
    const [ menuOpen, setMenuOpen ] = useState(false);
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    }
  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
        <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange/40">
        <NavBarLogo />
        <div className={`${menuOpen ? 'sm:block' : 'sm:hidden'} lg:block`}>
          <NavBarLinks handleMenu={toggleMenu}/>
        </div>
        <NavBarBtn />
        </div>
        <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-orange/40">
          <button className="hover:cursor-pointer text-2xl p-3 border border-orange/40 rounded-full text-white" onClick={toggleMenu}>
          <GiHamburgerMenu />
          </button>
        </div>
    </nav>
  )
}

export default NavBarMain