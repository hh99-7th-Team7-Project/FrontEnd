import React from 'react';
import styled from 'styled-components';

/** react-router-dom */
import { useNavigate } from 'react-router-dom';

/** svg 이미지 파일 import */
import svg from './svg/MapMaker.svg';
import svg1 from './svg/Write.svg';
import  Large  from './svg/Large.svg';
import  Medium  from './svg/Medium.svg';
import  Small  from './svg/Small.svg'

/** react-scroll hook */
import { Link } from 'react-scroll';


const Review = ({ item }) => {
  const navigate = useNavigate();
  const pricePair = item?.pricePair;
  const starPoint = item?.star;


  return (
    <>
      <ScWrap>
        <ScContentBox>
          <ScBtnWrap>
            <ScGotoMap
              onClick={() => {
                navigate(`/map/${item?.brand}`);
              }}
            >
              <img src={svg} alt="" />
              <ScSpan>내 주변 {item?.brand} 찾기</ScSpan>
            </ScGotoMap>
            <ScGotoMap1>
              <img src={svg1} alt="" />
              <Link to="review" spy={true} smooth={true}>
                <ScSpan>리뷰보기</ScSpan>
              </Link>
            </ScGotoMap1>
          </ScBtnWrap>
          <ScStarPriceContainer>
            <ScStarBox>
              <Sctitle>총 별점</Sctitle>
              {starPoint === 'NaN' ? (
                <ScH2>0.0</ScH2>
              ) : (
                <ScH2>{starPoint?.toFixed(1)}</ScH2>
              )}
              {starPoint === 'NaN' &&(
                <ScH3>&#9734; &#9734; &#9734; &#9734; &#9734;</ScH3>
              ) }

              {Math.floor(starPoint) === 1 && (
                <ScH3>&#9733; &#9734; &#9734; &#9734; &#9734;</ScH3>
              )}
              {Math.floor(starPoint) === 2 && (
                <ScH3>&#9733; &#9733; &#9734; &#9734; &#9734;</ScH3>
              )}
              {Math.floor(starPoint) === 3 && (
                <ScH3>&#9733; &#9733; &#9733; &#9734; &#9734;</ScH3>
              )}
              {Math.floor(starPoint) === 4 && (
                <ScH3>&#9733; &#9733; &#9733; &#9733; &#9734;</ScH3>
              )}
              {Math.floor(starPoint) === 5 && (
                <ScH3>&#9733; &#9733; &#9733; &#9733; &#9733;</ScH3>
              )}
            </ScStarBox>
            <ScPriceBox>
              <Sctitle>가격</Sctitle>
             {pricePair&&<PriceScH3 style={{fontSize:'1.66em'}}>￦{pricePair[0]?.price}</PriceScH3>} 
            </ScPriceBox>
          </ScStarPriceContainer>
            {pricePair &&(pricePair?.length===3) &&
                      <ScImgWrap>
                          <ScSmallWrap>
                            <ScSmallImg src={Small} alt="" />
                            <div>￦{pricePair[0]?.price}</div>
                          </ScSmallWrap>
                          <ScSmallWrap>
                            <ScMediumImg src={Medium} alt="" />
                            <div>￦{pricePair[1]?.price}</div>
                          </ScSmallWrap>
                          <ScSmallWrap>
                            <ScLargeImg src={Large} alt="" />
                            <div>￦{pricePair[2]?.price}</div>
                          </ScSmallWrap>
                          </ScImgWrap>}
          {pricePair &&(pricePair?.length===2) &&
                        <ScImgWrap>
                            <ScSmallWrap>
                              <ScMediumImg src={Medium} alt="" />
                              <div>￦{pricePair[0]?.price}</div>
                            </ScSmallWrap>
                            <ScSmallWrap>
                              <ScLargeImg src={Large} alt="" />
                              <div>￦{pricePair[1]?.price}</div>
                            </ScSmallWrap>
                            </ScImgWrap>}
          {pricePair &&(pricePair?.length===1) &&
                        <ScImgWrap>
                            <ScSmallWrap>
                              <ScMediumImg src={Medium} alt="" />
                              <div>￦{pricePair[0]?.price}</div>
                            </ScSmallWrap>
                            </ScImgWrap>}
         
        </ScContentBox>
      </ScWrap>
    </>
  );
};

export default Review;

const ScWrap = styled.div`
  width: 1000px;
  height: 150px;
  margin: auto;
  position: relative;
  @media screen and (max-width: 768px){  
    width  : 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const ScSmallWrap =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div{
    margin-top: 20px;
  }
  @media screen and (max-width: 768px){    
    width: 50%;
    margin: -10px;
  }
`

const Sctitle =styled.div`
  font-size: 1.125em;

`
const ScContentBox = styled.div`
  margin: 20px;
`;

const ScBtnWrap = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 30px auto;
  @media screen and (max-width: 768px){    
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0;
    gap: 20px;
  }
`;

const ScGotoMap = styled.div`
  width: 360px;
  height: 41px;
  border: #161616 1px solid;
  background-color: black;
  color: white;
  padding: 8px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 100px;
  margin: auto;
  @media screen and (max-width: 768px){    
    width: 40%; 
    margin: 0;
    height: 20px;
    font-weight: 400;
    font-size: 10px;
    img{
      width: 20px;
    }
  }
`;
const ScGotoMap1 = styled.div`
  width: 250px;
  height: 41px;
  border: #161616 1px solid;
  background-color: black;
  color: white;
  padding: 8px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 100px;
  margin: auto;
  @media screen and (max-width: 768px){    
    width: 25%; 
    margin: 0;
    height: 20px;
    font-weight: 400;
    font-size: 10px;
    img{
      width: 20px;
    }
  } 
`;

const ScSpan = styled.span`
  margin-left: 5px;
  font-size: 1.25em;
`;

const ScStarPriceContainer = styled.div`
  display: flex;
  width: 500px;
  justify-content: center;
  align-items: center;
  margin: 50px 0 0 200px;
  gap:10px;
  @media screen and (max-width: 768px){    
    width: 100%;
    margin: 20px 0;
    /* border: 1px red solid; */
  }
  
`;

const ScStarBox = styled.div`
  width: 180px;
  height: 150px;
  margin: auto;
  text-align: center;
  @media screen and (max-width: 768px){    
    margin: 0;
    /* border: 1px red solid; */
    height: 100%
  }
`;

const ScH2 = styled.h2`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ScH3 = styled.h2`
  text-align: center;
`;

const ScH4 = styled.h4`
  text-align: center;
  margin-top: 50px;
  color: red;
`;

const PriceScH3 = styled.h2`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1.125em;
  line-height: 49.92px;
  @media screen and (max-width: 768px){    
    margin-top: 0px;
    line-height: 24.92px;
  }
`;

const ScPriceBox = styled.div`
  width: 180px;
  height: 150px;
  /* margin: auto 0 0; */
  text-align: center;
  @media screen and (max-width: 768px){    
    margin: 0;
    /* border: 1px red solid; */
    height: 100%
  }
`;

const ScImgWrap = styled.div`
  width: 500px;
  display: flex;
  margin: 30px auto;
  vertical-align: bottom;
  align-items: flex-end;
  justify-content: center;
  gap:6%;
  div{
    color: var(--main);
  }
   @media screen and (max-width: 768px){    
    margin: auto;
    /* border: 1px red solid; */
    height: 100%;
    width: 100%;
  }
`;


const ScSmallImg = styled.img`
    /* width: 80px; */
    height: 80px;
    margin-left: 20px;
    margin-right: 20px;
    @media screen and (max-width: 768px){    
    margin: 0;
    /* border: 1px red solid; */
    width: 60px;
    height: 60px;
  }
`;

const ScMediumImg = styled.img`
    /* width: 120px; */
    height: 120px;
    margin-left: 20px;
    margin-right: 20px;
    @media screen and (max-width: 768px){    
    margin: 0;
    /* border: 1px red solid; */
    width: 90px;
    height: 90px;
  }
`;

const ScLargeImg = styled.img`
    /* width: 160px; */
    height: 160px;
    margin-left: 20px;
    margin-right: 20px;
    @media screen and (max-width: 768px){    
    margin: 0;
    /* border: 1px red solid; */
    width: 140px;
    height: 140px;
  }
`;
