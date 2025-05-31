import ProjectsText from "./ProjectsText"
import SingleProject from "./SingleProject"
import { motion } from 'framer-motion';
import { fadeIn } from "../../framerMotion/variants";

const projects = [
    {
        name:'LetsType!',
        year:"A fun little typing wizard game inspired by Typing Master, which I used to play back in grade school.",
        align:'right',
        image:'images/website-img-1.png',
        link:'projects/letstype/',
    },
    {
        name:'TicTacToe Java',
        year:'On-going implementation',
        align:'left',
        image:'images/website-img-2.jpg',
        link:'#',
    },
    {
        name:'Inventory Management System',
        year:'On-going implementation',
        align:'right',
        image:'images/website-img-3.jpg',
        link:'#',
    },
]

const ProjectsMain = () => {
  return (
    <div id='projects' className="max-w-[1200px] mx-auto px-4">
        <motion.div
        variants={fadeIn('up', 0)}
        initial='hidden'
        whileInView="show"
        viewport={{ once: false, amount: 0}}
        >
            <ProjectsText />
        </motion.div>
        
            <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
            {projects.map((item, index) => {
                return <SingleProject 
                key={index} 
                name={item.name} 
                year={item.year} 
                align={item.align}      
                image={item.image}
                link={item.link}/>
            })}                                         
        </div>
    </div>
  )
}

export default ProjectsMain