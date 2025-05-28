

const links = [
  { linkName: "About Me", section: "about"},
  { linkName: "Skills", section: "skills"},
  { linkName: "Projects", section: "Projects"},
  { linkName: "Contact", section: "Contact"},
]

const NavBarLinks = () => {
  return (
    <ul className="flex gap-8 text-white text-center lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full py-4">
      {links.map((link, index) => {
        return <li key={index} className="group text-2xl">
            <a href="#" 
            className="cursor-pointer text-white hover:text-cyan transition-all duration-500">{link.linkName}</a>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      })}
    </ul>
  )
}

export default NavBarLinks