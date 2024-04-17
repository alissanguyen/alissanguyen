import Image from 'next/image';
import * as React from 'react';
import Avatar from "../../asset/chibi-avatar.png"
import Avatar2 from "../../asset/avatar2.png"
import SocialHandles from '../SocialHandles/SocialHandles';
import "./SidePanel.css";

interface Props {

}

const SidePanel: React.FC<Props> = ({ }) => {
    return (
        <div className="sticky SidePanel__Wrapper flex flex-col justify-between gap-10 text-dark-textSecondary h-full text-xl p-10">

            <div className="SidePanel__Logo flex flex-row items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg"  className="w-20 fill-current" version="1.0" viewBox="0 0 1024 1024">
                    <path d="M483.5 260.5c-14.3 2.2-31.3 6.1-43.6 10.1-13.1 4.1-35.6 14.5-36.5 16.8-.4.9 2.6 5 8.1 11.3 10.4 11.8 24.4 30.1 30.5 40 2.5 4 5 7.5 5.6 7.7.6.2 4.9-.7 9.5-2 20.3-5.9 28.5-6.9 55.9-6.9 27.3 0 32.2.6 51.3 6.1 4.9 1.4 9.8 2.3 11 2 1.4-.3 3.9-3.4 6.7-7.8 6.3-10.4 22-31 30.6-40.1 4.1-4.3 7.4-8.7 7.4-9.8 0-1.4-2.6-3.1-10.2-6.7-19.8-9.5-38.8-15.7-59.3-19.3-15.4-2.8-53-3.6-67-1.4zM317.4 267.9c-7.3 4.5-10 13.4-10.8 35.6-.4 12.8.9 44.5 2.4 54.5 2.3 16.5 8.1 42.7 13.5 61.8 6.3 22.2 7.2 24.6 10.1 25 2.5.4 3.7-1.1 14.3-16.2 16.7-24 39.1-44 63.6-56.7 6.5-3.4 9.1-5.2 9.3-6.8.3-2.1-6.9-13.4-19-29.3-20.4-27-49.4-56.2-65.2-65.7-7.2-4.3-13.7-5.1-18.2-2.2zM693.5 267.2c-13.7 5.1-43.4 33.3-67.1 63.8-9.5 12.1-22.5 32-22.2 33.7.4 1.9 3.1 3.9 14.5 10.1 22.2 12.1 47.3 36.4 63.7 61.9 4.7 7.3 7.6 9.4 10.2 7.3 3-2.5 16.2-49.3 19.8-70 3.8-21.9 4.8-37 4.3-61-.7-31.2-2.4-38.7-9.8-44.3-3.2-2.3-9.4-3-13.4-1.5z" />
                    <path d="M280.8 384.7c-2.9 3.3-14.6 26.7-18.3 36.7-16.3 44-20.5 94-12 142.1 5.4 30.4 18.8 64.1 36.3 91.5 39.3 61.1 102.2 104.5 173.1 119.4 68.5 14.4 138.2.5 198.8-39.7 46.2-30.5 82-74.9 101.8-126.1 22.6-58.5 23.1-124.7 1.5-184.6-4.1-11.2-13.9-31.4-18-36.9-2.9-3.9-3.4-4.2-4.5-2.8-.6.9-1.7 5.3-2.4 9.9-.7 4.6-2.7 15.3-4.6 23.8-4.4 20.2-7.5 45.1-7.5 60.3 0 18.9-1.8 44.3-4 59.2-4.6 30-16.8 61.8-33.7 87.9-27.6 42.7-67.7 74.7-112.1 89.5-23 7.7-37.2 9.9-62.7 9.9-25.4 0-41.7-2.4-62.2-9.3-57.9-19.4-111.4-70.3-133.7-127.5C304 555.7 299 527.4 299 488c0-24.9-1.3-36.3-8-71-7.2-37.1-6.9-36-10.2-32.3z" />
                    <path d="M398.4 480.4c-20.6 6.7-32.4 24.7-31.2 47.8 1 20.1 15.5 37.1 35.7 41.8 7.3 1.7 20.1.8 27.3-2 21.5-8.1 34-32.3 28.3-54.3-6.9-26.7-34.1-41.7-60.1-33.3zM599.3 479.4c-21.2 5.2-35.3 23.4-35.3 45.8 0 7.3 2.6 16.7 6.3 22.8 3.6 5.9 12.9 15.1 17.9 17.6 28.9 14.6 63.4-2.1 68.8-33.4 1.9-10.6-1-23.8-7.1-33.3-10.3-16.2-31.2-24.2-50.6-19.5zM483.8 614.6c-3.2 1.7-5.8 6.2-5.8 9.9 0 5.3 4.1 10.3 15.2 18.4 6.9 5 8.8 8.3 8.8 15.4 0 4.3-.6 6.3-3.1 10-5.1 7.7-14.1 13.7-20.7 13.7-6.3 0-8.2 7.4-2.9 11.4 2.1 1.6 4.3 2.1 8.5 2.1 7-.1 12.8-2.3 21-8.2 3.5-2.5 6.9-4.2 7.6-4 .8.3 4.3 2.6 8 5.1 3.7 2.5 9.2 5.3 12.2 6.2 10 2.9 19.4-.4 19.4-6.7 0-3.2-2.2-4.6-10.6-6.8-5.1-1.3-12.6-7-16.5-12.3-2.5-3.5-2.9-5-2.9-10.2 0-8 1.9-11 11.3-17.9 11.8-8.7 14.6-13.9 11.2-21-2.9-6.3-5.1-6.7-33.2-6.7-20 .1-25.3.4-27.5 1.6z" />
                </svg>


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