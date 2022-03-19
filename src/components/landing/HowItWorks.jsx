import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';

const HowItWorksSection = styled.section`
  text-align: center;
  img {
     max-width: 100%;
     width: 150px;
     box-shadow: none!important;
     padding: 0;
     margin-bottom: 10px;
  }
  h3 {
      text-transform: uppercase;
      
      font-weight: 900;
      img {
        box-shadow: none!important;
      }
  }
  p {
    text-align:justify;
    font-size: 14px;
  } 
  a {
      text-decoration: none!important;
      display: inline-flex;
      align-items: center;
      line-height: 1;
      background: #eee;
      border-radius: 5px;
      padding: 4px 10px;
      img {
        margin-bottom: 0;
        max-height: 28px;
        margin-right: 8px;
      }
  }
`;


const LandingHowItWorks = () => {

    const steps = [
        {
            "title": "Learn", "icon": require('../../assets/images/icons/learn.png'),
            "delay": 100, "left": true,
            "content": <>
                Students have the opportunity to access world-class learning resources that are made available by team bi0s, India’s No. 1 CTF team. Learning new concepts using the bi0s wiki and YouTube channel coupled with practice sessions at the challenge archive offers hands-on learning outcomes. 
            </>,
            // "links": [
            //     {
            //         "title": "learn from bi0s wiki", "url": "https://wiki.bi0s.in/"
            //     },
            //     {
            //         "title": "practice on Traboda", "url": "https://app.traboda.com/"
            //     }
            // ]

        },
        {
            "title": "Hack", "icon": require('../../assets/images/icons/hack.png'),
            "delay": 500, "top": true,
            "content": <>
                Students compete in the Capture The Flag contest, which is a game-based approach to learning cybersecurity. Solve challenges that put your knowledge to test and then progress to real-world situations that will require true hackers’ skills to succeed. 
            </>,
            // "links": [
            //     {
            //         "title": "watch how it is played", "url": ""
            //     }
            // ]
        },
        {
            "title": "Win", "icon": require('../../assets/images/icons/win.png'),
            "delay": 1000, "right": true,
            "content": <>
                Students who make their way to the top in the CTF leaderboard will receive exciting goodies and prizes, as well as access to exclusive online cybersecurity training after the contest. All other participants will also receive certificates.
            </>,
            // "links": [
            //     {
            //         "title": "", "url": ""
            //     }
            // ]
        }
    ]

    return <div style={{ color: '', background:''}}>
        <HowItWorksSection className="motto-cards flex flex-wrap py-5 mx-0 container mx-auto">
        <div className="w-full flex justify-center p-0 mb-12 px-4">
            <h2 className="md:px-4 px-1 py-2 rounded-r mt-4 mb-2 md:flex inline-block items-center font-bold text-center mb-0">
                <img
                    draggable="false"
                    alt="How it Works?"
                    src={require('../../assets/images/icons/thinking.png')}
                    className="mr-2 my-0 p-0 shadow-none inline-block"
                    style={{ width: '64px' }}
                />
                How Does it Work?
            </h2>
        </div>
        {steps.map((s) =>
            <Fade left={s.left} right={s.right} top={s.top} delay={s.delay}>
                <div className="md:w-1/3 pr-4 pl-4 px-3">
                    <div className="flex flex-wrap  mx-0">
                        <div className="md:w-full pr-4 pl-4 flex items-center justify-center w-1/4 p-1 md:p-0">
                            <img draggable="false" alt={s.title} src={s.icon} />
                        </div>
                        <div className="md:w-full pr-4 pl-4 w-3/4 text-left md:text-center p-2 md:p-0">
                            <h3>{s.title}</h3>
                        </div>
                        <div className="w-full text-left md:text-center">
                            <p>{s.content}</p>
                            {(s.links && s.links.length > 0) &&
                                <div className="w-full mt-3 mb-4">{s.links.map((l) =>
                                    <a className="inline-block mx-2 py-2 px-3 mb-2" target="_blank" href={l.url}>
                                        <i className="fa fa-external-link mr-2" />
                                        {l.title}
                                    </a>
                                )}</div>}
                        </div>
                    </div>
                </div>
            </Fade>
        )}
    </HowItWorksSection>
    </div>

};

export default LandingHowItWorks;