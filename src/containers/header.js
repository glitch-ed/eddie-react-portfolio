import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

const ProfileImage = styled.img`
  width: 12em;
  height: 12em;
  border-radius: 50%;
`;

const ProfileTitle = styled.h1`
  color: black;
`

const HeaderDiv = styled.div`
  padding-top: 5vh;
  text-align: center;
  font-family: 'Zilla Slab Highlight', sans-serif;
  color: black;
`;

// const Nav = styled(NavLink)`
//   display: inline-flex;
//   margin: 0 5px;
//   color: black;
//   font-size: 16px;
// `


class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <NavLink to="/">
          <ProfileImage src={require('../assets/self.jpg')} alt='Eddie Villarreal'/>
          <ProfileTitle>Eddie Villarreal</ProfileTitle>
        </NavLink>
        <div>
          <NavLink to='/'>ABOUT</NavLink>
          <NavLink to='/code'>CODE</NavLink>
          <NavLink to='/life'>LIFE</NavLink>
          <NavLink to='/contact'>CONTACT</NavLink>
        </div>
        <hr/>
      </HeaderDiv>
    );
  }
}

export default Header;