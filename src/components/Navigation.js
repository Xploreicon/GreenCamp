import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Button from './Button'

// const Section = styled.section`
// width: 100vw;
// background-color: ${props => props.theme.body}
// `

const Navbar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;


width:85%;
height: ${props => props.theme.navHeight};
margin: 0 auto;
`
const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style:none;

`

const MenuItem = styled.li`
margin:0 1rem;
color: ${props => props.theme.text};
cursor: pointer;


&::after{
  content: '';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text} ;
  transition: width 0.3s ease
}
&:hover::after{
  width:100%
}
`

const Navigation = () => {
  return (

    <section>
      <Navbar>
        <Logo />
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem> 
          <MenuItem>Roadmaps</MenuItem>
          <MenuItem>Get Merch</MenuItem>
          <MenuItem>Gallery</MenuItem>
          <MenuItem>Faq</MenuItem>
        </Menu>
        <Button text="Buy Tickets" link="https://google.com" />
      </Navbar>
    </section>
  );
}

export default Navigation;
