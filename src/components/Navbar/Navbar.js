import React, {useState} from 'react';
import {
  NavbarContainer,
  NavbarInnerContainer,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavbarExtendedContainer,
  NavbarLinkExtended
} from './NavbarElements';
import './Navbar.css';

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <>
      <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
        <NavLink to='/'>
          <img src={require('../../images/react-logo.png')} width={150} height={50} alt='logo' />
        </NavLink>
        <Bars
        onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
        </Bars>
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/image' activeStyle>
            Image
          </NavLink>
          <NavLink to='/video' activeStyle>
            Video
          </NavLink>
          <NavLink to='/music' activeStyle>
            Music
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          {/* <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink> */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
        </NavbarInnerContainer>
      <NavbarExtendedContainer>
            {extendNavbar && (
            <NavbarExtendedContainer>
              <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
              <NavbarLinkExtended to="/products"> Products</NavbarLinkExtended>
              <NavbarLinkExtended to="/contact"> Contact Us</NavbarLinkExtended>
              <NavbarLinkExtended to="/about"> About Us</NavbarLinkExtended>
            </NavbarExtendedContainer>
          )}
        </NavbarExtendedContainer>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
