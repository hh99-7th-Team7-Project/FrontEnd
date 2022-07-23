import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import '../../shared/css/dropdown.css';
import BoardMap from './BoardMap';
import apis from '../../shared/api/main';
import { getCookie } from '../../shared/Cookie';
import BoardPagination from './Pagination/BoardPagination';



const BoardList = () => {
  const [content, setContent] = useState();
  // console.log(content)
  const token = getCookie('token');

  
  const [ posts, setPosts ] = useState([]);
  const [ page, setPage ] = useState(1);



  const totalPage = posts?.totalPage;




  useEffect(() => {
    const getMark = async () => {
      if (!token) {
        await apis
          .getBoards(page)
          .then((res) => {
            console.log(res.data);
            setContent(res.data);            
          });
      } else {
        await apis.getBoardsLogin(page).then((res) => {
          console.log(res.data);
          setContent(res.data);
        });
      }
    };
    getMark();
  }, []);




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
      <footer>
        <BoardPagination 
          total={totalPage}              
          page={page}
          setPage={setPage}
        />
      </footer> 
                    
    </>
  );
};

const ScWrap = Styled.div`
    /* border: 1px solid black; */
    width: 100%;
    height: 100%;

`;
const ScBoard = Styled.div`    
    width: 100%;
    height: 100%;
`;

const ScTable = Styled.div`
    /* border: 1px solid black; */
    width: 100%;
    margin: 30px auto;
`;

export default BoardList;
