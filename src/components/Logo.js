import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logoImage from  '../../src/assets/Nfts/green.jpg';

const LogoImage = styled.img`

transition: all 0.2s  ease;
width: 10%;


&:hover{
    transform: scale(1.1)
};

@media (max-width: 64em){
font-size: ${props => props.theme.fontmd};

}
`






const Logo = () => {
  const linkStyles = {
    color: '#202020', // Change the color to blue (you can use any valid color)
    textDecoration: 'none', // Add an underline text decoration
  };

  return (
    <Link to="/" style={linkStyles}>
      <LogoImage src={logoImage} alt="Logo" />
    </Link>
  );
};

export default Logo
