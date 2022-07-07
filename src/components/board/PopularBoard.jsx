import React from 'react';
import Styled from 'styled-components';
import BoardMap from './BoardMap';


const PopularBoard = () => {
  return (
    <>
        <ScWrap>
            <h1>인기글 Top 10</h1>
            <ScBoard>
                <ScTable>
                    <BoardMap
                        category="커피"
                        nickname="CoFFind"
                        title="아메리카노 좋아요"
                        day="7월7일"
                        likes="32"
                        comment="23"
                    />
                </ScTable>
            </ScBoard>
        </ScWrap>
        
    </>
  )
}

const ScWrap = Styled.div` 
    border: 1px solid black;
    margin: 10px auto;
    width: 100%;
    height: 100%;

`;

const ScBoard = Styled.div`    
    width: 100%;
    height: 100%;
`;

const ScTable = Styled.table`
    border: 1px solid black;
    width: 100%;
    margin: 30px auto;
`;

export default PopularBoard