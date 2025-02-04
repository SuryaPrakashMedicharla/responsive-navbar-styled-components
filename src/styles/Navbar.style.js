import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: black;
  width: 100%;
  height: ${(props)=>(props.extendedLink ? "100vh" : "80px")}
  display: flex;
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 2%;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px; 
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;

  @media (max-width: 700px) {
  display: none
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  
`;

export const Logo= styled.img`
margin: 10px;
max-width: 150px;
height: auto`;

export const OpenLinkButton = styled.button`
  width: 70px;
  height: 50px; 
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 700px) {
  display: none
  }
`;


export const NavbarExtendedContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media (min-width: 700px) {
  display: none
  }`
;
