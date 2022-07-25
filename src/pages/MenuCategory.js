import React, { useState } from 'react';
import styled from 'styled-components';
import { Header, MobileHeader } from './Header/A-HeaderIndex';
import { BrandCard, CategoryCard } from '../components/main/A-mainIndex';
import { Flower } from '../components/main/Flower';
import { useMediaQuery } from 'react-responsive';

const MenuCategory = () => {
  const [category, setCategory] = useState(true);

  const isMobile = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <>
      <ScMobile>
      <Flower />
      {isMobile ? 
      <div style={{margin:"auto", width:"80%"}}>
        <Header />
      </div> : <div style={{margin:"auto", width:"80%"}}>
        <MobileHeader />
      </div> }
      <div style={{ maxWidth: '1230px', width: '84vw', margin: 'auto' }}>
        <ScNavbarWrap>
          <ScButtonWrap>
            <div
              onClick={() => {
                setCategory(!category);
              }}
            >
              브랜드
            </div>
            <p>|</p>
            <div
              onClick={() => {
                setCategory(!category);
              }}
            >
              음료
            </div>
          </ScButtonWrap>
        </ScNavbarWrap>
        {category ? <BrandCard /> : <CategoryCard />}
      </div>
      </ScMobile>
    </>
  );
};

const ScButtonWrap = styled.div`
  margin: 20px auto;
  display: flex;
  gap: 28px;
  font-size: 14pt;
  &:hover {
    cursor: pointer;
  }
`;

const ScNavbarWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ScMobile = styled.div`
  @media screen and (max-width: 350) {
    max-width: 1230px;
    width: 90%;
    display: flex;
    flex-direction: column;
  }
`;

export default MenuCategory;
