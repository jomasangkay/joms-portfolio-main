import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import ContactMeMain from './components/contactMe/ContactMeMain'
import FooterMain from './components/footer/FooterMain'
import HeroMain from './components/heroSection/HeroMain'
import NavBarMain from './components/navbar/NavBarMain'
import ProjectsMain from './components/projectSection/ProjectsMain'
import SkillsMain from './components/skillsSection/SkillsMain'
import SubSkills from './components/skillsSection/SubSkills'

function App() {

  return (
    <main className='font-body grow'>
      <NavBarMain />
      <HeroMain />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  )
}

export default App
