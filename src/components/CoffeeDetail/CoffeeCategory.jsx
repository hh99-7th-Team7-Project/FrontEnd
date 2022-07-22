import React, { useState } from 'react';
import styled from 'styled-components';
import Brand from './Slide/Brand';
import Coffee from './Slide/Coffee';

const CoffeeCategory = () => {
  const [category, setCategory] = useState(true);
  const [brandVisible, setBrandVisible] = useState(false);
  const [categoryVisible, setCategoryVisible] = useState(false);

  // 브랜드 버튼을 누르면 ? 브랜드 드롭다운이 열리고, 음료 드롭다운이 숨겨진다.?
  // 음료 버튼을 누르면 ?  음료 드롭다운이 열리고 , 브랜드 드롭다운이 숨겨진다..?
  // 버튼 온클릭을 누르면

  return (

    <div
      style={{
        maxWidth: '1230px',
        width: '84vw',
        margin: 'auto',
        position: 'relative',
      }}
    >
      <ScNavbarWrap>
        <ScButtonWrap>
          {brandVisible ? (
            <ScCategoryBox
              onClick={() => {
                setBrandVisible(!brandVisible);
              }}
            >
              브랜드
            </ScCategoryBox>
          ) : null}
          <p>|</p>
          {categoryVisible ? (
            <ScCategoryBox
              onClick={() => {
                setCategoryVisible(!categoryVisible);
              }}
            >
              음료
            </ScCategoryBox>
          ) : null}
        </ScButtonWrap>
      </ScNavbarWrap>
      {category ? (
        <Brand open={brandVisible} setOpen={setBrandVisible} />
      ) : (
        <Coffee open={categoryVisible} setOpen={setCategoryVisible} />
      )}

    </div>
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

const ScCategoryBox = styled.div`
  position: relative;
`;

export default CoffeeCategory;
