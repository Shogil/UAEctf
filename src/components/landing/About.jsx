import React from 'react';
import styled from "@emotion/styled";
import Zoom from 'react-reveal/Zoom';

const AboutInCTFSection = styled.section`
    padding: 8vh 2.5vw;
    background-color:#8dbdb0;
    img {
      max-width: 100%;
      
      padding: 0.5rem;
      border-radius: 8px;
      box-shadow: 3px 5px 8px rgba(0, 0, 0, 0.3);
    }
    h2 {
        font-weight: 700;
        color:black;
        line-height: 1.2;
        font-size: calc(1.25rem + 1.2vw);
        margin-bottom: 1.75rem;
        span {
          color: #a2142b;
        }
    }
    p {
        font-size: calc(1.1rem + 0.2vw);
        margin-bottom: 1.5rem;
        max-width: 90%;
    }
    a {
       display: inline-block;
       text-align: center;
       margin-bottom: 0.5rem;
       margin-right: 0.5rem;
       background: #E65100;
       color: white;
       font-weight: 600;
       padding: 0.5rem 1.2rem;
       text-decoration: none!important;
       border-radius: 8px;
       box-shadow: 2px 6px 8px rgba(0,0,0,0.3);
    }
   .features-list {
      img {
         max-height: 180px;
         width: 90px;
         max-width: 100%;
         box-shadow: none!important;
         padding: 0;
        margin-bottom: 0.5rem;
      }
   }
`;

const HighlightFeature = styled('div')`
    margin-bottom: 1.75rem;
    line-height: 1.3;
    color:green;
    font-size: calc(1.2rem + 0.15vw);
    span {
        display: inline-block;
    }
`;

const LandingAboutInCTF = () => (
    <div style={{ color: 'white', background:'black'}}>
    <AboutInCTFSection className="container mx-auto">
        <Zoom up>
            <div className="md:hidden flex justify-center mb-6">
                <div className="rounded-lg p-2 bg-blue-100" style={{ maxWidth: '100%', width: '1100px' }}>
                    <div className="flex flex-wrap items-center">
                        <div className="md:w-4/5 px-3">
                            Have you got stuck? Need Help? <wbr />
                            <span className="inline-block">
                                Join our discord server, ask your doubts & get support from our experts.
                            </span>
                        </div>
                        <div className="md:w-1/5 flex items-center md:my-0 my-3 px-2 md:px-0 justify-end">
                            <a href="/discord" className="bg-blue-800 mb-0 px-4 py-3">
                                Join Discord Now <i className="fa fa-chevron-right ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap  mx-0">
                <div className="md:w-2/3 p-2">
                    <h2 className="mt-2">
                        UAE CyberSecurity Championship & <wbr />
                        <span style={{ color: 'red'}}>Talent Incubation Programme</span> <wbr />
                        for for School Students
                    </h2>
                    <p>
                    UAE CTF Junior - Online Cyber Security Contest for Students, is a virtually 
                    organised cybersecurity contest for school students in UAE. Cybersecurity 
                    competitions have gained popularity as a way for students to learn more about 
                    cybersecurity while also developing and refining their hacking skills. Realizing 
                    the vital role cybersecurity plays in making the digital world a safer place,
                     many countries are now introducing cybersecurity education at the school level 
                     to develop interest and nurture talent in the area.
                    </p>
                   
                    <p>
                    UAE CTF Junior is an attempt to educate and inspire high school students through 
                    interactive hacking challenges. The contest encourages students to learn subjects 
                    on their own and engage in solving real-world challenges that give students the 
                    opportunity to analyze attacks and share their findings. Participation in the 
                    contest is free and requires no prior knowledge for taking part in it. 
                    </p>
                </div>
                <div className="md:w-1/3 flex justify-end items-center p-3">
                    <div>
                        
                        <HighlightFeature>
                            3-month Long Completely Free, <wbr /> <span>End-to-End Programme</span>
                        </HighlightFeature>
                        
                        <HighlightFeature>
                            Organized by Indian Peoples Forum <wbr />
                            <span>and Traboda Cyber Lab</span>
                        </HighlightFeature>
                    </div>
                </div>
            </div>
        </Zoom>
    </AboutInCTFSection>
    </div>
);

export default LandingAboutInCTF;