import React, { Component } from 'react';

// Imported Libraries
import { Col, Grid, Row } from 'react-bootstrap';

import {
  GetTitleForSection,
  SITE_SECTIONS
} from './SectionHelpers'

import AboutImg from '../assets/Uber_Logo_Cropped.jpg';
import BlogImg from '../assets/Bits.jpg';
import ScotchImg from '../assets/Bottles.jpg';

import '../css/HomePage.css';

class HomePage extends Component {

  constructor(props) {
    super(props);

    this.tilesData = [
      {
        img: BlogImg,
        section: SITE_SECTIONS.BLOG,
      },
      {
        color: "#000000",
        img: AboutImg,
        section: SITE_SECTIONS.ABOUT,
      },
      {
        img: ScotchImg,
        section: SITE_SECTIONS.PROJECTS,
      },
      {
        img: ScotchImg,
        section: SITE_SECTIONS.SCOTCH,
      },
      {
        img: ScotchImg,
        section: SITE_SECTIONS.GAMES,
      },
    ];
  }

  tileSelect(section) {
    // TODO: sumeetv
    // Figure out how to redirect here using react-router v4
  }

  renderGrid() {

    let rows = [];
    for (let i = 0; i < this.tilesData.length;) {
      let isOddRow = rows.length % 2 === 1;
      let sectionsLeft = this.tilesData.length - i;

      let tile = this.tilesData[i];
      let tileStyle = {
        background: tile.color,
      }

      // Make the row full width if the row is odd or if we don't
      // have multiple sections left
      if (isOddRow || (sectionsLeft < 2)) {
        rows.push(
          <Row>
            <Col
              className="SectionGridCol"
              onClick={this.tileSelect.bind(this, tile.section)}
              style={tileStyle}
              md={12}>
              <img
                className="SectionGridImage"
                alt={GetTitleForSection(tile.section)}
                src={tile.img} />
            </Col>
          </Row>
        );
        i++;
        continue;
      }

      let secondTile = this.tilesData[i+1];
      let secondTileStyle = {
        background: secondTile.color,
      }

      rows.push(
        <Row>
          <Col
            className="SectionGridCol"
            onClick={this.tileSelect.bind(this, tile.section)}
            style={tileStyle}
            md={6}>
            <img
              className="SectionGridImage"
              alt={GetTitleForSection(tile.section)}
              src={tile.img} />
          </Col>
          <Col
            className="SectionGridCol"
            onClick={this.tileSelect.bind(this, secondTile.section)}
              style={secondTileStyle}
            md={6}>
            <img
              className="SectionGridImage"
              alt={GetTitleForSection(secondTile.section)}
              src={secondTile.img} />
          </Col>
        </Row>
      );
      i+=2;
    }

    return (
      <div>
        <Grid className="SectionGrid" fluid={true}>
          {rows}
        </Grid>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderGrid()}
      </div>
    );
  }
}

export default HomePage;
