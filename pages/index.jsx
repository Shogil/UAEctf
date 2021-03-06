import React from 'react';
import Base from "../src/components/shared/Base";

import LandingHeader from "../src/components/landing/Header";
import LandingSponsorship from "../src/components/landing/Sponsorship";
{/*import LandingTestimonials from "../src/components/landing/Testimonials";*/}
import LandingOrganizers from "../src/components/landing/Organizers";
import LandingReasonsToParticipate from "../src/components/landing/WhyParticipate";
import CTAReg from "../src/components/landing/CTAReg";
import LandingQuickInfo from "../src/components/landing/QuickInfo";
import LandingAboutInCTF from "../src/components/landing/About";
import LandingStatsBar from "../src/components/landing/StatsCounter";
import LandingHowItWorks from "../src/components/landing/HowItWorks";
import LandingContactsBar from "../src/components/landing/ContactsBar";
import TopBar from "../src/components/shared/TopBar";
import LandingPromoVideo from "../src/components/landing/PromoVideo";
import LandingSearch from "../src/components/landing/search";
import Footer from "../src/components/shared/Footer";
import Bot from '../src/components/chatbot'
import Timeline from '../src/components/landing/Timeline';
import TimelineEx from '../src/components/landing/timeli'
import PrizeInfoUAE from "../src/components/landing/PrizeInfo"

const LandingPage = () => {

    return <Base>
        <div style={{ overflowX: 'hidden', background: '#FAFAFA' }} id="landing-page">
            <TopBar darkenOnSidebar includeSpace={false} />
            <LandingHeader />
            <LandingQuickInfo />
            <LandingAboutInCTF />
            <PrizeInfoUAE />
            {/* <LandingStatsBar /> */}
            <LandingPromoVideo />
            <LandingReasonsToParticipate />
            {/* <CTAReg /> */}
            {/* <Timeline /> */}
            <TimelineEx />
            <LandingHowItWorks />
            {/*<LandingTestimonials />*/}
            {/* <LandingSponsorship /> */}
            {/* <LandingOrganizers /> */}
            <LandingSearch />
            <LandingContactsBar />
            <Bot />
        </div>
        <Footer />
    </Base>

};

export default LandingPage;