import React from 'react';
import styled from 'styled-components';

// Styling the link directly
const StyledLink = styled.a`
  display: inline-block;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  text-align: center;
  text-decoration: none;
  font-size: ${(props) => props.theme.fontsm};
  padding: 0.9rem 2.3em;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  pointer-events: all; /* Ensure pointer events are active */

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.text};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;

const Button = ({ text, link }) => {
  // Log the link prop to ensure it is correct
  console.log("Button Link:", link);

  // Check if the link is not undefined or null
  if (!link) {
    return <div>Invalid link</div>;
  }

  return (
    <StyledLink
      href={link} 
      aria-label={text} 
      target="_blank" 
      rel="noreferrer"
      onClick={() => console.log("Link clicked:", link)} // Log on click
    >
      {text}
    </StyledLink>
  );
};

export default Button;
