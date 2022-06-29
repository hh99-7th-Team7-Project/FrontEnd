import React from 'react'
import Styled from 'styled-components';
import Logo from '../../components/main/Logo';
import Brand from '../../components/BrandDetail/Brand';
import ImgCard from '../../components/BrandDetail/ImgCard';

const Angel = () => {
  return (
    <>
      <Logo/>
      <HR/>
      <Brand
          brand="Angelinus"
          name="아메리카노"
          price="3900"
          comment="풍미가 진한 에스프레소에 물을 넣어 연하게 마시는 커피입니다."
          Symbol="https://image.newdaily.co.kr/site/data/img/2020/01/03/2020010300018_0.jpg"
      />
      <ImgCard
        url="https://www.angelinus.com/Data/Goods/48/DetailImage.png"
        ur12="https://www.angelinus.com/Data/Goods/43/ListImage.png"
        name="아메리카노"
        name2="카라멜마끼아또" 
      />
    </>
  )
}

const HR = Styled.hr`
  margin-top: 50px;
  margin-bottom: 50px;
`;

export default Angel