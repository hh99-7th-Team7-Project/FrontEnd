import React from 'react';
import styled from 'styled-components';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Coffee = () => {


  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ScWrap>
          <ScList style={{ listStyle: 'none' }}>
            <ScBrandBox>
              <ScBrandTitle>
                <ScH2>Coffee</ScH2>
              </ScBrandTitle>
              <ScBrandTitle>
                <ScH2>NonCoffee</ScH2>
              </ScBrandTitle>
              <ScBrandTitle>
                <ScH2>Smoothie</ScH2>
              </ScBrandTitle>
              <ScBrandTitle>
                <ScH2>Ade</ScH2>
              </ScBrandTitle>
              <ScBrandTitle>
                <ScH2>Tea</ScH2>
              </ScBrandTitle>
            </ScBrandBox>
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
  width: 95px;
  height: 186px;
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
  height: 153.62px;
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

export default Coffee;
