import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LogoText = styled.h1`
font-family: 'Peace Sans', cursive;
font-size: ${props => props.theme.fontxxx1};
color: ${props => props.theme.text};
transition: all 0.2s  ease;

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
    <LogoText>
     <Link to="/" style={linkStyles}>
        GreenCamp.
     </Link>
    </LogoText>
  )
}

export default Logo


