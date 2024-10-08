import React from 'react';
import styled from 'styled-components'

import img1 from '../../assets/Nfts/merch-3.jpeg';
import img2 from '../../assets/Nfts/merch-2.jpeg';
import img3 from '../../assets/Nfts/merch-1.jpeg';
// import img4 from '../../assets/Nfts/.jpg';
// import img5 from '../../assets/Nfts/.jpg';
// import img6 from '../../assets/Nfts/.jpg';
// import img7 from '../../assets/Nfts/gcamp-6.jpg';
// import img8 from '../../assets/Nfts/gcamp-7.jpg';
// import img9 from '../../assets/Nfts/gcamp-8.jpg';
import ConfettiComponent from '../Confetti';

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

@media (max-width: 40em){
  font-size: ${props => props.theme.fontxl};
}
`
const Container = styled.div`
width:75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

@media (max-width: 64em){
  width: 80%;
}
@media (max-width: 48em){
  width: 90%;
  justify-content:center;
}
`
const Item = styled.div`
width: calc(20rem -4vw);
padding: 1rem 0;
color:{props => props.theme.body};
margin: 2rem 1rem;
position: relative;
z-index:5;

backdrop-filter: blur(4px);

border: 2px solid ${props => props.theme.text};
border-radius: 20px;


&:hover{
  img{
    transform: translate(-2rem) scale(1.2);
  }
}
@media (max-width: 30em){
  width: 80vw;
}
`
const ImageContainer = styled.div`
width:15rem;
margin: 0 auto;
background-color:${props => props.theme.carouselColor};
border: 1px solid ${props => props.theme.text};
padding: 1rem;

border-radius: 20px;
cursor: pointer;

img{
  width: 100%;
  height:auto;
  border-radius: 20px;
  transition:all 0.3s ease;
}
`
const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => props.theme.text};
margin-top: 1rem;
`
const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};
font-weight: 400;
`

const MemberComponent = ({img, name=" " , position=" "}) => {

  return(
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )
}
const Team = () => {
  return (
    <Section id="team">
      <ConfettiComponent />
  <Title>Merch</Title>   
  <Container>
   <MemberComponent img={img1} name='Alaye hat' position=' $6 (out of stock)'/>
   <MemberComponent img={img2} name='Broke Boiz shirt' position='$10 (out of stock)'/>
   <MemberComponent img={img3} name='Fela Expression merch' position='$10 (out of stock)'/>
   {/* <MemberComponent img={img4} name='Alaye hat' position='$6'/>
   <MemberComponent img={img5} name='Alaye hat' position='$6'/>
   <MemberComponent img={img6} name='Alaye hat' position='$6'/>
   <MemberComponent img={img7} name='Alaye hat' position='$6'/>
   <MemberComponent img={img8} name='Alaye hat' position='$6'/>
   <MemberComponent img={img9} name='Alaye hat' position='$6'/> */}
  </Container>
    </Section>
  );
}

export default Team;
