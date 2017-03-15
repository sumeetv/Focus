import React, { Component } from 'react';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <h1>Work</h1>
        <h2>Uber</h2>
        <p>
          {"I am currently an engineering manager on the \
            Fleets team at Uber. Our team's goal is to build \
            the products and tools that support people who own \
            multiple cars and want to have a side (or main!) \
            business using Uber. Before the Fleets team, I \
            worked on India Growth, focusing on the driver \
            funnel in that region as both a server-side \
            engineer and an engineering manager."}
        </p>
        <h2>Facebook</h2>
        <p>
          {"I started working at Facebook on the follow \
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
        </p>
        <h2>Other</h2>
        <p>
          {"Before working at Facebook, I was an student at \
            Michigan majoring in computer science engineering \
            with a minor in ethical and political philosophy. I \
            had a few internships at Microsoft, Autodesk, and \
            IBM (business consulting!) and had a brief stint \
            competing in ballroom dancing."}
        </p>
      </div>
    );
  }
}

export default AboutPage;
