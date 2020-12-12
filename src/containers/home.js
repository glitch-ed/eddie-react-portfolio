import React, { Component } from 'react';

import { CenteredHeader } from './App.js'

class Home extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>Hi! I'm Eddie. I'm a software developer based in San Antonio, TX.</CenteredHeader>
        <p>
          I've worked throughout the stack, but I especially love building beautiful and user friendly UI/UX.
        </p>
        <p>
          ​Outside of code, I like to create in other ways wrting and playing <a href="https://www.facebook.com/melodytheory" target="_blank">music</a> to wook work projects in my garage.
        </p>
        <p>
           Previously, I've worked as a director of health and wellness for CentroMed.
        </p>
      </div>
    );
  }
}

export default Home;