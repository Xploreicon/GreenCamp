import React , { useRef } from 'react';
import styled from 'styled-components'
import  { keyframes } from 'styled-components';

import img1 from '../../assets/Nfts/gcamp.jpg';
import img2 from '../../assets/Nfts/gcamp-1.jpg';
import img3 from '../../assets/Nfts/gcamp-2.jpg';
import img4 from '../../assets/Nfts/gcamp-3.jpg';
import img5 from '../../assets/Nfts/gcamp-4.jpg';
import img6 from '../../assets/Nfts/gcamp-5.jpg';
import img7 from '../../assets/Nfts/gcamp-6.jpg';
import img8 from '../../assets/Nfts/gcamp-7.jpg';
import img9 from '../../assets/Nfts/gcamp-8.jpg';
import img10 from '../../assets/Nfts/gcamp-9.jpg';
import ETH from   '../../assets/Nfts/IMG_0016.jpg';



const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.text};
display:flex;
flex-direction:column;
justify-content: center ;
align-items: center;
position: relative;
overflow: hidden;
&>*:first-child{
  animation-duration: 20s;

  @media (max-width: 30em) {
    animation-duration: 15s;
   }
}
&>*:last-child{
  animation-duration: 15s;
  @media (max-width: 30em) {
    animation-duration: 10s;
   }
}

`

const move = keyframes`
0%{transform: translateX(100%) };
100%{ transform: translateX(-100%)}
`


const Row = styled.div`

white-space: nowrap;
box-sizing: content-box;
margin:2rem 0;
display: flex;

animation: ${move}  linear infinite ${props => props.direction};

`
const ImgContainer = styled.div`
width:15rem;
margin: 0 1rem;
background-color:${props => props.theme.body};

border-radius: 20px;
cursor: pointer;

@media (max-width: 48em) {
  width: 12rem;
 }
 @media (max-width: 30em) {
  width: 10rem;
 }
img{
  width: 100%;
  height:auto;
}
`
const Details = styled.div`
display: flex;
justify-content: space-between;
padding: 0.8rem 1rem;
background-color: ${props => props.theme.text};
border: 2px solid ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};

border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span{
  font-size: ${props => props.theme.fontsm};
  color: ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};
  font-weight: 600;
  line-height: 1.5rem;
}

h1{
  font-size: ${props => props.theme.fontmd};
  color:${props => props.theme.body};
  font-weight: 600;

  @media (max-width: 30em) {
    font-size: ${props => props.theme.fontsm};
   }
}
`
const Price = styled.div`
display:flex;
justify-content: flex-start;
align-items: center;

img{
  width: 1rem;
  height: auto;

}
`



const NftItem = ({img, number=0, price=0, passRef}) => {

let play = (e) => {
  passRef.current.style.animationPlayState = `running`;
}
let pause = (e) => {
  passRef.current.style.animationPlayState = `paused`;
}

  return(
    <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)}>
    <img src={img} alt="Greencamp" />
    <Details>
      <div>
        <span>Greencamp</span> <br />
        <h1>#{number}</h1>
      </div>

      <div>
        <span> Price</span>
        <Price>
          <img src={ETH} alt="GCC" />
        <h1>{Number(price).toFixed(1)}</h1>
        </Price>
      </div>
    </Details>
    </ImgContainer>
  )
}
const Showcase = () => {

  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return (
   <Section id="showcase">
    <Row direction="none" ref={Row1Ref}> 
    <NftItem img={img1} number={654} price={1.5} passRef = {Row1Ref}/>
    <NftItem img={img2} number={654} price={1.5} passRef = {Row1Ref}/>
    <NftItem img={img3} number={654} price={1.5} passRef = {Row1Ref}/>
    <NftItem img={img4} number={654} price={1.5} passRef = {Row1Ref}/>
    <NftItem img={img5} number={654} price={1.5} passRef = {Row1Ref}/>
    </Row>
    <Row direction="reverse" ref={Row2Ref}> 
    <NftItem img={img6} number={654} price={1.5} passRef = {Row2Ref}/>
    <NftItem img={img7} number={654} price={1.5} passRef = {Row2Ref}/>
    <NftItem img={img8} number={654} price={1.5} passRef = {Row2Ref}/>
    <NftItem img={img9} number={654} price={1.5} passRef = {Row2Ref}/>
    <NftItem img={img10} number={654} price={1.5} passRef = {Row2Ref}/>
    </Row>
    
   </Section>
  );
}

export default Showcase;
