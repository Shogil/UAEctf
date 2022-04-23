import React from "react";
import TopBar from "../src/components/shared/TopBar";
import Base from "../src/components/shared/Base";

import { PrizeDetails, WomenDetails, SchoolDetails } from "../src/data/organizers";
import ProfileCardNew from "../src/components/ProfileCardNew";
import Footer from "../src/components/shared/Footer";
import PageHeader from "../src/components/PageHeader";
import PageFooterExplorer from "../src/components/PageFooterExplorer";

const AdvisoryBoardPage = () => {

    return (
        <Base meta={{ title: "Advisory Board" }}>
            <TopBar darkenOnSidebar />
            <PageHeader
                
                title="Prize List "
               
            />
            
            <div className="container mx-auto" >
                {PrizeDetails?.length > 0 && (
                    <div className="py-5">
                        <h2 className="text-3xl text-primary mb-4 text-center">Prize List for the Participants</h2>
                        <div className="flex flex-wrap">
                            {PrizeDetails.map((a) => (
                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-3 sm:p-3">
                                    <ProfileCardNew {...a} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {WomenDetails?.length > 0 && (
                    <div className="py-5">
                        <h2 className="text-3xl mb-5 text-primary text-center">Prize List for Women Participants</h2>
                        <div className="flex flex-wrap">
                            {WomenDetails.map((a) => (
                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-3 sm:p-3">
                                    <ProfileCardNew {...a} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {SchoolDetails?.length > 0 && (
                    <div className="py-5">
                        <h2 className="text-3xl mb-5 text-primary text-center">Prize List for Top School</h2>
                        <div className="flex flex-wrap">
                            {SchoolDetails.map((a) => (
                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-3 sm:p-3">
                                    <ProfileCardNew {...a} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            {/* <PageFooterExplorer
                items={[
                    {
                        "title": "Our Reach & Impact",
                        "text": "See our reach & impact",
                        "link": "/about#our-reach"
                    },
                    {
                        "title": "Organizers",
                        "text": "View our team of organizers",
                        "link": "/organizers"
                    },
                    {
                        "title": "Sponsors",
                        "text": "View our Sponsors",
                        "link": "/sponsors"
                    }
                ]}
            /> */}
            <Footer />
        </Base>
    )
};

export default AdvisoryBoardPage;