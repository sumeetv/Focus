import React, { Component } from 'react';

// Imported Libraries
import GridList from 'material-ui/GridList';
import GridTile from 'material-ui/GridList';

import {
  GetTitleForSection,
  SITE_SECTIONS
} from './SectionHelpers'

import AboutImg from './assets/Uber_Logo_Cropped.jpg';
import BlogImg from './assets/Bits.jpg';
import ScotchImg from './assets/Bottles.jpg';

import './HomePage.css';

class HomePage extends Component {

  constructor(props) {
    super(props);

    this.tilesData = [
      {
        section: SITE_SECTIONS.BLOG,
        img: BlogImg,
      },
      {
        section: SITE_SECTIONS.ABOUT,
        img: AboutImg,
      },
      {
        section: SITE_SECTIONS.PROJECTS,
        img: ScotchImg,
      },
      {
        section: SITE_SECTIONS.SCOTCH,
        img: ScotchImg,
      },
      {
        section: SITE_SECTIONS.GAMES,
        img: ScotchImg,
      },
    ];
  }

  tileSelect(section) {
    // TODO: sumeetv
    // Figure out how to redirect here using react-router v4
  }

  render() {
    return (
      <div className="GridListContainer">
        <GridList
          className="SectionGridList">
          {this.tilesData.map((tile) => (
            <GridTile
              className="SectionGridTile"
              key={tile.section}
              cols={2}
              onClick={this.tileSelect.bind(this, tile.section)}
              title={GetTitleForSection(tile.section)}>
              <img
                alt={GetTitleForSection(tile.section)}
                className="SectionTileImage"
                src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default HomePage;
