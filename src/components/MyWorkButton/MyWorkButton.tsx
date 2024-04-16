import * as React from 'react';
import "./MyWorkButton.css"

interface Props {

}

const MyWorkButton: React.FC<Props> = ({ }) => {
    return (
        <a id="MyWorkButton__Container" href="#portfolio">
            <button className="MyWorkButton__MyWork">
                <span className="MyWorkButton__Circle" aria-hidden="true">
                    <span className="MyWorkButton icon arrow"></span>
                </span>
                <span className="MyWorkButton button-text">My Work</span>
            </button>
        </a>
    )
}

export default MyWorkButton