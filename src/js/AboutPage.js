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
              Vehicle Solutions team working on driver onboarding. \
              Our main goal is to help drivers who want to drive \
              for Uber but don't own their own cars. This is a \
              huge problem for many drivers in international markets \
              and, and our team is to help these drivers find a car \
              that makes sense for them. Previously, I had worked on \
              the fleets team under Vehicle Solutions and India \
              Growth before that."}
        />
        <WorkHistoryItem
          title={"Facebook"}
          body={"I started working at Facebook on the follow \
            features back when Facebook, Google+, and Twitter \
            were competing in the social media wars of 2011. \
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
