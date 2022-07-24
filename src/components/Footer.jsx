import React from 'react';
import styled from 'styled-components';
import { FooterFlower } from '../shared/svg/A-index';

export const Footer = () => {
  return <ScFooter>
    {/* <img src={FooterFlower} alt=""/> */}
  </ScFooter>;
};

const ScFooter = styled.div`
  height: 209px;
  background-color: #dadbff;
  margin-top: 186px;
  position: relative;
  img{
    position: absolute;
    bottom: 0;
  }
`;
