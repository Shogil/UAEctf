import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  link-sponsors {
    img {
        max-width: 16%;
        height: auto;
        
      }
  }
  
`;

const SponsorNote = () => (
<Wrapper>
    <div>
        <div className="flex flex-wrap p-5 pt-8" style={{border:'2px solid black',borderRadius:'10px'}}>
            <div className="w-full md:w-1/3">
                <img src={require('../../src/assets/images/sponsors/dummy-logo.png')}
                     alt="salesforce" className="w-full rounded-lg" draggable={false}/>
            </div>
            <div className="w-full md:w-2/3 md:pl-10 mt-4 md:mt-0">
                <h6 className="font-semibold text-left">TYPE OF EVENT SPONSORSHIP</h6>
                <h1 className="font-semibold text-primary text-left">Company Name</h1>
                <ul className="leading-loose font-medium text-left">
                    <li>
                    <span className="text-primary">Company Overview</span>
                    </li>
                    <li className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </li><br />
                   
                </ul>
            </div>
        </div> <br/><br/>
        <div className="flex flex-wrap p-5 pt-8" style={{border:'2px solid black',borderRadius:'10px'}}>
            <div className="w-full md:w-1/3">
                <img src={require('../../src/assets/images/sponsors/dummy-logo.png')}
                     alt="salesforce" className="w-full rounded-lg" draggable={false}/>
            </div>
            <div className="w-full md:w-2/3 md:pl-10 mt-4 md:mt-0">
                <h6 className="font-semibold text-left">TYPE OF EVENT SPONSORSHIP</h6>
                <h1 className="font-semibold text-primary text-left">Company Name</h1>
                <ul className="leading-loose font-medium text-left">
                    <li>
                    <span className="text-primary">Company Overview</span>
                    </li>
                    <li className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </li><br />
                   
                </ul>
            </div>
        </div> <br/><br/>
        <div className="flex flex-wrap p-5 pt-8" style={{border:'2px solid black',borderRadius:'10px'}}>
            <div className="w-full md:w-1/3">
                <img src={require('../../src/assets/images/sponsors/dummy-logo.png')}
                     alt="salesforce" className="w-full rounded-lg" draggable={false}/>
            </div>
            <div className="w-full md:w-2/3 md:pl-10 mt-4 md:mt-0">
                <h6 className="font-semibold text-left">TYPE OF EVENT SPONSORSHIP</h6>
                <h1 className="font-semibold text-primary text-left">Company Name</h1>
                <ul className="leading-loose font-medium text-left">
                    <li>
                    <span className="text-primary">Company Overview</span>
                    </li>
                    <li className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </li><br />
                   
                </ul>
            </div>
        </div> <br/><br/>
        
    </div>
</Wrapper>
);

export default SponsorNote;