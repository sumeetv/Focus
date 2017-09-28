import React, { Component } from 'react';

import WorkHistoryItem from './components/WorkHistoryItem.js';
import '../css/AboutPage.css';

class AboutPage extends Component {
  render() {
    return (
      <div className="About-page-container">
        <h1>Work</h1>
        <WorkHistoryItem
          title={"Uber"}
          body={"I am currently an engineering manager on the Global \
              Vehicle Solutions team working on the marketplace that \
              pairs drivers without cars with the best vehicle \
              offerings in their market. This is a major issues in \
              internationl markets and is the main source of income for \
              many drivers across the world. Previously, I had worked \
              on signups and onboarding for these drivers, the global \
              Fleets team, and India Growth."}
        />
        <WorkHistoryItem
          title={"Facebook"}
          body={"I started working at Facebook on the Follow \
            back when Facebook, Google+, and Twitter were competing \
            in the social media wars of 2011. \
            After our launch, I worked briefly on a team that \
            owned privacy, sharing, the composer, follow, and \
            lists. Highlights included launching interest lists \
            and fixing privacy issues to prevent major dollar \
            fines imposed by international privacy reviews. I \
            also spent a few years working on the Groups team \
            where I worked as a backend engineer on core \
            functionality before launching the iOS Groups app \
            as the primary React Native engineer."}
        />
        <WorkHistoryItem
          title="Other"
          body={"Before working at Facebook, I was an student at \
            Michigan majoring in computer science engineering \
            with a minor in ethical and political philosophy. I \
            had a few internships at Microsoft, Autodesk, and \
            IBM (business consulting!) and had a brief stint \
            competing in ballroom dancing."}
        />
      </div>
    );
  }
}

export default AboutPage;
