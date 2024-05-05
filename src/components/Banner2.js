import React from 'react'
import styled from 'styled-components'



const Section = styled.section`
width: 100vw;
height: 30rem;
position: relative;
border-top: 2px solid ${props => props.theme.text};

background-color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};

display: flex;
justify-content: center;
align-items: center;

overflow:hidden;

@media (max-width: 48em){
height: 25rem;
flex-direction: column;
}
`
// const ImgContainer = styled.div`
// width:100%;
// position: absolute;
// top:50%;
// left: 50%;
// transform: translate(-50%, -50%);

// display: flex;
// justify-content: center;
// align-items: center;
// opacity: 0.2;

// img{
// width: 15rem;
// height: auto;
// }

// @media (max-width: 48em){
//   img{
//     width: 10rem;
//     height: auto;
//     }
//   }
// `

const Title = styled.h1`
font-size: ${props => props.theme.fontxl};
color:  ${props => props.theme.body};
padding: 1rem 2rem ;
z-index: 10;
width: 35%;
text-transform: capitalize;

text-shadow: 1px 1px 2px ${props => props.theme.text};

@media (max-width: 64em){
 
    text-align: center;
  
    font-size: ${props => props.theme.fontlg};
  }
  @media (max-width: 48em){
    width: 90%;
    padding: 2rem 0 ;
    font-size: ${props => props.theme.fontmd};
    position: relative;
    bottom: 130px;
   
  }
`
const IframeContainer = styled.div`


@media (max-width: 48em){
  width:60%;
  height: 40px;

  iframe{
    position: relative;
    bottom: 150px;
    left: -52px;
    
}
}
`


const Banner2 = () => {
  return (
    <Section>
        {/* <ImgContainer>
        <img src={img1} alt="Greencamp" />
        <img src={img2} alt="Greencamp" />
        <img src={img3} alt="Greencamp" />
        <img src={img4} alt="Greencamp" />
        <img src={img5} alt="Greencamp" />
        <img src={img6} alt="Greencamp" />
        </ImgContainer> */}
         <Title>Check out the Greencamp curated <br /> Underground Sound.</Title>
 
       <IframeContainer>
       <iframe 
          title="Spotify Playlist" 
          src="https://open.spotify.com/embed/playlist/1Tb9urP2Yt8TNRMxaFqzIT" 
          width="150%" 
          height="352" 
          frameBorder="0" 
          allow="encrypted-media" 
          loading="lazy"
        ></iframe>
       </IframeContainer>
    </Section>
  )
}

export default Banner2