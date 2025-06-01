import { Link } from 'react-scroll';

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
        <h2 className="text-6xl text-cyan mb-10">About Me</h2>
        <p className="text-white">I began my journey as a developer last year (2024) by working on real-world problems in a professional setting. Since then, I've continued to build on that experience by working on software and web development projects in my free time, focusing on improving code quality, system design, and learning modern frameworks and tools. As I continue to grow, I've developed a strong passion for writing clean, efficient code, building scalable solutions, and solving complex problems through technology.</p>
        <Link
        smooth={true} 
        duration={200}
        offset={-200} 
        to='projects' className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">My Projects</Link>
    </div>
    
  )
}

export default AboutMeText