import React from 'react';
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

const QuickInfoSection = styled.section`
      padding: 2vh 2vw;
      user-select: none;
      background: #f5f5f5a8;
      .col-md-4 {
          display: flex;
          align-items: center;
          justify-content: center;
      }
      img {
          max-height: 90px;
          max-width: 100%;
      } 
      .qs {
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          line-height: 1.2;
          margin-bottom: 0.25rem;
          color: #000;
      }
      .ans {
        font-size: 18px;
        line-height: 1.5;
        font-weight: 300;
        color: #ba1833;
      }
`;

const LandingQuickInfo = () => {

    const landingInfo = [
        {
            image: require('../../assets/images/icons/trophy.png'), left: true,
            question: "What?", answer: <>Cyber-Security Training & <br /> Capture The Flag (CTF) Championship</>
        },
        {
            image: require('../../assets/images/icons/calendar.png'), up: true,
            question: "When?", answer: <>
                March 20th to June 19th
            </>
        },
        {
            image: require('../../assets/images/icons/school.webp'), right: true,
            question: "For Whom?", answer: <>
                School Students <br/>
               
            </>,
        }
    ]

    return <QuickInfoSection>
        <div className="flex flex-wrap container mx-auto">{landingInfo.map((l) =>
            <div className="md:w-1/3 w-full pr-4 pl-4 p-2">
                <Fade left={l.left} right={l.right} up={l.up}>
                    <div className="flex flex-wrap w-full mx-0">
                        <div className="flex items-center justify-center w-1/4 p-2 md:p-0">
                            <img draggable="false" alt={l.question} src={l.image} />
                        </div>
                        <div className="w-3/4 flex items-center px-2">
                            <div>
                                <div className="qs">{l.question}</div>
                                <div className="ans">{l.answer}</div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        )}</div>
    </QuickInfoSection>

};

export default LandingQuickInfo;