import { HiMiniArrowDownRight } from "react-icons/hi2";

const NavBarBtn = () => {
  return (
    <button className="px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:shadow-cyan hover:scale-110 cursor-pointer transition-all duration-350">
        Hire me
        <div className="sm:hidden md:block">
          <HiMiniArrowDownRight />
        </div>
    </button>
  )
}

export default NavBarBtn