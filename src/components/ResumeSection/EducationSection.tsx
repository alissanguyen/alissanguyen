import * as React from 'react';

interface Props {

}

const education = [
    {
        id: 0,
        year: '2024 - Current',
        title: 'Computer Science Major with focus on AI/ML',
        by: "Western Governors University",
        description: "Focused primarily on artificial intelligence and machine learning frameworks such as PyTorch and TensorFlow, as well as language models like LLMs (Large Language Models)."
    },
    {
        id: 1,
        year: '2021 - Current',
        title: "Front-end Engineer & Web Developer",
        by: "at GitHub OpenSource - Seattle, WA",
        description: "Created multiple software applications with React, NextJS, SSR, and experimental UX patterns. Contributed to several open-source repositories on GitHub including Prisma (a GraphQL ORM) and Apple&apos;s password manager repo."
    },
    {
        id: 2,
        year: '2023-2024',
        title: "Financial Consultant/Advisor",
        by: "KeyBank - Seattle, WA",
        description: "Assessed and managed clients financial conditions for credit facilities, top performer in the Seattle area within the first quarter. "
    },
    {
        id: 3,
        year: '2019-2021',
        title: "Computer Science & Economics Major",
        by: "Rhodes College - Tennessee, USA",
        description: "Focused primarily on CS courses and gained skills in Python, Java, and OOP."
    }
]

const EducationSection: React.FC<Props> = ({ }) => {
    return (
        <div>
            <p className="MyEducation__Text text-4xl text-dark-textSecondary font-semibold mb-8">My Education</p>
            <div className="line-break-gradient"></div>
            <ul className='Education__ListWrapper flex flex-col gap-6 md:grid-cols-3 mt-10'>
                {education.map((each) => (
                    <li key={each.id} className="grid grid-cols-6 items-center gap-14">
                        <span className="text-xl font-medium col-span-1 text-dark-textPrimary">{each.year}</span>
                        <div className="flex flex-col col-span-2">
                            <span className="text-xl font-bold text-dark-textSecondary">{each.title}</span>
                            <span className="text-dark-textPrimary">{each.by}</span>
                        </div>
                        <span className="md:col-span-1 text-lg lg:col-span-3 text-slate-500">{each.description}</span>
                        <div className="line-break"></div>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

export default EducationSection