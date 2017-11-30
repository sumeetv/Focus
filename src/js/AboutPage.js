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
          body={"I'm currently an engineering manager on the Global \
              Vehicle Solutions team. We're trying to help people who \
              want to make money driving for Uber but don't own their \
              own car. This is a huge issue for thousands of people in \
              international markets. My teams work on the common \
              infrastructure and products that support our various \
              business lines, like fleets, rentals, and financiers. \
              For many of these drivers, Uber is their main source of \
              income and helps them earn a lot more than were making \
              before they started driving. Previously, I had worked \
              on the Fleets team and India Growth as part of our \
              international efforts."}
        />
        <WorkHistoryItem
          title={"Facebook"}
          body={"I started working at Facebook back when Facebook \
          Google, and Twitter were competing in the social media \
          wars of 2011. I started off by working on the 'Follow' \
          feature before joining the team that would eventually \
          become Public Content. We worked on privacy, sharing, the \
          composer, friend lists, interest lists, and comments. A \
          major highlight was launching ranked comments and replies \
          back when people didn't know how to deal with anything \
          other than a single thread of comments. I later worked on \
          the Groups team as a backend engineer for a while before \
          helping launch the iOS Groups app as the primary React Native \
          engineer on the project."}
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
