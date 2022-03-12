import React, { useEffect, useRef, useState } from 'react';

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";
import INCTFStats from "../src/components/about/stats";
import InctfIntro from "../src/components/about/Intro";
import Footer from "../src/components/shared/Footer";
{/*import AboutAchievements from "../src/components/about/Achievements";*/}
import { data } from '../src/components/about/stats/66';
import Parallax from "../src/components/Parallax";

const AboutPage = () => {

    const [stats, setStats] = useState();

    const fetchStats = () => {
        try {
            fetch('https://app.traboda.com/api/contest/stats/66')
                .then(response => response.ok && response.status === 200 ? response.json() : null)
                .then((data) => setStats(data))
                .catch((e) => setStats(data))
        } catch (e) {}
    };

    useEffect(fetchStats, [])

    return <Base meta={{ title: "About UAE CTF" }}>
        <TopBar includeSpace={false} />
        <div style={{ background: '' }}>
            <Parallax
                background={require('../src/assets/images/covers/UAE-About.jpg')}
                height="600px"
            />
            <InctfIntro style={{ background: '',color: '' }}/>
            <INCTFStats stats={stats} />
            <div className="text-center ">
                <img draggable="false" src={require('../src/assets/images/photos/uae.jpg')} />
            </div>
            {/*<AboutAchievements />*/}
        </div>
        <Footer />
    </Base>

};

export default AboutPage;