import * as React from 'react';
import "./ResumeButton.css"

interface Props {

}

const ResumeButton: React.FC<Props> = ({ }) => {
    // TODO: add resume url download link
    return (
        <div className="ResumeButton__Wrapper">
            <button className="slide">Download Resume</button>
        </div>
    )
}

export default ResumeButton