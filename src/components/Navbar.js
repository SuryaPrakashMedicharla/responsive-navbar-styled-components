import React from 'react'
import { useState } from 'react';
import {NavbarContainer,
        LeftContainer,
        RightContainer, 
        NavbarInnerContainer,
         NavbarExtendedContainer,
         NavbarLinkContainer,
         NavbarLink,
        Logo,
        OpenLinkButton,NavbarLinkExtended} from '../styles/Navbar.style';
         import LogoImg from '../assets/logo.png';
function Navbar() {
  const [extendedLink,setExtendedLink]= useState(false)
  return(
    <NavbarContainer extendedLink= {extendedLink}>
      <NavbarInnerContainer>
      <LeftContainer>
      <NavbarLinkContainer>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/products">Products</NavbarLink>
        <NavbarLink to="/contact">Contact Us</NavbarLink>
        <NavbarLink to="/about">About Us</NavbarLink>
        <OpenLinkButton onClick={()=>{
          setExtendedLink((curr)=> !curr)
        }}>
          {extendedLink ? <>&#10005;</> : <>&#8801;</>}</OpenLinkButton>
      </NavbarLinkContainer>
      </LeftContainer>
      <RightContainer>
        <Logo src={LogoImg}></Logo>
      </RightContainer>
      </NavbarInnerContainer>
      {extendedLink && (
      <NavbarExtendedContainer>
        <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
        <NavbarLinkExtended to="/products">Products</NavbarLinkExtended>
        <NavbarLinkExtended to="/contact">Contact Us</NavbarLinkExtended>
        <NavbarLinkExtended to="/about">About Us</NavbarLinkExtended>
        
      </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  )
}

export default Navbar