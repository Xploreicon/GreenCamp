import React, {useRef} from 'react';
import styled from 'styled-components'
import Accordion from '../Accordion'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';

const Section = styled.section`
min-height: 100vh;
height:auto;t
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${props => props.theme.body};
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: uppercase;
color: ${props => props.theme.body};

margin: 1rem auto;
border-bottom: 2px solid  ${props => props.theme.body} ;
width: fit-content;

@media (max-width: 48em){
  font-size: ${props => props.theme.fontxl};
}
`
const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em){
 width: 80%;  
}
@media (max-width: 48em){
  width: 90%;  
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{

      margin-top: 0;
    }
  }
 }
`
const Box = styled.div`
width: 45%;
@media (max-width: 64em){
  width: 90%;  
  align-self: center;
 }
`

const Faq = () => {

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {

    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      pin:true,
      pinSpacing:false,
      scrub:true,
    })
    return () => {
     ScrollTrigger.kill();
    };

  }, [] )

  return (
    <Section ref={ref} id="faq">
     <Title>Faq</Title>
     <Container>
   <Box>
    <Accordion title= " ✓	 How many events does Greencamp host each year?">Greencamp hosts a variety of events, including Greencamp shows that require registration, our paid annual Greencamp Festival, and the Greencamp Party.
    greencamp is a an entertainment venture, where underground artiste come to perform to their audience putting them on the spotlight.
    </Accordion>
    <Accordion title= " ✓	Who can attend Greencamp events?">
    Our events are open to every lover of entertainment and art who are ready to have a great time.
    </Accordion>
    <Accordion title= " ✓	i usually dont know the artists, why should i come and watch people i don't know?">
    to introduce good music and art that isn't dependent on the popularity of the performers and artistes. we also create playlists and drop them on audiomack, days to the event.
    </Accordion>
   </Box>
   <Box>
   <Accordion title= "✓	where can i watch previous shows?">
   watch our youtube to get a glimpse of it. @GreencampNG
    </Accordion>
    <Accordion title= " ✓	Can I perform or showcase my talents at Greencamp events?">
    Absolutely! To stay updated on performance opportunities, join the greencamp communities on social media.
    </Accordion>
    <Accordion title= " ✓	Is Greencamp only for musicians?">
    Not at all! Greencamp is for all entertainers, artists and creatives
    </Accordion>
   </Box>
     </Container>
    </Section>
  );
}

export default Faq;
