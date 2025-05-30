import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiSelenium } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import SingleSkill from "./SingleSkill";
import { motion } from 'framer-motion';
import { fadeIn } from "../../framerMotion/variants";


const skills = [
    {
    skill: "HTML",
    icon: FaHtml5,
    },
    {
    skill: "JavaScript",
    icon: IoLogoJavascript,
    },
    {
    skill: "React",
    icon: FaReact,
    },
    {
    skill: "TypeScript",
    icon: SiTypescript,
    },
    {
    skill: "Tailwind CSS",
    icon: RiTailwindCssFill,
    },
    {
    skill: "Python",
    icon: FaPython,
    },
    {
    skill: "Java",
    icon: FaJava,
    },
    {
    skill: "MySQL",
    icon: SiMysql,
    },
    {
    skill: "AWS",
    icon: FaAws,
    },
    {
    skill: "Spring Boot",
    icon: BiLogoSpringBoot,
    },
    {
    skill: "Selenium",
    icon: SiSelenium,
    }
]

const AllSkills = () => {
  return (
    <div>
        <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
            {skills.map((item, index) => {
                return (
                <motion.div
                variants={fadeIn('up', `0.${index}`)}
                initial='hidden'
                whileInView="show"
                viewport={{ once: false, amount: 0}}
                >
                  <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} />
                </motion.div>
  
            )})}
        </div>   
    </div>
  )
}

export default AllSkills