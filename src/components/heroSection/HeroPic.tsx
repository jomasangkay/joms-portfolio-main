import { PiHexagonThin } from "react-icons/pi";
import { motion } from 'framer-motion';
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <div className="h-full flex items-center justify-center">
    <motion.div 
    variants={fadeIn('left',0.2)}
    initial='hidden'
    whileInView="show"
    viewport={{ once: false, amount: 0}}>
      <img src="images/HexaPic.png" alt="Josemari-Masangkay" className="max-h-[410px] w-auto" />
    </motion.div>
        <div className="pt-8 absolute -z-10 flex justify-center items-center animate-pulse overflow-hidden">
            <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[480px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
        </div>
    </div>
  )
}

export default HeroPic