import React, { useRef } from 'react';

interface Props {

}

const ScrollForMoreButton: React.FC<Props> = ({ }) => {

    const circlePathRef = useRef<SVGPathElement>(null);
    const textCurvedRef = useRef<SVGTextElement>(null);
    const pathTextCurvedRef = useRef<SVGTextPathElement>(null);
    const circleRef = useRef<SVGCircleElement>(null);

    React.useEffect(() => {
        if (circlePathRef.current && textCurvedRef.current && circleRef.current) {
            const lengthCirclePath = circlePathRef.current.getTotalLength();
            textCurvedRef.current.setAttribute('textLength', `${lengthCirclePath - 20}`);

            let hoverAnimation: ReturnType<typeof setInterval> | null = null;

            const turn = () => {
                if (hoverAnimation) {
                    clearInterval(hoverAnimation);
                    hoverAnimation = null;
                }
            };

            const stop = () => {
                if (!hoverAnimation) {
                    hoverAnimation = setInterval(() => {
                        textCurvedRef.current?.style.setProperty(
                            'transform',
                            `rotate(${((Date.now() % 10000) / 10000) * 360}deg)`
                        );
                        textCurvedRef.current?.style.setProperty('transform-origin', '50% 50%');
                    }, 100);
                }
            };

            circleRef.current.addEventListener('mouseover', turn);
            circleRef.current.addEventListener('mouseleave', stop);

            return () => {
                circleRef.current?.removeEventListener('mouseover', turn);
                circleRef.current?.removeEventListener('mouseleave', stop);
                if (hoverAnimation) {
                    clearInterval(hoverAnimation);
                }
            };
        }
    }, []);

    return (
        <div className='text-white'>
            <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134 136">
                <defs>
                    <path ref={circlePathRef} id="circlePath" d="M7,69a60,60 0 1,0 120,0a60,60 0 1,0 -120,0" />
                </defs>
                <g>
                    <text x="50%" y="50%" className="button-letter-center" id="letter">
                        A
                    </text>
                    <text ref={textCurvedRef} id="textCurved" fill="currentColor">
                        <textPath side="right" ref={pathTextCurvedRef} id="pathTextCurved" xlinkHref="#circlePath">
                            <tspan className="button-curved-en">• Scroll For More</tspan>
                            <tspan className="button-curved-jpn">• Scroll For more</tspan>
                        </textPath>
                    </text>
                    <circle ref={circleRef} id="circle" cx="67" cy="69" r="60" fill="transparent" />
                </g>
            </svg>
        </div>
    )
}

export default ScrollForMoreButton