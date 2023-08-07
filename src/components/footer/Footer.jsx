import React from "react";
import {
    FaLinkedin,
    FaGithub
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>

                <div className="socialIcons">
                    <a  href="https://github.com/RahbulFaheem" target="_blank">
                        <span className="icon">
                            <FaGithub />
                        </span>
                    </a>    
                    <a  href="https://www.linkedin.com/in/rahbulfaheem/" target="_blank">
                        <span className="icon">
                        <FaLinkedin />
                        </span>
                    </a>
                </div>
            </ContentWrapper>
            
        </footer>
    );
};

export default Footer;
