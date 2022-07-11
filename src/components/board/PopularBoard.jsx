import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import BoardMap from './BoardMap';
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import apis from '../../shared/api/main';

const PopularBoard = () => {
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState();

    const navigate = useNavigate()
  console.log(content)
    console.log(content)
      useEffect(() => {  
        setLoading(true)
          const getMark = async () => {
              await apis.getBoards()
                        .then((res)=>{
                            console.log(res.data.slice(0,5))
                            setContent(res.data.slice(0,5))
                          })
                        }
                      getMark()
                    }, [loading])

        

  return (
    <>
        <ScWrap>
            <h1>인기글 Top 10</h1>
            <ScBoard>
                <ScTable>
                    {content&&content.map((item,idx)=>{
                        return <BoardMap 
                        key={idx}
                         content={item}/>
                    })}
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

const ScTable = Styled.div`
    border: 1px solid black;
    width: 100%;
    margin: 30px auto;
`;

const ScListWrap = styled.div`
    
`

export default PopularBoard