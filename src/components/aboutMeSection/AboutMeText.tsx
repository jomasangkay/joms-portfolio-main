

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
        <h2 className="text-6xl text-cyan mb-10">About Me</h2>
        <p className="text-white">Entry level developer with strong hands-on experience in application support, API integration, full stack development and automation scripting using Python, and Java. Skilled in building responsive web applications with React, JavaScript, HTML, CSS and Java Spring boot, and developing automated test scripts with Selenium, TestNG, and Maven. Proficient in using AWS services like CloudWatch, DynamoDB, and Athena for data extraction, monitoring, and automation tasks. Familiar with Agile Scrum methodologies, version control with Git, and collaborative development in CI/CD environments. Known for problem-solving, attention to detail, and the ability to quickly adapt to new technologies and development too</p>
        <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">My Projects</button>
    </div>
    
  )
}

export default AboutMeText