import React, { useState } from 'react';
import dynamic from 'next/dynamic'
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import Modal from 'react-modal';


const TestimonialSection = styled.section`
    margin: 0 auto;
  max-width: 800px;
  padding: 25px;
  display: grid;
 
`;

const Timeline = () => {
    return (
        <TestimonialSection>
           <div class="container">
           <h2 className="text-center">
            <div className="flex justify-center">
                {/* <img className="mr-2" style={{ width: '64px'}} alt="Why Participate?" src={require('../../assets/images/icons/heart.png')} /> */}
            </div>
            Event Timeline
        </h2>
           {/* <h1 class="text-4xl text-center font-semibold mb-6"></h1>  */}
          <div
            class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-black-50"
          >
           
            <div class="flex flex-row-reverse md:contents">
              <div
                class=" col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-full w-full" style={{background:'red'}}
              >
                <h3 class="font-semibold text-lg mb-1">Registration </h3>
                <p class="leading-tight text-justify">
                March 25 - May 25
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-red-800 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow"
                ></div>
              </div>
            </div>
            
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-green-800 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow"
                ></div>
              </div>
              <div
                class="bg-green-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md w-full"
              >
                <h3 class="font-semibold text-lg mb-1">Learning round</h3>
                <p class="leading-tight text-justify">
                self-paced learning, Mock contest  - March 25 to May 25
                </p>
              </div>
            </div>
            
           
           
            <div class="flex flex-row-reverse md:contents">
              <div
                class="bg-red-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md w-full" 
              >
                <h3 class="font-semibold text-lg mb-1">Training round</h3>
                <p class="leading-tight text-justify">
                mock contest - May 26 - June 7
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-red-800 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow"
                ></div>
              </div>
            </div>
            
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-green-800 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow"
                ></div>
              </div>
              <div
                class="bg-green-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md w-full"
              >
                <h3 class="font-semibold text-lg mb-1">Pre-conference talk</h3>
                <p class="leading-tight text-justify">
                June 7  - June 15
                </p>
              </div>
            </div>
            <div class="flex flex-row-reverse md:contents">
              <div
                class="bg-red-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md w-full"
              >
                <h3 class="font-semibold text-lg mb-1">Finals</h3>
                <p class="leading-tight text-justify">
                June 17 - June 19
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-red-800 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow"
                ></div>
              </div>
            </div>
            
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-green-800 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow"
                ></div>
              </div>
              <div
                class="bg-green-500 col-start-6 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full"
              >
                <h3 class="font-semibold text-lg mb-1">Onsite conference</h3>
                <p class="leading-tight text-justify">
                June 26
                </p>
              </div>
            </div>
          </div>
        </div>
        </TestimonialSection>
    )
}

export default Timeline