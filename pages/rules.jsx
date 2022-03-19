import React from 'react';
import styled from "@emotion/styled";

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";
import Footer from "../src/components/shared/Footer";
import PageHeader from "../src/components/PageHeader";
import PageFooterExplorer from "../src/components/PageFooterExplorer";

const RulesContainer = styled('div')`
    padding: 1rem 2vw;
    h2 {
      margin: 1.35rem 0;
      font-size: calc(1.2rem + 0.35vw);
    }
    h3 {
      font-size: calc(1.15rem + 0.25vw);
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 1rem;
    }
    ul {
        padding-left: 1.5rem;
        list-style: square;  
        margin-bottom: 1.5rem;
        li {
          margin-bottom: 0.5rem;
        }
    }
`;

const RulePage = () => {

    return <Base meta={{ title: 'Rules' }}>
        <TopBar darkenOnSidebar includeSpace />
        <PageHeader
            title="Rules"
        // breadcrumb={[

        //     {
        //         title: 'Rules',
        //         link: '/rules',
        //         isActive: true
        //     }
        // ]}
        />
        <div className="flex justify-center p-4">
            <RulesContainer className="container">
                <div style={{ width: '100%', maxWidth: '900px' }}>
                    <h1>Rules for the event </h1>
                    <p>The UAE Cyber League is annual cyber-security championship organized for school students in UAE by Traboda CyberLabs Private Limited (“Organizers”). By participating in the Contest, all Participants agree to the following rules -</p>
                    <h2>Participation </h2>
                    <p>
                        Each individual who participates in the competition (“Participant”) in order to be eligible for the finals / prizes must be:
                    </p>
                    <ul>
                        <li><b>not more than nineteen (19) years of age upon your date of registration for the Contest on the Contest website.</b></li>
                        <li><b>must not have completed 12th or equivalent grade of school.</b></li>
                        <li><b>enrolled for any pre-university (high school or secondary school) programme when they register. However, in case the Participant is undergoing distant education or other non-traditional programmes of schooling, they are required to inform the organizers about the same</b></li>
                    </ul>
                    <p>
                    The Organizers may request for the proofs upon a Participant’s qualification to the finals, and these shall be thoroughly verified if you win any prizes. Any refusal or failure to timely provide such proof may result in disqualification of the Participant from the Contest.An individual not meeting the eligibility criteria is welcomed to participate in the contest for learning and practice, however, they shall not be eligible for qualification to the finals or for any prizes
                    </p>
                    <ul>
                        <li><b>Registration fees is not refundable</b></li>
                    </ul>
                    <h2>Malpractices</h2>
                    <ul>
                        <li><b>UAE CyberLeague is an Individual competition. Participants are strictly forbidden to help or obtain help from anyone through any medium, directly or indirectly, during the Contest.</b></li>
                        <li><b>If found to be cheating, the Participant shall be disqualified from the Contest, with immediate effect.</b></li>

                    </ul>
                    <h2>Sharing of Flag/Solution to Others</h2>
                    <ul>
                        <li>Answers, solutions, write ups or overly-revealing hints to any challenges should not be publicly posted or otherwise shared with anyone until the Contest is over.</li>
                        <li>Sharing the flags, or providing overly-revealing hints with anyone through any medium during the period of the Contest shall be considered as cheating.</li>
                    </ul>
                    <h2>Accepting Flag/Solution From Others</h2>
                    <ul>
                        <li>Accepting direct assistance, receiving a flag or solution to a challenge from anyone is considered cheating, and is strictly prohibited during the Contest.</li>
                        <li>While using tools, references and snippets publicly available on the Internet is allowed, a participant shall not ask people, forums etc. on the internet for help for solving a challenge.</li>
                    </ul>
                    
                    <p>Organizers of the contest have the right to change any rules. The rules changed will be updated to all the participants via email.  The decision of the organizing teams will be final.</p>


                </div>
            </RulesContainer>
        </div>
        {/* <PageFooterExplorer
            items={[
                {
                    "title": "FAQ",
                    "text": "Answers to common questions",
                    "link": "/faq"
                },
                {
                    "title": "Promote",
                    "text": "Promote UAE CTF",
                    "link": "/promote"
                },
                {
                    "title": "Our Reach & Impact",
                    "text": "See our reach & impact",
                    "link": "/about#our-reach"
                },
            ]}
        /> */}
        <Footer />
    </Base>
}

export default RulePage;