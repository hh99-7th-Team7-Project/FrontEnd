import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { css, keyframes } from 'styled-components';

const Brand = () => {
  const [color, setColor] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const brandList = [
    { brand: '스타벅스', id: 0, logo: '/brandlogo/스타벅스.png' },
    { brand: '빽다방', id: 1, logo: '/brandlogo/빽다방.png' },
    { brand: '커피빈', id: 2, logo: '/brandlogo/커피빈.png' },
    { brand: '이디야', id: 3, logo: '/brandlogo/이디야.png' },
    { brand: '컴포즈', id: 4, logo: '/brandlogo/컴포즈.png' },
    { brand: '드롭탑', id: 5, logo: '/brandlogo/드롭탑.png' },
    { brand: '탐앤탐스', id: 6, logo: '/brandlogo/탐앤탐스.jpg' },
    { brand: '더벤티', id: 7, logo: '/brandlogo/더벤티.png' },
    { brand: '할리스', id: 8, logo: '/brandlogo/할리스.png' },
    { brand: '폴바셋', id: 9, logo: '/brandlogo/폴바셋.png' },
    { brand: '카페베네', id: 10, logo: '/brandlogo/카페베네.png' },
    { brand: '엔젤인어스', id: 11, logo: '/brandlogo/엔제리너스.png' },
  ];

  console.log(brandList);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ScWrap>
          <ScList style={{ listStyle: 'none' }}>
            <ScBrandBox>
              <ScBrandTitle>
                <ScH2>스타벅스</ScH2>
              </ScBrandTitle>
              <ScBrandTitle>
                <ScH2>빽다방</ScH2>
              </ScBrandTitle>
              <ScBrandTitle>
                <ScH2>커피빈</ScH2>
              </ScBrandTitle>
              <ScBrandTitle>
                <ScH2>이디야</ScH2>
              </ScBrandTitle>
              <ScBrandTitle>
                <ScH2>컴포즈</ScH2>
              </ScBrandTitle>
              <ScBrandTitle>
                <ScH2>드롭탑</ScH2>
              </ScBrandTitle>
            </ScBrandBox>
            <ScBrandBox2>
              <ScBrandTitle>
                <ScH2>탐앤탐스</ScH2>
              </ScBrandTitle>
              <ScBrandTitle>
                <ScH2>더벤티</ScH2>
              </ScBrandTitle>
              <ScBrandTitle>
                <ScH2>할리스</ScH2>
              </ScBrandTitle>
              <ScBrandTitle>
                <ScH2>폴바셋</ScH2>
              </ScBrandTitle>
              <ScBrandTitle>
                <ScH2>카페베네</ScH2>
              </ScBrandTitle>
              <ScBrandTitle>
                <ScH2>엔제리너스</ScH2>
              </ScBrandTitle>
            </ScBrandBox2>
          </ScList>
        </ScWrap>
      </div>
    </>
  );
};

const ScWrap = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 13px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  width: 192px;
  height: 224px;
  position: absolute;
  box-sizing: border-box;
  background: #fff;
`;

const ScList = styled.ul``;
const ScBrandBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 95px;
  height: 222px;
`;

const ScBrandBox2 = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  right: 0;
  padding: 0px;
  position: absolute;
  width: 95px;
  height: 222px;
`;

const ScBrandTitle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  gap: 10px;
  width: 95px;
  height: 37px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ScH2 = styled.h2`
  font-size: 12.5px;
  font-weight: 500;
  line-height: 17px;
  color: #000000;
  &:hover {
    color: #4147d5;
    cursor: pointer;
  }
`;

export default Brand;
