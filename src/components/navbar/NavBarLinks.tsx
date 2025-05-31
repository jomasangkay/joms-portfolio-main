import { Link } from 'react-scroll';

interface Props {
  handleMenu: () => void
}

const links = [
  { linkName: "About Me", section: "aboutme"},
  { linkName: "Skills", section: "skills"},
  { linkName: "Projects", section: "projects"},
  { linkName: "Contact", section: "contact"},
]

const NavBarLinks = ({handleMenu}: Props) => {
  return (
    <ul className="flex gap-8 text-white text-center lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full py-4">
      {links.map((link, index) => {
        return <li key={index} className="group text-2xl">
            <Link 
            to={link.section}
            smooth={true} 
            duration={200}
            offset={-200}
            className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
            onClick={handleMenu}>
              {link.linkName}
            </Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      })}
    </ul>
  )
}

export default NavBarLinks