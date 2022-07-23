import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import BoardMap from '../../components/board/BoardMap';
import apis from '../../shared/api/main';
import Header from '../Header/Header';
import { getCookie } from '../../shared/Cookie';

const SearchBoard = () => {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [boardReducer, setBoardReducer] = useState();

  const token = getCookie('token');

  useEffect(() => {
    const search = async () => {
      if (!token) {
        apis
          .searchBoard(keyword)

          .then((res) => {
            console.log(res);
            setBoardReducer(res?.data);
          });
      } else {
        apis.searchBoardLogin(keyword).then((res) => {
          console.log(res);
          setBoardReducer(res?.data);
        });
      }
    };
    search();
  }, [keyword]);

  return (

        <ScWrap>
          <div style={{margin:"auto"}}> 
            <Header/>
          </div>
          <ScTitle>"{keyword}"에 대한 검색 결과입니다.</ScTitle>
          <ScBoardWrap>
            {boardReducer&&boardReducer.map((item,idx)=>{
              return(<BoardMap key={idx} content={item}/>)
            })} 
          </ScBoardWrap>
       </ScWrap>
   )
  
}


const ScWrap = styled.div`
  margin: auto;
`;

const ScBoardWrap = styled.div`
  margin: 50px auto;
`;


const ScTitle =styled.div`
  margin-top: 50px;
  margin-left: 20px;
  font-size: 24px;
`

export default SearchBoard

