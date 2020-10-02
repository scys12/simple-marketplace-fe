import React from 'react';
import {FooterWrapper, FooterText} from './style';
const Footer = () => {
    return (
        <FooterWrapper>
            <section>
                <FooterText>Copyright © 2020. All rights reserved</FooterText>
            </section>
            <section>
                <FooterText>Made with <span style={{color:"red"}}>&#10084;</span> by Samuel</FooterText>
            </section>
        </FooterWrapper>
    );
};

export default Footer;