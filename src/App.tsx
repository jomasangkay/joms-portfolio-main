import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import HelperSection from './components/HelperSection'
import HeroMain from './components/heroSection/HeroMain'
import NavBarMain from './components/navbar/NavBarMain'
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
      <HelperSection />
    </main>
  )
}

export default App
