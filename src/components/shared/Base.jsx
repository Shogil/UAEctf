import React, {useEffect} from 'react';
import Head from "next/head";
import config from 'react-reveal/globals';

config({ ssrFadeout: true });

const seoTags = {
    "siteName": "UAE CTF",
    "tagLine": "UAE CTF 2022 Online Cyber Security Contest for Students.",
    // "description": "Capture the Flag contest. Play CTFs, win prizes and get placed with our sponsors."
};

const Base = ({ children, meta }) => {

    const title = `${meta && meta.title ? `${meta.title} |` : '' } ${seoTags.siteName} - ${seoTags.tagLine}`;
    const GoogleAnalyticsID = '';

    useEffect(() => {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
            for(const reg of registrations) {
                reg.unregister();
            }
        });
    }, []);

    return <React.Fragment>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8'/>
            <meta name='theme-color' content='#E65100' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
            <meta name="description" content={meta && meta.description ? meta.description : seoTags.description} />
            <meta name="twitter:title" content={title} />
            <meta property="og:title" content={title} />
            {   meta && meta.image && <meta property="og:image" content={meta.image} /> }
            <meta name="viewport" content="width=device-width, minimum-scale=1, shrink-to-fit=no, initial-scale=1" />
            <link rel="manifest" href="/manifest.json" />
            <link href='/images/icons/inctf_light.png' rel='icon' type='image/png' sizes='72x72' />
            <link href='/images/icons/inctf_light.png' rel='icon' type='image/png' sizes='96x96' />
            <link href='/images/icons/inctf_light.png' rel='icon' type='image/png' sizes='128x128' />
            <link href='/images/icons/inctf_light.png' rel='icon' type='image/png' sizes='144x144' />
            <link href='/images/icons/inctf_light.png' rel='icon' type='image/png' sizes='152x152' />
            <link href='/images/icons/inctf_light.png' rel='icon' type='image/png' sizes='192x192' />
            <link href='/images/icons/inctf_light.png' rel='icon' type='image/png' sizes='384x384' />
            <link rel='apple-touch-icon' href='/images/icons/inctf_light.png' />
            <link rel="shortcut icon" href="../images/icons/inctf_light.png" />
            {   GoogleAnalyticsID && <React.Fragment>
                <script rel="preconnect" async src={`https://www.googletagmanager.com/gtag/js?id=${GoogleAnalyticsID}`} />
                <script dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GoogleAnalyticsID}');`
                }} />
            </React.Fragment>}
        </Head>
        <div className="app">
            {children}
            {/*<SupportDesk />*/}
        </div>
    </React.Fragment>
};

export default Base;