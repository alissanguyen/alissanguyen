import React, { useRef } from 'react';
import { TweenMax, Linear } from 'gsap';
import './ScrollForMoreButton.css';

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

      const hover = TweenMax.to(textCurvedRef.current, 10, {
        transformOrigin: '50% 50%',
        rotation: '360',
        repeat: -1,
        ease: Linear.easeNone,
      });

    }
  }, []);

  return (
    <div className='text-dark-textPrimary hover:text-dark-textSecondary pb-32'>
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134 136">
        <defs>
          <path ref={circlePathRef} id="circlePath" d="M7,69a60,60 0 1,0 120,0a60,60 0 1,0 -120,0" />
        </defs>
        <g>
          <text x="50%" y="50%" className="button-letter-center" id="letter">
            ☕
          </text>
          <text ref={textCurvedRef} id="textCurved" fill="currentColor">
            <textPath ref={pathTextCurvedRef} id="pathTextCurved" xlinkHref="#circlePath">
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