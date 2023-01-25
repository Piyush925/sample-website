import React from 'react';
import Navbar from './features/navbar/Navbar';
import ExperienceBanner from './features/experience-banner/ExperienceBanner';
import './App.css';
import Banner from './features/banner/Banner';
import CommonBanner from './features/CommonBanner.js';
import showcaseImage from './assests/images/showcase.png';
import botbotImage from './assests/images/botbot.png';
import Footer from './features/footer/footer';

function App() {
  return (
    <div className="App">
      {/* header */}
      <Navbar />
       {/* body */}
      <Banner />
      <ExperienceBanner />
      <CommonBanner
        heading={`Showcase your app in our integrations directory`}
        title={`Building something special? We're always looking to work with partners who wants to help the world bring their ideas to life.`}
        image={showcaseImage}
        reverse={false}
      />
      <CommonBanner
        heading={`A Slack-bot for creating and managing prototypes`}
        title={`Building something special? We're always looking to work with partners who wants to help the world bring their ideas to life.`}
        image={botbotImage}
        reverse={true}
      />
       {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
