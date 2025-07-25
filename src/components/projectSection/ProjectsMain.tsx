import ProjectsText from "./ProjectsText"
import SingleProject from "./SingleProject"
import { motion } from 'framer-motion';
import { fadeIn } from "../../framerMotion/variants";

const projects = [
    {
        name:'LetsType!',
        year:"Aug2024",
        description: "A fun little typing wizard game inspired by Typing Master, which I used to play back in grade school. Built with only HTML, CSS, and JavaScript as a way to challenge and sharpen my JavaScript skills",
        align:'right',
        image:'images/website-img-1.png',
        link:'letstype/typing-game.html',
    },
    {
        name:'AI Assistant Hub',
        year:'On-going Implementation',
        description: "A full-stack application that provides AI-powered services including meal calorie analysis, text translation, and PDF document summarization.",
        align:'left',
        image:'images/website-img-3.jpg',
        link:'#',
    },
    {
        name:'Vivre Medical Group Website',
        year:'Work In Progress',
        description: "Stay tuned!",
        align:'right',
        image:'images/website-img-2.png',
        link:'#',
    }
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
                description={item.description}
                align={item.align}      
                image={item.image}
                link={item.link}/>
            })}                                         
        </div>

    </div>
  )
}

export default ProjectsMain