import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import {
  bookmark,
  bookmarkck,
  eye,
  thumbup,
} from '../../shared/svg/A-index';

const PopularBoardMap = (props) => {
  const navigate = useNavigate();
  const { content } = props;


  const create = content?.createdAt.split('T')[0];
  const moveToBoard = (e) => {
    navigate(`/board/${content?.id}`);
  };

  return (
    <ScBoardList  onClick={moveToBoard}>
      <ScHeader>
        <div>
          {content?.category === '나만의 비밀 레시피' && (
            <ScMyrecipe>{content?.category}</ScMyrecipe>
          )}
          {content?.category === '카페 추천합니다' && (
            <ScRecommend>{content?.category}</ScRecommend>
          )}
          {content?.category === '기타' && <ScEtc>{content?.category}</ScEtc>}
          {/* <span>{content?.nickname}</span> */}
        </div>
      </ScHeader>
      <ScTitle>{content?.title}</ScTitle>
      <ScBottom>
        <span>{content?.nickname}</span>
      </ScBottom>
      <Scbar>
        {content?.bookmark ? (
          <img src={bookmarkck} alt="" />
        ) : (
          <img src={bookmark} alt="" />
        )}
        <span>북마크</span>
        <img src={thumbup} alt="" />
        <span>{content?.totalLove}</span>
        <img src={eye} alt="" />
        <span>{content?.view}</span>
      </Scbar>
    </ScBoardList>
  );
};

export default PopularBoardMap;

const ScBoardList = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: space-between;
  /* border: 1px #ddd solid; */
  width: 220px;
  height: 217px;
  padding: 17px 20px 15px 20px;
  border-radius: 12px;
  font-size: 0.875em;
  margin: 24px 30px 24px 0;
  background-color: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.185);
  cursor: pointer;
  /* transition: all 0.5s; */
  &:hover{
    background-color: #8e4aad29;
  }
  @media screen and (max-width: 768px){
    margin: auto;
    width: 160px;
    height: 100%;
    font-size: 10px;
  }
`;
const ScHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px){
    margin: 0 auto 20px;
    width: 100%;
    font-size: 10px;
  }
`;
const Scbar = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  span{
    color: #bebebe;
  }
  @media screen and (max-width: 768px){
    margin: auto;
    width: 110%;
    height: 100%;
    font-size: 10px;
    img{
      width: 15px;
      height: 15px;
    }
  }
`;
const ScCategory = styled.span`
  border: 1px #2c278c solid;
  color: #2c278c;
  border-radius: 100px;
  padding: 2px 12px;
  font-size: 0.875em;
`;
const ScTitle = styled.div`
  font-size: 1.375em;
  font-weight: 600;
  height: 83px;
  overflow: hidden;
  @media screen and (max-width: 768px){
    margin: auto;
    width: 160px;
    height: 600px;
    font-size: 16px;
  }
`;
const ScBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span{
    color: #000000b2;
  }
  @media screen and (max-width: 768px){
    margin: auto;
    width: 160px;
    height: 100%;
    font-size: 14px;
  }
`;

const ScMyrecipe = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1e3e8;
  border-radius: 100px;
  color: #d86f96;
  padding: 2px 12px;
  font-size: 13px;
  /* @media screen and (max-width: 768px){
    margin: auto;
    width: 100%;
    height: 100%;
    font-size: 10px;
  } */
`;
const ScRecommend = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ede2f2;
  border-radius: 100px;
  padding: 2px 12px;
  color: #a454ca;
  font-size: 13px;
  /* @media screen and (max-width: 768px){
    margin: auto;
    width: 100%;
    height: 100%;
    font-size: 10px;
  } */
`;
const ScEtc = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 12px;
  background: rgba(255, 201, 15, 0.2);
  border-radius: 100px;
  color: #f6c720;
  font-size: 13px;
  /* @media screen and (max-width: 768px){
    margin: auto;
    width: 100%;
    height: 100%;
    font-size: 10px;
  } */
`;
