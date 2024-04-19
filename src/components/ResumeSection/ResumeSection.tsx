import * as React from 'react';
import SparkleSVG from '../SparkleSVG';
import "./ResumeSection.css"
import EducationSection from './EducationSection';
import WorkExperienceSection from './WorkExperienceSection';
import PublishedSoftware from './PublishedSoftware';
import ToolsAndSkillsSection from './ToolsAndSkillsSection';

interface Props {

}

const ResumeSection: React.FC<Props> = ({ }) => {
    return (
        <div className='flex flex-col items-start justify-center gap-14 pl-20' id="resume">
            <div className='flex flex-row items-center text-2xl gap-3 font-medium rounded-3xl border-[1px] border-dark-textPrimary px-8 py-2'>
                <SparkleSVG />
                <p>Resume</p>
            </div>

            <div className="flex flex-col gap-5">
                <p className="ResumeSection__Slogan gradient-text leading-tight">Education and practical<br></br>experience</p>
                <p className="ResumeSection__Text text-xl font-medium text-slate-400 leading-relaxed tracking-wide w-4/5">I have learned from someone special that life is an endless journey of learning, but learning without self-reflection is fruitless. It&#39;s not enough to simply acquire new knowledge and skills without taking the time to reflect on what we&#39;ve learned and how it applies to our lives. Self-reflection allows us to internalize the lessons we&#39;ve learned, to understand their significance, and to integrate them into our worldview. Without this crucial step, our learning remains superficial and fails to truly transform us. It&#39;s through self-reflection that we gain wisdom, develop personal growth, and find meaning in our experiences. So, as we navigate the endless journey of learning, let us remember to pause, reflect, and make the most of every lesson life has to offer.</p>
            </div>

            <EducationSection />
            <div className="spacer-div h-12"></div>
            <WorkExperienceSection />
            <div className="spacer-div h-12"></div>
            <PublishedSoftware />
            <div className="spacer-div h-12"></div>
            <ToolsAndSkillsSection />
        </div>
    )
}

export default ResumeSection