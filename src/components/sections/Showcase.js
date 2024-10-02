import React , { useRef } from 'react';
import styled from 'styled-components'
import  { keyframes } from 'styled-components';

import img1 from '../../assets/Nfts/gcamp-31.jpg';
import img2 from '../../assets/Nfts/gcamp-11.jpg';
import img3 from '../../assets/Nfts/gcamp-12.jpg';
import img4 from '../../assets/Nfts/gcamp-13.jpg';
import img5 from '../../assets/Nfts/gcamp-14.jpg';
import img6 from '../../assets/Nfts/gcamp-15.jpg';
import img7 from '../../assets/Nfts/gcamp-16.jpg';
import img8 from '../../assets/Nfts/gcamp-17.jpg';
import img9 from '../../assets/Nfts/gcamp-18.jpg';
import img10 from '../../assets/Nfts/gcamp-19.jpg';
import img11 from '../../assets/Nfts/gcamp-21.jpg';
import img12 from '../../assets/Nfts/gcamp-22.jpg';
import img13 from '../../assets/Nfts/gcamp-23.jpg';
import img14 from '../../assets/Nfts/gcamp-24.jpg';
import img15 from '../../assets/Nfts/gcamp-25.jpg';
import img16 from '../../assets/Nfts/gcamp-26.jpg';
import img17 from '../../assets/Nfts/gcamp-27.jpg';
import img18 from '../../assets/Nfts/gcamp-28.jpg';
import img19 from '../../assets/Nfts/gcamp-29.jpg';
import img20 from '../../assets/Nfts/gcamp-31.jpg';
import img21 from '../../assets/Nfts/gcamp-32.jpg';
import img22 from '../../assets/Nfts/gcamp-33.jpg';
import img23 from '../../assets/Nfts/gcamp-34.jpg';
import img24 from '../../assets/Nfts/gcamp-35.jpg';
import img25 from '../../assets/Nfts/gcamp-20.jpg';
import img26 from '../../assets/Nfts/gcamp-30.jpg';
import img27 from '../../assets/Nfts/gcamp-36.jpg';
import img28 from '../../assets/Nfts/gcamp-37.jpg';

import ETH from   '../../assets/Nfts/green.jpg';



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
    <NftItem img={img6} number={654} price={1.5} passRef = {Row2Ref}/>
    <NftItem img={img7} number={654} price={1.5} passRef = {Row2Ref}/>
    <NftItem img={img8} number={654} price={1.5} passRef = {Row2Ref}/>
    <NftItem img={img9} number={654} price={1.5} passRef = {Row2Ref}/>
    <NftItem img={img10} number={654} price={1.5} passRef = {Row2Ref}/>
    <NftItem img={img11} number={654} price={1.5} passRef = {Row1Ref}/>
    <NftItem img={img12} number={654} price={1.5} passRef = {Row1Ref}/>
    <NftItem img={img13} number={654} price={1.5} passRef = {Row1Ref}/>
    <NftItem img={img14} number={654} price={1.5} passRef = {Row1Ref}/>
    </Row>
    <Row direction="reverse" ref={Row2Ref}> 

    <NftItem img={img15} number={654} price={1.5} passRef = {Row1Ref}/>
    <NftItem img={img16} number={654} price={1.5} passRef = {Row2Ref}/>
    <NftItem img={img17} number={654} price={1.5} passRef = {Row2Ref}/>
    <NftItem img={img18} number={654} price={1.5} passRef = {Row2Ref}/>
    <NftItem img={img19} number={654} price={1.5} passRef = {Row2Ref}/>
    <NftItem img={img20} number={654} price={1.5} passRef = {Row2Ref}/>
    <NftItem img={img21} number={654} price={1.5} passRef = {Row1Ref}/>
    <NftItem img={img22} number={654} price={1.5} passRef = {Row1Ref}/>
    <NftItem img={img23} number={654} price={1.5} passRef = {Row1Ref}/>
    <NftItem img={img24} number={654} price={1.5} passRef = {Row1Ref}/>
    <NftItem img={img25} number={654} price={1.5} passRef = {Row2Ref}/>
    <NftItem img={img26} number={654} price={1.5} passRef = {Row1Ref}/>
    <NftItem img={img27} number={654} price={1.5} passRef = {Row1Ref}/>
    <NftItem img={img28} number={654} price={1.5} passRef = {Row1Ref}/>
  
    </Row>
    
   </Section>
  );
}

export default Showcase;
