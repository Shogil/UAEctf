import React from 'react';
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Zoom from "react-reveal/Zoom";

const VideoRotationAnimation = keyframes`
  0%{ transform: rotateZ(1deg); }
  25%{ transform: rotateZ(2deg); }
  50%{ transform: rotateZ(3deg); }
  75%{ transform: rotateZ(4deg); }
  100%{ transform: rotateZ(6deg); }
`

const ReasonsSection = styled.section`
  padding: 8vh 2vw;
  color: black;
  h2 {
      
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
    font-size: calc(1.5rem + 0.5vw);
  }
  video {
    max-width: 100%;
    max-height: 300px;
    border-radius: 1rem;
    box-shadow: 3px 5px 8px rgba(0,0,0,0.5);
    margin-bottom: 1.5rem;
    transform: rotateZ(4deg);
    animation: 4s ${VideoRotationAnimation} infinite alternate-reverse;
    outline: none!important;
    transition: 1s all ease;
    &:hover {
      transform: rotateZ(0);
      transition: 1s all ease;
    }
  }
`;


const LandingReasonsToParticipate = () => {

    const reasons = [
        {
            "video": require('../../assets/images/photos/participants/Why-participate.1.png'),
            "title": <>Learn Hands-On, <br /> & Get a Head Start to CyberSec.</>
        },
        {
            "video": require('../../assets/images/photos/participants/Why-participate-.2.png'),
            "title": <>Understand the latest happenings in the Cyber security realm</>
        },
        {
            "video": require('../../assets/images/photos/participants/Why-participate-3.png'),
            "title": <>Chance to win exciting prizes<br /> </>
        },
        {
            "video": require('../../assets/images/photos/participants/Why-participate--4.png'),
            "title": <>Get to Meet & Interact with Top Engineers from the Industry</>
        },
    ];

    return <div style={{ color: '', background: '' }}>
        <ReasonsSection className="container mx-auto">
            <h2 className="text-center">
                <div className="flex justify-center">
                    <img className="mr-2" style={{ width: '64px' }} alt="Why Participate?" src={require('../../assets/images/icons/heart.png')} />
                </div>
                Why Participate?
            </h2>
            <div className="flex flex-wrap  mx-0">
                {reasons.map((r, index) =>
                    <Zoom up={index % 2} left={!index % 2}>
                        <div className="w-full md:w-/2 lg:w-1/4 text-center mb-6 md:mb-0 p-2">
                           
                                {/* <video autoPlay loop muted src={r.video} /> */}
                                <img src={r.video} /><br />
                                <div style={{ color: '' }}>{r.title}</div>
                            
                        </div>
                    </Zoom>
                )}
            </div>
        </ReasonsSection>
    </div>

};

export default LandingReasonsToParticipate;