import React from 'react'
import GIF from '../assets/Home Video1.mp4'
import styled from 'styled-components'

const VideoContainer = styled.div`
width: 100%;

video{
  width:85%;
  height: 100%;
  border-radius: 10px;
}

`




const CoverVideo = () => {
  return (
    <VideoContainer>
      <video src={GIF} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  )
}

export default CoverVideo
