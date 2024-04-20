import Image from 'next/image';
import * as React from 'react';
import Avatar from "../../asset/chibi-avatar.png"
import Avatar2 from "../../asset/avatar2.png"
import SocialHandles from '../SocialHandles/SocialHandles';
import "./SidePanel.css";
import LogoSVG from '../SVGComponents/LogoSVG';

interface Props {

}

const SidePanel: React.FC<Props> = ({ }) => {
    return (
        <div className="sticky SidePanel__Wrapper flex flex-col justify-between gap-10 text-dark-textSecondary h-full text-xl p-10">

            <div className="SidePanel__Logo flex flex-row items-center gap-2">
                <LogoSVG/>

                <p className='SidePanel__Logo__Name uppercase font-medium text-2xl text-amber-300'>Alissa Nguyen</p>
            </div>

            <Image src={Avatar2} alt="avatar" className='w-full rounded-2xl' />

            <div className='SidePanel__Specialization flex flex-col'>
                <p className='text-dark-textPrimary mb-1'>Specialization</p>
                <p className='font-semibold'>Front-End Web Developer</p>
                <p className='font-semibold'>Software Engineer</p>
                <p className='font-semibold'>AI/ML Learner</p>
            </div>

            <div className='SidePanel__Location flex flex-col' >
                <p className='text-dark-textPrimary mb-1'>Based in</p>
                <p className='font-semibold'>Seattle, United States</p>
            </div>

            {/** Change color of icon based on theme */}
            <SocialHandles />

            {/** Say Hi button */}
        </div>
    )
}

export default SidePanel