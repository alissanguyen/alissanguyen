import Image, { StaticImageData } from 'next/image';
import * as React from 'react';

type Project = {
    id: string;
    name: string;
    techStack: string[];
    thumb: StaticImageData;
}

interface Props {
    key: string;
    project: Project
}

const ProjectCard: React.FC<Props> = (props) => {
    return (
        <li className="ProjectCard__Wrapper flex" key={props.project.id}>
            <Image src={props.project.thumb} alt="" className='ProjectCard__Image rounded-2xl' />
            <div className="ProjectCard__Description flex flex-col items-start gap-5">
                <span className="font-medium text-2xl drop-shadow-lg">
                    {props.project.name}
                </span>
                <div className="ProjectCard__BadgeWrapper flex flex-row items-center justify-start gap-2">
                    {props.project.techStack.map((tech) => (
                        <span key={tech} className="ProjectCard__Badge bg-black px-3 py-2 leading-none rounded-2xl">{tech}</span>
                    ))}
                </div>

            </div>

        </li>
    )
}

export default ProjectCard