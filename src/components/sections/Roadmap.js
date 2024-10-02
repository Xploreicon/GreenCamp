import React, { useRef } from 'react';
import styled from 'styled-components'
import DrawSvg from '../DrawSvg'
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import the ScrollTrigger plugin separately if you're using gsap 3



const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
`
const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid  ${props => props.theme.text} ;
width: fit-content;

@media (max-width: 40em) {
  font-size: ${props => props.theme.fontxl};
}
`
const Container = styled.div`
width: 70%;
height: 200vh;
background-color:  ${props => props.theme.body};
margin: 0 auto ;
display: flex;
justify-content: center;
align-items: center;
position: relative ;

@media (max-width: 64em) {
  width: 80%;
}
@media (max-width: 48em) {
  width: 90%;
}

`
const SvgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

`
const Items = styled.ul`
list-style:none;
width :100%;
height :100%;
display :flex;
flex-direction:column;
justify-content :center ;
align-items: center;
// background-color: lightblue;
@media (max-width: 48em) {
  width: 90%;
}


&>*:nth-of-type(2n +1){
  justify-content: start;
  @media (max-width: 48em) {
    justify-content: center;
  }
  div{
    border-radius: 50px 0 50px 0;
    text-align: right;
    @media (max-width: 48em) {
      border-radius: 0 50px 0 50px ;
      text-align: left;
      p{
        border-radius: 0 40px 0 40px ;
      }
    }
  }
  p{
    border-radius: 40px 0 40px 0;
  }

}
&>*:nth-of-type(2n){
  justify-content: end;
  @media (max-width: 48em) {
    justify-content: center;
  }

  div{
    border-radius: 0 50px 0 50px ;
    text-align: left;

   
  }
  p{
    border-radius: 0 40px 0 40px ;
  }
}
`
const Item = styled.li`
width: 100%;
height: 100%;
display: flex;

@media (max-width: 48em) {
justify-content: flex-end !important;
}
`
const ItemContainer = styled.div`
width: 40%;
height: fit-content;
padding: 1rem;
border: 3px solid ${props => props.theme.text};
@media (max-width: 48em) {
  width: 70%;
}
`
const Box = styled.p`
height: fit-content;
background-color: ${props => props.theme.carouselColor};
color: ${props => props.theme.text};
padding: 1rem;
position: relative;
border: 1px solid ${props => props.theme.text};
`
const SubTitle = styled.span`
display: block;
font-size: ${props => props.theme.fontx1};
text-transform: capitalize;
color: ${props => props.theme.text};

@media (max-width: 48em) {
  font-size: ${props => props.theme.fontlg};
  font-weight:  600;

}
`
const Text = styled.span`
display: block;
font-size: ${props => props.theme.fontsm};
text-transform: capitalize;
color: ${props => props.theme.text};

font-weight:400;
margin: 0.5rem 0;
@media (max-width: 40em) {
  font-size: ${props => props.theme.fontxs};
  
  
}
`;

const RoadMapItem = ({title, subtext, addToRef}) => {
  return(
<Item ref={addToRef}>
  <ItemContainer>
    <Box>
     <SubTitle>{title}</SubTitle>
     <Text>{subtext}</Text>
    </Box>
  </ItemContainer>
</Item>

  )
}

const Roadmap = () => {
const revealRefs = useRef([]);
revealRefs.current = [];
gsap.registerPlugin(ScrollTrigger);

const addToRefs = (el) => {
  if(el && !revealRefs.current.includes(el) ){
    revealRefs.current.push(el);
  }
}

useLayoutEffect(() => {
let t1 = gsap.timeline();
revealRefs.current.forEach( (el, index) => {

  t1.fromTo(
    el.childNodes[0],
    {
      y: '0'
    }, {
      y: '-30%',

      scrollTrigger:{

      }
    }
  )


})



  console.log(revealRefs)

  return () => {

  };
}, []

)

  return (
    <Section id="roadmaps">
    <Title> What to know!</Title>
    <Container>
      <SvgContainer>
        <DrawSvg />
      </SvgContainer>
    <Items>
      <Item>&nbsp;</Item>
     <RoadMapItem addToRef={addToRefs} title="Greencamp spotlights Talent through  the internet  and Events.  " subtext="
We increase awareness for exceptional entertainment and art by curating playlists on streaming platforms, spotlighting via social media/newsletters and hosting videos of live events on Youtube." />
  
<RoadMapItem addToRef={addToRefs} title="Music and Video Streaming Platforms" subtext="GreenCamp curates playlists on music streaming platforms while also using video platforms such as YouTube,  to promote talents through live performance videos, interviews, and behind-the-scenes content. This combined approach helps artists reach new listeners, build a strong digital presence, and create memorable experiences for their audience." />

<RoadMapItem
  addToRef={addToRefs}
  title="Greencamp spotlights EXCEPTIONAL Artiste through Live Events: "
  subtext={
    <>
      We curate live events for entertainment and art lovers to come, have fun, and discover new talents while at it. <br /><br />
      
      GREENCAMP Shows Vs GREENCAMP Festival.

      Greencamp shows spotlight entertainers only, i.e., Musicians, DJs, Dancers, etc.
      
      Greencamp Festival spotlights exceptional entertainers, creatives, and artists.
    </>
  }
/>

     <RoadMapItem addToRef={addToRefs} title="Affinity for Stars" subtext="

Exceptional talents Like Buju, Lady Donli, SGaWD, Laime, Mojo Blaqbonez, YKB, Shayo Davids, Yusuf Sanni, And TrillXoe And Other Talented Musicians Have been a part of Greencamp community at a point in their careers. 

Other Opportunities.

You Can Find The Love Of Your Life At Our Curated Gatherings And Events.
     " />
  
    
     <RoadMapItem addToRef={addToRefs} title="Other opportunities" subtext="You can find the love of your life at our curated gatherings and events.

     " />
     
    </Items>
    </Container>
     <Title>
     Gallery
   </Title>
    </Section>
  );
}

export default Roadmap;
