import * as React from 'react';

interface Props {

}

const WorkExperienceSection: React.FC<Props> = ({ }) => {
    return (
        <div>
            <p className="WorkExperience__Text text-4xl text-dark-textSecondary font-semibold mb-8">Work Experience</p>
            <div className="line-break-gradient"></div>

            <div className='WorkExperience__Item mt-5'>
                <div className='flex flex-row items-center justify-between w-5/6 mb-2'>
                    <span className='text-2xl text-dark-textSecondary font-medium'>Front-end Engineer & Web Developer - Seattle, Washington</span>
                    <span className='text-lg italic text-orange-300'>August 2020 - Present</span>
                </div>
                <ul className="list-disc flex flex-col gap-3">
                    <li className='ml-20 text-lg w-4/5 text-slate-400 tracking-wide'>
                        Created {" "}
                        <a href="https://www.alissanguyen.dev" target='_blank' className='text-emerald-600 hover:text-emerald-500 relative inline-block'>alissanguyen.dev
                            <span className="underline-animation"></span>
                        </a>, a development portfolio and technical blog with ~6,000 unique monthly active readers. Built with React, TypeScript, Remix and uses Contentful as a headless CMS. Supports theme switching between light-mode and dark-mode using session cookies and Tailwind CSS. Received a 100 score on Google Chrome Lighthouse&apos;s &quot;Best Practices&quot;, &quot;Accessibility&quot; and &quot;SEO&quot; categories and &gt;90 for &quot;Performance&quot;. Incorporates continuous deployment via Vercel and is hosted behind Cloudflare for delivery at the edge and DDoS protection
                    </li>
                    <li className='ml-20 text-lg w-4/5 text-slate-400 tracking-wide'>
                        Designed and implemented a Shopify e-commerce website for Pine Plus Apple LLC utilizing Shopify templates and customization tools. Created a visually appealing and user-friendly website that accurately represents the brand and showcases products effectively. Handled 200-300 monthly order trackings and transactions. Monitored the website&apos;s performance and implemented optimizations to improve 5% page load times and overall website speed.
                    </li>
                    <li className='ml-20 text-lg w-4/5 text-slate-400 tracking-wide'>
                        Created the npm library {" "}
                        <a href="https://usetypewriter.com/" target='_blank' className='text-emerald-600 hover:text-emerald-500 relative inline-block'>use-typewriter-hook
                            <span className="underline-animation"></span>
                        </a>
                         {' '}using modern JavaScript and React hooks. Main-tained the library across 3 major releases, in addition to creating a dedicated documentation website at usetypewriter.com.
                    </li>
                    <li className='ml-20 text-lg w-4/5 text-slate-400 tracking-wide'>
                        Created a variety of frontend projects to showcase advanced animation techniques, server-side rendering (SSR), and
                        experimental UX patterns. Contributor to several open-source repositories on GitHub including Prisma (a GraphQL
                        ORM) and Apple&apos;s password manager repo.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default WorkExperienceSection