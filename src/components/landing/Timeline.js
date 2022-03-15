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
  font-family: "Fira Sans", sans-serif;
 
`;

const Timeline = () => {
    return (
        <TestimonialSection>
            <body class="bg-gray-50">
                <div class="p-4 mt-4">
                    <h1 class="text-4xl text-center font-semibold mb-6">Event Timeline</h1>
                    <div class="container">
                        <div class="flex flex-col md:grid grid-cols-12 text-gray-50">

                            <div class="flex md:contents">
                                <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                                    <div class="h-full w-6 flex items-center justify-center">
                                        <div class="h-full w-1 bg-red-500 pointer-events-none"></div>
                                    </div>
                                    <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
                                        <i class="fas fa-check-circle text-white"></i>
                                    </div>
                                </div>
                                <div class="bg-red-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                                    <h3 class="font-semibold text-lg mb-1">Registration</h3>
                                    <p class="leading-tight text-justify w-full">
                                        March 25 - June 25
                                    </p>
                                </div>
                            </div>

                            <div class="flex md:contents">
                                <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                                    <div class="h-full w-6 flex items-center justify-center">
                                        <div class="h-full w-1 bg-green-500 pointer-events-none"></div>
                                    </div>
                                    <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                                        <i class="fas fa-check-circle text-white"></i>
                                    </div>
                                </div>
                                <div class="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                                    <h3 class="font-semibold text-lg mb-1">Learning Round</h3>
                                    <p class="leading-tight text-justify">
                                        self-paced learning, Mock contest  - March 25 to May 25
                                    </p>
                                </div>
                            </div>

                            <div class="flex md:contents">
                                <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                                    <div class="h-full w-6 flex items-center justify-center">
                                        <div class="h-full w-1 bg-red-500 pointer-events-none"></div>
                                    </div>
                                    <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
                                    <i class="fas fa-check-circle text-white"></i>
                                    </div>
                                </div>
                                <div class="bg-red-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                                    <h3 class="font-semibold text-lg mb-1 text-gray-50">Training round</h3>
                                    <p class="leading-tight text-justify">
                                        mock contest - May 26 - June 7
                                    </p>
                                </div>
                            </div>

                            <div class="flex md:contents">
                                <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                                    <div class="h-full w-6 flex items-center justify-center">
                                        <div class="h-full w-1 bg-green-500 pointer-events-none"></div>
                                    </div>
                                    <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                                    <i class="fas fa-check-circle text-white"></i>
                                    </div>
                                </div>
                                <div class="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                                    <h3 class="font-semibold text-lg mb-1 text-gray-50">Pre-conference talk</h3>
                                    <p class="leading-tight text-justify">
                                        June 7  - June 15

                                    </p>
                                </div>
                            </div>

                            <div class="flex md:contents">
                                <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                                    <div class="h-full w-6 flex items-center justify-center">
                                        <div class="h-full w-1 bg-red-500 pointer-events-none"></div>
                                    </div>
                                    <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
                                        <i class="fas fa-check-circle text-white"></i>
                                    </div>
                                </div>
                                <div class="bg-red-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                                    <h3 class="font-semibold text-lg mb-1">Finals</h3>
                                    <p class="leading-tight text-justify w-full">
                                        June 17 - June 19
                                    </p>
                                </div>
                            </div>

                            <div class="flex md:contents">
                                <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                                    <div class="h-full w-6 flex items-center justify-center">
                                        <div class="h-full w-1 bg-green-500 pointer-events-none"></div>
                                    </div>
                                    <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                                        <i class="fas fa-check-circle text-white"></i>
                                    </div>
                                </div>
                                <div class="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                                    <h3 class="font-semibold text-lg mb-1">Onsite Conference</h3>
                                    <p class="leading-tight text-justify">
                                        June 26
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </body>
        </TestimonialSection>
    )
}

export default Timeline