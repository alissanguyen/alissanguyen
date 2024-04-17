/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import CircleWithRotatingText from '../ScrollForMoreButton/ScrollForMoreButton';
import "./HomeSection.css";
import MyWorkButton from '../MyWorkButton/MyWorkButton';
import ResumeButton from '../ResumeButton/ResumeButton';

interface Props {

}

const HomeSection: React.FC<Props> = ({ }) => {
    return (
        <div className='flex flex-row items-end h-full justify-between mb-20'>
            <div className='flex flex-col items-start h-full justify-center gap-14 pt-sans pl-20'>
                <p className='text-xl caption-regular'>Chronic Software Programmer, Web Designer, Cat Petter</p>

                <div className='caption-bold text-9xl flex flex-col items-start gradient-text '>
                    <span>I'm Alissa Nguyen</span>
                    <span>Web Developer and </span>
                    <span>Software Engineer.</span>
                </div>
                <div className='flex flex-row w-full justify-between'>
                    <div className='HomeSection__Buttons flex flex-row gap-16'>
                        <MyWorkButton />
                        <ResumeButton />
                    </div>
                </div>
            </div>

            <CircleWithRotatingText />
        </div>
    )
}

export default HomeSection