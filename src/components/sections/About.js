import React from 'react';
import styled from 'styled-components';
import Carousel from '../Carousel'; // Replace './Carousel' with the correct import path
import Button from '../Button'
import { ThemeProvider } from 'styled-components';
import {dark} from  '../../styles/Themes';



const Section = styled.section`
min-height: 110vh;
width: 100%;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};



display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const Container = styled.div`
width: 75%;
min-height: 80vh;
margin: 0 auto;
// background-color: lightblue;

display:flex;
justify-content: center;
align-items: center;
@media (max-width: 70em){
width:85%;

}

@media (max-width: 64em){
  width: 100%;
  flex-direction: column;

  &>*:last-child{
    width: 80%;
  }
}
@media (max-width: 40em){
  

  &>*:last-child{
    width: 90%;
  }
}
`
const Box = styled.div`
width: 50%;
height:100%;
min-height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 40em){
  min-height: 50vh;
}

`
const Title= styled.h2`
font-size: ${props => props.theme.fontxl};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 0 auto;

@media (max-width: 64em){
 width: 100%;
 text-align: center;
}
@media (max-width: 40em){
font-size: ${props => props.theme.fontxl};
}
@media (max-width: 30em){
 font-size: ${props => props.theme.fontlg};
}
`
const SubText = styled.p`
font-size: ${props => props.theme.fontlg};
text-transform: capitalize;
color: ${props => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;
@media (max-width: 64em){
  width: 100%;
  text-align: center;
  font-size: ${props => props.theme.fontmd};
 }
 @media (max-width: 40em){
 font-size: ${props => props.theme.fontmd};
 }
 @media (max-width: 30em){
  font-size: ${props => props.theme.fontsm};
 }
`
const SubTextLight = styled.p`
font-size: ${props => props.theme.fontmd};
color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;

@media (max-width: 64em){
  width: 100%;
  text-align: center;
  font-size: ${props => props.theme.fontsm};
 }
 @media (max-width: 40em){
 font-size: ${props => props.theme.fontsm};
 }
 @media (max-width: 30em){
  font-size: ${props => props.theme.fontxs};
 }
`
const ButtonContainer = styled.div`
width: 80%;
margin: 1rem auto;
display: flex;
align-self: flex-start;


@media (max-width: 64em){
  width:100%;
    display:flex;
    justify-content: center;
    align-items-center;
  button{
    margin: 0 auto;
   
  }
 }
`


const About = () => {
  return (
    <Section id="about">
     <Container>
      <Box>
        <Carousel />
      </Box>
      <Box>
        <Title>
        Welcome to <br /> GreencampNG!
        </Title>
        <SubText>
        A non-profit, non-governmental entertainment and art organization discovering and Spotlighting EXCEPTIONAL Underground entertainers, creatives and artists. 

        </SubText>

        <SubText>
        Our missions are:
        </SubText>
        <SubTextLight>
        - Discovering and Spotlighting EXCEPTIONAL Underground entertainers, creatives and artists. 
        <br /> <br />
        - To increase the quality of entertainment and art that reaches the consumers.
        <br /> <br />
        - Contribute to the country’s economy by creating sustainable career paths and job opportunities within the entertainment and art sectors.
        <br /> <br />
        - To build a community of entertainment and art lovers around the world.

            </SubTextLight>

            {/* <SubText>
            Feedback: 
        </SubText>
          <SubTextLight>
          
          “Greencamp introduced me to Seyi Vibes during the pandemic.” - Dami L.
          <br />
“I always have so much fun at Greencamp events.” - Attendee from Unilag.
<br />
“The first time I saw Buju perform was at Greencamp.” - Ola from Babcock.
<br />
“I met my current partner at Greencamp show.” - Amara & Great.


             </SubTextLight> */}

             <SubText>
             Be part of the coolest Youths.
        </SubText>
       <ButtonContainer>
       <ThemeProvider theme={dark}>
         <Button text="Join the community" link='https://greencamp.fanlink.tv/GC'  style={{ color: '#202020 ' }} />
          </ThemeProvider>
       </ButtonContainer>
      </Box>
     </Container>
    </Section>
  );
}

export default About;
