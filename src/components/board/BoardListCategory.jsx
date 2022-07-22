import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BoardMap from './BoardMap';
import apis from '../../shared/api/main';
import { getCookie } from '../../shared/Cookie';

const BoardListCategory = ({ category }) => {
  const [content, setContent] = useState();
  const token = getCookie('token');

  useEffect(() => {
    const getMark = async () => {
      if (!token) {
        await apis.getBoardsCategory(category).then((res) => {
          console.log(res.data);
          setContent(res.data);
        });
      } else {
        await apis.getBoardsCategoryLogin(category).then((res) => {
          console.log(res.data);
          setContent(res.data);
        });
      }
    };
    getMark();
  }, [category]);

  return (
    <>
      <ScWrap>
        <ScBoard>
          <ScTable>
            {content &&
              content.map((item, idx) => {
                return <BoardMap content={item} key={idx} />;
              })}
          </ScTable>
        </ScBoard>
      </ScWrap>
    </>
  );
};

const ScWrap = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  height: 100%;
`;
const ScBoard = styled.div`
  width: 100%;
  height: 100%;
`;

const ScTable = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  margin: 30px auto;
`;

export default BoardListCategory;
