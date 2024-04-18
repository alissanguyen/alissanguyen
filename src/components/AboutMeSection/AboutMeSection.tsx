import * as React from 'react';
import "./AboutMeSection.css"
import SparkleSVG from '../SparkleSVG';
import SkillsSection from '../SkillsSection/SkillsSection';
import FrontEndImage from "../../asset/front-end.png"
import WebHostingImage from "../../asset/web-hosting.png"
import DatabaseManagementImage from "../../asset/database-management.png"
import CMSImage from "../../asset/cms.png"
import Image from 'next/image';

interface Props {

}
const skills = [
    {
        id: "fe",
        title: "Front-end development",
        description: "Responsive and performant web pages with React or Remix, with and SSR for a better user experience. Utilize modern UI libraries like TailwindCSS, Headless UI, Framer Motion, etc. to create beautiful, responsive, and accessible web apps quickly.",
        image: FrontEndImage
    },
    {
        id: "wbd",
        title: "Web hosting and deployment",
        description: "Deployment to platforms such as Vercel, Netlify, and Cloudflare to leverage caching and firewalls at the edge.",
        image: WebHostingImage
    },
    {
        id: "dm",
        title: "Database management",
        description: "Data management with Firestore, Prisma, or Supabase. Use of classic web security principles and user authorization/authentication with Firebase Auth.",
        image: DatabaseManagementImage
    },
    {
        id: "cms",
        title: "CMS integration",
        description: "Creating JAM Stack frontend applications that integrate with modern headless content management systems (CMS) like Contentful.",
        image: CMSImage
    }
]

const AboutMeSection: React.FC<Props> = ({ }) => {
    return (
        <div className='flex flex-col items-start justify-center gap-14 pl-20 ' id="aboutme">
            <div className='flex flex-row items-center text-2xl gap-3 font-medium rounded-3xl border-[1px] border-dark-textPrimary px-8 py-2'>
                <SparkleSVG />
                <p>About Me</p>
            </div>
            <p className="AboutMe__Slogan gradient-text pb-2 leading-tight">Turning complex problems <br></br> into simple design</p>
            <div className="AboutMe__StatsWrapper flex flex-row items-center w-full gap-5 text-dark-textSecondary">
                <div className="AboutMe__StatItem flex flex-col items-center gap-2 w-full">
                    <span className="AboutMe__StatNumber text-8xl gradient-text">4+</span>
                    <span className="text-xl font-semibold">Years of experience</span>
                </div>
                <div className="AboutMe__StatItem flex flex-col items-center gap-2 w-full">
                    <span className="AboutMe__StatNumber text-8xl gradient-text">50+</span>
                    <span className="text-xl font-semibold">Projects done</span>
                </div>
                <div className="AboutMe__StatItem flex flex-col items-center gap-2 w-full">
                    <span className="AboutMe__StatNumber text-8xl gradient-text">1,250+</span>
                    <span className="text-xl font-semibold">GitHub contributions</span>
                </div>
            </div>

            <div className="flex flex-row gap-32">
                <div className='flex flex-col items-start gap-7'>
                    <p className="AboutMe__Text text-xl font-medium text-slate-400 leading-relaxed tracking-wide">I had my awakening call recently, and it made me wonder who I am. I woke up one morning and everything seems unfamiliar. I noticed that I have never taken a good look at Seattle. I did not notice that pizzaria in the corner near the street where I live. I did not notice how many different varieties of trees there are throughout the city. I did not notice that tall building with floor to ceiling windows near the entrance to I-5. I did not notice how blue the sky was. &quot;Where am I? Who in the world am I?&quot;</p>
                    <p className="AboutMe__Text text-xl font-medium text-slate-400 leading-relaxed tracking-wide">Life has many great puzzles, but the greatest of them all (in my opinion) is the riddle of figuring out who we are, and why we are here. Life has many struggles, but the greatest of them all is to not lose yourself in the process of finding yourself. At the end of the day, I&lsquo;m grateful that I&lsquo;m here, in this moment, and tomorrow I will be a better person than today.</p>
                    <p className="AboutMe__Text text-2xl font-normal text-slate-200 italic leading-relaxed tracking-wide">I believe one of the greatest ability of humans is the ability to introspect and reflect.</p>
                </div>
                <div className='flex flex-col items-start gap-6 text-xl'>
                    <div className="flex flex-col items-start">
                        <span>Name</span>
                        <span className="font-semibold text-dark-textSecondary">Tam Nguyen</span>
                        <span className="font-semibold text-dark-textSecondary">Nickname: Alissa / Avione</span>
                    </div>

                    <div className="flex flex-col items-start">
                        <span >Phone</span>
                        <span className="font-semibold text-dark-textSecondary">(425) 728-0312</span>
                    </div>

                    <div className="flex flex-col items-start">
                        <span >Email</span>
                        <span className="font-semibold text-dark-textSecondary">im.tamnguyen@gmail.com</span>
                    </div>

                    <div className="flex flex-col items-start">
                        <span >Location</span>
                        <span className="font-semibold text-dark-textSecondary">Seattle, Washington, USA</span>
                    </div>
                </div>
            </div>

            <div className='spacer-div h-10'></div>
            <ul className='grid grid-cols-2 gap-10'>
                {skills.map((skill) => (
                    <li key={skill.id} className="AboutMe__SkillBubble relative flex flex-col items-start overflow-hidden">
                    <div className="AboutMe__SkillBubble__Content">
                      <p className="font-semibold text-3xl text-yellow-500 mb-2">{skill.title}</p>
                      <p className='font-medium text-xl text-dark-textSecondary'>{skill.description}</p>
                    </div>
                    <div className="AboutMe__SkillBubble__ImageWrapper">
                      {skill.image ? (
                        <Image
                          src={skill.image}
                          alt={skill.title}
                          className="AboutMe__SkillBubble__Image w-full h-auto"
                        />
                      ) : null}
                    </div>
                  </li>
                ))}
            </ul>
        </div>
    )
}

export default AboutMeSection