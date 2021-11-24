import React from 'react';
import AppAbout from '../../components/Home/AppAbout';
import AppContact from '../../components/Home/AppContact';
import AppFAQ from '../../components/Home/AppFAQ';
import AppFeature from '../../components/Home/AppFeature';
import AppHero from '../../components/Home/AppHero';
import AppPricing from '../../components/Home/AppPricing';
import AppWorks from '../../components/Home/AppWorks';

const AppHome = () => {
    return (
        <div className="main">
            <AppHero />
            <AppAbout />
            <AppFeature />
            <AppWorks />
            <AppFAQ />
            <AppPricing />
            <AppContact />
        </div>
    );
};

export default AppHome;