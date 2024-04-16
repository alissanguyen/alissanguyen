import * as React from 'react';
import "./SocialHandles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {

}

const SocialHandles: React.FC<Props> = ({ }) => {
    return (
        <div className="container">
            <div className="effect varrius">
                <div className="buttons">

                    <a href="https://www.instagram.com/alissang1211/" target="_blank" className="insta" title="Instagram">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/alissa-nguyen-dev/" target="_blank" className="in" title="Linked In">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a href="https://twitter.com/alissang_dev" target="_blank" className="tw" title="Twitter">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SocialHandles