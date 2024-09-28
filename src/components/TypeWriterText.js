import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import Button from './Button'

const Title = styled.h2`
font-size: ${props => props.theme.fontxl};
// text-transform: capitalize;
width: 80%;
color: ${props => props.theme.text};
align-self: flex-start;

span {
    text-transform: uppercase;
    font-family: 'Peace Sans', cursive;
    font-size: ${props => props.theme.fontmd};
}
.text-1 {
    color:green;
}
.text-2 {
    color:green;
}
.text-3 {
    color:green;
}

@media (max-width: 70em){
  font-size: ${props => props.theme.fontx1};

}
@media (max-width: 48em){
  align-self: center;
  text-align: center;

}
@media (max-width: 40em){
  width: 90%;
}
`

const Subtitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  
  color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight:600;
  margin-bottom: 1rem;
  align-self: flex-start;

  @media (max-width: 40em){
    font-size: ${props => props.theme.fontmd};
  
  }
  @media (max-width: 48em){
    align-self: center;
    text-align: center;
  
  }

`
const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;

@media (max-width: 48em){
  align-self: center;
  text-align: center;
 
  button{
  margin: 0 auto;
  }
}
`

const TypeWriterText = () => {
  return (
  <>
    <Title>
     connecting you to exceptional
      <Typewriter
      options={{
        autoStart: true,
        loop: true,
      }}
  onInit={(typewriter) => {
    typewriter
    .typeString('<span class="text-1">artists, and entertainers,thru shows and the internet. </span>')
    .pauseFor(2000)
    .deleteAll()
    // .typeString('<span class="text-2">and entertainers.</span>')
    // .pauseFor(2000)
    // .deleteAll()
    // .typeString('<span class="text-3">thru shows and the internet.</span>')
    // .pauseFor(2000)
    // .deleteAll()
    .start()
  }}
/>

    </Title>
    <Subtitle>Enjoy non stop music, discover exceptional underground entertainers and artists in Lagos.</Subtitle>
   <ButtonContainer>
   <Button text="Get tickets" link="#about" />
   </ButtonContainer>
  </>
  );
};

export default TypeWriterText
