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
    },
]


const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
        {skills.map((item, index) => {
            return <motion.div 
                variants={fadeIn('up', 0)}
                initial='hidden'
                whileInView="show"
                viewport={{ once: false, amount: 0.7}}
                key={index} 
                className="flex flex-col items-center">
                
                <item.icon className="text-7xl text-orange" />
                <p className="text-center mt-4 text-white">{item.skill}</p>

            </motion.div>
        })}
    </div>
  )
}

export default AllSkillsSM