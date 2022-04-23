import React from 'react';
import styled from "@emotion/styled";
import Zoom from 'react-reveal/Zoom';

const AboutInCTFSection = styled.section`
    padding: 8vh 2.5vw;
    background: white;
    img {
      max-width: 100%;
      
      padding: 0.5rem;
      border-radius: 8px;
      box-shadow: 3px 5px 8px rgba(0, 0, 0, 0.3);
    }
    h2 {
        font-weight: 700;
        text-align: center;
        line-height: 1.2;
        font-size: calc(1.25rem + 1.2vw);
    
        margin-bottom: 1.75rem;
        span {
          color: #ba1833;
        }
    }
    p {
        text-align:justify;
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
    color:#ba1833;
    font-size: calc(1.2rem + 0.15vw);
    span {
        display: inline-block;
    }
`;

const PrizeDetails = [
    {
        name: "1st Prize",
        reward: "Cash, Momentos",
        prize: "5000 AED",
        photo: require('../../assets/images/photos/participants/one.mp4'),
    },
    {
        name: "2nd Prize",
        reward: "Cash, Momentos",
        prize: "3500 AED",
        photo: require('../../assets/images/photos/participants/two.mp4'),

    },
    {
        name: "3rd Prize",
        reward: "Cash, Momentos",
        prize: "3000 AED",
        photo: require('../../assets/images/photos/participants/3.mp4'),

    }
];
const PrizeInfoUAE = () => (
    <div style={{ background: 'white' }}>
        <AboutInCTFSection className="container mx-auto">
            <Zoom up>
                {/* <div className="md:hidden flex justify-center mb-6">
                <div className="rounded-lg p-2 bg-blue-100" style={{ maxWidth: '100%', width: '1100px' }}>
                    <div className="flex flex-wrap items-center">
                        <div className="md:w-4/5 px-3">
                            Have you got stuck? Need Help? <wbr />
                            <span className="inline-block">
                                Join our discord server, ask your doubts & get support from our experts.
                            </span>
                        </div>
                        <div className="md:w-1/5 flex items-center md:my-0 my-3 px-2 md:px-0 justify-end">
                            <a href="/" className="bg-blue-800 mb-0 px-4 py-3">
                                Join Telegram Now <i className="fa fa-chevron-right ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}
                <div className="flex flex-wrap  mx-0">
                    <h2 className="mt-2 align-center">
                        Students Can Grab a <wbr />
                        <span style={{ color: '#ba1833' }}>Chance to Win </span> <wbr />
                        Exciting Prizes
                    </h2>
                    <div className="md:w-2/3 p-2">
                        {/* <h2 className="mt-2">
                            Prize & <wbr />
                            <span style={{ color: '#ba1833' }}>Talent Incubation Programme</span> <wbr />
                            for School Students
                        </h2> */}
                        <div class="grid grid-cols-3 gap-3 ">
                            {PrizeDetails.map((s, index) => (
                                <div className="shadow h-full text-center rounded-xl bg-white py-5 px-3">
                                    <video autoPlay loop muted src={s.photo} />
                                    <div className="text-xl lg:text-2xl font-semibold mb-2 mt-3">{s.name}</div>
                                    <div className=" text-xl lg:text-2xl font-bold mb-2 mt-3">{s.prize}</div>
                                    {s.prize && <div className="text-lg">{s.reward}</div>}
                                    {s.linkedIn && (
                                        <div className=" mt-3 text-3xl text-center">
                                            <a href={linkedIn} target="_blank" className="fab fa-linkedin" />
                                        </div>
                                    )}

                                </div>
                            ))}
                        </div><br/>
                        <div className="md:w-1/5 flex items-center md:my-0 my-3 px-2 md:px-0 justify-end">
                            <a href="/prizelist" className="bg-800 mb-0 px-4 py-3">
                                More Prizes <i className="fa fa-chevron-right ml-1" />
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/3 flex justify-end items-center p-3">
                        <div>
                            <video autoPlay loop muted src={require('../../assets/images/photos/participants/prize.mp4')} />
                        </div>
                    </div>
                </div>
            </Zoom>
        </AboutInCTFSection>
    </div>
);

export default PrizeInfoUAE;