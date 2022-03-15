import React, { useState } from 'react';
import dynamic from 'next/dynamic'
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import Modal from 'react-modal';


const TestimonialSection = styled.section`
.alt-vtl {
    /* (A1) RELATIVE POSITION REQUIRED TO PROPERLY POSITION THE TIMELINE */
    position: relative;
   
    /* (A2) WIDTH RESTRICTION & CENTER ON PAGE */
    max-width: 600px;
    margin: 0 auto;
  }
  
  /* (B) DRAW TIMELINE USING ::BEFORE */
  .alt-vtl::before {
    /* (B1) VERTICAL LINE */
    content: "";
    width: 5px;
    background-color: #1da1ff;
   
    /* (B2) POSITION IN THE MIDDLE */
    position: absolute;
    top: 0; bottom: 0; left: 50%;
  }
  
  /* (C) EVENTS */
  div.alt-event {
    /* (C1) COSMETICS */
    background-color: #dbf0ff;
    border-radius: 6px;
   
    /* (C2) DIMENSIONS */
    padding: 20px 30px;
    width: 45%;
    margin-bottom: 10px;
   
    /* (C3) POSITION - DEFAULT LEFT SIDE */
    position: relative;
    left: 0;
  }
   
  /* (C4) CHANGE EVENT POSITION TO RIGHT SIDE */
  div.right { left: 55%; }
  
  /* (D) COSMETICS FOR EVENT DATE & TEXT */
  p.date {
    font-size: 1.1em;
    font-weight: 700;
    color: #ff6a00;
  }
  p.txt {
    margin: 10px 0 0 0;
    color: #222;
  }
  
  /* (E) EVENT "SPEECH BUBBLE CALLOUT" */
  /* (E1) SHARED */
  div.alt-event::before, div.alt-event.right::before {
    content: "";
    border: 10px solid transparent;
    position: absolute;
  }
   
  /* (E2) FOR EVENTS ON THE LEFT */
  div.alt-event::before {
    /* (E2-1) "MAGIC TRIANGLE" */
    border-left-color: #dbf0ff;
    border-right: 0;
   
    /* (E2-2) POSITION TRIANGLE ON THE RIGHT */
    left: 100%; top: 20%;
  }
   
  /* (E3) FOR EVENTS ON THE RIGHT */
  div.alt-event.right::before {
    /* (E3-1) "MAGIC TRIANGLE" */
    border-right-color: #dbf0ff;
    border-left: 0;
   
    /* (E3-2) POSITION TRIANGLE ON THE LEFT */
    left: auto; right: 100%; top: 20%;
  }
   
  /* (F) EVENT CIRCLE ON TIMELINE */
  /* (F1) SHARED */
  div.alt-event::after, div.alt-event.right::after {
    /* (F1-1) "MAGIC CIRCLE" */
    content: "";
    background: #fff;
    border: 4px solid #1da1ff;
    width: 16px; height: 16px;
    border-radius: 50%;
   
    /* (F1-2) POSITION */
    position: absolute;
  }
   
  /* (F2) POSITION TO THE LEFT */
  div.alt-event::after { top: 20%; left: 108%; }
   
  /* (F3) POSITION TO THE RIGHT */
  div.alt-event.right::after { top: 20%; left: auto; right: 105%; }
  
  /* (X) DOES NOT MATTER */
  /* PAGE & BODY */
  * {
    font-family: arial, sans-serif;
    box-sizing: border-box;
  }
 
  
  /* WIDGET */
  .widget-wrap {
    min-width: 500px;
    padding: 30px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.4);
  }
  
  /* SVG */
  #grid {
    width: 100%; height:100px;
    background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 512 512" width="100" xmlns="http://www.w3.org/2000/svg"><path d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z" /></svg>');
    background-repeat: no-repeat;
    background-position: center;
  }
  
  /* FOOTER */
  #code-boxx {
    font-weight: 600;
    margin-top: 50px;
  }
  #code-boxx a {
    display: inline-block;
    padding: 5px;
    text-decoration: none;
    background: #b90a0a;
    color: #fff;
  }
  #code-boxx , h1 { text-align: center; }
`;

const Timeline = () => {
    return (
        <TestimonialSection>
            <h1>Event Timeline</h1>
            <div class="widget-wrap">

                <div class="alt-vtl">
                    <div class="alt-event">
                        <p class="date">Registration</p>
                        <p class="txt">March 25 - June 25</p>
                    </div>
                    <div class="alt-event right">
                        <p class="date">Learning round</p>
                        <p class="txt">self paced learning, Mock contest  - March 25 to May 25</p>
                    </div>
                    <div class="alt-event">
                        <p class="date">Training round</p>
                        <p class="txt">mock contest - May 26 - June 7</p>
                    </div>
                    <div class="alt-event right">
                        <p class="date">Pre conference talk</p>
                        <p class="txt">June 7  - June 15</p>
                    </div>
                    <div class="alt-event">
                        <p class="date">Finals</p>
                        <p class="txt">June 17 - June 19</p>
                    </div>
                    <div class="alt-event right">
                        <p class="date">Onsite conference</p>
                        <p class="txt">June 26</p>
                    </div>
                </div>
            </div>
        </TestimonialSection>
    )
}

export default Timeline