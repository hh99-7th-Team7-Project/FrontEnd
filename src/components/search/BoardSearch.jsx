import React, { useEffect, useState } from 'react';
/** 서버 api 통신 */
import apis from '../../shared/api/main';
/** 쿠키 가져오기 */
import { getCookie } from '../../shared/Cookie';
/** react-router-dom */
import { useNavigate } from 'react-router-dom';
//component
import BoardMap from '../../components/board/BoardMap';
//css
import styled from 'styled-components';
//error log
import * as Sentry from "@sentry/react";

const BoardSearch = (props) => {
  const { keyword } = props;
  const navigate = useNavigate();
  const [boardReducer, setBoardReducer] = useState();

  const sliceBoard = boardReducer?.slice(0, 5);

  const token = getCookie('token');

  useEffect(() => {
    const search = async () => {
      if (!token) {
        apis.searchBoard(keyword,0).then((res) => {
          setBoardReducer(res?.data.post);
        }).catch(e => {
          Sentry.captureException(e);
      });;
      } else {
        apis.searchBoardLogin(keyword,0).then((res) => {
          setBoardReducer(res?.data.post);
        }).catch(e => {
          Sentry.captureException(e);
      });
      }
    };
    search();
  }, [keyword]);

  return boardReducer?.length !== 0 ? (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <ScCoffeeWrap>
        <ScCardContainer>
          {sliceBoard &&
            sliceBoard.map((item, idx) => {
              return <BoardMap key={idx} content={item} />;
            })}
          {sliceBoard?.length > 3 ? (
            <ScBox/>
          ) : null}
        </ScCardContainer>
      </ScCoffeeWrap>
      <ScBtnAlign>
        <ScBtnWrap>
          <ScBtn
            onClick={() => {
              navigate(`/search/board/${keyword}`);
            }}
          >
            <ScBtnTitle>+더보기</ScBtnTitle>
          </ScBtn>
        </ScBtnWrap>
      </ScBtnAlign>
    </div>
  ) : (
    <ScNothing>검색 결과가 없습니다</ScNothing>
  );
};

const ScCoffeeWrap = styled.div`
  margin: auto;  
  width: 1300px;
  @media screen and (max-width:768px) {
    width: 100%;
    margin: 30px auto;
    display: flex;
    justify-content: center;
    align-items: center;    
  }
`;

const ScCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
`;

const ScBox = styled.div`
  width: 1200px;
  position: absolute;
  height: 500px;
  margin-top: 450px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 82.29%);
  @media screen and (max-width: 768px){    
    width: 450px;
    height: 400px;
  }
`;

const ScBtnAlign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScBtnWrap = styled.div`
  position: absolute;
`;

const ScBtn = styled.button`
  width: 136px;
  height: 46px;
  background: #2c278c;
  border-radius: 100px;
  border: none;
`;

const ScBtnTitle = styled.span`
  width: 96px;
  height: 30px;
  color: white;
  font-style: normal;
  font-size: 1.4375em;
  line-height: 30px;
  letter-spacing: 0.1em;
  &:hover {
    cursor: pointer;
  }
`;

const ScNothing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

export default BoardSearch;