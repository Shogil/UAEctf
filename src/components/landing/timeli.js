import React, { useState } from 'react';
import dynamic from 'next/dynamic'
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import Modal from 'react-modal';


const TestimonialSection = styled.section`
    margin: 0 auto;
  max-width: 1100px;
  
  display: grid;
  .main-timeline5 {
    overflow: hidden;
    position: relative
}

.main-timeline5 .timeline {
    position: relative;
    margin-top: -79px
}

.main-timeline5 .timeline:first-child {
    margin-top: 0
}

.main-timeline5 .timeline-icon,
.main-timeline5 .year {
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0
}

.main-timeline5 .timeline:after,
.main-timeline5 .timeline:before {
    content: "";
    display: block;
    width: 100%;
    clear: both
}

.main-timeline5 .timeline:before {
    content: "";
    width: 100%;
    height: 100%;
    box-shadow: -8px 0 5px -5px rgba(0, 0, 0, .5) inset;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2
}

.main-timeline5 .timeline-icon {
    width: 210px;
    height: 210px;
    border-radius: 50%;
    border: 25px solid transparent;
    border-top-color: #f44556;
    border-right-color: #f44556;
    z-index: 1;
    transform: rotate(45deg)
}

.main-timeline5 .year {
    display: block;
    width: 110px;
    height: 110px;
    line-height: 110px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, .4);
    font-size: 30px;
    font-weight: 700;
    color: #f44556;
    text-align: center;
    transform: rotate(-45deg)
}

.main-timeline5 .timeline-content {
    width: 35%;
    float: right;
    background: #f44556;
    padding: 30px 20px;
    margin: 50px 0;
    z-index: 1;
    position: relative
}

.main-timeline5 .timeline-content:before {
    content: "";
    width: 20%;
    height: 15px;
    background: #f44556;
    position: absolute;
    top: 50%;
    left: -20%;
    z-index: -1;
    transform: translateY(-50%)
}

.main-timeline5 .title {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    margin: 0 0 10px
}

.main-timeline5 .description {
    font-size: 16px;
    color: #fff;
    line-height: 24px;
    margin: 0
}

.main-timeline5 .timeline:nth-child(2n):before {
    box-shadow: 8px 0 5px -5px rgba(0, 0, 0, .5) inset
}

.main-timeline5 .timeline:nth-child(2n) .timeline-icon {
    transform: rotate(-135deg);
    border-top-color: #e97e2e;
    border-right-color: #e97e2e
}

.main-timeline5 .timeline:nth-child(2n) .year {
    transform: rotate(135deg);
    color: #e97e2e
}

.main-timeline5 .timeline:nth-child(2n) .timeline-content {
    float: left
}

.main-timeline5 .timeline:nth-child(2n) .timeline-content:before {
    left: auto;
    right: -20%
}

.main-timeline5 .timeline:nth-child(2n) .timeline-content,
.main-timeline5 .timeline:nth-child(2n) .timeline-content:before {
    background: #e97e2e
}

.main-timeline5 .timeline:nth-child(3n) .timeline-icon {
    border-top-color: #13afae;
    border-right-color: #13afae
}

.main-timeline5 .timeline:nth-child(3n) .year {
    color: #13afae
}

.main-timeline5 .timeline:nth-child(3n) .timeline-content,
.main-timeline5 .timeline:nth-child(3n) .timeline-content:before {
    background: #13afae
}

.main-timeline5 .timeline:nth-child(4n) .timeline-icon {
    border-top-color: #105572;
    border-right-color: #105572
}

.main-timeline5 .timeline:nth-child(4n) .year {
    color: #105572
}

.main-timeline5 .timeline:nth-child(4n) .timeline-content,
.main-timeline5 .timeline:nth-child(4n) .timeline-content:before {
    background: #105572
}

.main-timeline5 .timeline:nth-child(5n) .timeline-icon {
    border-top-color: #13af3e;
    border-right-color: #13af3e
}

.main-timeline5 .timeline:nth-child(5n) .year {
    color: #13af3e
}

.main-timeline5 .timeline:nth-child(5n) .timeline-content,
.main-timeline5 .timeline:nth-child(5n) .timeline-content:before {
    background: #13af3e
}

.main-timeline5 .timeline:nth-child(6n) .timeline-icon {
    border-top-color: #721063;
    border-right-color: #721063
}

.main-timeline5 .timeline:nth-child(6n) .year {
    color: #721063
}

.main-timeline5 .timeline:nth-child(6n) .timeline-content,
.main-timeline5 .timeline:nth-child(6n) .timeline-content:before {
    background: #721063
}
@media only screen and (max-width:1199px) {
    .main-timeline5 .timeline {
        margin-top: -103px
    }

    .main-timeline5 .timeline-content:before {
        left: -18%
    }

    .main-timeline5 .timeline:nth-child(2n) .timeline-content:before {
        right: -18%
    }
}

@media only screen and (max-width:990px) {
    .main-timeline5 .timeline {
        margin-top: -127px
    }

    .main-timeline5 .timeline-content:before {
        left: -2%
    }

    .main-timeline5 .timeline:nth-child(2n) .timeline-content:before {
        right: -2%
    }
}

@media only screen and (max-width:767px) {
    .main-timeline5 .timeline {
        margin-top: 0;
        overflow: hidden
    }

    .main-timeline5 .timeline:before,
    .main-timeline5 .timeline:nth-child(2n):before {
        box-shadow: none
    }

    .main-timeline5 .timeline-icon,
    .main-timeline5 .timeline:nth-child(2n) .timeline-icon {
        margin-top: -30px;
        margin-bottom: 20px;
        position: relative;
        transform: rotate(135deg)
    }

    .main-timeline5 .timeline:nth-child(2n) .year,
    .main-timeline5 .year {
        transform: rotate(-135deg)
    }

    .main-timeline5 .timeline-content,
    .main-timeline5 .timeline:nth-child(2n) .timeline-content {
        width: 100%;
        float: none;
        border-radius: 0 0 20px 20px;
        text-align: center;
        padding: 25px 20px;
        margin: 0 auto
    }

    .main-timeline5 .timeline-content:before,
    .main-timeline5 .timeline:nth-child(2n) .timeline-content:before {
        width: 15px;
        height: 25px;
        position: absolute;
        top: -22px;
        left: 50%;
        z-index: -1;
        transform: translate(-50%, 0)
    }
}
 
`;

const TimelineEX = () => {
    return (
        <TestimonialSection>
            <div class="container">
            <h2 className="text-center">
            <div className="flex justify-center">
                {/* <img className="mr-2" style={{ width: '64px'}} alt="Why Participate?" src={require('../../assets/images/icons/heart.png')} /> */}
            </div>
            Event Timeline
        </h2>
            <div class="row">
                <div class="col-md-12 ">
                    <div class="main-timeline5">
                        <div class="timeline">
                            <div class="timeline-icon"><span class="year">1</span></div>
                            <div class="timeline-content">
                                <h3 class="title">Registration</h3>
                                <p class="description">
                                    June 1
                                </p><br/>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="timeline-icon"><span class="year">2</span></div>
                            <div class="timeline-content"><br/><br/>
                                <h3 class="title">Learning Round</h3>
                                <p class="description">
                                June 1 - August 1
                                </p><br/>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="timeline-icon"><span class="year">3</span></div>
                            <div class="timeline-content">
                                <h3 class="title">Registration ends</h3>
                                <p class="description">
                                August 20
                                </p><br/>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="timeline-icon"><span class="year">4</span></div>
                            <div class="timeline-content"><br/><br/>
                                <h3 class="title">Training Round</h3>
                                <p class="description">
                                August 21 - August 30
                                </p><br/>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="timeline-icon"><span class="year">5</span></div>
                            <div class="timeline-content">
                                <h3 class="title">Finals</h3>
                                <p class="description">
                                September 2 - September 4
                                </p><br/>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="timeline-icon"><span class="year">6</span></div>
                            <div class="timeline-content"><br/><br/>
                                <h3 class="title">Conference</h3>
                                <p class="description">
                                September 11
                                </p><br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </TestimonialSection>
    )
}

export default TimelineEX