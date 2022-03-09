import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';

const OrganizersSection = styled.section`
background:black;
    user-select: none;
    .content-container {
      padding: 5vh 5vw;
      h3 {
          text-align: center;
          font-weight: 700;
          color:white;
    margin-bottom: 2rem;
    text-align: center;
    font-size: calc(1.5rem + 0.5vw);
        }
        h4 {
          font-size: 18px;
          font-weight: 600;
          color: #444;
        }
        img {
          max-height: 78px;
          max-width: 100%;
          margin-bottom: 1rem;
        }
        .md\\:w-1\\/3 {
            padding: 1rem;
            p {
              font-size: 12px;
              max-width: 450px;
              margin-bottom: 0;
              color:white;
            }
        }
    }
    img {
      max-width: 100%;
    }
`;

const LandingOrganizers = () => {


    return <OrganizersSection>
        <div className="content-container">
            <h3 >Organized By</h3>
            <div className="flex flex-wrap  mx-0">
                <Fade left>
                <div className="w-full md:w-1/2 pr-4 pl-4 bi0s text-center md:order-2 order-1 ">
                        <a href="www.ipf-uae.org">
                            <img alt="Indian Peoples Forum" src={require('../../assets/images/logos/ipf.jpeg')}
                                className="mx-auto" />
                        </a>
                        <h4 style={{color: 'white'}}>Indian Peoples Forum</h4>
                        <div className="flex justify-center">
                            <p style={{color: 'white'}}>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                            </p>
                        </div>
                    </div>
                </Fade>
                <Fade up>
                    <div className="w-full md:w-1/2 pr-4 pl-4 bi0s text-center md:order-2 order-1 ">
                        <a href="https://app.traboda.com/">
                            <img alt="Team bi0s" src={require('../../assets/images/logos/traboda_dark.png')}
                                className="mx-auto" />
                        </a>
                        <h4 style={{color: 'white'}}>Traboda Cyber Lab</h4>
                        <div className="flex justify-center">
                            <p style={{color: 'white'}}>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                            </p>
                        </div>
                    </div>
                </Fade>
                {/* <Fade right>
                    <div className="w-full md:w-1/3 pr-4 pl-4 cyber md:order-2 order-1 md:text-left text-center">
                        <a href="https://www.amrita.edu/center/cyber-security">
                            <img
                                alt="Amrita Center for Cyber Security Systems & Networks"
                                src={require('../../assets/images/logos/amrita_cyber.png')} className="inline"
                            />
                        </a>
                        <h4>India's Leading CyberSec. Researchers</h4>
                        <div className="flex md:justify-start justify-center">
                            <p>
                                Amrita Center for Cyber Security Systems and Networks promote partnership between
                                industry, academia and the government to foster innovative research and education
                                in Cyber Security, thus enhancing knowledge, deriving solutions, benefiting society
                                and mitigating risks. The Center is supported by the Government of India throught
                                many of its Departments and Mission REACH programs. The Center has been designated
                                as a Center of Relevance and Excellence (CORE) for Cyber Security in India.
                            </p>
                        </div>
                    </div>
                </Fade> */}
            </div>
        </div>
    </OrganizersSection>;

};

export default LandingOrganizers;