import React, { useState } from 'react';
import styled from 'styled-components';
import { MainCard1 } from '../../shared/svg/A-index';

const ImgSlide = () => {
  // 이미지 슬라이드 버튼
  const [img, setImg] = useState(0);

  const firstDot = () => {
    setImg(0);
  };
  const secondDot = () => {
    setImg(-100);
  };
  const thirdDot = () => {
    setImg(-200);
  };

  return (
    <ScWrap>
      <ScImgSlideWrap img={img}>        
          <ScA href='https://forms.gle/yGy74NsTZwQJWycVA' target="_blank">
            <div style={{backgroudColor:"red",width:"100vw",height:"450px",position:"absolute",zIndex:"99", top: "60px"}}></div>
          </ScA>        
        <ScImg src={MainCard1}>           
          <ScContentWrap>
            <ScDotAlign>
              <ScDotWrap>
                <ScDot onClick={firstDot} img={img} />
                <ScDot onClick={secondDot} img={img} />
                <ScDot onClick={thirdDot} img={img} />
              </ScDotWrap>
             </ScDotAlign>
          </ScContentWrap>
         
        </ScImg>
        
        {/* <ScImg src="https://paikdabang.com/wp-content/uploads/2022/06/빽다방_홈페이지_main_코코넛2종.jpg"> */}
        <ScImg>
          <ScContentWrap>
            <ScDotAlign>
              <ScDotWrap>
                <ScDot onClick={firstDot} img={img} />
                <ScDot onClick={secondDot} img={img} />
                <ScDot onClick={thirdDot} img={img} />
              </ScDotWrap>
            </ScDotAlign>
          </ScContentWrap>
        </ScImg>
        {/* <ScImg src="//admin.hollys.co.kr/upload/main/banner/mainBanner_202205240354532080.jpg"> */}
        <ScImg>
          <ScContentWrap>
            <ScDotAlign>
              <ScDotWrap>
                <ScDot onClick={firstDot} img={img} />
                <ScDot onClick={secondDot} img={img} />
                <ScDot onClick={thirdDot} img={img} />
              </ScDotWrap>
            </ScDotAlign>
          </ScContentWrap>
        </ScImg>

      </ScImgSlideWrap>
    </ScWrap>
  );
};

const ScWrap = styled.div`
  overflow: hidden;
  width: 100%;
`;

const ScImgSlideWrap = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  width: 100%;
  transition: 0.5s ease-in-out;
  transform: translate(${(props) => props.img}vw);
`;

const ScA = styled.a`
  position: absolute;
`;


const ScImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  width: 100%;
  height: 500px;
  background-color: aliceblue;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  float: left;
`;

const ScContentWrap = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: space-between; */
  position: fixed;
  width: 100px;
  height: 70px;
  
  /* padding-top: 20px; */
`;

const ScDotAlign = styled.div`
  /* align-items: center;     */
  /* width: 700px; */
  margin: auto;
`;

const ScDotWrap = styled.div`
  display: flex;
  /* align-items: center; */
  /* position: fixed; */
  justify-content: space-between;
  width: 70px;
  bottom: 30px;
`;

const ScDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: black;
  &:hover {
    cursor: pointer;
  }
  &:nth-child(1) {
    opacity: ${(props) => (props.img === 0 ? '1' : '0.2')};
  }
  &:nth-child(2) {
    opacity: ${(props) => (props.img === -100 ? '1' : '0.2')};
  }
  &:nth-child(3) {
    opacity: ${(props) => (props.img === -200 ? '1' : '0.2')};
  }
`;

export default ImgSlide;
