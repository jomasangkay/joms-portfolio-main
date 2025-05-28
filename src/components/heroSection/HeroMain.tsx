import HeroText from './HeroText'
import HeroGradient from './HeroGradient'
import HeroPic from './HeroPic'
import SubHeroSection from './SubHeroSection'

const HeroMain = () => {
  return (
    <div className="pt-40 pb-16">
        <div className='flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4'>
            <HeroText />
            <HeroPic />
            <HeroGradient />
        </div>
        <div className='pt-18'>
          <SubHeroSection />
        </div>
       
        
    </div>
  )
}

export default HeroMain