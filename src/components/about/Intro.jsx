import React from 'react';
import Fade from "react-reveal/Fade";
import styled from "@emotion/styled";

const IntroSectionWrap = styled.div`
    user-select: none;
    p {
      width: 100%;
      max-width: 800px;
      margin-bottom: 1rem;
    }
`;


const InctfIntro = () => {

    const participantImages = [
        require('../../assets/images/photos/participants/1.jpg'),
        require('../../assets/images/photos/participants/2.jpeg'),
        require('../../assets/images/photos/participants/3.jpg'),
        require('../../assets/images/photos/participants/4.jpg')
    ]

    return <IntroSectionWrap>
        <div className="container min-w-lg mx-auto sm:px-4 py-12 px-1">
            <div className="flex flex-wrap">
                <div className="md:w-2/3 pr-4 pl-4 flex items-center p-6">
                    <div>
                        <Fade up><h1 className="font-bold mb-6">Why UAE CTF Junior?</h1></Fade>
                        <Fade>
                            <p>
                            As interactions through cyberspace have become the ‘new normal’ in a post-covid world with employment, 
                            education, relationships and all forms of communication happening in the same space called ‘internet’, 
                            concerns over cybersecurity are unavoidable. Tackling this unprecedented challenge requires the cybersecurity 
                            force to integrate expert security talents on-demand. Therefore, building a skilled workforce and bridging 
                            the skill gap is of paramount importance for which the youth should be exposed to cybersecurity education, training and awareness.
                            </p>
                        </Fade>
                        <Fade>
                            <p>
                            UAE CTF Junior 2022, stemmed from an idea that cybersecurity education must be introduced at school 
                            level in order to inspire, develop and nurture talents in the area.
                            </p>
                        </Fade>
                        
                    </div>
                </div>
                <div className="md:w-1/3 pr-4 pl-4 p-2">
                    <div className="flex flex-wrap  mx-0">{participantImages.map((i,index) =>
                        <Fade delay={index*150}>
                            <div className="w-1/2 p-1"><img draggable="false" style={{ maxWidth: '100%' }} src={i} alt="INCTF participant" /></div>
                        </Fade>
                    )}</div>
                </div>
            </div>
        </div>
    </IntroSectionWrap>;

};

export default InctfIntro;