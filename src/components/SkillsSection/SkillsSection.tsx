import * as React from 'react';
import "./SkillsSection.css"
import { useInView } from 'react-intersection-observer';

interface Props {

}

interface SkillBarRefs {
    [key: string]: HTMLDivElement | null;
}

interface SkillsData {
    html: number;
    css: number;
    javascript: number;
    react: number;
    typescript: number;
    nodejs: number;
    nextjs: number;
}


const SkillsSection: React.FC<Props> = ({ }) => {

    const skillsRef = React.useRef<SkillsData>({
        html: 90,
        css: 75,
        javascript: 90,
        react: 80,
        typescript: 70,
        nodejs: 65,
        nextjs: 85,
    });

    const skillBarRefs = React.useRef<SkillBarRefs>({});

    const { ref: skillsContainerRef, inView } = useInView({
        rootMargin: '-50px',
    });

    React.useEffect(() => {
        const animateSkillBars = () => {
            Object.keys(skillsRef.current).forEach((key) => {
                const skillBar = skillBarRefs.current[key];
                const speechBubble = skillBar?.parentElement?.querySelector('.speech-bubble');
                if (skillBar) {
                    skillBar.style.width = '0%';
                    void skillBar.offsetWidth; // Trigger reflow
                    skillBar.style.width = `${skillsRef.current[key as keyof SkillsData]}%`;
                    skillBar.classList.add(`animate`);
                    skillBar.classList.add(`animate-${key}`);
                }
                if (speechBubble instanceof HTMLElement) {
                    speechBubble.textContent = key.toUpperCase().replace(/\b\w/g, (c) => c.toUpperCase());
                    speechBubble.style.display = 'block';
                }
            });
        };

        if (inView) {
            animateSkillBars();
        }

    }, [inView]);


    return (
        <div className="container" ref={skillsContainerRef}>
            <h1 className="title-skills">Skills</h1>
            {Object.keys(skillsRef.current).map((key) => (
                <div key={key} className="bar">
                    <div className="skill-name">{key.toUpperCase().replace(/\b\w/g, (c) => c.toUpperCase())}</div>
                    <div className="bar-outer">
                        <div
                            ref={(el) => {
                                skillBarRefs.current[key] = el;
                            }}
                            className={`bar-inner ${key} w-${skillsRef.current[key as keyof SkillsData]} animate-${key}`}
                            style={{ width: `${skillsRef.current[key as keyof SkillsData]}%` }}
                        >
                            {`${skillsRef.current[key as keyof SkillsData]}%`}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SkillsSection