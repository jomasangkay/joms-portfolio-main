import AllSkills from "./AllSkills"
import AllSkillsSM from "./AllSkillsSM"
import SkillsText from "./SkillsText"


const SkillsMain = () => {
  return (
    <div id='skills'>
        <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
            <SkillsText />
            <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden">
                <AllSkills />
            </div>
            <div className="sm:block lg:hidden">
                <AllSkillsSM />
            </div>
        </div>
    </div>
  )
}

export default SkillsMain